# 锂硅新能网站 — Decap CMS 后台部署指南

## 已完成

- ✅ 安装了 Decap CMS
- ✅ 创建了 `/admin` 管理后台页面
- ✅ 配置了博客管理功能
- ✅ 构建成功（9 个页面）

## 待完成：GitHub OAuth 配置（5 分钟）

### 步骤 1：创建 GitHub OAuth App

1. 打开 https://github.com/settings/apps/new
2. 填写：
   - **Application name**: `LiSi Energy CMS`
   - **Homepage URL**: `https://lith-silicon.vercel.app`
   - **Authorization callback URL**: `https://lith-silicon.vercel.app/oauth/callback`
3. 点击 "Register application"
4. 复制 **Client ID** 和 **Client Secret**

### 步骤 2：配置环境变量

在 Vercel 项目设置中添加：
```
OAUTH_GITHUB_CLIENT_ID=<你的 Client ID>
OAUTH_GITHUB_CLIENT_SECRET=<你的 Client Secret>
```

### 步骤 3：部署到 Vercel

```bash
cd D:/S-Skills/wechat-obsidian/lith-silicon-site
npx vercel --prod
```

---

## 使用后台

部署后访问：
- 网站：https://lith-silicon.vercel.app
- 后台：https://lith-silicon.vercel.app/admin

---

## 后台功能

登录后可以管理：
- **博客文章** — 新增/编辑/删除文章
- **博客列表** — 查看所有文章
- **上传文件** — 通过 GitHub 上传到 `public/uploads`

---

## 注意事项

1. 博客文章内容存储在 `content/blog/*.mdx` 文件中
2. 每次在后台修改文章会自动推送到 GitHub
3. Vercel 会自动重新构建网站
