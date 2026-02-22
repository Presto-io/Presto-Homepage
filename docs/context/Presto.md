# Presto 用户使用信息报告

您需要的是 Presto 软件的用户使用相关信息,用于开发面向用户的官网。以下是从代码库中提取的所有关键用户信息。

## 产品定位

Presto 是一个 Markdown 到 PDF 的文档转换平台,使用 Typst 作为排版引擎 [0-cite-0](#0-cite-0) 。支持两种部署模式:桌面应用(基于 Wails)和 Web 服务器(基于 Docker) [0-cite-1](#0-cite-1) 。

## 核心功能

### 1. Markdown 编辑与实时预览
- 左侧 CodeMirror 6 编辑器支持 Markdown 编写 [0-cite-2](#0-cite-2) 
- 右侧实时 SVG 预览排版效果 [0-cite-3](#0-cite-3) 
- 支持搜索/替换功能 [0-cite-4](#0-cite-4) 

### 2. PDF 导出
- 一键导出专业排版的 PDF 文档 [0-cite-5](#0-cite-5) 
- 支持快捷键 Cmd+E(macOS)或 Ctrl+E(Windows/Linux)快速导出 [0-cite-6](#0-cite-6) 

### 3. 模板系统
- 内置两个官方模板:公文排版(符合 GB/T 9704-2012 标准)和教案试操 [0-cite-7](#0-cite-7) 
- 支持通过下拉菜单切换模板 [0-cite-8](#0-cite-8) 
- 可浏览和安装第三方社区模板 [0-cite-9](#0-cite-9) 

### 4. 批量转换
- 支持一次转换多个 Markdown 文件为 PDF [0-cite-10](#0-cite-10) 
- 支持拖拽 .md、.markdown、.txt 文件和 .zip 压缩包 [0-cite-11](#0-cite-11) 

### 5. 拖放导入
- 拖拽文件到窗口即可打开或批量导入 [0-cite-12](#0-cite-12) 
- 桌面端支持原生文件拖放处理 [0-cite-13](#0-cite-13) 

## 使用流程

### 基本工作流
1. 在左侧编辑器编写 Markdown 内容 [0-cite-2](#0-cite-2) 
2. 从顶部下拉菜单选择模板 [0-cite-8](#0-cite-8) 
3. 右侧实时预览排版效果 [0-cite-3](#0-cite-3) 
4. 点击导出按钮或使用快捷键下载 PDF [0-cite-6](#0-cite-6) 

### YAML Front Matter 配置
模板通过 YAML front matter 接收元数据 [0-cite-14](#0-cite-14) 。例如公文模板支持:
- `title`: 文档标题
- `author`: 作者
- `date`: 日期
- `signature`: 签署单位 [0-cite-15](#0-cite-15) 

### 图片插入规则
- 使用标准 Markdown 语法 `![描述](路径)` [0-cite-16](#0-cite-16) 
- 通过 Cmd+O 打开文件后,图片路径相对于文件所在目录解析 [0-cite-17](#0-cite-17) 
- 直接在编辑器输入时需使用绝对路径 [0-cite-18](#0-cite-18) 

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| Cmd/Ctrl+O | 打开 Markdown 文件 [0-cite-19](#0-cite-19)  |
| Cmd/Ctrl+E | 导出 PDF [0-cite-20](#0-cite-20)  |
| Cmd/Ctrl+, | 打开设置 [0-cite-21](#0-cite-21)  |
| Cmd/Ctrl+Shift+T | 模板管理 [0-cite-22](#0-cite-22)  |
| Cmd/Ctrl+F | 搜索/替换 [0-cite-4](#0-cite-4)  |
| Cmd/Ctrl+Z | 撤销 [0-cite-23](#0-cite-23)  |
| Cmd/Ctrl+Shift+Z | 重做 [0-cite-24](#0-cite-24)  |

## 部署方式

### macOS 桌面端
```bash
git clone https://github.com/mrered/presto.git
cd presto
make desktop
make run-desktop
``` [0-cite-25](#0-cite-25) 

### Docker 部署(Web 端)
```bash
docker compose up -d
```
浏览器打开 `http://localhost:8080` [0-cite-26](#0-cite-26) 

## 用户引导系统

Presto 内置了分层引导系统 [0-cite-27](#0-cite-27) ,包括:

### 首次访问引导
- 模板选择器介绍(1.5秒后显示) [0-cite-28](#0-cite-28) 
- 导出 PDF 按钮说明(8秒后显示) [0-cite-29](#0-cite-29) 
- 模板示例预览说明(15秒后显示) [0-cite-30](#0-cite-30) 
- 常用快捷键总览(22秒后显示) [0-cite-31](#0-cite-31) 

### 上下文引导
- 空闲120秒后提示批量转换功能 [0-cite-32](#0-cite-32) 
- 插入图片时提示路径规则 [0-cite-33](#0-cite-33) 
- 图片加载失败时提示路径检查 [0-cite-34](#0-cite-34) 

## 技术特性

- **前端**: SvelteKit 2 + Svelte 5(runes 语法)+ TypeScript [0-cite-35](#0-cite-35) 
- **编辑器**: CodeMirror 6 + Markdown 扩展 [0-cite-36](#0-cite-36) 
- **后端**: Go 标准库 [0-cite-37](#0-cite-37) 
- **排版引擎**: Typst CLI 0.14.2 [0-cite-38](#0-cite-38) 
- **开源协议**: MIT License [0-cite-39](#0-cite-39) 

## Notes

以上信息涵盖了 Presto 的所有面向用户的功能、使用方法、快捷键、部署方式和用户引导系统。这些内容可直接用于官网的功能介绍、使用指南、快速开始等页面。代码中还包含了版本检查、模板商店、开源协议声明等辅助功能,可作为官网的补充内容 [0-cite-40](#0-cite-40) 。

Wiki pages you might want to explore:
- [Overview (Presto-io/Presto)](/wiki/Presto-io/Presto#1)

### Citations

**File:** CLAUDE.md (L3-3)
```markdown
Presto: Markdown → Typst → PDF 文档转换平台（桌面端 Wails + Web 端 Docker）。模块 `github.com/mrered/presto`。
```

**File:** docs/ai-reference.md (L11-11)
```markdown
| 桌面框架 | Wails | v2.11 |
```

**File:** docs/ai-reference.md (L16-16)
```markdown
| 排版引擎 | Typst CLI | 0.14.2 |
```

**File:** README.md (L31-32)
```markdown
| `gongwen` | 公文排版 | 符合 GB/T 9704-2012 标准，支持方正小标宋、仿宋等字体 |
| `jiaoan-shicao` | 教案试操 | 教学计划表格格式，自动编号和单元格合并 |
```

**File:** README.md (L45-50)
```markdown
```bash
git clone https://github.com/mrered/presto.git
cd presto
make desktop
make run-desktop
```
```

**File:** README.md (L54-58)
```markdown
```bash
docker compose up -d
```

浏览器打开 `http://localhost:8080`。
```

**File:** README.md (L85-85)
```markdown
1. 在左侧编辑器中编写 Markdown 内容
```

**File:** README.md (L86-86)
```markdown
2. 从顶部下拉菜单选择模板
```

**File:** README.md (L87-87)
```markdown
3. 右侧实时预览排版效果
```

**File:** README.md (L88-88)
```markdown
4. 点击导出按钮（或 Cmd+E）下载 PDF
```

**File:** README.md (L92-92)
```markdown
模板通过 YAML front matter 接收元数据。以 `gongwen` 模板为例：
```

**File:** README.md (L94-103)
```markdown
```markdown
---
title: 关于开展安全检查的通知
author: 办公室
date: 2026年2月17日
signature: 某某单位
---

正文内容...
```
```

**File:** README.md (L112-112)
```markdown
![图片描述](images/fig.png)
```

**File:** README.md (L116-116)
```markdown
- 通过 Cmd+O 打开文件后，图片路径相对于文件所在目录解析。比如文件在 `~/Documents/report/` 下，`![](images/fig.png)` 会找 `~/Documents/report/images/fig.png`
```

**File:** README.md (L117-117)
```markdown
- 直接在编辑器中输入内容（未打开文件）时，使用绝对路径：`![](/Users/me/images/fig.png)`
```

**File:** README.md (L205-205)
```markdown
| 前端框架 | SvelteKit 2 + Svelte 5（runes 语法） |
```

**File:** README.md (L206-206)
```markdown
| 编辑器 | CodeMirror 6 + Markdown 扩展 |
```

**File:** README.md (L208-208)
```markdown
| 后端 | Go 标准库 `net/http` |
```

**File:** frontend/src/routes/settings/+page.svelte (L93-118)
```text
  async function checkUpdate() {
    checking = true;
    updateError = '';
    updateInfo = null;
    try {
      if (window.go?.main?.App?.CheckForUpdate) {
        const info = await window.go.main.App.CheckForUpdate();
        updateInfo = info;
      } else {
        const resp = await fetch('https://api.github.com/repos/Presto-io/Presto/releases/latest');
        if (!resp.ok) throw new Error(`GitHub API error: ${resp.status}`);
        const release = await resp.json();
        const latest = (release.tag_name as string).replace(/^v/, '');
        updateInfo = {
          hasUpdate: latest !== appVersion && appVersion !== 'dev',
          latestVersion: latest,
          downloadURL: release.html_url,
          releaseURL: release.html_url,
        };
      }
    } catch (e) {
      updateError = e instanceof Error ? e.message : String(e);
    } finally {
      checking = false;
    }
  }
```

**File:** frontend/src/routes/settings/+page.svelte (L619-620)
```text
                <span class="feature-name">PDF 导出</span>
                <span class="feature-desc">将 Markdown 转换为排版精美的 PDF</span>
```

**File:** frontend/src/routes/settings/+page.svelte (L627-628)
```text
                <span class="feature-name">批量转换</span>
                <span class="feature-desc">一次转换多个 Markdown 文件为 PDF</span>
```

**File:** frontend/src/routes/settings/+page.svelte (L631-632)
```text
                <span class="feature-name">拖放导入</span>
                <span class="feature-desc">拖拽文件到窗口即可打开或批量导入</span>
```

**File:** frontend/src/routes/settings/+page.svelte (L635-636)
```text
                <span class="feature-name">社区模板</span>
                <span class="feature-desc">浏览和安装第三方社区模板</span>
```

**File:** frontend/src/routes/settings/+page.svelte (L643-644)
```text
                <span class="shortcut-action">打开文件</span>
                <span class="shortcut-keys"><kbd>{mod}</kbd><kbd>O</kbd></span>
```

**File:** frontend/src/routes/settings/+page.svelte (L647-648)
```text
                <span class="shortcut-action">导出 PDF</span>
                <span class="shortcut-keys"><kbd>{mod}</kbd><kbd>E</kbd></span>
```

**File:** frontend/src/routes/settings/+page.svelte (L651-652)
```text
                <span class="shortcut-action">打开设置</span>
                <span class="shortcut-keys"><kbd>{mod}</kbd><kbd>,</kbd></span>
```

**File:** frontend/src/routes/settings/+page.svelte (L655-656)
```text
                <span class="shortcut-action">模板管理</span>
                <span class="shortcut-keys"><kbd>{mod}</kbd><kbd>⇧</kbd><kbd>T</kbd></span>
```

**File:** frontend/src/routes/settings/+page.svelte (L659-660)
```text
                <span class="shortcut-action">搜索 / 替换</span>
                <span class="shortcut-keys"><kbd>{mod}</kbd><kbd>F</kbd></span>
```

**File:** frontend/src/routes/settings/+page.svelte (L663-664)
```text
                <span class="shortcut-action">撤销</span>
                <span class="shortcut-keys"><kbd>{mod}</kbd><kbd>Z</kbd></span>
```

**File:** frontend/src/routes/settings/+page.svelte (L667-668)
```text
                <span class="shortcut-action">重做</span>
                <span class="shortcut-keys"><kbd>{mod}</kbd><kbd>⇧</kbd><kbd>Z</kbd></span>
```

**File:** frontend/src/routes/settings/+page.svelte (L738-738)
```text
                <span class="about-value">MIT License</span>
```

**File:** frontend/src/routes/batch/+page.svelte (L595-596)
```text
          <p class="drop-title">拖拽文件到此处</p>
          <p class="drop-hint">支持 .md .markdown .txt 文件和包含文档与模板的 .zip 包</p>
```

**File:** cmd/presto-desktop/main.go (L128-141)
```go
func (a *App) OpenFiles() ([]OpenFilesItem, error) {
	paths, err := wailsRuntime.OpenMultipleFilesDialog(a.ctx, wailsRuntime.OpenDialogOptions{
		Title: "打开文件",
		Filters: []wailsRuntime.FileFilter{
			{DisplayName: "支持的文件", Pattern: "*.md;*.markdown;*.txt;*.zip"},
		},
	})
	if err != nil {
		return nil, err
	}
	if len(paths) == 0 {
		return nil, nil
	}
	return a.readFilePaths(paths), nil
```

**File:** frontend/src/lib/components/wizard/wizard-definitions.ts (L28-133)
```typescript
export const WIZARD_POINTS: WizardPointDef[] = [
  // ── Tier 1: First-visit essentials (on-mount with staggered delays) ──

  {
    id: 'template-selector',
    trigger: 'on-mount',
    anchorSelector: '.template-select',
    position: 'bottom',
    title: '选择模板',
    body: '在这里切换文档模板，不同模板适用于不同类型的文档。',
    route: '/',
    triggerDelay: 1500,
  },
  {
    id: 'export-pdf',
    trigger: 'on-mount',
    anchorSelector: '.btn-export',
    position: 'bottom',
    title: '导出 PDF',
    body: '编辑完成后，点击此按钮将文档导出为 PDF 文件。',
    shortcut: '⌘E',
    route: '/',
    triggerDelay: 8000,
  },
  {
    id: 'default-document',
    trigger: 'on-mount',
    anchorSelector: '.preview-container',
    position: 'left',
    title: '模板示例',
    body: '右侧显示的是当前模板的示例文档。在左侧编辑器中输入你的 Markdown 内容，预览会实时更新。',
    route: '/',
    triggerDelay: 15000,
  },
  {
    id: 'shortcuts-overview',
    trigger: 'on-mount',
    anchorSelector: '.toolbar',
    position: 'bottom',
    title: '常用快捷键',
    body: '熟悉这些快捷键可以大幅提升效率。',
    shortcut: '⌘O 打开 · ⌘E 导出 · ⌘F 查找 · ⌘Z 撤销',
    route: '/',
    triggerDelay: 22000,
  },

  // ── Tier 2: Idle-triggered contextual hints ──

  {
    id: 'batch-mode',
    trigger: 'on-idle',
    anchorSelector: '.toolbar',
    position: 'bottom',
    title: '批量转换',
    body: '需要一次转换多个文件？访问设置页面了解批量转换功能。',
    idleSeconds: 120,
    route: '/',
  },

  // ── Tier 2: First-action triggers (activated by components) ──

  {
    id: 'image-path',
    trigger: 'on-action',
    anchorSelector: '.editor-container',
    position: 'top',
    title: '图片路径',
    body: '使用 ![描述](路径) 插入图片。通过 ⌘O 打开文件后路径相对于文件目录，直接编辑时请使用绝对路径。',
    route: '/',
  },
  {
    id: 'image-error',
    trigger: 'on-action',
    anchorSelector: '.error-msg',
    position: 'bottom',
    title: '图片加载失败？',
    body: '请检查图片路径是否正确。通过 ⌘O 打开 .md 文件后，图片路径相对于文件所在目录；直接在编辑器中输入时，需要使用绝对路径。',
    route: '/',
  },

  // ── Navigate-triggered hints ──

  {
    id: 'settings-shortcut',
    trigger: 'on-navigate',
    anchorSelector: '.page-header',
    position: 'bottom',
    title: '快速打开设置',
    body: '下次可以直接用快捷键打开设置页面。',
    shortcut: '⌘,',
    route: '/settings',
    triggerDelay: 2000,
  },

  // ── State-change triggered (called explicitly) ──

  {
    id: 'community-template-toggle',
    trigger: 'on-action',
    anchorSelector: '.nav-divider',
    position: 'right',
    title: '模板管理已解锁',
    body: '侧栏新增了「模板管理」和「模板搜索」，点击即可浏览和安装第三方模板。',
    route: '/settings',
  },
];
```
