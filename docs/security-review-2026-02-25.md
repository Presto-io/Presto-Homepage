# Presto Homepage 安全审查报告

- **日期**: 2026-02-25
- **审查范围**: 全部源码（src/、public/、根目录配置）
- **总体评估**: 低风险

## 发现的问题

| 级别 | 问题 | 位置 |
|------|------|------|
| **MEDIUM** | Hero iframe 缺少 `sandbox` 属性 | `src/components/Hero.astro:52-57` |
| **MEDIUM** | 未配置任何安全响应头（CSP, HSTS, X-Frame-Options 等） | `vercel.json` |
| **LOW** | `innerHTML` 保存/恢复模式（当前安全，但模式脆弱） | `src/components/Download.astro:165-167` |
| **LOW** | `set:html` 绕过 Astro 转义（当前仅用于硬编码字符串） | `src/pages/developers/index.astro:261,349` |
| **INFO** | `allow-scripts allow-same-origin` 组合对同源 iframe 实际上无沙箱效果 | `src/components/Showcase.astro:100` |
| **INFO** | `.vscode/` 和 `.claude/` 未被 `.gitignore` 排除 | `.gitignore` |

## 详细说明

### 1. Hero iframe 缺少 sandbox（MEDIUM）

其他 iframe 都有 `sandbox="allow-scripts allow-same-origin"`，唯独 Hero 的没有。建议补上以保持一致性。没有 sandbox 的 iframe 可以通过 `window.parent` 访问父页面 DOM。

### 2. 缺少安全响应头（MEDIUM）

当前 `vercel.json` 仅配置了 `cleanUrls`。建议添加：

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

> 注：由于大量使用 inline script，完整的 CSP 需要使用 `'unsafe-inline'` 或迁移到 nonce-based 方案，可以后续迭代。

### 3. innerHTML 模式（LOW）

`Download.astro` 的复制按钮用 `btn.innerHTML` 保存和恢复内容。当前源是静态模板所以安全，但建议改用 `textContent` 或预存变量避免潜在风险。

### 4. set:html 指令（LOW）

`developers/index.astro` 中有两处 `set:html` 用法，绕过 Astro 默认 HTML 转义。当前仅用于硬编码字符串字面量，无 XSS 风险。如果未来引入动态内容，需要确保对输入进行消毒处理。

### 5. iframe sandbox 组合（INFO）

`allow-scripts` + `allow-same-origin` 的组合允许同源 iframe 移除自身的 sandbox 限制。由于 iframe 内容均为同源的受控静态文件（`public/showcase/`），实际风险可忽略。

### 6. .gitignore 补充（INFO）

`.vscode/` 和 `.claude/` 目录当前未被 `.gitignore` 排除，可能被意外提交。建议添加到 `.gitignore`。

## 安全亮点

- **零外部脚本/CDN 依赖**：无供应链风险
- **仅 2 个 npm 依赖**（astro + typescript），`npm audit` 零漏洞
- **无危险 API 使用**：未发现任何危险的动态代码执行 API
- **无用户输入处理**：无 URL 参数读取、无 postMessage 监听
- **无密钥/凭证泄露**：未发现硬编码 API key、token、password
- **无表单/数据提交**：纯展示性静态站点
- **无环境变量使用**：所有值均为硬编码
- **外部链接安全**：所有 `target="_blank"` 链接均使用 `rel="noopener noreferrer"`

## 检查项清单

- [x] 无硬编码密钥/凭证
- [x] 无 SQL 注入风险（无数据库）
- [x] 无 XSS 风险（无用户输入处理）
- [x] 无 CSRF 风险（无表单提交）
- [x] 依赖项无已知漏洞
- [x] .env 文件已在 .gitignore 中
- [ ] 安全响应头配置（待修复）
- [ ] Hero iframe sandbox 属性（待修复）
- [ ] .gitignore 补充 .vscode/ 和 .claude/（待修复）
