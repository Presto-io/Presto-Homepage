# Presto 模板开发指南 (CONVENTIONS.md)

> 本文件是 `presto-template-starter-{lang}` 系列仓库的核心 AI 指引。
> 所有 AI 工具的配置文件（CLAUDE.md、AGENTS.md、.cursor/rules 等）都引用本文件。
> 同时也是人类开发者的完整开发文档。

---

## 你是谁

你是 Presto 模板开发助手。你的任务是帮助开发者创建 Presto 模板——一个将 Markdown 转换为 Typst 排版源码的命令行工具。

Presto 是一个 Markdown → Typst → PDF 文档转换平台。模板定义了排版规则：接收 Markdown 输入，输出符合特定格式要求的 Typst 源码，Presto 再将 Typst 编译为 PDF。

---

## 项目结构

```
my-template/
  reference/              ← 开发者的参考文件（PDF、DOCX、TYP 等）
    README.md             ← 说明支持的格式
  main.go                 ← 核心转换逻辑（语言因 starter 而异：main.go / src/main.rs / src/index.ts）
  manifest.json           ← 模板元数据（name 决定二进制名称）
  example.md              ← 示例输入文档
  Makefile                ← build / preview / test / test-security / clean
  .github/workflows/
    release.yml           ← 6 平台自动构建 + GitHub Release
  .claude/
    settings.local.json   ← Claude Code 权限配置
  CONVENTIONS.md          ← stub，指向本中心文档
  CLAUDE.md               ← → 引用本中心文档
  AGENTS.md               ← → 引用本中心文档
  .cursor/
    rules                 ← → 引用本中心文档
  README.md               ← 模板说明文档（面向用户）
  LICENSE
```

> **注意**：各 starter 仓库的 CONVENTIONS.md、CLAUDE.md、AGENTS.md、.cursor/rules 均为 stub，
> 内容只有一行链接指向本文件。本文件是唯一的规范来源（Single Source of Truth）。

---

## 二进制协议

模板编译后是一个独立可执行文件，必须且只能支持以下四种调用：

| 调用方式 | 行为 | 示例 |
|---------|------|------|
| `./binary` | stdin 读 Markdown，stdout 输出 Typst 源码 | `cat doc.md \| ./binary > out.typ` |
| `./binary --manifest` | stdout 输出 manifest.json 内容 | `./binary --manifest > manifest.json` |
| `./binary --example` | stdout 输出 example.md 内容 | `./binary --example > example.md` |
| `./binary --version` | stdout 输出版本号（从 manifest.json 的 version 字段读取），然后退出 | `./binary --version` |

**关键约束：**

- manifest.json 和 example.md 必须嵌入在二进制内部（编译时内嵌）
- 执行环境最小化：只有 `PATH=/usr/local/bin:/usr/bin:/bin`，无其他环境变量
- 超时限制：30 秒
- **禁止访问网络**——模板二进制在用户机器上执行，任何网络请求都是安全风险
- **禁止写文件**——只允许通过 stdin/stdout 进行 I/O
- **stdout 只能输出 Typst 源码**——不得输出 HTML、JSON（`--manifest`/`--version`/`--example` 模式除外）或任何非 Typst 内容
- **不得添加协议外的 CLI flag**——二进制只能响应上述四种调用方式，禁止添加 `-h`、`-v`、`-o` 等额外参数

---

## 安全规范

模板二进制直接在用户机器上运行，安全性是第一优先级。Presto 通过**三层防护**确保模板不会危害用户：

### 设计原则

1. **零网络**：模板不需要网络，所有资源在编译时嵌入
2. **纯函数**：stdin → stdout，无副作用，不读写文件系统
3. **最小权限**：执行环境中无环境变量、无 home 目录访问
4. **可审计**：所有依赖必须在构建文件中显式声明，禁止动态加载

### 第一层：静态分析

在源码层面检测禁止的 import 和依赖，按语言分别定义黑名单：

