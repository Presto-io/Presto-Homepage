# Presto 待讨论话题

以下话题已识别但尚未展开讨论，留待后续推进。

## 1. 模板初始化脚手架仓库

- 为模板开发者提供 `create-presto-template` 脚手架工具
- 包含：Go 项目结构、manifest.json 模板、example.md 模板、CI 配置（自动构建 + 发布 Release）
- 需要定义模板开发者的最小开发环境要求（Go toolchain、Typst CLI）
- 考虑是否提供非 Go 的模板开发方式（如纯 Typst 模板，由统一的 runner 二进制加载）

## 2. 模板签名验证详细设计

- 当前方案：GitHub 身份 + SHA256（方案 A）
- 后期可选：cosign / sigstore 签名（方案 B）
- 需要设计：签名流程、验证流程、密钥管理、吊销机制
- 商店页面的签名状态展示（绿色对勾 vs 哈希字符串）
- Typst 的安全边界：`#read()` 文件访问、`#plugin()` WASM 加载的风险评估

## 3. 字体缺失检测的客户端实现

- Typst CLI `typst fonts` 命令列出可用字体
- 对比 manifest.json 的 requiredFonts 列表
- 缺失字体的提示 UI 和下载引导
- 开源字体自动下载 vs 商业字体手动引导
- 浏览器端：Local Font Access API（Chrome/Edge，用户手动触发）

## 4. Agent Skills 具体架构

- 目标：AI 根据模板的 frontmatterSchema 自动改写原始文稿
- 需要定义：AI 的输入输出协议、与模板系统的集成方式
- frontmatterSchema 作为 AI 的"接口文档"
- 用户体验：一键"AI 适配模板" vs 逐步引导
- 降低新用户上手门槛

## 5. 插件系统设计

- 插件与模板的区别：插件扩展 Presto 功能，模板定义排版样式
- 插件的能力边界（能做什么、不能做什么）
- 插件的分发机制（是否复用模板的 registry 模式）
- 插件的安全模型（比模板更严格，因为插件可能有更多权限）
- 插件商店页面（复用模板商店的 UI 框架）
