# Verified Templates 设计文档

本文档描述 Presto 模板信任体系的 `verified` 等级实现方案：由 template-registry CI 从第三方源码编译模板二进制，替代直接下载第三方 Release 产物。

---

## 一、背景与动机

### 1.1 当前问题（SEC-01 残留风险）

当前模板安装流程存在三个安全缺陷：

1. **校验可选** — `expectedHash` 为空时静默跳过 SHA256 校验，二进制直接执行
2. **同源校验** — discovery 路径从同一 GitHub Release 获取 checksums.txt，攻击者控制仓库即可同时伪造
3. **无独立信任源** — 没有 GPG/cosign 等独立于第三方开发者的验证机制

### 1.2 设计目标

- 为第三方模板提供与 `official` 同等的安全保障
- 不依赖第三方开发者的签名基础设施
- 不引入 GPG/cosign 等复杂密钥管理
- 保持对未验证社区模板的兼容性

---

## 二、信任模型

### 2.1 四级信任体系（修订）

| 等级 | 二进制来源 | SHA256 来源 | 安装方式 | 商店可见性 |
|------|-----------|------------|---------|-----------|
| `official` | Presto-io CI 编译 | Presto-io Release | 商店直接安装 | 默认可见 |
| `verified` | template-registry CI 从源码编译 | template-registry Release | 商店直接安装 | 默认可见 |
| `community` | 第三方 repo Release | 第三方 Release（同源） | 开启"社区模板"后可搜索，或拖动安装 | 需开关 |
| `unrecorded` | 用户手动提供 | 无 | 仅拖动安装 | 不在商店 |

**关键变化：** `verified` 不再依赖 GPG 签名，改为 registry CI 从源码编译。信任链变为：

```
第三方源码 → template-registry CI 编译 → template-registry Release 发布 → SHA256 写入 registry.json
```

### 2.2 与旧方案的对比

| 维度 | 旧方案（GPG 签名） | 新方案（CI 编译） |
|------|-------------------|------------------|
| 第三方开发者门槛 | 需要 GPG 密钥对 + 签名流程 | 零额外要求 |
| 信任根 | 第三方开发者的 GPG 私钥 | template-registry CI 环境 |
| 密钥管理 | 需要公钥注册、吊销机制 | 不需要 |
| 可审计性 | 签名验证 | 源码可审计 + 编译可复现 |
| 对 SEC-01 的影响 | 部分解决（仍依赖第三方签名） | 完全解决（独立信任源） |

---

## 三、verified 模板工作流

### 3.1 收录流程

```
第三方开发者发布模板 v1.0.0（push tag 到自己的 repo）
  → template-registry cron 发现新版本
  → 自动创建 PR：修改 verified-templates.json 的 ref 字段
  → 维护者 review PR（检查 repo 和 tag 是否合理）
  → merge PR
  → CI 触发：克隆源码 → 隔离编译 → 上传到 template-registry Release
  → 更新 registry.json（trust: "verified"，url 指向 template-registry Release）
  → 部署到 CDN
```

### 3.2 版本锁定机制

`verified-templates.json` 位于 template-registry 仓库根目录：

```json
[
  {
    "repo": "someone/presto-template-foo",
    "ref": "v1.0.0",
    "lang": "go",
    "name": "foo"
  },
  {
    "repo": "another/presto-template-bar",
    "ref": "v2.1.0",
    "lang": "go",
    "name": "bar"
  }
]
```

**版本锁定规则：**

- `ref` 锁定到具体 tag，不允许 branch 或 commit hash
- 第三方模板更新版本后，在 PR 合并前，registry.json 仍指向旧版本的编译产物
- 每次版本变更都有 PR 审计记录
- 维护者可以拒绝合并来阻止有问题的版本发布

### 3.3 自动版本检测（思路 A：cron 轮询）

在 template-registry 的 CI 中添加 cron job，定期扫描已收录模板的新版本：

```bash
# 伪代码：每 6 小时执行
for each entry in verified-templates.json:
  latest_tag = gh api /repos/{entry.repo}/releases/latest | jq -r .tag_name
  if latest_tag != entry.ref:
    # 修改 verified-templates.json
    # gh pr create --title "bump {entry.name} to {latest_tag}"
```

**选择 cron 而非 webhook 的理由：**

