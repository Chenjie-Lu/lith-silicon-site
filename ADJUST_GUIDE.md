# 锂硅新能网站 — 调整指南

## 项目位置
`D:/S-Skills/wechat-obsidian/lith-silicon-site/`

## 快速启动

```bash
cd D:/S-Skills/wechat-obsidian/lith-silicon-site
npm run dev
# 访问 http://localhost:4321
```

## 文件结构

```
src/
├── layouts/
│   ├── BaseLayout.astro  ← 全局样式、字体、动画
│   └── Layout.astro      ← 导航栏、页脚
├── pages/
│   ├── index.astro       ← 首页
│   ├── services.astro    ← 服务页
│   ├── blog/
│   │   ├── index.astro   ← 博客列表
│   │   └── [slug].astro  ← 博客文章
│   ├── about.astro       ← 关于页
│   ├── contact.astro     ← 联系页
│   └── 404.astro         ← 404页面
├── utils/
│   └── site.ts           ← 所有文字内容（中英文）
└── data/
    └── blog-posts.ts     ← 博客文章内容
```

## 如何修改内容

### 1. 修改文字（最常见）
编辑 `src/utils/site.ts` 中的 `translations` 对象：

```typescript
zh: {
  'hero.title': '你的新标题',
  'hero.subtitle': '你的新副标题',
  // ...
}
```

### 2. 修改首页布局
编辑 `src/pages/index.astro`

### 3. 添加新博客文章
编辑 `src/data/blog-posts.ts`，添加新文章对象

### 4. 修改导航栏
编辑 `src/layouts/Layout.astro`

### 5. 修改全局样式
编辑 `src/layouts/BaseLayout.astro` 中的 `<style>` 部分

## 常用 Tailwind 类名

| 效果 | 类名 |
|------|------|
| 大标题 | `text-5xl font-bold text-white` |
| 渐变文字 | `bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent` |
| 卡片悬停 | `hover-lift` (已在 BaseLayout 定义) |
| 毛玻璃 | `backdrop-blur-xl bg-slate-900/80` |
| 发光按钮 | `hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]` |
| 动画延迟 | `animate-delay-1` 到 `animate-delay-5` |

## 部署

### 预览
```bash
npm run dev
```

### 构建
```bash
npm run build
# 输出到 dist/ 目录
```

### 部署到 Vercel
```bash
npx vercel
```

## 注意事项
1. 修改后保存文件，开发服务器会自动刷新
2. 如果端口被占用，Astro 会自动尝试下一个端口
3. 使用 VS Code 编辑 .astro 文件，安装 Astro 插件获得语法高亮
4. Tailwind CSS 类名在浏览器中会实时预览