**Go —— 禁止的标准库包：**

```text
net, net/*, os/exec, plugin, debug/*
```

检测方式：`go list -f '{{join .Imports "\n"}}' ./... | grep -E <deny-pattern>`

**Rust —— 禁止的 crate 和 std 模块：**

```text
# 禁止的第三方 crate（含传递依赖）
reqwest, hyper, ureq, surf, attohttpc, native-tls, openssl, rustls, tokio, async-std

# 禁止的标准库用法
std::net, TcpStream, UdpSocket, TcpListener, std::process::Command
```

检测方式：`cargo tree --prefix none --no-dedupe | grep -iE <deny-pattern>` + 源码 grep

**TypeScript —— 禁止的 Node 模块和 API：**

```text
# 禁止的 import
node:http, node:https, node:net, node:dgram, node:dns, node:tls,
node:child_process, node:cluster, node:worker_threads

# 禁止的 API 调用
fetch(), XMLHttpRequest, WebSocket

# 禁止的 npm 包
axios, node-fetch, got, superagent, request, undici
```

检测方式：源码 grep + `jq` 审计 package.json 依赖

### 第二层：运行时网络沙箱

即使静态分析通过，仍然通过操作系统级别的网络隔离进行验证：

- **macOS**：`sandbox-exec -p '(version 1)(allow default)(deny network*)'` — 内核级网络阻断
- **Linux**：`unshare --net` — 网络命名空间隔离（CI 环境使用此方式）

在沙箱中运行 `echo "# Test" | ./binary`，如果二进制尝试任何网络连接，系统会直接拒绝并报错。

### 第三层：输出格式验证

验证 `--example | ./binary` 的 stdout 输出：

1. **不得包含 HTML 标签**：检测 `<html>`、`<script>`、`<iframe>`、`<img>`、`<link>`、`<!DOCTYPE>` 等
2. **首行必须是 Typst 指令或注释**：以 `#` 开头（如 `#set`、`#let`、`#heading`）或 `//` 开头（Typst 行注释）

### 执行方式

安全测试集成在 Makefile 的 `test-security` 目标中，`make test` 会自动先运行安全测试：

```bash
make test           # 自动触发 test-security → 功能测试
make test-security  # 仅运行安全测试
```

任何安全检测失败都会阻止后续功能测试，CI 中同样生效。

---

## manifest.json 规范

```json
{
  "name": "my-template",
  "displayName": "我的模板",
  "description": "一句话描述模板用途",
  "version": "1.0.0",
  "author": "your-github-username",
  "license": "MIT",
  "category": "通用",
  "keywords": ["报告", "商务"],
  "minPrestoVersion": "0.1.0",
  "requiredFonts": [],
  "frontmatterSchema": {
    "title": { "type": "string", "default": "请输入标题" },
    "date":  { "type": "string", "format": "YYYY-MM-DD" }
  }
}
```

### 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `name` | 是 | 唯一标识符，kebab-case |
| `displayName` | 是 | 显示名称 |
| `description` | 是 | 一句话描述 |
| `version` | 是 | semver |
| `author` | 是 | GitHub 用户名 |
| `license` | 是 | SPDX 标识符 |
| `category` | 是 | 模板分类标签，自由文本，最大 20 字符，只允许中文/英文/数字/空格/连字符。示例："公文"、"教育"、"简历"、"学术论文"、"商务" |
| `keywords` | 是 | 搜索关键词，2-6 个 |
| `minPrestoVersion` | 是 | 最低兼容 Presto 版本 |
| `requiredFonts` | 否 | 所需字体列表 |
| `frontmatterSchema` | 否 | 支持的 YAML frontmatter 字段 |

### requiredFonts 格式

```json
{
  "name": "FZXiaoBiaoSong-B05",
  "displayName": "方正小标宋",
  "url": "https://www.foundertype.com/...",
  "downloadUrl": null,
  "openSource": false
}
```

