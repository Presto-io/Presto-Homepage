# Presto Homepage

> 组织级规则见 `docs/ai-guide.md`
> 本仓库 `docs/` 目录是 Presto-io 组织的文档中心

Presto 官网，部署在 Vercel。

## 技术栈

- Astro 5（纯静态站点生成器，compressHTML 启用）
- 零前端框架（纯 Astro 组件 + 内联 vanilla JS）
- 自定义 CSS（CSS 变量 + `prefers-color-scheme` 暗色模式）
- 系统字体栈（无外部字体依赖）
- 模板商店页面通过 iframe 嵌入 Presto 的 `/showcase/store-templates`

## 项目结构

```
src/
  components/     ← Astro 组件（Header, Hero, Features, Showcase, Download, Footer）
  layouts/        ← Layout.astro（全局 HTML 壳）
  pages/          ← 路由（index.astro, templates/）
  styles/         ← global.css
public/           ← 静态资源（favicon, icons, screenshots）
assets/           ← 源素材（非直接服务）
docs/             ← 组织级文档中心（ai-guide、specs、context、CONVENTIONS）
```

## 开发命令

```bash
npm run dev       # 本地开发服务器
npm run build     # 构建静态站点到 dist/
npm run preview   # 预览构建产物
```

## 关键约定

- 双语系统：所有文本用 `<span class="zh">` + `<span class="en">` 包裹，通过 CSS 切换
- 暗色模式：`@media (prefers-color-scheme: dark)` 自动切换，不需要 JS
- 截图命名：`{scene}-{theme}.png`（如 `editor-light.png`）
- 响应式断点：1024px, 900px, 768px, 640px, 560px, 480px
- 滚动动画：IntersectionObserver + `.animate-on-scroll` class

## 架构决策

- Showcase 区域通过 iframe 嵌入 Presto 应用的 `/showcase/*` 路由（真实 UI 组件，非截图）
- 模板商店（`/templates`）通过 iframe 嵌入 Presto 的 `/showcase/store-templates`，商店 UI 由 Presto 仓库维护
- Coming Soon 导航项（Plugins, Agent Skills）为灰色不可点击按钮
