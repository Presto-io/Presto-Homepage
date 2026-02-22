# Homepage AI 提示词（模板商店 + Showcase 集成）

> 本提示词配合 `Presto-architecture.md` 使用。架构文档包含完整的设计决策和上下文，本文只包含你需要执行的具体任务。

---

## 你的任务

在 Presto Homepage（Astro 静态站）中完成以下工作：

1. 将 Showcase 区域的静态截图替换为 iframe 嵌入的 Presto 真实 UI
2. 构建模板商店页面（`/templates`）
3. 更新首页导航

**请先完整阅读 `Presto-architecture.md`，理解所有设计决策后再开始编码。**

---

## 实施清单

### 第一步：添加 Svelte 支持

```bash
npx astro add svelte
```

这会安装 `@astrojs/svelte` 和 `svelte`，并更新 `astro.config.mjs`。

### 第二步：更新 Showcase 组件

修改 `src/components/Showcase.astro`，将每个 slide 的静态截图 `<img>` 替换为 iframe：

```html
<iframe
  src="https://app.presto.dev/showcase/editor-gongwen"
  loading="lazy"
  sandbox="allow-scripts allow-same-origin"
  class="showcase-iframe"
></iframe>
```

Slide 与 iframe 路由的映射：

| Slide | iframe src |
|---|---|
| 编辑器 - 公文 | `/showcase/editor-gongwen` |
| 编辑器 - 教案 | `/showcase/editor-jiaoan` |
| 批量转换 | `/showcase/batch` |
| 模板管理 | `/showcase/templates` |
| 拖入文件 | `/showcase/drop` |

iframe 样式要点：
- `border: none; border-radius: var(--radius-lg);`
- 宽高比与当前截图一致
- 非 active slide 的 iframe 可以用 `loading="lazy"` 延迟加载
- 保留现有的 active/inactive slide 的 opacity 和 saturate 效果

### 第三步：更新 Hero 组件

修改 `src/components/Hero.astro`，将静态截图替换为 Hero showcase iframe：

```html
<div class="hero-image hero-anim" style="animation-delay: 0.4s">
  <iframe
    src="https://app.presto.dev/showcase/hero"
    class="hero-iframe"
    loading="eager"
  ></iframe>
</div>
```

保留现有的 `drop-shadow` 和 hover `translateY(-4px)` 效果。

### 第四步：构建模板商店页面

创建 `src/pages/templates/index.astro`：

```astro
---
import Layout from '../../layouts/Layout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import TemplateStore from '../../components/TemplateStore.svelte';

const registryUrl = 'https://presto-io.github.io/template-registry/registry.json';
---
<Layout title="模板商店 - Presto">
  <Header />
  <main>
    <TemplateStore client:load {registryUrl} />
  </main>
  <Footer />
</Layout>
```

### 第五步：TemplateStore Svelte 组件

创建 `src/components/TemplateStore.svelte`，实现 Obsidian 风格 master-detail 布局：

**左侧面板**：
- 搜索框（实时过滤模板名称和描述）
- 分类 chips（从 registry.json 的 categories 渲染，空分类不显示）
- 关键词 chips（从当前分类下的模板聚合 keywords）
- 可滚动的模板卡片列表
- 每张卡片：模板名称、描述摘要、版本、作者、信任标识（官方/已验证/社区）

**右侧面板**（选中模板后显示）：
- 模板名称 + 信任标识
- 分类和关键词 chips
- 版本、作者、许可证
- Live Preview iframe：`/showcase/editor?registry={name}`
  - 可拖拽分割线、可滚动、可选中文本、不可编辑
- README 渲染（从 registry fetch `templates/{name}/README.md`，markdown → HTML）
- frontmatterSchema 展示（支持的元数据字段列表）
- 所需字体列表 + "检测本地字体"按钮
  - 使用 Local Font Access API（Chrome/Edge）
  - 用户手动点击触发，不自动请求权限
  - 不支持的浏览器显示字体列表 + 下载链接
- 仓库链接、兼容版本、SHA256

**交互**：
- 点击卡片 → 右侧显示详情，左侧高亮选中
- 返回时保持左侧列表滚动位置（记录 scrollTop，恢复时 `tick().then()`）
- URL 用 `history.replaceState` 同步（`/templates?id=gongwen`）
- 支持直链分享

**数据获取**：
- 组件 mount 时 fetch `registryUrl`（registry.json）
- 选中模板后 fetch `templates/{name}/manifest.json` 和 `README.md`

### 第六步：更新 Header 导航

修改 `src/components/Header.astro`：

1. 添加 "Templates" 导航链接（指向 `/templates`）
2. 添加 "Plugins" 和 "Agent Skills" 灰色按钮：
   - 视觉：灰色文字、降低 opacity
   - 不可点击（`pointer-events: none` 或 `cursor: default`）
   - hover 显示 tooltip "即将推出" / "Coming Soon"
3. 导航顺序：Features → Showcase → Templates → Plugins (coming soon) → Agent Skills (coming soon) → Download
4. 移动端汉堡菜单同步更新

### 第七步：双语支持

所有新增文本都需要双语：

```html
<span class="zh">模板商店</span>
<span class="en">Templates</span>
```

模板商店页面的 UI 文本（搜索框 placeholder、"检测本地字体"按钮、"所需字体"标题等）都需要中英文版本。

---

## 关键原则

1. **商店页面是唯一使用 Svelte 的地方**，其他页面保持纯 Astro + vanilla JS
2. **数据全部来自静态 JSON**，不直接调用 GitHub API
3. **iframe 的 src 地址**在开发阶段可以先用 placeholder 或本地 mock，等 Presto 的 showcase 模块部署后再替换为真实 URL
4. **保持现有设计风格**：CSS 变量、glassmorphism header、渐变按钮、动画等与现有组件一致
