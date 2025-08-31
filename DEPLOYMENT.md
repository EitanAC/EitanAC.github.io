# 部署说明

## 环境变量配置

### 本地开发环境
在项目根目录创建 `.env` 文件：
```
SHOW_ARCHIVED_POSTS=true
```

### 生产环境
在项目根目录创建 `.env.production` 文件：
```
SHOW_ARCHIVED_POSTS=false
```

## 归档文章控制

### 功能说明
- 归档的文章存储在 `src/content/posts/_archived/` 文件夹中
- 通过环境变量 `SHOW_ARCHIVED_POSTS` 控制是否显示归档文章
- 本地开发时设置为 `true`，可以看到归档文章进行参考
- 生产环境设置为 `false`，其他人访问时看不到归档文章

### 部署平台配置

#### Vercel
在 Vercel 项目设置中添加环境变量：
- 名称：`SHOW_ARCHIVED_POSTS`
- 值：`false`

#### Netlify
在 Netlify 项目设置中添加环境变量：
- 名称：`SHOW_ARCHIVED_POSTS`
- 值：`false`

#### GitHub Pages
由于 GitHub Pages 不支持环境变量，归档文章将默认隐藏。

#### 其他平台
根据具体平台的文档配置环境变量。

## 文件结构

```
src/content/posts/
├── _archived/           # 归档文件夹（以下划线开头）
│   ├── _README.md      # 归档说明文档
│   ├── markdown-tutorial.md
│   ├── markdown-extended.md
│   ├── markdown-mermaid.md
│   ├── video.md
│   ├── draft.md
│   ├── guide/
│   └── bestimageapi/
└── my-complex-post/     # 当前显示的文章
    └── index0.md
```

## 注意事项

1. `.env` 和 `.env.production` 文件已被 `.gitignore` 忽略，不会提交到版本控制
2. 归档文件夹以下划线开头，Astro 会忽略这些文件夹
3. 环境变量配置在 `astro.config.mjs` 和 `src/content/config.ts` 中
4. 修改环境变量后需要重新构建项目

---

*最后更新：2025-01-20* 