# 导航条胶囊化 + Footer 精简 Implementation Plan

> **For Claude:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将全宽 fixed 导航条改为居中浮动胶囊（大胶囊套小胶囊），滚动后缩小为迷你胶囊；修复 Coming Soon 弹窗方向；精简 Footer。

**Architecture:** Header 从全宽横条改为居中浮动胶囊容器，内部导航项为小胶囊。滚动时 logo 和操作按钮收起，胶囊缩小。Footer 从 grid 两列改为单行水平布局。保持现有视觉风格（backdrop-filter blur、渐变指示器、暗色模式）。

**Tech Stack:** Astro 组件、CSS（变量 + prefers-color-scheme）、vanilla JS

---

## Chunk 1: Header 胶囊化

### Task 1: 重构 Header HTML 结构

**Files:**
- Modify: `src/components/Header.astro:15-80`

- [ ] **Step 1: 修改 header 外壳为胶囊容器**

将 `<header>` 从全宽改为居中浮动胶囊。`.header-inner` 不再需要 max-width 约束（胶囊本身就是有限宽度）。

```html
<header class="header" id="site-header">
  <div class="header-capsule">
    <!-- Logo -->
    <a class="logo" href="/">
      <img src="/icons/icon-192x192.png" alt="Presto" width="28" height="28" class="logo-icon" />
      <span class="logo-text">Presto</span>
    </a>

    <!-- Center Navigation with magnetic indicator -->
    <nav class="nav" id="desktop-nav">
      <div class="nav-indicator" id="nav-indicator" aria-hidden="true"></div>
      {navItems.map(...)} <!-- 保持不变 -->
    </nav>

    <!-- Right Actions -->
    <div class="header-actions">
      <!-- 保持不变：lang-toggle, github-link, hamburger -->
    </div>
  </div>
</header>
```

关键变化：`.header-inner` → `.header-capsule`

- [ ] **Step 2: 验证 HTML 结构**

Run: `npm run build`
Expected: 构建成功，无报错

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.astro
git commit -m "refactor: 重命名 header-inner 为 header-capsule"
```

### Task 2: 重写 Header CSS — 胶囊外壳

**Files:**
- Modify: `src/components/Header.astro` (CSS section)

- [ ] **Step 1: 修改 .header 样式**

从全宽 fixed 改为居中浮动：

```css
.header {
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: auto;
  max-width: calc(100% - 2rem);
  pointer-events: none; /* 让胶囊外的区域可点击 */
}

.header-capsule {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.375rem 0.375rem 1rem;
  border-radius: var(--radius);
  background: var(--nav-bg);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--nav-border);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: auto;
}
```

- [ ] **Step 2: 修改 .nav 和 .nav-link 样式**

导航不再 absolute 居中（因为在 flex 容器内自然居中）：

```css
.nav {
  display: flex;
  gap: 0.125rem;
  position: relative;
  margin: 0 auto; /* flex 内居中 */
}

.nav-link {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  padding: 0.375rem 0.75rem;
  border-radius: 999px; /* 小胶囊 */
  position: relative;
  z-index: 1;
  white-space: nowrap;
  transition: color 0.2s ease, transform 0.15s ease;
}

.nav-indicator {
  position: absolute;
  border-radius: 999px; /* 匹配小胶囊 */
  /* 其余保持不变 */
}
```

- [ ] **Step 3: 修改 logo 和 actions 样式**

Logo 和 actions 需要支持滚动时收起：

```css
.logo, .header-actions {
  transition: opacity 0.3s ease, max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s ease;
  overflow: hidden;
  white-space: nowrap;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  max-width: 120px;
  opacity: 1;
}

.header.is-scrolled .logo,
.header.is-scrolled .header-actions {
  max-width: 0;
  opacity: 0;
  padding: 0;
  margin: 0;
}
```

- [ ] **Step 4: 修改滚动后迷你胶囊样式**

```css
.header.is-scrolled .header-capsule {
  padding: 0.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.04);
}
```

- [ ] **Step 5: 暗色模式调整**

```css
@media (prefers-color-scheme: dark) {
  .header-capsule {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  .header.is-scrolled .header-capsule {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2);
  }
}
```

- [ ] **Step 6: 验证构建**

Run: `npm run build`
Expected: 构建成功

- [ ] **Step 7: Commit**

```bash
git add src/components/Header.astro
git commit -m "style: 导航条改为居中浮动胶囊样式"
```

### Task 3: 修改 Header JS — 滚动行为

**Files:**
- Modify: `src/components/Header.astro` (script section)

- [ ] **Step 1: 更新滚动处理逻辑**

滚动逻辑保持 `.is-scrolled` class 切换，但不再改变 height（胶囊高度由内容决定）：

```javascript
// 滚动处理 — 只切换 class，不改 height
const header = document.getElementById('site-header');
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 10;
  header.classList.toggle('is-scrolled', scrolled);
  lastScrollY = window.scrollY;
}, { passive: true });
```

- [ ] **Step 2: 更新磁吸指示器逻辑**

指示器计算方式不变，但需要确保相对于 `.nav` 容器定位正确（不再是 absolute 居中的 nav）。

- [ ] **Step 3: 验证构建**

Run: `npm run build`
Expected: 构建成功

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: 更新滚动行为适配胶囊导航"
```

### Task 4: 修复 Coming Soon 弹窗方向

**Files:**
- Modify: `src/components/Header.astro` (CSS section)

- [ ] **Step 1: 将弹窗从向上改为向下**

找到 `.coming-soon-tip` 样式，将 `bottom: calc(100% + 8px)` 改为 `top: calc(100% + 8px)`，箭头从底部改为顶部：