- 鼓励使用开源字体（`openSource: true`，提供 `downloadUrl`）
- 商业字体设 `downloadUrl: null`，`url` 指向字体信息页

### frontmatterSchema 格式

```json
{
  "title": { "type": "string", "default": "默认值" },
  "count": { "type": "number", "default": 1 },
  "draft": { "type": "boolean", "default": false },
  "date":  { "type": "string", "format": "YYYY-MM-DD" }
}
```

type 可选：`string` / `number` / `boolean` / `array`

### 信任等级（trust）

trust 字段**不由模板自己声明**，而是由 Presto 的 template-registry 在索引时自动判定：

| Trust | 条件 | 含义 |
|-------|------|------|
| `official` | 仓库 owner 是 `Presto-io` 组织 | 官方出品 |
| `verified` | Release 的 SHA256SUMS 文件有有效的 GPG 签名（公钥在 registry 中注册） | 开发者身份已验证，二进制未被篡改 |
| `community` | 在 registry 中，无有效签名 | 仅收录，未审核 |
| `unrecorded` | 不在 registry 中 | 用户手动 URL 安装 |

模板开发者不需要在 manifest.json 中添加 trust 字段。如果你希望你的模板获得 `verified` 标识，需要：

1. 生成 GPG 密钥对
2. 在 template-registry 注册你的公钥
3. Release 时对 SHA256SUMS 文件进行 GPG 签名，生成 SHA256SUMS.sig

---

## 开发流程

### 第一步：分析参考文件

检查 `reference/` 目录中的文件。开发者可能放入以下任意格式：

| 格式 | 分析方法 |
|------|---------|
| **PDF** | 视觉分析排版结构：字体、字号、间距、页边距、页眉页脚、分栏 |
| **DOCX/DOC** | 解析 XML 样式定义，精确提取字体、字号、行距、段距、页面设置 |
| **TYP** | 直接参考 Typst 代码，最精确 |
| **MD/TXT** | 理解输入格式和文档结构 |
| **XLSX** | 分析表格排版（列宽、行高、边框、合并单元格） |
| **PPT/PPTX** | 分析幻灯片排版（不常见但支持） |
| **HTML/CSS** | 解析样式定义（注意 Web 和纸质排版差异大） |
| **图片 (PNG/JPG)** | 视觉分析排版效果（精确度最低） |
| **纯文本规范** | 如"标题用方正小标宋 22pt"，依赖描述完整性 |

**分析结果应包括：**

- 页面设置（纸张尺寸、页边距、页眉页脚）
- 字体使用（各级标题、正文、页码等用什么字体和字号）
- 段落格式（行距、段前/段后间距、首行缩进）
- 特殊元素（表格、图片、分割线、编号列表的样式）
- 页面结构（封面、目录、正文、附录等分区）

### 第二步：与开发者交互确认

**你必须在生成代码前和开发者确认以下问题：**

#### 2.1 排版特征清单

列出你识别到的所有排版特征，让开发者确认：

```
我分析了你的参考文件，识别到以下排版特征：

页面设置：
  - 纸张：A4 纵向
  - 上边距：37mm，下边距：35mm，左边距：28mm，右边距：26mm

字体：
  - 标题：方正小标宋，22pt，居中
  - 正文：仿宋 GB2312，16pt
  - 页码：Times New Roman，14pt

段落：
  - 行距：28.5pt（固定值）
  - 首行缩进：2 字符

请确认以上参数是否正确，有需要调整的吗？
```

#### 2.2 可配置 vs 固定

```
以下参数中，哪些应该通过 YAML frontmatter 暴露给用户自定义，
哪些直接固定在模板中？

- 标题内容 → 建议: 可配置 (frontmatter: title)
- 标题字体 → 建议: 固定
- 日期 → 建议: 可配置 (frontmatter: date)
- 页边距 → 建议: 固定
- ...
```

#### 2.3 Markdown 语法映射

不同模板对 Markdown 标记的解释可能完全不同：

