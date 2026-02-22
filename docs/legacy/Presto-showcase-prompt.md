# Presto Showcase 构建与同步指令

> 本文用于指导 Presto 仓库 AI 配置 showcase 的静态构建和自动同步到 Homepage 仓库。

---

## 你需要做的事

在 Presto 仓库中创建一个 GitHub Actions workflow，将 `/showcase/*` 路由构建为静态文件并触发 Homepage 仓库同步。

---

## 前提条件

Showcase 路由已经实现并可以在 `npm run dev` 下访问：

```
/showcase/editor-gongwen
/showcase/editor-jiaoan
/showcase/batch
/showcase/templates
/showcase/drop
/showcase/hero
/showcase/editor          ← 动态加载版（支持 ?registry=xxx 参数）
```

---

## 第一步：确保 adapter-static 配置正确

SvelteKit 的 `svelte.config.js` 需要使用 `@sveltejs/adapter-static`：

```js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      base: ''
    },
    prerender: {
      entries: [
        '/showcase/editor-gongwen',
        '/showcase/editor-jiaoan',
        '/showcase/batch',
        '/showcase/templates',
        '/showcase/drop',
        '/showcase/hero',
        '/showcase/editor'
      ]
    }
  }
};
```

确保只预渲染 `/showcase/*` 路由。桌面应用的其他路由不需要预渲染。

---

## 第二步：创建 GitHub Actions workflow

创建 `.github/workflows/build-showcase.yml`：

```yaml
name: Build Showcase

on:
  push:
    branches: [main]
    paths:
      - 'frontend/src/routes/showcase/**'
      - 'frontend/src/lib/showcase/**'
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: frontend/package-lock.json

      - name: Install dependencies
        working-directory: frontend
        run: npm ci

      - name: Build static showcase
        working-directory: frontend
        run: npm run build

      - name: Extract showcase files
        run: |
          mkdir -p showcase-output
          cp -r frontend/build/showcase/* showcase-output/
          # 同时复制 SvelteKit 的运行时资源
          if [ -d "frontend/build/_app" ]; then
            cp -r frontend/build/_app showcase-output/_app
          fi

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: showcase-static
          path: showcase-output
          retention-days: 30

      - name: Trigger Homepage sync
        uses: peter-evans/repository-dispatch@v3
        with:
          token: ${{ secrets.HOMEPAGE_DISPATCH_TOKEN }}
          repository: Presto-io/Presto-Homepage
          event-type: showcase-updated
```

---

## 第三步：配置 Secrets

在 Presto 仓库的 Settings → Secrets → Actions 中添加：

- `HOMEPAGE_DISPATCH_TOKEN`：一个有 `repo` 权限的 GitHub Personal Access Token，用于触发 Homepage 仓库的 workflow

---

## 同步流程

```
Presto 仓库 push 到 main（showcase 文件有变更）
  → build-showcase.yml 触发
  → 构建静态文件，上传 artifact
  → repository_dispatch 触发 Homepage 的 sync-showcase.yml
  → Homepage 下载 artifact，复制到 public/showcase/，自动 commit + push
  → Vercel 检测到 push，自动重新部署
```

---

## 本地手动同步（开发阶段）

在等 CI 配好之前，可以手动同步：

```bash
# 在 Presto 仓库
cd frontend && npm run build

# 复制到 Homepage 仓库
cp -r build/showcase/* /path/to/Presto-Homepage/public/showcase/

# 如果有 _app 运行时资源
cp -r build/_app /path/to/Presto-Homepage/public/showcase/_app
```

---

## 关键注意事项

1. **只构建 showcase 路由**——不要预渲染 Presto 桌面应用的其他页面
2. **SvelteKit 运行时资源**（`_app/` 目录）必须一起复制，否则 JS/CSS 加载不到
3. **showcase 页面的资源引用路径**必须是相对路径或以 `/showcase/` 开头，不能引用 `/` 根路径的资源（因为在 Homepage 中根路径是 Homepage 自己的内容）
4. **如果 SvelteKit 的资源路径有问题**，可以在 `svelte.config.js` 中设置 `paths.base: '/showcase'`，这样所有资源引用都会以 `/showcase/` 为前缀
