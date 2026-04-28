# 鹭白生信工作室官网

> 静态单页着陆站，面向中国大陆高校科研人员与临床医生。

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
├── index.html          # 主页面（含所有区块）
├── script.js           # 交互逻辑（菜单、平滑滚动、导航高亮）
├── robots.txt          # 搜索引擎爬虫规则
├── sitemap.xml         # 站点地图
├── CONTENT.md          # 内容清单模板
└── README.md           # 本文件
```

## 本地预览

```bash
python3 -m http.server 8080
# 访问 http://localhost:8080
```

## 部署说明

### 推荐方案：双 CDN 分流

| 流量来源 | 服务商 | 用途 |
|---------|--------|------|
| 中国大陆 | DNSPod + 腾讯云 COS / 阿里云 OSS | 国内加速 |
| 海外 | Cloudflare Pages | 全球 + 源站 |

### 步骤

1. **源站**: 上传本目录所有文件至 Cloudflare Pages（或 GitHub Pages）
2. **域名**: 在 DNSPod 配置智能解析，国内线路 CNAME 至腾讯云 CDN，默认线路 CNAME 至 Cloudflare
3. **HTTPS**: 在 Cloudflare 和腾讯云分别配置 SSL 证书
4. **提交收录**:
   - [百度搜索资源平台](https://ziyuan.baidu.com/)
   - [必应 Webmaster](https://www.bing.com/webmasters/)
   - [Google Search Console](https://search.google.com/search-console)

## 待填充内容

以下信息需替换为真实内容后上线：

- [ ] 联系邮箱（`contact@egret-bio.com` → 真实邮箱）
- [ ] 微信号（`EgretBio` → 真实微信号）
- [ ] 表单后端（当前为占位提示，需接入 Formspree / 金数据 / 腾讯问卷等）
- [ ] 隐私政策、服务条款页面链接
- [ ] 合作机构信息（如需要）
- [ ] 更多发表记录与案例（持续更新）

## 维护

内容更新直接修改 `index.html` 中对应区块即可，无需重新构建。