```
在你的模板中，Markdown 标记的含义是什么？

# (H1) → ？（文号 / 主标题 / 章标题）
## (H2) → ？（小标题 / 节标题）
### (H3) → ？
- 列表 → ？（无序列表 / 特殊用途）
> 引用 → ？（引文 / 批注 / 其他）
**粗体** → ？
```

#### 2.4 未覆盖的情况

```
参考文件中没有体现以下排版场景，请告诉我你希望如何处理：

- 表格出现时 → ？
- 图片插入时 → ？
- 代码块出现时 → ？
- 脚注 → ？
- 超过一页时的分页规则 → ？
```

#### 2.5 未明确的细节

**关键原则：当精确度不够时，一定要问，不要猜。**

```
以下排版参数在参考文件中存在，但你没有明确提到是否需要：

- 页边距（37mm/35mm/28mm/26mm）
- 段前间距（0pt）
- 段后间距（0pt）

你希望我如何处理？
a) 严格遵循参考文件中的值
b) 使用合理默认值
c) 逐项和我确认
```

**默认策略**（如果开发者不想逐项确认）：
- 结构性参数（页边距、行距、字号）→ 使用参考文件的值
- 装饰性参数（分割线样式、页码格式）→ 使用合理默认值

### 第三步：生成代码

根据确认的排版需求，生成以下文件：

1. **转换逻辑**（main.go / main.rs / src/index.ts）
   - 解析 YAML frontmatter
   - 将 Markdown 结构映射为 Typst 代码
   - 输出完整的 Typst 源码（包含页面设置、字体定义、内容）

2. **manifest.json**
   - 填写所有元数据
   - frontmatterSchema 与代码中的解析一致
   - requiredFonts 列出所有非系统字体

3. **example.md**
   - 展示模板所有功能的示例文档
   - 包含 frontmatter 的所有字段
   - 覆盖各级标题、列表、表格等元素
   - 内容有意义（不是 lorem ipsum），最好源自参考文件

#### 各语言技术栈参考

三个 starter 分别使用以下库实现 Markdown 解析和 CLI：

| 功能 | Go | Rust | TypeScript (Bun) |
| ---- | -- | ---- | ---------------- |
| CLI 参数 | `flag` (标准库) | `clap` (derive 模式) | `process.argv` 手动解析 |
| Markdown 解析 | `goldmark` (AST 遍历) | `pulldown-cmark` (事件驱动) | `marked` (token 遍历) |
| YAML frontmatter | `gopkg.in/yaml.v3` | `serde_yaml` | `js-yaml` |
| JSON 序列化 | `encoding/json` (标准库) | `serde_json` | 内置 `JSON` |
| 文件嵌入 | `//go:embed` | `include_str!()` | Bun `import with { type: "text" }` |
| 编译产物 | `go build` | `cargo build --release` | `bun build --compile` |

**选择建议：**

- **Go**：交叉编译最简单（`GOOS/GOARCH` 即可），推荐新手使用
- **Rust**：二进制最小、性能最高，需要安装 cross-compilation 工具链
- **TypeScript**：开发体验最好，但 `bun build --compile` 产物较大

### 第四步：测试预览

```bash
make preview
```

这会：
1. 编译当前平台的二进制
2. 复制到 `~/.presto/templates/{name}/`
3. 运行 `--manifest` 提取 manifest.json
4. 提示用户在 Presto 中刷新查看

在 Presto 中验证：
- 打开编辑器，选择你的模板
- 输入 example.md 的内容
- 检查右侧预览是否符合预期
- 对比参考文件，确认排版一致

---

## Typst 快速参考

模板的 Typst 输出通常包含三个部分：

### 页面设置

```typst
#set page(
  paper: "a4",
  margin: (top: 37mm, bottom: 35mm, left: 28mm, right: 26mm),
  header: [...],
  footer: [...],
  numbering: "1",
)
```

### 字体和段落

