# 👨‍💻 Terminal Portfolio Template

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-success?style=flat-square&logo=github)](https://pythontogo.github.io/terminal-portfolio-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Read in:** [English](README.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [中文](README.zh-CN.md) | [Türkçe](README.tr.md)

---

这是一个轻量级的**终端风格个人主页模板**。它作为一个简单的静态网站构建，不需要任何复杂的构建工具：只需纯 HTML、CSS 和 JavaScript。

你可以将此仓库作为你自己作品集的**模板（Template）**，既可以通过手动修改几个配置值，也可以使用内置的**配置生成器（Config Generator）**来轻松定制。

[![Live Demo](https://img.shields.io/badge/🖥️_Live_Demo-2EA043?style=for-the-badge)](https://pythontogo.github.io/terminal-portfolio-template)

[![Config Generator](https://img.shields.io/badge/⚙️_Config_Generator-0052CC?style=for-the-badge)](https://pythontogo.github.io/terminal-portfolio-template/generator/)

## 👀 预览与演示 (Preview & Demo)

### 实时演示 (Live Demo)
> 💡 体验打字机动画和交互式命令。
![demo_terminal_like_portfolio](https://github.com/user-attachments/assets/b1a77e2b-0ec1-40d4-b592-3a73081e96f0)

### 配置生成器 (Config Generator)
> ⚙️ 无需接触代码，以可视化的方式构建个性化配置文件！
![how_to_use_generator](https://github.com/user-attachments/assets/3f040e0c-4f50-4e9a-8954-d46b2a6e4804)

制作方：[**PythonToGo**](https://github.com/PythonToGo)

---

## 🚀 快速开始 (Quick Start)

只需几秒钟即可运行你的终端主页。复制以下命令并粘贴到你的终端中：

```bash
# 1. 克隆仓库
git clone [https://github.com/PythonToGo/terminal-portfolio-template.git](https://github.com/PythonToGo/terminal-portfolio-template.git)

# 2. 进入目录
cd terminal-portfolio-template

# 3. 在默认浏览器中打开 index.html 文件
# (macOS 使用 'open'，Windows 使用 'start'，Linux 使用 'xdg-open')
open index.html

```

打开后，你可以使用以下两种方法之一进行自定义：

* **选项 A (手动)：** 直接编辑 `js/commands.js` 文件。
* **选项 B (推荐)：** 使用 **[配置生成器 (Config Generator)](https://pythontogo.github.io/terminal-portfolio-template/generator/)** 轻松创建你的 `terminal-config.js` 文件。

> **注意：** 仅用于作品集时，不需要任何构建工具或 `npm`。只有在修改模板代码或参与贡献时才需要 `npm`。

---

## 🛠 项目结构 (Project Structure)

核心文件和目录的简要概述：

```text
.
├── index.html              # 终端主页
├── terminal-config.js      # 你的个人配置（可选，由生成器创建）
├── js/                     # 核心逻辑（命令、GitHub API 等）
├── css/                    # 各种终端颜色主题
└── generator/              # 基于 Web 的配置生成器工具
    ├── index.html          # 配置生成器表单
    ├── main.js             # 表单逻辑与配置生成
    └── style.css           # 生成器样式

```

## ⚙️ 配置选项 (Configuration Options)

### 选项 A – 手动配置

打开 `js/commands.js` 并编辑文件顶部的常量值：

* `GITHUB_USERNAME`, `EMAIL_ADDRESS`
* `linkedin`, `github`, `blog` (留空 `""` 即可在链接部分隐藏它们)
* `linksOthers` – 添加自定义链接（格式：`{ "twitter": { name: "Twitter", url: "..." } }`）
* `CLAUDE_OWNER_NAME` (备用名称)
* `about`, `links`, `projects`, `help`, `welcomeMsg`, `banner`
* `themes` – 将主题名称映射到相应的 CSS 文件路径
* `allCommands` – 定义用于 Tab 自动补全的命令列表

> **注意：** 这是最简单的模式，不需要任何构建步骤或外部配置文件。

### 选项 B – 使用生成器 (推荐)

在浏览器中打开 `generator/index.html`，或访问[托管的生成器](https://pythontogo.github.io/terminal-portfolio-template/generator/)。

#### 生成器表单部分

| 区域 | 字段 |
| --- | --- |
| **Profile (个人资料)** | 姓名、电子邮件、GitHub 用户名、博客标题、简介/关于文本 (可选) |
| **Links (链接)** | GitHub URL、LinkedIn URL (可选)、博客 URL (可选)、其他 (可选：每行填写名称和 URL，用 ` |
| **Theme (主题)** | 默认主题 |
| **Banner (横幅)** | 横幅文本、横幅字体样式 (block, dotted, light, minimal, shadow)、实时预览 |

#### 配置输出结果

生成器会创建一个 `window.TERMINAL_CONFIG` 对象，如下所示：

```javascript
{
  profile: { name, email, githubUsername, blogTitle },
  links: { github, linkedin?, blog?, others? },
  theme: { defaultTheme, bannerText, bannerFont },
  content: { aboutLines? }
}

```

#### 配置值的使用位置

| 配置路径 | 使用用途 |
| --- | --- |
| `profile.name` | 横幅文本（如果 `theme.bannerText` 为空）、终端提示符、备用 about 文本、`CLAUDE_OWNER_NAME` |
| `profile.email` | 执行 `email` 命令时使用 |
| `profile.githubUsername` | 生成 GitHub 链接，并获取 `projects` 命令所需的仓库列表 |
| `links.github` | 显示在 `links` 表格中，供 `github` 命令使用 |
| `links.linkedin` | 显示在 `links` 表格中，供 `linkedin` 命令使用（如果为空则隐藏） |
| `links.blog` | 显示在 `links` 表格中（如果为空则隐藏） |
| `links.others` | 显示在 `links` 表格中并创建自定义命令（例如，添加 `Twitter` 后可以输入 `twitter` 命令） |
| `theme.defaultTheme` | 设置页面加载时的初始颜色主题 |
| `theme.bannerText` | 渲染为 ASCII 横幅的文本 |
| `theme.bannerFont` | 横幅样式 (block, dotted, light, minimal, shadow) |
| `content.aboutLines` | `about` 命令的输出内容（备用值："Hi there, I am {姓名}"） |

---

## 💻 可用命令 (Available Commands)

| 命令 | 描述 |
| --- | --- |
| `help` | 列出所有可用的命令 |
| `about` | 显示简介/关于文本 |
| `links` | 显示包含 GitHub、LinkedIn、博客和自定义链接的表格 |
| `projects` | 通过 GitHub API 获取并显示你的 GitHub 仓库列表 |
| `email` | 打开默认邮件客户端 (`mailto:`) |
| `linkedin`, `github` | 在新标签页中打开相应的 URL（如果未配置则隐藏） |
| `theme ls` | 列出所有可用的主题 |
| `theme set <name>` | 更改当前主题 |
| `theme random` | 应用随机主题 |
| `banner` | 显示 ASCII 横幅 |
| `clear` | 清空终端输出画面 |
| `history` | 显示命令历史记录 |
| `echo <text>` | 在终端中原样输出输入的文本 |
| `ping <host>` | 运行伪造的 ping 模拟 |
| `explain`, `run`, `edit` | Claude 风格的彩蛋 |
| `ls`, `cd` | 伪造的文件系统导航命令 |
| `vi`, `vim`, `nvim`, `emacs` | 文本编辑器相关的玩笑指令 |
| `sudo` | 权限拒绝 (Permission denied) 消息 + 彩蛋 |

*注意：在 `links.others` 中添加的自定义链接会自动成为命令。（例如：配置 `Twitter|https://...` 会启用 `twitter` 命令）。*

---

## 🎨 主题与自定义 (Themes & Customization)

### 主题 (Themes)

默认提供以下主题：
`lila` (默认), `midnight`, `chocolate`, `og` (原始), `rainbow`, `orange`, `olive`, `bluescreen`

### ASCII 横幅 (Banner)

* **字体样式:** block, dotted, light, minimal, shadow
* **文本格式:** 支持大写和小写字母。
* **配置方法:** 通过 `theme.bannerText`（或备用值 `profile.name`）和 `theme.bannerFont` 进行管理。

---

## 🏗 开发注意事项 (Development Notes)

### 脚本加载顺序 (`index.html`)

为确保所有功能正常运行，脚本按以下顺序加载：

1. `terminal-config.js` (可选，生成器输出)
2. `js/github.js`
3. `js/caret.js`
4. `js/ascii_banner.js`
5. `js/commands.js`
6. `js/main.js`

### 本地测试

* 完全不需要构建工具（不需要 Webpack、Vite 或 Node.js）。
* 只需在浏览器中直接打开 `index.html`，或使用任何基本的本地 Web 服务器（例如 `python -m http.server`）即可。

### CI/CD 与质量检查

当你 fork 或修改模板代码时，CI 会自动运行：

* **测试** (`npm test`)：单元测试（如 `completeQuery`、生成器输出验证）。
* **Lint** (`npm run lint`)：ESLint 代码质量检查。
* **审计** (`npm audit`)：依赖项安全检查。

本地运行：`npm install` → `npm test` → `npm run lint`

---

## 🌐 部署 (GitHub Pages)

此模板包含一个位于 `.github/workflows/deploy-pages.yml` 的即用型 GitHub Actions 工作流，用于自动部署你的网站。

1. 使用此模板创建一个新仓库（或 Fork/Clone 此仓库）。
2. 将你的修改推送到默认分支（`main` 或 `master`）。
3. 在你的 GitHub 仓库中，导航到 **Settings (设置) → Pages**。
4. 将 **Source (来源)** 下拉菜单设置为 **GitHub Actions**。

在 **"Deploy terminal portfolio to GitHub Pages"** GitHub Action 首次成功运行后，你的实时网站将可以通过以下地址访问：
`https://<你的-github-用户名>.github.io/<你的-仓库-名称>/`

---

## 🤝 参与贡献 (Contributing)

随时欢迎提交 Pull Request (PR)、报告 Bug 或提出改进建议！

## 📜 致谢 (Credits)

* 原始终端主页概念和模板由 **[PythonToGo](https://github.com/PythonToGo)** 制作。

