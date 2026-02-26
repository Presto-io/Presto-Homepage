# Presto-io 组织级 AI 开发指南

本文件适用于 Presto-io 组织下的所有仓库。各仓库的 CLAUDE.md 包含仓库特有的规则。

## 语言与区域

- **所有对话、回复、解释一律使用简体中文**
- Commit 消息用中文，格式 `<type>: <描述>`
- 类型：feat / fix / refactor / ui / sec / docs / chore / merge
- 代码注释用中文或英文均可，保持仓库内一致
- CLI 面向用户的输出用中文

## 仓库地图

| 仓库 | 职责 | 技术栈 |
|------|------|--------|
| `Presto` | 主应用（桌面 Wails + Web Docker） | Go + SvelteKit 2 + Svelte 5 |
| `Presto-homepage` | 官网（Vercel 部署） | Astro 5 纯静态 |
| `Presto-remotion` | 宣传视频 | Remotion + React 19 |
| `presto-official-templates` | 官方模板 monorepo | Go |
| `presto-template-starter-{go,rust,typescript}` | 模板开发脚手架 | 各语言 |
| `create-presto-template` | CLI 脚手架工具（`npx`） | Node.js + TypeScript |
| `template-registry` | 模板注册表 CI | Python + GitHub Actions |
| `registry-deploy` | CDN 部署目标 | Cloudflare Pages 纯静态 |

## 架构核心概念：模板是二进制

Presto 的模板系统基于**独立二进制**模型，不是文件模板模型：

- 模板编译为独立可执行文件，通过 stdin/stdout 协议工作
- `cat input.md | ./binary` → 输出 Typst 源码
- `./binary --manifest` → 输出 manifest.json
- `./binary --example` → 输出 example.md
- manifest.json 和 example.md **嵌入在二进制内部**（编译时 embed），不是独立文件
- 模板二进制禁止网络访问、禁止文件写入、禁止额外 CLI flag

这意味着：

- 不要建议"读取外部配置文件"的方案
- 不要建议"下载资源"的方案
- 不要添加 `-o`、`-h`、`-v` 等额外参数

## 跨仓库工作规则

⚠️ 这是最常见的错误来源。

- **操作文件前必须确认当前工作目录**：`pwd` 确认在正确的仓库中
- **不要跨仓库直接编辑文件**：如果需要修改另一个仓库，明确告知用户切换
- **不要手动复制跨仓库的共享文件**（如 CONVENTIONS.md）：这些通过 CI 或 npm 包分发
- 各仓库的 CI 是独立的，不要假设一个仓库的 CI 能触发另一个仓库的构建

## 平台与构建

- **开发机器**：macOS Apple Silicon (arm64)
- **CI 构建**：GitHub Actions (ubuntu-latest, linux/amd64)
- 交叉编译目标：darwin/{arm64,amd64}, linux/{arm64,amd64}, windows/{arm64,amd64}
- **确认架构再操作**：不要假设 amd64，本地开发环境是 arm64
- macOS 打包：DMG 中文本地化需要 `packaging/dmg/` 下的资源
- Typst CLI 版本：0.14.2

## Git 规范

- Commit 消息用中文，不要自动 push
- **commit 前询问要提交哪些文件**，不要 `git add -A` 全部提交
- 每完成一个逻辑任务立即 commit（按任务粒度，不是按文件）
- 当用户提出新规范/架构决策时，主动更新相关 CLAUDE.md

## 工具偏好

- Python 包管理用 `uv`（不用 pip/python3）
- 开始任务前检查当前可用的技能（Skills），优先使用已安装的技能

## 禁止事项（全局）

- **不要**修改模板二进制协议（stdin/stdout 接口）
- **不要**修改任何仓库的 `.github/workflows/release.yml` 除非被明确要求
- **不要**降低现有安全措施（SEC-XX 标注）

## 文档索引

本仓库 `docs/` 目录是 Presto-io 组织的文档中心：

- `CONVENTIONS.md` — 模板开发规范（开发者必读）
- `specs/Presto-architecture.md` — 系统架构设计
- `specs/extension-spec.md` — 扩展生态技术规范
- `specs/verified-templates-design.md` — Verified 模板方案
- `context/Presto.md` — 产品功能上下文
