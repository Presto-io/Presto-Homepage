# Presto Showcase 模块开发提示词

> 本提示词配合 `Presto-architecture.md` 使用。架构文档包含完整的设计决策和上下文，本文只包含你需要执行的具体任务。

---

## 你的任务

在 Presto 前端仓库内构建 Showcase 模块——一组专用路由，用真实 Svelte 组件渲染"半交互式"的软件界面，供官网通过 iframe 嵌入。

**请先完整阅读 `Presto-architecture.md` 的第二章（Showcase 模块）和第三章（模板系统架构），理解所有设计决策后再开始编码。**

---

## 实施清单

### 第一步：PrestoShell（showcase/+layout.svelte）

创建 `frontend/src/routes/showcase/+layout.svelte`，实现：

1. **事件拦截**：capture 阶段拦截 click/mousedown/keydown/contextmenu。通过白名单放行：
   - `.divider`（分割线拖拽）
   - `.keyword-chip`（关键词筛选）
   - `.batch-file-row`（批量文件拖拽）
   - `.cm-content` `.cm-scroller`（CodeMirror 文本选择和滚动）
   - `.preview-scroll`（预览面板滚动）
   - 其他所有事件：`preventDefault()` + `stopPropagation()`

2. **光标**：全局 `cursor: default`，可交互区域设对应光标

3. **主题**：继承 `prefers-color-scheme`

4. **视口**：固定尺寸渲染（1200×800），`transform: scale()` 适配

5. **隐藏全局 UI**：根 layout 的 toast/confirm dialog 在 showcase 模式下隐藏（通过 `$page.url.pathname.startsWith('/showcase')` 判断）

### 第二步：Mock 数据

创建 `frontend/src/lib/showcase/presets.ts`，包含：

```typescript
// 模板管理页 mock 数据
export const mockTemplates = [
  { name: '公文模板', author: 'Presto 官方', keywords: ['政务', '公文'], installed: true, builtin: true },
  { name: '教案模板（实操）', author: 'Presto 官方', keywords: ['教育', '教案'], installed: true, builtin: true },
  { name: '会议纪要', author: 'Presto 官方', keywords: ['办公', '会议'], installed: true, builtin: false },
  { name: '学术论文', author: '社区贡献', keywords: ['学术', '论文'], installed: true, builtin: false },
  { name: '个人简历', author: '社区贡献', keywords: ['求职', '简历'], installed: true, builtin: false },
  { name: '合同协议', author: '社区贡献', keywords: ['法务', '合同'], installed: true, builtin: false },
  { name: '周报模板', author: '社区贡献', keywords: ['办公', '汇报'], installed: true, builtin: false },
];

// 批量转换页 mock 数据
export const mockFiles = [
  { name: '第一季度工作总结.md', template: 'gongwen', autoDetected: true },
  { name: '五年级数学教案.md', template: 'jiaoan-shicao', autoDetected: true },
  { name: '产品需求文档.md', template: 'gongwen', autoDetected: false },
  { name: '家长通知书.md', template: 'jiaoan-shicao', autoDetected: true },
  { name: '部门预算报告.md', template: 'gongwen', autoDetected: false },
  { name: '实验报告.md', template: null, autoDetected: false },
];
```

SVG 文件：将 `assets/preview/` 下的 SVG 复制到 `frontend/src/lib/showcase/svg/`。

### 第三步：editor-gongwen 页面

创建 `frontend/src/routes/showcase/editor-gongwen/+page.svelte`：

- **复用**真实的 `Editor.svelte` 和 `Preview.svelte` 组件
- **复用**真实的 `+page.svelte` 的 split pane 布局逻辑（分割线拖拽、双向滚动同步、proximity-reveal 按钮）
- 左侧 CodeMirror：加载公文模板的 example.md 内容（运行 `./presto-template-gongwen --example` 获取，或从 `cmd/gongwen/example.md` 直接读取），设为 readOnly
- 右侧 Preview：加载 `gongwen-page-1.svg` 和 `gongwen-page-2.svg`
- 工具栏：模板名称显示为静态文本"类公文模板"（不用 TemplateSelector）
- 状态点：显示脉冲动画

### 第四步：editor-jiaoan 页面

同 editor-gongwen，换成教案模板的数据和 SVG。

### 第五步：batch 页面

复用 `batch/+page.svelte` 布局，使用 `mockFiles` 数据。保留文件拖拽分组、多选、拖拽手柄 hover。转换按钮可见但点击无效。

### 第六步：templates 页面

复用 `settings/+page.svelte` 模板管理面板布局，使用 `mockTemplates` 数据。关键词 chip 筛选正常工作。操作按钮可见但点击无效。

### 第七步：drop 页面

创建自动播放的文件拖入动画（详见架构文档 2.5 节 drop 部分）。循环播放。

### 第八步：hero 页面

创建打字动画页面（详见架构文档 2.5 节 hero 部分）。

**分帧 SVG 生成**：需要用 Typst CLI 编译 3-4 个中间帧。方法：
1. 运行 `./presto-template-gongwen --example` 获取完整 example.md
2. 截取不同长度版本（前 3 行、前 8 行、前 15 行）
3. 每个版本通过 `cat partial.md | ./presto-template-gongwen > output.typ && typst compile output.typ frame-N.svg`
4. 将生成的 SVG 放入 `frontend/src/lib/showcase/hero-frames/`

### 第九步：动态数据加载（模板商店集成）

为 showcase 编辑器页面添加 URL 参数支持：

```
/showcase/editor?registry=gongwen
```

当检测到 `registry` 参数时，从 registry CDN fetch 对应模板的 `example.md` 和 `preview-*.svg`，替代本地预置数据。这使 showcase 成为通用的模板预览引擎。

---

## 关键原则

1. **最大化复用**：showcase 页面应复用真实组件，不要重写。这样 Presto UI 更新时 showcase 自动跟着变。
2. **数据与逻辑分离**：所有 mock 数据集中在 `src/lib/showcase/`，页面组件只负责布局和交互。
3. **渐进实施**：每完成一个页面就可以通过 `npm run dev` → `http://localhost:5173/showcase/xxx` 预览。先确保 editor-gongwen 完全可用，再推进其他页面。