```typst
#set text(font: ("SimSun", "Times New Roman"), size: 12pt, lang: "zh")
#set par(leading: 1.5em, first-line-indent: 2em)
#set heading(numbering: "1.1")
```

### 内容

```typst
#align(center, text(font: "SimHei", size: 22pt, weight: "bold")[标题])
#v(1em)

正文内容...

#heading(level: 1)[第一章]
```

### 常用 Typst 函数

| 函数 | 用途 | 示例 |
|------|------|------|
| `#set page(...)` | 页面设置 | 纸张、边距、页眉页脚 |
| `#set text(...)` | 文本默认样式 | 字体、字号、语言 |
| `#set par(...)` | 段落默认样式 | 行距、缩进 |
| `#heading(...)` | 标题 | 编号、层级 |
| `#table(...)` | 表格 | 列宽、对齐、边框 |
| `#image(...)` | 图片 | 路径、宽度 |
| `#v(...)` / `#h(...)` | 垂直/水平间距 | `#v(1em)` |
| `#align(...)` | 对齐 | center, left, right |
| `#box(...)` / `#block(...)` | 容器 | 边框、背景、内边距 |
| `#grid(...)` | 网格布局 | 列布局 |
| `#pagebreak()` | 分页 | |
| `#line(...)` | 画线 | 长度、粗细 |
| `#show: ...` | 样式规则 | 自定义标题、列表等元素的样式 |
| `#let` | 变量定义 | `#let title = "..."` |

### Typst 中的中文字体

```typst
// 常见中文字体名称（Typst 中使用的名称）
"SimSun"            // 宋体
"SimHei"            // 黑体
"FangSong"          // 仿宋
"KaiTi"             // 楷体
"Microsoft YaHei"   // 微软雅黑
"FZXiaoBiaoSong-B05" // 方正小标宋
"FZFangSong-Z02"    // 方正仿宋
```

---

## Markdown → Typst 转换模式

转换逻辑的核心是解析 Markdown 并输出对应的 Typst 代码。常见模式：

### Frontmatter 解析

```
输入（Markdown）:
---
title: 关于开展安全检查的通知
date: 2026年2月22日
---

输出（Typst 变量）:
#let title = "关于开展安全检查的通知"
#let date = "2026年2月22日"
```

### 标题映射

```
输入: # 一级标题
输出: #heading(level: 1)[一级标题]
// 或自定义样式:
输出: #align(center, text(font: "SimHei", size: 18pt)[一级标题])
```

### 段落

```
输入: 普通文本段落
输出: 普通文本段落\n\n     // Typst 用空行分段
```

### 粗体/斜体

```
输入: **粗体** *斜体*
输出: #strong[粗体] #emph[斜体]
// 或使用 Typst 简写:
输出: *粗体* _斜体_        // 注意 Typst 和 Markdown 的标记恰好相反
```

---

## 发布流程

### CI 自动构建

`.github/workflows/release.yml` 在推送 tag 时自动触发：

```yaml
on:
  push:
    tags: ['v*']
```

构建 6 平台二进制 + SHA256SUMS：

| 目标 | 产物名称 |
|------|---------|
| darwin/arm64 | `presto-template-{name}-darwin-arm64` |
| darwin/amd64 | `presto-template-{name}-darwin-amd64` |
| linux/arm64 | `presto-template-{name}-linux-arm64` |
| linux/amd64 | `presto-template-{name}-linux-amd64` |
| windows/arm64 | `presto-template-{name}-windows-arm64.exe` |
| windows/amd64 | `presto-template-{name}-windows-amd64.exe` |

### 发布步骤

```bash
# 确保所有改动已 commit
git add -A && git commit -m "feat: initial template"

# 打 tag
git tag v1.0.0
git push origin main --tags

# CI 自动：
# 1. 编译 6 平台二进制
# 2. 生成 SHA256SUMS
# 3. 创建 GitHub Release 并上传
```

### 被 Registry 收录

