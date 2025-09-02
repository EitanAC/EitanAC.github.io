# Mizuki - 个人博客网站

一个基于 Astro 构建的现代化个人博客网站，支持多语言、深色模式、响应式设计等特性。

## ✨ 特性

- 🚀 **基于 Astro** - 快速的静态站点生成器
- 🌍 **多语言支持** - 支持中文、英文等多种语言
- 🌙 **深色模式** - 自动适应系统主题偏好
- 📱 **响应式设计** - 完美适配各种设备
- 🔍 **全文搜索** - 基于 Pagefind 的快速搜索
- 📊 **内容管理** - 支持 Markdown 和 LaTeX 数学公式
- 🎨 **主题定制** - 可自定义颜色主题和布局
- 📈 **性能优化** - 图片优化、代码分割等

## 📝 最新文章

### 🐋 跟踪巨鲸的市场冲击行为的动量量化策略

我们最新发布了一篇关于量化交易策略的深度文章，探讨了如何通过跟踪巨鲸钱包行为来构建动量交易策略。

**文章亮点：**
- 📊 完整的数学模型和LaTeX公式支持
- 💻 实用的Python代码实现
- 📈 详细的回测结果分析
- ⚠️ 全面的风险控制机制
- 🔬 基于学术研究的策略设计

**技术特色：**
- 支持复杂的LaTeX数学公式渲染
- 包含代码高亮和语法高亮
- 响应式表格和图表展示
- 完整的参考文献引用

[阅读全文 →](/posts/whale-tracking-momentum-strategy/)

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build/) v5.13.2
- **样式**: [Tailwind CSS](https://tailwindcss.com/) v3.4.17
- **语言**: [TypeScript](https://www.typescriptlang.org/) v5.9.2
- **数学公式**: [KaTeX](https://katex.org/) v0.16.22
- **搜索**: [Pagefind](https://pagefind.app/) v1.3.0
- **图标**: [Iconify](https://iconify.design/)
- **部署**: [Vercel](https://vercel.com/)

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- pnpm 9+

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```

## 📁 项目结构

```
src/
├── components/     # 可复用组件
├── content/        # 博客文章内容
├── layouts/        # 页面布局
├── pages/          # 页面路由
├── styles/         # 全局样式
├── utils/          # 工具函数
└── i18n/           # 国际化配置
```

## 🎨 自定义配置

### 主题颜色

在 `src/config.ts` 中修改 `themeColor.hue` 值来调整主题色。

### 侧边栏组件

在 `src/config.ts` 中配置 `sidebarLayoutConfig` 来自定义侧边栏组件。

### 国际化

在 `src/i18n/` 目录中添加新的语言文件。

## 📚 内容管理

### 创建新文章

```bash
pnpm new-post
```

### 文章格式

文章使用 Markdown 格式，支持：

- LaTeX 数学公式
- 代码高亮
- 图片和视频
- 表格和图表
- 自定义组件

### LaTeX 支持

项目已配置完整的 LaTeX 支持：

- 行内公式：`$E = mc^2$`
- 块级公式：`$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$`
- 复杂数学表达式
- 矩阵和方程组

## 🌐 部署

### Vercel 部署

项目已配置 Vercel 部署，推送到 GitHub 主分支即可自动部署。

### 其他平台

项目支持部署到任何静态托管平台：

- Netlify
- GitHub Pages
- Cloudflare Pages
- 自建服务器

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。

## 🔗 相关链接

- [在线演示](https://eitanac.github.io)
- [Astro 文档](https://docs.astro.build/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [KaTeX 文档](https://katex.org/docs/)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！