- 不需要第三方开发者配置任何 token 或 webhook
- 实现简单（~50 行 shell 脚本），可直接写在 workflow 的 run 步骤中
- 6 小时延迟对 verified 模板完全可接受
- 可与现有 `discover` 阶段合并

---

## 四、编译安全

### 4.1 隔离编译环境

编译分两步，确保安全：

**步骤 1：依赖下载（有网络）**

```bash
docker run --rm \
  --memory 2g --cpus 2 \
  -v source:/src -v modcache:/go/pkg/mod \
  golang:1.24 \
  sh -c "cd /src && go mod download"
```

**步骤 2：编译（无网络）**

```bash
docker run --rm \
  --network none \
  --read-only \
  --tmpfs /tmp:size=200M \
  --memory 2g --cpus 2 \
  -e CGO_ENABLED=0 \
  -e GOFLAGS=-trimpath \
  -v source:/src:ro \
  -v modcache:/go/pkg/mod:ro \
  -v output:/out \
  golang:1.24 \
  sh -c "cd /src && go build -ldflags='-s -w' -o /out/binary ./"
```

### 4.2 安全约束清单

| 约束 | 目的 |
|------|------|
| `CGO_ENABLED=0` | 禁用 C 编译器，杜绝 `#cgo` 指令注入 |
| `--network none` | 编译阶段禁止联网，防止数据外传 |
| `--read-only` | 只读根文件系统，防止持久化 |
| `--memory 2g` | 内存限制，防止资源耗尽 |
| `--cpus 2` | CPU 限制 |
| `-trimpath` | 可复现构建，不泄露构建路径 |
| 5 分钟超时 | 防止编译挂起 |
| 产物大小限制 50MB | 防止异常大的二进制 |

### 4.3 为什么不需要 PR 审核源码

- 编译环境是一次性容器，无网络、无持久化、无特权
- `CGO_ENABLED=0` 杜绝了 C 编译器注入
- 最坏情况：编译失败（跳过）或产出恶意二进制
- 恶意二进制的风险由 Presto 运行时沙箱覆盖（SEC-10：最小 PATH、30s 超时、无环境变量）
- 相比直接下载第三方二进制（community 等级），从源码编译反而更安全（源码可审计）

### 4.4 多语言支持

| 语言 | 编译命令 | 交叉编译 | 优先级 |
|------|---------|---------|--------|
| Go | `go build` | 原生支持 `GOOS/GOARCH` | P0（当前所有模板均为 Go） |
| Rust | `cargo build --target` | 需要 `cross` 或 `cargo-zigbuild` | P1 |
| TypeScript | `bun build --compile --target` | Bun 原生支持 | P2 |

短期只需支持 Go。`verified-templates.json` 中的 `lang` 字段决定使用哪个编译器镜像。

---

## 五、发布目标

### 5.1 Release 策略

编译产物发布到 `Presto-io/template-registry` 仓库自身的 GitHub Release。

**Tag 命名：** `{name}-v{version}`（如 `foo-v1.0.0`）

每个模板的每个版本一个独立 tag，包含 6 个平台二进制 + SHA256SUMS：

```
template-registry Release: foo-v1.0.0
  ├── presto-template-foo-darwin-arm64
  ├── presto-template-foo-darwin-amd64
  ├── presto-template-foo-linux-arm64
  ├── presto-template-foo-linux-amd64
  ├── presto-template-foo-windows-arm64.exe
  ├── presto-template-foo-windows-amd64.exe
  └── SHA256SUMS
```

### 5.2 registry.json 中的 URL

verified 模板的 `platforms[].url` 指向 template-registry Release：

```json
{
  "name": "foo",
  "trust": "verified",
  "platforms": {
    "darwin-arm64": {
      "url": "https://github.com/Presto-io/template-registry/releases/download/foo-v1.0.0/presto-template-foo-darwin-arm64",
      "sha256": "a1b2c3..."
    }
  }
}
```

### 5.3 增量发布

- 每次 CI 只编译版本有变化的模板
- 编译失败的模板跳过，不影响其他模板和已有 registry.json 条目
- 旧版本的 Release 保留，不删除

---

## 六、前端改动

### 6.1 商店可见性

