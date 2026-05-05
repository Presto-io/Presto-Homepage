# Presto Homepage

Presto 官网，基于 [Astro](https://astro.build) 构建，支持 Netlify 与 Vercel 静态部署。

**Presto** 是一个 Markdown → PDF 文档转换平台，使用 Typst 排版引擎，支持桌面端（Wails）和 Web 端（Docker）两种部署模式。

## 项目结构

```text
src/
├── components/
│   ├── Header.astro      # 导航栏
│   ├── Hero.astro         # 首屏
│   ├── Features.astro     # 功能介绍
│   ├── Showcase.astro     # 产品展示
│   ├── Download.astro     # 下载引导
│   └── Footer.astro       # 页脚
├── layouts/
│   └── Layout.astro       # 全局布局
├── pages/
│   └── index.astro        # 首页
└── styles/
    └── global.css         # 全局样式
```

## 开发

```bash
npm install
npm run dev        # 启动开发服务器 localhost:4321
npm run build      # 构建生产版本到 ./dist/
npm run preview    # 本地预览构建产物
```

## 部署

### Netlify

仓库根目录包含 `netlify.toml`，Netlify 连接仓库后使用以下配置：

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: `22`

`/showcase/*` 会在 Netlify 上 rewrite 到对应的 `/showcase/*.html` 静态文件，用于保持官网 iframe 路径无后缀。

### Vercel

仓库根目录保留 `vercel.json`，用于 Vercel 的 clean URLs 与安全响应头配置。Vercel 会继续使用默认 Astro 静态构建流程。

## 相关链接

- [Presto 主仓库](https://github.com/Presto-io/Presto)

## License

MIT
