# 锂硅新能 — LiSi Energy

锂离子电池硅碳负极材料技术顾问网站。

## 技术栈

- **Astro 7** — 静态站点框架
- **TypeScript** — 类型安全
- **CSS** — 原生样式，无框架依赖
- **Vercel** — 免费部署

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 预览
npm run preview
```

## 项目结构

```
src/
├── layouts/
│   ├── BaseLayout.astro   # 基础布局（样式、动画）
│   └── Layout.astro       # 导航布局
├── pages/
│   ├── index.astro        # 首页
│   ├── services.astro     # 服务页
│   ├── blog/
│   │   ├── index.astro    # 博客列表
│   │   └── [slug].astro   # 博客文章
│   ├── about.astro        # 关于页
│   ├── contact.astro      # 联系页
│   └── 404.astro          # 404页
├── i18n/
│   ├── translations.ts    # 翻译文本
│   └── index.ts           # i18n 工具
├── utils/
│   └── site.ts            # 站点数据与工具
└── types.ts               # TypeScript 类型
```

## 多语言支持

网站支持中英双语，通过 URL 参数切换：
- `/?lang=zh` — 中文
- `/?lang=en` — 英文

## 内容管理

### 添加新文章

编辑 `src/utils/site.ts` 中的 `blogPosts` 数组，然后在 `src/pages/blog/[slug].astro` 中添加文章数据。

### 更新服务

编辑 `src/utils/site.ts` 中的 `services` 数组。

## 部署

### Vercel（推荐）

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署
vercel
```

## 后续优化

- [ ] 接入 Notion CMS 自动同步文章
- [ ] 添加 Giscus 评论系统
- [ ] 添加站内搜索功能
- [ ] 优化 SEO 元数据
- [ ] 添加 RSS 订阅
- [ ] 购买自定义域名
