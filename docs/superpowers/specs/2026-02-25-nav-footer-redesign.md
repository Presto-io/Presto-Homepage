# 导航条胶囊化 + Footer 精简

## 背景

当前首页导航条是全宽 fixed 横条，与页面大量使用的圆角卡片风格不协调。此外存在几个体验问题：Coming Soon 弹窗超出屏幕、Footer 过长。

## 设计目标

1. 导航条改为居中浮动胶囊，大胶囊套小胶囊
2. 滚动后缩小为迷你胶囊
3. Coming Soon 弹窗改为向下弹出
4. Footer 精简

## 1. 导航条：胶囊化

### 外层大胶囊

- 不再全宽，改为居中浮动的胶囊容器
- `border-radius: var(--radius)`（55px），与页面卡片一致
- 保持现有 `backdrop-filter: blur(20px) saturate(180%)` 和半透明背景
- `border: 1px solid var(--nav-border)`
- 水平居中，`top: 12px`，左右留白

### 内层小胶囊（导航项）

- 每个 nav-link 是一个小胶囊，`border-radius: 999px`
- 磁吸指示器保持现有渐变背景填充效果，形状改为 `border-radius: 999px`
- 风格与当前网站一致，不使用发光/Liquid Glass 效果

### 布局

大胶囊内部：logo（左）| 导航项（居中）| 语言切换 + GitHub（右）

### 滚动行为

- **初始状态**：完整大胶囊，包含 logo + 导航项 + 操作按钮
- **滚动后**：缩小为迷你胶囊
  - logo 和操作按钮隐藏（opacity: 0 + width 收缩）
  - 只保留导航项
  - padding 和整体尺寸缩小
  - 过渡动画：`0.4s cubic-bezier(0.4, 0, 0.2, 1)`

### CSS 变量调整

```
--nav-bg: 保持不变（rgba 半透明）
--header-height: 不再需要（胶囊高度由内容决定）
```

页面 `padding-top` 不再需要 `var(--header-height)`，因为胶囊浮在内容上方（absolute/fixed + top offset）。Hero 区域需要调整顶部间距。

## 2. Coming Soon 弹窗

- 方向从 `bottom: calc(100% + 8px)` 改为 `top: calc(100% + 8px)`
- 箭头从底部改为顶部
- 其余样式不变

## 3. Footer 精简

### 当前结构
```
grid: 品牌列 | 两列链接
底部版权行
```

### 新结构
```
单行：logo + tagline | 关键链接（水平排列）| 版权
```

- 去掉列标题（"产品"、"资源"）
- 链接水平排列，用分隔符或间距区分
- 减少 padding：`2rem 0 1.5rem`
- 保持响应式：移动端堆叠为垂直布局

## 4. 移动端适配

- 胶囊导航在移动端（<=768px）：只显示 logo + hamburger，胶囊宽度适配
- 移动端 overlay 菜单保持不变
- Footer 移动端：垂直堆叠，居中对齐

## 涉及文件

- `src/components/Header.astro` — 导航条重构（HTML + CSS + JS）
- `src/components/Footer.astro` — Footer 精简
- `src/styles/global.css` — 移除/调整 header-height 相关变量
- `src/components/Hero.astro` — 调整顶部间距
- `src/pages/templates/index.astro` — 调整 padding-top
- `src/pages/developers/index.astro` — 调整 padding-top（如果有）

## 验证

1. `npm run build` 无报错
2. 桌面端：胶囊导航居中浮动，滚动后缩小为迷你胶囊
3. 移动端：hamburger 正常，overlay 菜单正常
4. Coming Soon 弹窗向下弹出，不超出屏幕
5. Footer 精简为单行式
6. 深色/浅色模式均正常
