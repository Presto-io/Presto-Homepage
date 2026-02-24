# Presto 官网与扩展生态架构设计文档

本文档是 Presto 官网改造和扩展生态建设的完整架构设计，作为各仓库 AI 助手的共享上下文。

技术规范详见 `extension-spec.md`。

---

## 一、项目全景

### 涉及的仓库

| 仓库 | 技术栈 | 职责 | 状态 |
|---|---|---|---|
| `Presto-io/Presto` | Go + SvelteKit 2 + Svelte 5 + Wails v2 | 主应用（桌面 + Web） | 已有 |
| `Presto-io/Presto-Homepage` | Astro 5（纯静态）+ Svelte island | 官网 + 模板商店展示页 | 已有 |
| `Presto-io/template-registry` | GitHub Actions + Python | 模板注册表 CI | 待创建 |
| `Presto-io/plugin-registry` | 同上 | 插件注册表 CI | 将来 |
| `Presto-io/agent-skill-registry` | 同上 | Agent Skills 注册表 CI | 将来 |
| `Presto-io/registry-deploy` | Cloudflare Pages | 统一 CDN 部署 | 待创建 |
| `Presto-io/presto-template-starter-go` | Go | 模板开发脚手架（Go） | 待创建 |
| `Presto-io/presto-template-starter-rust` | Rust | 模板开发脚手架（Rust） | 待创建 |
| `Presto-io/presto-template-starter-typescript` | TypeScript + Bun | 模板开发脚手架（TS） | 待创建 |
| `Presto-io/create-presto-template` | Node.js | 交互式 CLI 脚手架工具 | 待创建 |

### 核心目标

1. **官网用真实 UI 组件替代静态截图**：Presto UI 更新后官网自动同步
2. **建设真实的模板商店**：软件内 + 官网，类似 Obsidian 插件商店
3. **建设扩展生态**：模板、插件、Agent Skills 三类扩展共用基础设施
4. **AI 辅助模板开发**：开发者上传参考文件，AI 自动生成模板代码

---

## 二、Showcase 模块（Presto 仓库内建）

### 2.1 架构决策

在 Presto 前端仓库内新增 `/showcase/` 路由，用真实 Svelte 组件渲染"半交互式"界面。官网和软件内商店通过 iframe 嵌入这些路由。

**选择此方案的原因**：
- 零跨仓同步成本（组件直接复用，改了 UI 自动跟着变）
- iframe 天然样式隔离
- 官网保持纯 Astro 静态站，不增加构建复杂度
- 软件内商店也能复用（桌面端和网页端都在本地 serve 前端）

### 2.2 交互规则

**禁止的交互**（所有业务按钮的点击行为）：
- 导出 PDF、打开文件、保存、新建等功能按钮
- 模板选择器下拉
- 设置页面导航点击跳转
- 键盘输入（CodeMirror 设为 readOnly）
- 右键菜单

**允许的交互**：
- 所有 CSS :hover 效果
- 分割线拖拽（编辑器与预览面板之间）
- 双向滚动同步
- 右上角 proximity-reveal 按钮显隐（点击无效）
- 批量转换页文件拖拽分组 + 多选（Cmd+Click, Shift+Click）
- 模板管理页关键词 chip 筛选
- 设置页面滚动浏览
- CodeMirror 文本选择（readOnly 下仍可选择复制）

### 2.3 路由结构

**命名规范**：商店类 showcase 统一用 `store-{type}` 前缀（store-templates, store-extensions, store-skills），与功能展示类路由区分。

```
frontend/src/routes/showcase/
  +layout.svelte                        ← PrestoShell：全局点击拦截、主题同步、尺寸适配
  editor/+page.svelte                   ← 通用编辑器预览（?registry={name} 动态加载）
  editor-gongwen/+page.svelte           ← 编辑器 - 公文模板（静态预设）
  editor-jiaoan/+page.svelte            ← 编辑器 - 教案模板（静态预设）
  batch/+page.svelte                    ← 批量转换
  templates/+page.svelte                ← 模板管理
  drop/+page.svelte                     ← 拖入文件动画
  hero/+page.svelte                     ← Hero 打字动画
  store-templates/+page@.svelte         ← 模板商店浏览（绕过 PrestoShell，需全交互）
```

