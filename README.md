# 鹭白生信工作室官网

> 静态多页面网站，面向中国大陆高校科研人员与临床医生。

## 技术栈

- **框架**: 纯静态 HTML5 + 原生 JavaScript
- **样式**: Tailwind CSS (CDN)
- **字体**: 系统字体栈（PingFang SC / Microsoft YaHei / Noto Sans SC）
- **图标**: Heroicons SVG 内联
- **无构建依赖**: 直接部署

## 工程规范

- [x] W3C HTML5 语义化标签
- [x] WCAG 2.1 AA 无障碍支持（键盘导航、焦点管理、跳链、对比度）
- [x] SEO：完整 meta 标签、Open Graph、Twitter Cards、Schema.org 结构化数据
- [x] `robots.txt` + `sitemap.xml`
- [x] `prefers-reduced-motion` 支持
- [x] 打印样式优化
- [x] 中文排版：`lang="zh-CN"`

## 文件结构

```
.
├── index.html              # 首页
├── about.html              # 关于我们
├── services.html           # 核心服务
├── cases.html              # 合作成果
├── contact.html            # 联系我们
├── favicon.ico             # 站点图标
├── robots.txt              # 搜索引擎爬虫规则
├── sitemap.xml             # 站点地图
├── README.md               # 本文件
├── CONTENT.md              # 内容清单模板
└── assets/
    ├── css/
    │   └── style.css       # 自定义样式
    ├── js/
    │   └── main.js         # 交互逻辑（菜单、平滑滚动）
    ├── images/
    │   ├── egret_logo.webp       # Logo
    │   ├── egret_logo.png
    │   ├── wechat_qr_code.webp   # 微信二维码
    │   ├── wechat_qr_code.jpg
    │   ├── wechat_group_qr_code.webp  # 微信群二维码
    │   └── wechat_group_qr_code.jpg
    └── icons/              # 图标资源（预留）
```

## 本地预览

```bash
python3 -m http.server 8080
# 访问 http://localhost:8080
```

## 部署说明

### 推荐方案：GitHub + Cloudflare Pages

1. **推送代码**: 将本仓库推送到 GitHub
2. **Cloudflare Pages**: 在 Cloudflare Dashboard 中绑定 GitHub 仓库，选择自动部署
3. **自定义域名**: 在 Cloudflare Pages 设置中绑定 `www.milimaili.com`
4. **HTTPS**: Cloudflare 自动提供 SSL 证书
5. **提交收录**:
   - [百度搜索资源平台](https://ziyuan.baidu.com/)
   - [必应 Webmaster](https://www.bing.com/webmasters/)
   - [Google Search Console](https://search.google.com/search-console)

### 备选方案：双 CDN 分流

| 流量来源 | 服务商 | 用途 |
|---------|--------|------|
| 中国大陆 | DNSPod + 腾讯云 COS / 阿里云 OSS | 国内加速 |
| 海外 | Cloudflare Pages | 全球 + 源站 |

## 分析与SEO工具集成

### Google Search Console

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加属性（网址前缀）：`https://www.milimaili.com/`
3. 选择 **HTML 标记** 验证方式，复制 `content` 值
4. 替换所有 HTML 页面中 `google-site-verification` meta 标签的 `YOUR_GOOGLE_VERIFICATION_CODE`
5. 验证成功后，进入 **Sitemaps** 提交：`https://www.milimaili.com/sitemap.xml`

### Cloudflare Web Analytics（推荐）

> 与 Cloudflare Pages 原生集成，完全免费，无需 Cookie 横幅，性能零损耗。

当前已在所有页面集成：
```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

**启用方式：**
1. 在 [Cloudflare Dashboard](https://dash.cloudflare.com/) → 你的域名 → **Speed** → **Optimization** → **Cloudflare Web Analytics**
2. 复制站点对应的 **Beacon Token**
3. 替换所有 HTML 页面中 `YOUR_CLOUDFLARE_BEACON_TOKEN` 为真实 Token
4. 重新部署后即可在 Dashboard 查看访问数据

**特性：**
- 无客户端 Cookie，无需隐私同意弹窗
- 不影响页面加载性能（`defer` 异步加载）
- 支持核心 Web 指标（Core Web Vitals）监控
- 与 Cloudflare Pages 部署流程无缝衔接

## 待填充内容

以下信息需替换为真实内容后上线：

- [ ] 联系邮箱（`jason_tang1@hotmail.com` → 如需更换）
- [ ] 微信号（如需在页面展示）
- [ ] 表单后端（当前为邮箱+微信，如需接入 Formspree / 金数据 / 腾讯问卷等）
- [ ] 隐私政策、服务条款页面链接
- [ ] 合作机构信息（如需要）
- [ ] 更多发表记录与案例（持续更新）

## 维护

内容更新直接修改对应 `.html` 文件即可，无需重新构建。图片资源更新请替换 `assets/images/` 下对应文件。