发布后，`template-registry` 的 CI（每 6 小时）会：
1. 通过 GitHub topic `presto-template` 发现你的仓库
2. 下载二进制，提取 manifest 和 example
3. 编译预览 SVG
4. 添加到 registry.json
5. 你的模板出现在 Presto 商店中

**前提：** 你的仓库必须有 `presto-template` topic（从 starter 仓库创建时已自动设置）。

---

## Makefile 参考

Makefile 的模板名称从 `manifest.json` 动态读取，确保二进制命名与元数据一致。

以下以 Go 版本为例（Rust / TypeScript 仅 `build` 命令和安全黑名单不同）：

```makefile
NAME := $(shell jq -r .name manifest.json 2>/dev/null || echo my-template)
BINARY := presto-template-$(NAME)

# Go 安全白名单：禁止这些标准库包
GO_STDLIB_DENY := ^net$$|^net/|^os/exec$$|^plugin$$|^debug/|^testing$$

build:
    go build -o $(BINARY) .

preview: build
    mkdir -p ~/.presto/templates/$(NAME)
    cp $(BINARY) ~/.presto/templates/$(NAME)/$(BINARY)
    ./$(BINARY) --manifest > ~/.presto/templates/$(NAME)/manifest.json

test: build test-security
    @./$(BINARY) --manifest | python3 -m json.tool > /dev/null
    @./$(BINARY) --example | ./$(BINARY) > /dev/null
    @./$(BINARY) --version > /dev/null
    @# category 字段校验（非空、≤20 字符、仅中英文/数字/空格/连字符）
    @./$(BINARY) --manifest | python3 -c "..."
    @echo "All tests passed."

test-security: build
    @# 第一层：静态分析（禁止的 import）
    @FORBIDDEN=$$(go list -f '{{join .Imports "\n"}}' ./... | grep -E '$(GO_STDLIB_DENY)'); \
    if [ -n "$$FORBIDDEN" ]; then echo "SECURITY FAIL"; exit 1; fi
    @# 第二层：运行时网络沙箱（自动检测平台）
    @if command -v sandbox-exec >/dev/null 2>&1; then \
        echo "# Test" | sandbox-exec -p '(version 1)(allow default)(deny network*)' ./$(BINARY) > /dev/null; \
    elif unshare --net true 2>/dev/null; then \
        echo "# Test" | unshare --net ./$(BINARY) > /dev/null; \
    fi
    @# 第三层：输出格式验证（不含 HTML、首行为 Typst 指令或注释）
    @OUTPUT=$$(./$(BINARY) --example | ./$(BINARY)); \
    echo "$$OUTPUT" | grep -qiE '<html|<script' && exit 1 || true; \
    echo "$$OUTPUT" | head -1 | grep -q '^[#/]'

clean:
    rm -f $(BINARY)

.PHONY: build preview test test-security clean
```

### 各语言安全黑名单变量

| 语言 | 变量名 | 检测方式 |
| ---- | ------ | -------- |
| Go | `GO_STDLIB_DENY` | `go list` 分析实际 imports |
| Rust | `RUST_CRATE_DENY` + `RUST_SRC_DENY` | `cargo tree` 审计依赖 + 源码 grep |
| TypeScript | `TS_IMPORT_DENY` + `TS_API_DENY` | 源码 grep + `jq` 审计 package.json |

### Makefile 命令速查

| 命令 | 功能 |
| ---- | ---- |
| `make build` | 编译当前平台二进制 |
| `make preview` | 编译并安装到本地 Presto |
| `make test` | 安全测试 + 功能测试（CI 中使用） |
| `make test-security` | 仅运行安全测试 |
| `make clean` | 清理编译产物 |

---

## 常见问题

### 字体问题

**Q: 用户没有安装我的模板需要的字体怎么办？**

在 `manifest.json` 的 `requiredFonts` 中声明所有非系统字体。Presto 会在安装时提醒用户缺少的字体。开源字体可以提供 `downloadUrl` 让 Presto 自动下载。

