# Presto 主应用 — AI 开发提示词

> 本文件是 `Presto-io/Presto` 仓库的 CLAUDE.md 补充内容。
> 将以下内容追加到现有 CLAUDE.md 末尾，或作为独立任务提示词使用。

---

## 任务：模板商店重构 + 统一布局

### 背景

Presto 软件内的"模板搜索"功能需要重构为完整的"模板商店"页面，数据源从 GitHub API 改为静态 registry JSON。同时需要统一所有页面的左侧导航宽度为 180px，并修复 GitHub Release 安装流程的 bug。

### 共享规范

- 扩展生态规范：`extension-spec.md`（manifest.json schema、registry.json schema、二进制协议、平台矩阵、命名规范）
- 架构设计：`Presto-architecture.md`（系统全景、各模块设计）
- Registry CDN 域名：`https://presto.c-1o.top`

---

## 变更清单

### 1. 统一左侧宽度为 180px

**文件：** `frontend/src/routes/settings/+page.svelte`

将 `.settings-nav` 的 `width` 从 `140px` 改为 `180px`。

```css
/* 改前 */
.settings-nav { width: 140px; }
/* 改后 */
.settings-nav { width: 180px; }
```

批量转换页 `.template-nav` 已经是 180px，不需要改。

### 2. 设置页导航变更

**文件：** `frontend/src/routes/settings/+page.svelte`

1. `panelTabs` 中 `tpl-search` 改名：
   - `id`: `'tpl-store'`
   - `label`: `'模板商店'`
   - `icon`: 可改为 `ShoppingBag` 或保持 `Search`

2. 点击 `tpl-store` tab 时，不再设置 `activePanel`，而是导航：
   ```typescript
   import { goto } from '$app/navigation';
   // 点击"模板商店"时
   goto('/store');
   ```

3. 删除原有 `tpl-search` panel 的所有代码：
   - `loadBrowse()` 函数
   - `available: GitHubRepo[]` 状态
   - `discoverTemplates()` 调用
   - `tpl-search` panel 的 HTML/CSS
   - 安装按钮相关的 `installTemplate(owner, repo)` 调用（安装逻辑移到商店页面）

4. `tpl-manage` panel 保留不变（管理已安装模板）

### 3. 新建商店路由

**新文件：** `frontend/src/routes/store/+page.svelte`

通用商店页面组件，将来 `/plugins` 和 `/agent-skills` 路由复用。

#### 3.1 数据源

前端直接 fetch registry JSON，不经过后端：

```typescript
const REGISTRY_URL = 'https://presto.c-1o.top/templates/registry.json';
```

#### 3.2 状态管理

```typescript
let registry = $state<Registry | null>(null);
let loading = $state(true);
let error = $state<string | null>(null);
let searchQuery = $state('');
let activeCategory = $state<string | null>(null);
let selectedId = $state<string | null>(null);
```

#### 3.3 两种视图

**卡片网格视图**（`selectedId === null`）：
- CSS Grid: `grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))`
- 每张卡片：名称 + 信任标识 + 描述（2 行截断）+ 版本/作者
- 点击卡片 → `selectedId = template.name`

**Master-Detail 视图**（`selectedId !== null`）：
- 左侧 `.store-nav`：`width: 180px; flex-shrink: 0;`
  - 紧凑列表项（模板名称 + 小信任标识点）
  - 选中项高亮（accent 背景）
  - 可滚动
- 右侧 `.store-detail`：`flex: 1; overflow-y: auto;`
  - 桌面端（检测 `window.go` 存在）：`max-width: 600px`
  - 网页端：不设 max-width，自适应
- 间距：`gap: var(--space-xl)` (24px)

#### 3.4 详情面板内容

1. 模板名称 + 信任标识（大号）
2. 描述文本
3. 关键词 chips
4. 元数据行（版本 · 作者 · 许可证）
5. **实时预览 iframe**：
   ```html
   <iframe
     src="/showcase/editor?registry={selectedTemplate.name}"
     sandbox="allow-scripts allow-same-origin"
     loading="lazy"
   />
   ```
   包裹在 `aspect-ratio: 3/2` 容器中
6. README 渲染（从 registry CDN fetch `{name}/README.md`）
7. frontmatterSchema 展示
8. 所需字体列表
9. 仓库链接
10. **安装按钮**：
    - 从 `repository` URL 提取 owner/repo
    - 调用现有 `installTemplate(owner, repo)` API
    - 已安装 → 显示"已安装 ✓"（与 `templateStore.templates` 对比）
    - 安装中 → loading 状态

#### 3.5 搜索与筛选

- 搜索匹配：`displayName`、`name`、`description`、`keywords`
- 分类 chips 从 `registry.categories` 生成
- "全部" chip 始终在最前
- 大小写不敏感

#### 3.6 信任标识

