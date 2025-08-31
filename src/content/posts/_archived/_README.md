# 归档文件夹

这个文件夹包含了已归档的文章，用于参考和学习。

## 文件夹说明

- 以下划线 `_` 开头的文件夹名称会被 Astro 忽略，不会在网站中显示
- 这些文章仍然保存在这里，方便您需要时参考

## 环境变量控制

### 本地开发环境
- 在 `.env` 文件中设置 `SHOW_ARCHIVED_POSTS=true`
- 这样您可以在本地开发时看到归档的文章

### 生产环境
- 在 `.env.production` 文件中设置 `SHOW_ARCHIVED_POSTS=false`
- 这样其他人访问您的网站时看不到归档的文章

### 控制机制
- 当 `SHOW_ARCHIVED_POSTS=true` 时，归档文章会显示在网站中
- 当 `SHOW_ARCHIVED_POSTS=false` 时，归档文章会被隐藏
- 默认情况下，归档文章是隐藏的

## 归档的文章列表

### 单文件文章
- `markdown-tutorial.md` - Markdown 教程示例
- `markdown-extended.md` - Markdown 扩展功能示例
- `markdown-mermaid.md` - Mermaid 图表示例
- `video.md` - 视频嵌入示例
- `draft.md` - 草稿文章示例

### 文件夹文章
- `guide/` - Mizuki 主题使用指南
- `bestimageapi/` - Best Image API 项目介绍

## 如何恢复文章

如果需要恢复某篇文章到主目录：

1. 将文件从 `_archived/` 移动到 `src/content/posts/`
2. 重新构建项目：`npm run build`

## 如何添加新文章到归档

1. 将文章移动到 `_archived/` 文件夹
2. 更新此 README 文件，添加新文章的说明

## 环境变量配置示例

### 本地开发 (.env)
```
SHOW_ARCHIVED_POSTS=true
```

### 生产环境 (.env.production)
```
SHOW_ARCHIVED_POSTS=false
```

---

*最后更新：2025-01-20* 