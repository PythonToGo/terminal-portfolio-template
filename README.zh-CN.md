# Terminal Portfolio Template

**语言:** [English](README.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [中文](README.zh-CN.md) | [Türkçe](README.tr.md)

---

这是一个**终端风格的个人主页**模板。使用纯静态站点实现：HTML、CSS 和 JavaScript。

您可以通过直接修改配置值，或使用内置的 **config generator** 来创建自己的页面。

<img width="1036" height="850" alt="image" src="https://github.com/user-attachments/assets/9d5c85f8-6b2d-438e-ac22-3578dbbbefc2" />

由 [**PythonToGo**](https://github.com/PythonToGo) 制作。

## 项目结构

```
.
├── index.html              # 主终端页面
├── terminal-config.js      # 用户配置（生成，可选）
├── js/
│   ├── main.js             # 命令处理、UI 逻辑
│   ├── commands.js         # 配置值、内容数组、命令列表
│   ├── ascii_banner.js     # ASCII 横幅字体与渲染
│   ├── github.js           # GitHub API – 获取 projects 的 repos
│   └── caret.js            # 打字模拟、光标
├── css/
│   ├── style_lila.css      # 默认主题
│   ├── style_midnight.css
│   ├── style_chocolate.css
│   ├── style_og.css         # original
│   ├── style_rainbow.css
│   ├── style_orange.css
│   ├── style_olive.css
│   └── style_bluescreen.css
└── generator/
    ├── index.html          # 配置生成器表单
    ├── main.js             # 表单逻辑、配置构建
    └── style.css           # 生成器样式
```

## 快速开始

1. 克隆本仓库或将其作为 GitHub 模板使用。
2. 在浏览器中打开 `index.html` 查看终端。
3. 通过以下两种方式之一进行自定义：
   - **方式 A – 直接编辑 `js/commands.js`** 或
   - **方式 B – 使用 generator 生成 `terminal-config.js`**（快速设置：[**前往 Config Generator**](https://pythontogo.github.io/terminal-portfolio-template/generator/) ）。

## 方式 A – 手动配置

打开 `js/commands.js` 并编辑顶部的值：

- `GITHUB_USERNAME`、`EMAIL_ADDRESS`
- `linkedin`、`github`、`blog`（空 = 在 links 中隐藏）
- `linksOthers` – 自定义链接 `{ "twitter": { name: "Twitter", url: "..." } }`
- `CLAUDE_OWNER_NAME`（来自 `profile.name`）
- `about`、`links`、`projects`、`help`、`welcomeMsg`、`banner`
- `themes` – 主题名 → CSS 路径
- `allCommands` – Tab 补全列表

> 这是最简单的模式，无需任何构建步骤。

## 方式 B – 使用 generator（推荐）

在浏览器中打开 `generator/index.html`（或使用托管版 generator）。

### Generator 表单区块

| 区块 | 字段 |
|------|------|
| **Profile** | 姓名、邮箱、GitHub 用户名、博客标题、简介/About 文本（可选） |
| **Links** | GitHub URL、LinkedIn URL（可选）、Blog URL（可选）、Others（可选：每行 `Name` 和 `URL`，用 `\|` 分隔） |
| **Theme** | 默认主题 |
| **Banner** | 横幅文本、横幅字体样式（block、dotted、light、minimal、shadow）、实时预览 |

### Config 输出

generator 生成 `window.TERMINAL_CONFIG`：

```js
{
  profile: { name, email, githubUsername, blogTitle },
  links: { github, linkedin?, blog?, others? },
  theme: { defaultTheme, bannerText, bannerFont },
  content: { aboutLines? }
}
```

### Config 使用说明

| Config 路径 | 用途 |
|-------------|------|
| `profile.name` | 横幅文本（当 `theme.bannerText` 为空时）、提示符、about 回退、`CLAUDE_OWNER_NAME` |
| `profile.email` | `email` 命令 |
| `profile.githubUsername` | GitHub 链接、projects 仓库列表 |
| `links.github` | `links` 表格、`github` 命令 |
| `links.linkedin` | `links` 表格、`linkedin` 命令（可选 – 为空时隐藏） |
| `links.blog` | `links` 表格（可选 – 为空时隐藏） |
| `links.others` | `links` 表格 + 自定义命令（如 `Twitter` → 输入 `twitter`） |
| `theme.defaultTheme` | 加载时的初始主题 |
| `theme.bannerText` | ASCII 横幅文本 |
| `theme.bannerFont` | 横幅样式：block、dotted、light、minimal、shadow |
| `content.aboutLines` | `about` 命令正文（可选 – 回退："Hi there, I am {Full Name}"） |

## 可用命令

| 命令 | 说明 |
|------|------|
| `help` | 命令列表 |
| `about` | 简介/About 文本 |
| `links` | GitHub、LinkedIn、博客、自定义链接 |
| `projects` | GitHub repos（通过 API） |
| `email` | 打开 mailto |
| `linkedin`、`github` | 打开 URL（linkedin 未配置时隐藏） |
| `theme ls` | 列出主题 |
| `theme set <name>` | 设置主题 |
| `theme random` | 随机主题 |
| `banner` | 显示 ASCII 横幅 |
| `clear` | 清空终端 |
| `history` | 命令历史 |
| `echo <text>` | 输出文本 |
| `ping <host>` | 模拟 ping |
| `explain`、`run`、`edit` | Claude 风格彩蛋 |
| `ls`、`cd` | 模拟文件列表 |
| `vi`、`vim`、`nvim`、`emacs` | 编辑器玩笑 |
| `sudo` | 权限拒绝 + 彩蛋 |

`links.others` 中的自定义链接会变成命令（如 `Twitter|https://...` → 输入 `twitter`）。

## 主题

- `lila`（默认）、`midnight`、`chocolate`、`og`（original）、`rainbow`、`orange`、`olive`、`bluescreen`

## ASCII 横幅

- **字体样式**：block、dotted、light、minimal、shadow
- **文本**：支持大小写
- **Config**：`theme.bannerText`（或 `profile.name`）、`theme.bannerFont`

## 脚本加载顺序（`index.html`）

1. `terminal-config.js`（可选）
2. `js/github.js`
3. `js/caret.js`
4. `js/ascii_banner.js`
5. `js/commands.js`
6. `js/main.js`

## 开发说明

- 无需构建工具；纯 HTML/CSS/JS。
- 本地测试：打开 `index.html` 或用静态服务器托管文件夹。
- GitHub Pages 开箱即用。

### GitHub Actions 工作流示例（GitHub Pages）

1. 创建 `.github/workflows/`
2. 添加 `pages.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Upload static files
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. 在仓库设置中启用 **Pages**，来源：**GitHub Actions**。

## 贡献

欢迎 Pull Request 和改进建议。

## 致谢

- 原始终端作品集与模板由 [**PythonToGo**](https://github.com/PythonToGo) 制作。