```typescript
const trustBadge = {
  official: { label: '官方', cls: 'trust-official', color: '#3b82f6' },
  verified: { label: '已验证', cls: 'trust-verified', color: '#22c55e' },
  community: { label: '社区', cls: 'trust-community' },
};
```

#### 3.7 页面外层

遵循现有 `.page` 模式：

```css
.page {
  padding: var(--space-xl);
  padding-top: 48px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
```

工具栏包含返回按钮（`goto('/settings')`）+ 页面标题。

### 4. 新增类型定义

**文件：** `frontend/src/lib/api/types.ts`

```typescript
export interface RegistryCategory {
  id: string;
  label: { zh: string; en: string };
}

export interface RegistryTemplate {
  name: string;
  displayName: string;
  description: string;
  version: string;
  author: string;
  category: string;
  keywords: string[];
  license: string;
  trust: 'official' | 'verified' | 'community';
  publishedAt: string;
  repository: string;
}

export interface Registry {
  version: number;
  updatedAt: string;
  categories: RegistryCategory[];
  templates: RegistryTemplate[];
}
```

### 5. Registry Store

**新文件：** `frontend/src/lib/stores/registry.svelte.ts`

```typescript
import type { Registry } from '$lib/api/types';

const REGISTRY_URL = 'https://presto.c-1o.top/templates/registry.json';

let _registry = $state<Registry | null>(null);
let _loading = $state(false);
let _error = $state<string | null>(null);

export const registryStore = {
  get registry() { return _registry; },
  get loading() { return _loading; },
  get error() { return _error; },

  async load(force = false) {
    if (_registry && !force) return;
    _loading = true;
    _error = null;
    try {
      const res = await fetch(REGISTRY_URL);
      if (!res.ok) throw new Error(`${res.status}`);
      _registry = await res.json();
    } catch (e) {
      _error = e instanceof Error ? e.message : String(e);
    } finally {
      _loading = false;
    }
  },

  async refresh() { return this.load(true); },
};
```

### 6. 修复 GitHub Release 安装流程

**文件：** `internal/template/github.go` → `Manager.Install()`

当前 bug：下载二进制后未运行 `--manifest`，未正确命名，导致 `Manager.List()` 无法发现。

修复步骤（参考 `internal/api/import.go` 的完整实现）：

1. 下载二进制到临时文件
2. 设置执行权限 `0755`
3. 运行 `./binary --manifest` → 解析得到 manifest
4. 创建 `~/.presto/templates/{manifest.Name}/` 目录
5. 将二进制移动并重命名为 `presto-template-{manifest.Name}`
6. 将 manifest JSON 写入 `manifest.json`

```go
// 伪代码
tmpBinary := downloadToTemp(assetURL)
os.Chmod(tmpBinary, 0755)

executor := NewExecutor(tmpBinary)
manifestBytes, err := executor.GetManifest()
manifest, err := ParseManifest(manifestBytes)

tplDir := filepath.Join(m.TemplatesDir, manifest.Name)
os.MkdirAll(tplDir, 0755)

binaryName := fmt.Sprintf("presto-template-%s", manifest.Name)
if runtime.GOOS == "windows" { binaryName += ".exe" }

os.Rename(tmpBinary, filepath.Join(tplDir, binaryName))
os.WriteFile(filepath.Join(tplDir, "manifest.json"), manifestBytes, 0644)
```

### 7. API 客户端适配

**文件：** `frontend/src/lib/api/client.ts`

安装函数需适配从 registry 安装：

```typescript
export function installFromRegistry(template: RegistryTemplate): Promise<void> {
  const url = new URL(template.repository);
  const parts = url.pathname.slice(1).split('/');
  const owner = parts[0];
  const repo = parts[1];
  return installTemplate(owner, repo);
}
```

`discoverTemplates()` 函数可保留但标记为 deprecated，前端不再调用。

---

## 验证方案

1. `npm run dev` 启动前端
2. 设置 → 确认左侧导航宽度为 180px
3. 启用社区模板 → 确认"模板商店"tab 可见
4. 点击"模板商店" → 确认跳转到 `/store`
5. 验证卡片网格正确加载（需要 presto.c-1o.top 可访问，或本地 mock）
6. 点击卡片 → 验证 master-detail 视图
7. 验证搜索/分类筛选
8. 验证实时预览 iframe 加载
9. 验证安装流程（需要后端运行）
10. 验证"返回设置"导航
11. 批量转换页确认 180px 未受影响

---

## 注意事项

- 使用 Presto 的 CSS 变量（`--color-*`, `--space-*`, `--radius-*`），不要硬编码颜色
- 遵循 Svelte 5 runes 语法（`$state`, `$derived`, `$effect`, `$props`）
- 不新增响应式断点（桌面端应用，不需要移动适配）
- 桌面/网页差异通过 `window.go` 检测，不用 media query
- `.page` 外层结构与设置页/批量页一致
- 完成任务后立即 commit，消息用中文，不要自动 push