> **`store-*` 路由的特殊性**：使用 `+page@.svelte` 绕过 PrestoShell layout，因为商店页面需要完整的键盘输入（搜索）和点击交互。改用根 layout，它已对 showcase 路由跳过拖拽和向导。官网通过 iframe 嵌入这些页面用于纯展示（无安装功能）。

### 2.4 通用编辑器预览（/showcase/editor）

**这是商店实时预览的核心**。根据 URL 参数动态加载模板数据：

```
/showcase/editor?registry=gongwen
```

数据加载策略：
1. 内置模板（gongwen、jiaoan-shicao）：使用本地预设数据，零网络请求
2. 其他模板：从 registry CDN 获取 `example.md` + `preview-*.svg`

预览功能：
- 左侧 CodeMirror 显示 example.md（readOnly）
- 右侧一次性显示所有 SVG 预览页
- 左右同步滚动
- 分割栏可拖拽调节
- 所有业务按钮不可点击

### 2.5 PrestoShell（showcase/+layout.svelte）

所有 showcase 页面的公共 layout，职责：

1. **事件拦截**：capture 阶段拦截 click/mousedown/keydown/contextmenu，通过白名单放行允许的交互
2. **光标样式**：全局 `cursor: default`，可交互区域设对应光标
3. **主题同步**：继承 `prefers-color-scheme`，自动跟随系统深浅色
4. **视口适配**：固定尺寸渲染（1200×800），CSS `transform: scale()` 适配 iframe
5. **隐藏全局 UI**：showcase 模式下隐藏 toast、confirm dialog 等

### 2.6 各页面详细需求

#### editor-gongwen / editor-jiaoan

- 复用 `+page.svelte` 的 split pane 布局
- 左侧 CodeMirror：加载对应模板的 example.md，设为 readOnly
- 右侧 Preview：加载对应模板的预编译 SVG
- 分割线可拖拽 + 双向滚动同步
- 右上角 proximity-reveal 按钮正常显隐（点击无效）
- 工具栏显示模板名称（静态文本，非下拉）
- 状态点脉冲动画

#### batch

- 复用 `batch/+page.svelte` 布局
- 预置 mock 文件列表（6 个文件，分属不同模板分组，部分自动检测）
- 文件可在分组间拖拽 + 多选 + 拖拽手柄 hover
- 转换按钮可见但点击无效

#### templates

- 复用 `settings/+page.svelte` 模板管理面板布局
- 预置 mock 模板列表：2 个真实 + 5 个 mock
- 关键词 chip 筛选正常工作
- 模板卡片 hover 效果正常
- 操作按钮可见但点击无效

#### drop

- 进入视口时自动播放动画：文件图标飞入 → drop overlay → 淡出 → 循环

#### hero

- 左侧 CodeMirror 自动逐字输入公文 markdown
- 右侧 SVG 帧与打字进度同步触发
- 详细时序见原架构文档

### 2.7 Mock 数据

集中管理在 `frontend/src/lib/showcase/` 目录。

### 2.8 构建配置

- Showcase 路由通过 `adapter-static` 构建为独立 HTML
- 确保 `/showcase/*` 路径可直接 URL 访问

---

## 三、模板系统架构

详见 `extension-spec.md` 第二～五节（二进制协议、manifest.json 规范、平台矩阵、Release 命名）。

### 3.1 关键补充

- 模板**不限语言**：Go、Rust、TypeScript (Bun)、Python 等均可，只要能编译为多平台二进制
- 每个 Release 覆盖 **3×2 = 6 个平台**（darwin/linux/windows × arm64/amd64）
- 开发者只需发布编译好的二进制，manifest 和 example 嵌入在二进制内部
- 安装时 Presto 运行 `./binary --manifest` 提取 manifest.json

### 3.2 分发模型（解耦架构）

**核心原则**：发行版不包含任何模板可执行文件，模板与应用更新完全解耦。