| 当前行为 | 新行为 |
|---------|--------|
| `communityTemplates` 开关控制"模板商店" tab 是否可见 | 商店 tab 始终可见 |
| 开关关闭时无法访问商店 | 默认显示 `official` + `verified` 模板 |
| — | 开启"社区模板"后额外显示 `community` 模板 |

### 6.2 实现方式

- 沿用现有 `localStorage` key `communityTemplates`
- StoreView 组件根据开关状态过滤 registry 数据：
  - 关闭：`trust === "official" || trust === "verified"`
  - 开启：显示所有（含 `community`）
- 安装 `community` 模板时弹风险提示

### 6.3 设置页面调整

"社区模板"开关的描述文案调整：

```
当前：启用社区模板（启用后可在模板商店中搜索和安装社区模板）
新增：社区模板未经 Presto 验证，二进制由第三方开发者直接发布。
     官方和已验证模板始终可用。
```

---

## 七、Presto 主仓库改动

### 7.1 Install() 强制校验

对 `official` 和 `verified` 模板，`expectedHash` 为空时拒绝安装：

```go
// internal/template/github.go Install()
if expectedHash == "" {
    if opts != nil && (opts.Trust == "official" || opts.Trust == "verified") {
        return fmt.Errorf("SHA256 required for %s templates", opts.Trust)
    }
    // community/unrecorded: 保持现有行为（可选校验）
}
```

### 7.2 InstallOpts 扩展

```go
type InstallOpts struct {
    DownloadURL    string
    ExpectedSHA256 string
    Trust          string  // 新增：信任等级
}
```

### 7.3 前端传递 trust 信息

`handleInstallTemplate` handler 从 registry 数据中获取 trust 字段，传入 `InstallOpts`。

---

## 八、跨仓库影响

### 8.1 template-registry

| 改动 | 描述 |
|------|------|
| 新增 `verified-templates.json` | 收录的 verified 模板配置 |
| `build_registry.py` 新增 `build` 子命令 | 从源码编译 verified 模板 |
| `update-registry.yml` 新增编译 job | 隔离容器中编译 Go 模板 |
| 新增 cron 版本检测 workflow | 自动检测新版本并提 PR |
| Dockerfile 扩展 | 添加 Go 工具链（或独立的编译镜像） |

### 8.2 Presto 主仓库（Gopst）

| 改动 | 描述 |
|------|------|
| `Install()` 强制校验 | official/verified 模板必须有 SHA256 |
| `InstallOpts` 扩展 | 新增 `Trust` 字段 |
| `handleInstallTemplate` | 传递 trust 信息 |
| StoreView 过滤逻辑 | 根据 communityTemplates 开关过滤 |
| 设置页面文案 | 调整社区模板开关描述 |

### 8.3 模板 Starter 仓库

| 仓库 | 改动 |
|------|------|
| `presto-template-starter-go` | 无代码改动。README 更新：说明如何申请 verified 收录 |
| `presto-template-starter-rust` | 同上 |
| `presto-template-starter-typescript` | 同上 |

### 8.4 create-presto-template 脚手架

- 交互式 CLI 新增提示：是否申请 verified 收录
- 如果选择是，自动向 template-registry 提 issue（或输出操作指引）

### 8.5 Presto Homepage

- `/templates` 页面（iframe 嵌入 Presto 商店）：无代码改动，自动继承 Presto 的过滤逻辑
- 文案更新：模板商店介绍页说明四级信任体系
- 模板开发者文档页：说明 verified 收录流程

### 8.6 registry-deploy

- 无代码改动。registry.json 格式不变，只是 verified 模板的 url 指向 template-registry Release

---

## 九、实施路径

### Phase 1：template-registry 编译能力（核心）

1. 创建 `verified-templates.json`
2. `build_registry.py` 新增 `build` 子命令
3. `update-registry.yml` 新增编译 job
4. 测试：手动收录一个第三方 Go 模板，验证编译 + 发布流程

### Phase 2：自动版本检测

5. 新增 cron workflow 或合并到现有 discover 阶段
6. 测试：第三方模板发布新 tag 后，自动创建 PR

### Phase 3：Presto 主仓库适配

7. `Install()` 强制校验 + `InstallOpts.Trust`
8. StoreView 过滤逻辑
9. 设置页面文案调整

### Phase 4：生态文档更新

10. Starter 仓库 README 更新
11. Homepage 文案更新
12. CONVENTIONS.md 更新
