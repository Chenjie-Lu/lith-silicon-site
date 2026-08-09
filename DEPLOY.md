# 锂硅新能 — 部署指南

## 本地开发

```bash
cd D:/S-Skills/wechat-obsidian/lith-silicon-site
npm run dev
# 访问 http://localhost:4321
```

## 构建

```bash
npm run build
# 输出到 dist/ 目录
```

## 部署到 Vercel（免费）

### 方式一：Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 在项目目录部署
cd D:/S-Skills/wechat-obsidian/lith-silicon-site
vercel
```

### 方式二：GitHub + Vercel（推荐）

1. 创建 GitHub 仓库
2. 推送代码：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/lith-silicon-site.git
   git push -u origin main
   ```
3. 在 Vercel 导入项目，自动部署

### 方式三：手动上传

```bash
# 打包 dist 目录
cd dist
zip -r ../lith-silicon-site.zip .
# 上传到任意静态托管服务
```

## 自定义域名

1. 在 Vercel 控制台添加自定义域名
2. 配置 DNS 解析指向 Vercel
3. 网站访问：https://yourdomain.com

## 网站结构

```
/                    — 首页
/services            — 服务页面
/blog                — 博客列表
/blog/silicon-carbon-anode-development-trends-2026  — 博客文章
/about               — 关于页面
/contact             — 联系页面
/?lang=en            — 英文版
```

## 添加新文章

编辑 `src/data/blog-posts.ts`，添加新的文章对象。