**获取方式**：

| 方式 | 场景 | 验证 |
|------|------|------|
| 模板商店在线安装 | 联网环境 | SHA256 自动验证（后台静默） |
| ZIP 导入 | 离线环境 / 批量部署 | SHA256 对比 Registry 缓存 |
| URL 手动安装 | 开发者测试 | 无验证，标记为"未收录" |

**ZIP 导入验证流程**：

1. 解压 ZIP，读取二进制文件
2. 计算二进制的 `sha256.Sum256(binData)`
3. 从本地 Registry 缓存查找该模板 + 当前平台的期望 SHA256
4. 验证结果（四种状态）：

| 状态 | 含义 | 处理 |
|------|------|------|
| `verified` | SHA256 匹配 | 安装，绿色提示"已验证" |
| `not_in_registry` | 注册表中无此模板 | 安装，黄色提示"无法验证来源" |
| `pending` | 注册表缓存不可用（离线且无缓存） | 安装，蓝色提示"待验证，联网后可确认" |
| `mismatch` | SHA256 不匹配 | **拒绝安装**（可能被篡改） |

**Registry 缓存**（`~/.presto/registry-cache.json`）：

- 启动时异步刷新，不阻塞启动
- 缓存有效期 1 小时，过期后自动刷新
- CDN 不可达时使用本地缓存
- 缓存也不存在时，验证结果标记为 `pending`

**首次运行**：应用启动时无任何模板，模板选择器引导用户前往模板商店安装。

### 3.3 安全与信任

见 `extension-spec.md` 第六节。

### 3.3 字体处理

- `requiredFonts` 中 `url` 为字体信息页，`downloadUrl` 为直链（开源字体才有）
- 开源字体可自动下载，商业字体引导用户去官网
- 浏览器端字体检测：Local Font Access API（Chrome/Edge），用户手动触发

---

## 四、静态注册表与 CDN

### 4.1 架构

三个独立的 registry 仓库（模板、插件、Agent Skills），统一推送到 `registry-deploy` 仓库，通过 Cloudflare Pages 部署到 `presto.c-1o.top`。

```
template-registry CI ──push──→ registry-deploy/templates/
plugin-registry CI   ──push──→ registry-deploy/plugins/      （将来）
skill-registry CI    ──push──→ registry-deploy/agent-skills/  （将来）
                                       ↓
                            Cloudflare Pages 自动部署
                                       ↓
                            presto.c-1o.top
```

### 4.2 Registry 仓库结构

```
template-registry/
  templates/
    {name}/
      manifest.json          ← ./binary --manifest 的输出
      README.md              ← 从模板仓库首页获取
      example.md             ← ./binary --example 的输出
      preview-1.svg          ← typst compile 生成
      preview-2.svg
  scripts/
    build_registry.py
  Dockerfile                 ← 沙箱镜像（含 Typst CLI + 基础字体）
  .github/workflows/
    update-registry.yml
```

### 4.3 SVG 生成管线

```
下载 Release 的模板二进制
  → ./binary --example → example.md
  → cat example.md | ./binary → output.typ
  → typst compile --font-path ./fonts/ output.typ → preview-{n}.svg
```

### 4.4 安全：运行社区二进制

两个 GitHub Actions job 隔离：

- **Job 1**（低权限，不传 secrets）：运行模板二进制，生成 Typst 源码和 example.md，通过 artifacts 传递
- **Job 2**（高权限）：运行 Typst CLI（可信），编译 SVG，推送到 registry-deploy

### 4.5 增量更新

每 6 小时或手动触发。增量检测：对比最新 Release tag 与 registry 记录的版本。通过 `topic:presto-template` 发现新仓库。

### 4.6 共享 CI

组织级共享 workflow 仓库 `Presto-io/.github`：

```yaml
# 各 registry 引用
uses: Presto-io/.github/.github/workflows/registry-build.yml@main
with:
  type: template
  topic: presto-template
  deploy-path: templates/
```

### 4.7 Hero 分帧 SVG

截取 example.md 不同长度版本，分别编译为 SVG，存为 `hero-frame-0.svg` ~ `hero-frame-3.svg`。