**Q: 我应该用什么字体？**

优先使用开源字体（如思源宋体、思源黑体），降低用户安装门槛。如果场景要求（如公文），可以使用商业字体并在 `requiredFonts` 中注明。

### 编码问题

**Q: 输入的 Markdown 是什么编码？**

一律 UTF-8。

### 跨平台问题

**Q: Windows 上换行符不同怎么办？**

统一使用 `\n`。Go 的 `bufio.Scanner` 和 Rust 的 `BufRead` 都能正确处理 `\r\n`。

### Typst 版本

**Q: 应该针对哪个 Typst 版本？**

当前 Presto 使用 Typst 0.14.2。在 `minPrestoVersion` 中声明兼容版本。

### 安全相关

**Q: 为什么模板不能访问网络？**

模板二进制直接在用户机器上运行。如果允许网络访问，恶意模板可以上传用户文档内容、下载恶意代码，或成为攻击跳板。因此 Presto 在设计上完全禁止模板发起网络请求，所有资源（manifest.json、example.md）必须在编译时嵌入。

**Q: `make test-security` 报 SKIP: no sandbox tool available 怎么办？**

这表示你的系统没有可用的网络沙箱工具。macOS 自带 `sandbox-exec`，通常不会出现此问题。Linux 上需要确保内核支持 user namespace（`unshare --net`）。CI 中（GitHub Actions Linux runner）默认支持。本地开发时 SKIP 不影响其他安全检测，但建议在 CI 中确保沙箱测试通过。

**Q: 我的模板需要用到某个被禁止的 import 怎么办？**

大多数情况下你不需要被禁止的 import。例如你不需要 `net/http` 来读取文件（模板通过 stdin 接收输入），不需要 `os/exec` 来调用外部命令（所有转换在进程内完成）。如果你确实有特殊需求，请在 issue 中说明使用场景，我们会评估是否调整安全策略。

**Q: 第三方依赖的传递依赖包含网络库怎么办？**

Rust 的 `cargo tree` 检测包含传递依赖。如果你使用的 Markdown 解析库间接依赖了网络库，应该选择不包含网络功能的替代库，或通过 feature flag 禁用网络相关功能。Go 和 TypeScript 同理。

---

## 示例：从零开发一个模板

完整的 step-by-step 示例，展示从参考文件到发布的全过程。

### 场景

开发者在 `reference/` 中放了一个会议纪要的 PDF。

### AI 分析

```
我分析了你的 PDF（会议纪要样例.pdf），识别到以下排版：

页面：A4 纵向，上边距 25mm，其他 20mm
标题："XX公司会议纪要"，黑体 18pt，居中
元数据区：会议时间、地点、主持人、记录人，宋体 12pt
分割线：标题和元数据之间有一条细线
正文：宋体 12pt，行距 1.5 倍
签名区：底部右对齐，日期

需要确认：
1. 这些参数都正确吗？
2. 哪些通过 frontmatter 配置？（建议：标题、时间、地点、主持人、记录人、日期）
3. # 在你的输入中代表什么？
```

### 开发者确认后

AI 生成 main.go、manifest.json、example.md，开发者 `make preview` 验证。

---

## 与其他仓库的关系

| 仓库 | 与本仓库的关系 |
| ---- | ------------- |
| `Presto-io/Presto` | 运行你的模板二进制，提供预览环境 |
| `Presto-io/template-registry` | 自动收录你的模板到商店 |
| `Presto-io/registry-deploy` | 托管预览资源（CDN） |
| `Presto-io/Presto-Homepage` | 官网商店展示你的模板；本文件的宿主仓库 |
| `Presto-io/create-presto-template` | 交互式脚手架（`npx create-presto-template`），基于本规范生成新模板项目 |
| `Presto-io/presto-official-templates` | 官方模板 monorepo（Go），包含 gongwen、jiaoan-shicao 等官方维护的模板 |

技术规范详见 [extension-spec.md](./specs/extension-spec.md)。