```css
.coming-soon-tip {
  position: absolute;
  top: calc(100% + 8px); /* 改为向下弹出 */
  left: 50%;
  transform: translateX(-50%);
  /* 其余保持不变 */
}

.coming-soon-tip::after {
  content: '';
  position: absolute;
  bottom: 100%; /* 箭头在顶部 */
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-bottom-color: #1e293b; /* 箭头指向上方 */
}
```

- [ ] **Step 2: 验证构建**

Run: `npm run build`
Expected: 构建成功

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.astro
git commit -m "fix: Coming Soon 弹窗改为向下弹出"
```

### Task 5: 移动端适配

**Files:**
- Modify: `src/components/Header.astro` (CSS section)

- [ ] **Step 1: 移动端胶囊样式**

```css
@media (max-width: 768px) {
  .header {
    top: 8px;
    max-width: calc(100% - 1.5rem);
  }
  .header-capsule {
    padding: 0.25rem 0.25rem 0.25rem 0.75rem;
  }
  .nav { display: none; }
  .github-link { display: none; }
  .hamburger { display: flex; }
  /* 滚动时不隐藏 logo 和 actions（移动端需要 hamburger） */
  .header.is-scrolled .logo,
  .header.is-scrolled .header-actions {
    max-width: none;
    opacity: 1;
    padding: initial;
  }
}
```

- [ ] **Step 2: 验证构建**

Run: `npm run build`
Expected: 构建成功

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.astro
git commit -m "style: 移动端胶囊导航适配"
```

## Chunk 2: 页面间距调整 + Footer 精简

### Task 6: 调整页面顶部间距

**Files:**
- Modify: `src/components/Hero.astro:83` — padding-top
- Modify: `src/pages/templates/index.astro:22-23,35-36` — padding-top
- Modify: `src/pages/developers/index.astro:627` — padding-top

胶囊导航浮在内容上方，不再占据文档流。但仍需要足够的顶部间距避免内容被遮挡。

- [ ] **Step 1: 调整 Hero 顶部间距**

Hero 的 padding-top 保持使用 header-height 变量（胶囊虽然浮动，但仍需要间距）：

```css
/* Hero.astro line 83 */
padding-top: calc(var(--header-height) + 2rem);
/* 移动端 line 83 保持 */
padding-top: calc(var(--header-height-mobile) + 3rem);
```

- [ ] **Step 2: 调整 templates 页面间距**

```css
/* templates/index.astro */
.store-page {
  padding-top: calc(var(--header-height) + 1rem);
  height: calc(100vh - var(--header-height) - 1rem);
}
@media (max-width: 768px) {
  .store-page {
    padding-top: calc(var(--header-height-mobile) + 0.5rem);
    height: calc(100vh - var(--header-height-mobile) - 0.5rem);
  }
}
```

- [ ] **Step 3: 调整 developers 页面间距**

developers 页面的 padding-top 类似处理。

- [ ] **Step 4: 验证构建**

Run: `npm run build`
Expected: 构建成功

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.astro src/pages/templates/index.astro src/pages/developers/index.astro
git commit -m "style: 调整页面顶部间距适配浮动胶囊导航"
```

### Task 7: 精简 Footer

**Files:**
- Modify: `src/components/Footer.astro` (全文重写)

- [ ] **Step 1: 重写 Footer HTML 为单行布局**

```html
<footer class="footer">
  <div class="container footer-inner">
    <a class="footer-logo" href="/">
      <img src="/icons/favicon-32x32.png" alt="Presto" width="20" height="20" />
      <span>Presto</span>
    </a>
    <nav class="footer-links">
      <a href="/#features"><span class="zh">功能</span><span class="en">Features</span></a>
      <a href="/templates"><span class="zh">模板</span><span class="en">Templates</span></a>
      <a href="/developers"><span class="zh">开发者</span><span class="en">Developers</span></a>
      <a href="https://github.com/Presto-io/Presto" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://github.com/Presto-io/Presto/releases" target="_blank" rel="noopener noreferrer"><span class="zh">更新日志</span><span class="en">Changelog</span></a>
    </nav>
    <p class="footer-copy">&copy; {currentYear} Presto · MIT</p>
  </div>
</footer>
```

- [ ] **Step 2: 重写 Footer CSS**

```css
.footer {
  border-top: 1px solid var(--color-border);
  padding: 1.5rem 0;
}
.footer-inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-weight: 700;
  font-size: 0.875rem;
  white-space: nowrap;
}
.footer-logo img { border-radius: 4px; }
.footer-links {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  flex: 1;
}
.footer-links a {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
  white-space: nowrap;
  transition: color 0.2s ease;
}
.footer-links a:hover { color: var(--color-accent); }
.footer-copy {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  white-space: nowrap;
  margin-left: auto;
}
@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .footer-copy { margin-left: 0; }
}
```

- [ ] **Step 3: 验证构建**

Run: `npm run build`
Expected: 构建成功

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.astro
git commit -m "style: 精简 Footer 为单行布局"
```

### Task 8: 最终验证

- [ ] **Step 1: 完整构建**

Run: `npm run build`
Expected: 3 pages built, no errors

- [ ] **Step 2: 视觉验证清单**

Run: `npm run preview`

检查项：
- 桌面端：胶囊导航居中浮动，圆角与页面卡片一致
- 桌面端：滚动后 logo 和操作按钮收起，胶囊缩小为迷你版
- 桌面端：磁吸指示器在小胶囊上正常工作
- 桌面端：Coming Soon 弹窗向下弹出
- 移动端：胶囊只显示 logo + hamburger
- 移动端：overlay 菜单正常打开/关闭
- Footer：单行布局，简洁
- 深色模式：所有元素正常显示
- `/templates` 页面：间距正常
- `/developers` 页面：间距正常