---

## 五、软件内商店（Presto 仓库）

### 5.1 设计原则

- 所有页面左侧导航/列表宽度统一 **180px**
- 模板商店、插件商店、Agent Skills 商店共用 `StoreView.svelte` 通用组件
- 数据来自 registry CDN（`presto.c-1o.top`），前端直接 fetch，不经过后端
- 安装操作通过后端 API（`/api/templates/{name}/install`）

### 5.2 路由

```
/store            → 模板商店
/plugins          → 插件商店（将来）
/agent-skills     → Agent Skills 商店（将来）
```

### 5.3 入口

设置页左侧导航：
- "模板管理"（保留，管理已安装模板）
- "模板商店"（原"模板搜索"，点击 `goto('/store')`）

### 5.4 商店页面两种视图

**卡片网格视图**（初始，无选中）：
```
┌─────────────────────────────────┐
│ ← 返回设置    🔍 搜索...        │
│ [全部] [政务] [教育] [商务] ...  │
├─────────────────────────────────┤
│  ┌──────┐ ┌──────┐ ┌──────┐   │
│  │ 公文 │ │ 教案 │ │ 会议 │   │
│  └──────┘ └──────┘ └──────┘   │
│  ┌──────┐ ┌──────┐            │
│  │ 论文 │ │ 简历 │            │
│  └──────┘ └──────┘            │
└─────────────────────────────────┘
```

**Master-Detail 视图**（选中某个模板后）：
```
┌─────────────────────────────────┐
│ ← 返回    🔍 搜索...           │
│ [全部] [政务] [教育] ...        │
├────────┬────────────────────────┤
│  公文 ✦│  公文模板       🔵 官方 │
│  教案  │  描述...               │
│  会议  │  [政务] [公文] [国标]   │
│  论文  │  v1.0.0 · MIT · mrered │
│  简历  │  ┌─────────────────┐  │
│        │  │ Live Preview    │  │
│ 180px  │  │ iframe          │  │
│        │  └─────────────────┘  │
│        │  README / Schema ...  │
│        │  [安装]               │
└────────┴────────────────────────┘
```

- 左侧 180px 紧凑列表
- 右侧 flex: 1（桌面端 max-width 限制，网页端自适应）
- 实时预览：iframe 嵌入 `/showcase/editor?registry={name}`

### 5.5 通用组件

```svelte
<StoreView
  type="template"
  registryUrl="https://presto.c-1o.top/templates/registry.json"
  installEndpoint="/api/templates"
/>
```

### 5.6 安装流程修复

当前 GitHub Release 安装流程需修复：
1. 下载二进制后运行 `--manifest` 提取 manifest.json 写入磁盘
2. 将二进制重命名为 `presto-template-{name}`
3. 参考 ZIP 导入流程（`import.go`）的完整实现

---

## 六、官网模板商店（Homepage 仓库）

### 6.1 位置与技术

`/templates` 路由，Svelte island 组件。数据来自 `presto.c-1o.top`。

### 6.2 UI 设计

Obsidian 式 master-detail 布局，左侧 320px 卡片列表 + 右侧详情。

### 6.3 详情页内容

- 模板名称、作者、版本、分类 chips、信任标识
- Live Preview：iframe 嵌入 Presto 的 `/showcase/editor?registry={name}`
- README 渲染、frontmatterSchema 展示、所需字体列表
- 仓库链接、兼容版本

### 6.4 数据获取

前端运行时 fetch `registry.json`（从 `presto.c-1o.top`）。

---

## 七、首页导航

```
[Features] [Showcase] [Templates] [Plugins (coming soon)] [Agent Skills (coming soon)] [Download]
```

---

## 八、模板开发者生态

### 8.1 开发者工作流

```
1. GitHub "Use this template" → 从 starter 仓库创建
2. Clone 到本地
3. 参考文件放入 reference/ 目录
4. 用 AI 编程工具开发（或手动开发）
5. make preview → 在 Presto 中预览
6. git tag → CI 自动构建 6 平台 + Release
7. Registry CI 自动收录 → 商店可见
```

