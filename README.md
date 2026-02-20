# Presto Homepage

Presto 官网，基于 [Astro](https://astro.build) 构建。

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

## 相关链接

- [Presto 主仓库](https://github.com/Presto-io/Presto)

## License

MIT
