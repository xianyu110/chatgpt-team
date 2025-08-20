# ChatGPT Team 自动充值系统 - GitHub Pages

## 项目简介

这是一个专业的ChatGPT Team自动充值系统宣传页面，基于GitHub Pages构建。页面采用现代化设计，完全响应式布局，为用户提供清晰的服务介绍和使用指南。

## 功能特点

- 🎨 **现代化设计** - 采用渐变色彩和卡片式布局
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ⚡ **交互体验** - 平滑滚动、悬停效果、复制功能
- 🔧 **易于维护** - 清晰的代码结构和注释
- 🚀 **性能优化** - 防抖处理、懒加载动画

## 文件结构

```
chatgpt-team-promo/
├── index.html          # 主页面文件
├── style.css           # 样式文件
├── script.js           # JavaScript交互文件
└── README.md           # 项目说明文档
```

## 部署到GitHub Pages

### 方法一：通过GitHub网页界面

1. 在GitHub上创建新仓库
2. 上传所有文件到仓库
3. 进入仓库设置 → Pages
4. 选择 "Deploy from a branch"
5. 选择 "main" 分支和 "/ (root)" 文件夹
6. 点击 "Save" 保存设置

### 方法二：通过命令行

```bash
# 初始化Git仓库
git init

# 添加文件
git add .

# 提交更改
git commit -m "Initial commit: ChatGPT Team充值系统宣传页面"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/your-username/chatgpt-team-promo.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

## 自定义配置

### 修改价格信息

在 `index.html` 中找到价格部分：

```html
<div class="price">
    <span class="currency">¥</span>
    <span class="amount">XX</span>  <!-- 修改这里的价格 -->
    <span class="period">/月</span>
</div>
```

### 修改联系信息

在 `index.html` 中找到联系部分：

```html
<div class="contact-text">
    <h4>邮箱联系</h4>
    <p>support@example.com</p>  <!-- 修改为实际邮箱 -->
</div>
```

### 修改充值链接

当前充值链接指向：`https://team.xychatai.com/`

如需修改，请在 `index.html` 中搜索并替换所有相关链接。

## 技术栈

- **HTML5** - 语义化标签和现代HTML特性
- **CSS3** - Flexbox、Grid、动画和响应式设计
- **JavaScript ES6+** - 现代JavaScript特性和API
- **GitHub Pages** - 静态网站托管服务

## 浏览器兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ 移动端浏览器

## SEO优化

页面已包含以下SEO优化：

- Meta标签优化（description、keywords）
- 语义化HTML结构
- 响应式设计
- 快速加载性能
- 结构化数据标记

## 性能优化

- 防抖滚动事件处理
- 懒加载动画效果
- CSS动画硬件加速
- 图片使用SVG和Emoji减少加载
- 最小化HTTP请求

## 重要声明

⚠️ **本系统为无质保服务，介意勿拍！**

本宣传页面仅用于展示服务信息，实际充值服务由第三方提供。使用前请仔细阅读服务条款。

## 许可证

MIT License - 详见 LICENSE 文件

## 更新日志

### v1.0.0 (2024-01-XX)
- 初始版本发布
- 完整的响应式设计
- 基础交互功能
- SEO优化

---

**访问地址：** https://your-username.github.io/chatgpt-team-promo/

**充值地址：** https://team.xychatai.com/ 