### 8.2 Starter 仓库

GitHub Template Repository，开发者点击 "Use this template" 创建自己的仓库。

每种语言一个 starter：
- `presto-template-starter-go`
- `presto-template-starter-rust`
- `presto-template-starter-typescript`

结构（以 Go 为例）：
```
presto-template-starter-go/
  reference/                     ← 开发者放参考文件
    README.md                    ← 说明支持的格式
  main.go                        ← 骨架代码
  manifest.json                  ← 需要填写
  example.md                     ← 需要替换
  go.mod
  Makefile                       ← build / preview / test
  .github/workflows/
    release.yml                  ← 6 平台构建 + Release
  CONVENTIONS.md                 ← AI 开发指引（single source of truth）
  CLAUDE.md                      ← Claude Code 配置
  AGENTS.md                      ← OpenAI Codex 配置
  .cursor/rules                  ← Cursor 配置
  README.md
  LICENSE
```

### 8.3 AI 辅助开发

CONVENTIONS.md 是核心，教 AI 如何：

1. **分析参考文件**：支持 PDF、DOCX、TXT、MD、TYP、XLSX、PPT、HTML、图片等
2. **与开发者交互确认**：
   - 排版特征清单（哪些正确、哪些调整）
   - 可配置 vs 固定（哪些暴露为 frontmatter）
   - Markdown 语法映射（# ## 在此模板中的含义）
   - 未明确的细节处理策略
3. **生成代码**：转换逻辑 + Typst 模板 + manifest + example
4. **测试预览**：`make preview` 在 Presto 中验证

### 8.4 开发者预览

使用 Presto 本身：

```makefile
preview:
	$(BUILD_CMD)                                          # 编译当前平台二进制
	mkdir -p ~/.presto/templates/$(NAME)
	cp $(BINARY) ~/.presto/templates/$(NAME)/presto-template-$(NAME)
	./$(BINARY) --manifest > ~/.presto/templates/$(NAME)/manifest.json
	@echo "模板已安装，请在 Presto 中刷新查看"
```

### 8.5 CLI 工具（可选）

`npx create-presto-template` 提供交互式本地初始化，面向喜欢手动开发的人：

```
$ npx create-presto-template
? 模板名称: my-report
? 显示名称: 报告模板
? 语言: Go / Rust / TypeScript
? 分类: business
? 许可证: MIT
→ 从 starter 仓库克隆并替换变量
→ 项目已创建在 ./my-report
```

---

## 九、跨仓库协作

### 9.1 文档层级

```
extension-spec.md          ← 技术规范（类型定义、协议、命名规范）
Presto-architecture.md     ← 架构设计（本文档，系统全景、各模块设计）
各仓库 CLAUDE.md           ← 实现指引（该仓库 AI 助手的具体任务）
starter CONVENTIONS.md     ← 模板开发指引（教 AI 如何开发模板）
```

### 9.2 协作模式

```
用户 ──→ Presto AI（附带 extension-spec.md + 本文档）──→ 改 Presto 仓库
用户 ──→ Homepage AI（附带 extension-spec.md + 本文档）──→ 改 Homepage 仓库
用户 ──→ Registry AI（附带 extension-spec.md + 本文档）──→ 建 Registry 仓库
用户 ──→ Starter AI（附带 CONVENTIONS.md）──→ 建 Starter 仓库
模板开发者 ──→ Starter AI（附带 CONVENTIONS.md）──→ 开发具体模板
```

### 9.3 一致性保证

- 所有 TypeScript / Go 类型定义必须与 `extension-spec.md` 的 schema 完全一致
- registry.json URL 统一为 `https://presto.c-1o.top/{type}/registry.json`
- 跨仓库变更时先更新 extension-spec.md，再各仓库跟进

---

## 十、待后续讨论的话题

1. 模板签名验证详细设计（cosign / sigstore）
2. 字体缺失检测的客户端实现
3. Agent Skills 具体架构
4. 插件系统二进制协议（与模板协议的差异）
5. 插件权限声明和安全沙箱
