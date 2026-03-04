# 👨‍💻 Terminal Portfolio Template

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-success?style=flat-square&logo=github)](https://pythontogo.github.io/terminal-portfolio-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Read in:** [English](README.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [中文](README.zh-CN.md) | [Türkçe](README.tr.md)

---

This is a lightweight, **terminal-style personal homepage template**. It is built as a simple static site requiring no build tools: just plain HTML, CSS, and JavaScript.

You can use this repository as a **template** for your own portfolio by either editing a few configuration values manually or by using the built-in **config generator**.

[![Live Demo](https://img.shields.io/badge/🖥️_Live_Demo-2EA043?style=for-the-badge)](https://pythontogo.github.io/terminal-portfolio-template)
[![Config Generator](https://img.shields.io/badge/⚙️_Config_Generator-0052CC?style=for-the-badge)](https://pythontogo.github.io/terminal-portfolio-template/generator/)

## 👀 Preview & Demo

### Live Demo
> 💡 Experience the typewriter animation and interactive commands.
![demo_terminal_like_portfolio](https://github.com/user-attachments/assets/b1a77e2b-0ec1-40d4-b592-3a73081e96f0)

### Config Generator
> ⚙️ Build your personalized config file visually without touching code!
![how_to_use_generator](https://github.com/user-attachments/assets/3f040e0c-4f50-4e9a-8954-d46b2a6e4804)

Made by [**PythonToGo**](https://github.com/PythonToGo).

---

## 🚀 Quick Start

Get your terminal portfolio up and running in seconds. Copy and paste the commands below into your terminal:

```bash
# 1. Clone the repository
git clone [https://github.com/PythonToGo/terminal-portfolio-template.git](https://github.com/PythonToGo/terminal-portfolio-template.git)

# 2. Navigate into the directory
cd terminal-portfolio-template

# 3. Open the index.html file in your default web browser
# (Use 'open' on macOS, 'start' on Windows, or 'xdg-open' on Linux)
open index.html

```

Once opened, customize it using one of the following methods:

* **Option A (Manual):** Edit the `js/commands.js` file directly.
* **Option B (Recommended):** Use the **[Config Generator](https://pythontogo.github.io/terminal-portfolio-template/generator/)** to easily create your `terminal-config.js` file.

---

## 🛠 Project Structure

A quick overview of the core files and directories:
```text
.
├── index.html              # Main terminal page
├── terminal-config.js      # Your personal config (generated, optional)
├── js/
├── css/
└── generator/
    ├── index.html          # Config generator form
    ├── main.js             # Form logic, config building
    └── style.css           # Generator styles

```

## ⚙️ Configuration Options

### Option A – Manual Configuration

Open `js/commands.js` and edit the constant values at the top of the file:

* `GITHUB_USERNAME`, `EMAIL_ADDRESS`
* `linkedin`, `github`, `blog` (leave empty `""` to hide them from the links section)
* `linksOthers` – Add custom links using this format: `{ "twitter": { name: "Twitter", url: "..." } }`
* `CLAUDE_OWNER_NAME` (fallback name)
* `about`, `links`, `projects`, `help`, `welcomeMsg`, `banner`
* `themes` – maps theme names to their respective CSS file paths
* `allCommands` – defines the list used for Tab autocompletion

> **Note:** This is the simplest mode and requires no build steps or external config files.

### Option B – Using the Generator (Recommended)

Open `generator/index.html` in a browser, or visit the [hosted generator](https://pythontogo.github.io/terminal-portfolio-template/generator/).

#### Generator Form Sections

| Section | Fields |
| --- | --- |
| **Profile** | Full name, email, GitHub username, blog title, Intro/About text (optional) |
| **Links** | GitHub URL, LinkedIn URL (optional), Blog URL (optional), Others (optional: `Name` and `URL` per line, separated by ` |
| **Theme** | Default theme |
| **Banner** | Banner text, Banner font style (block, dotted, light, minimal, shadow), live preview |

#### Config Output

The generator produces a `window.TERMINAL_CONFIG` object that looks like this:

```javascript
{
  profile: { name, email, githubUsername, blogTitle },
  links: { github, linkedin?, blog?, others? },
  theme: { defaultTheme, bannerText, bannerFont },
  content: { aboutLines? }
}

```

#### How the Config is Used

| Config Path | Used For |
| --- | --- |
| `profile.name` | Banner text (if `theme.bannerText` is empty), terminal prompt, fallback about text, `CLAUDE_OWNER_NAME` |
| `profile.email` | Executing the `email` command |
| `profile.githubUsername` | Generating the GitHub link and fetching repos for the `projects` command |
| `links.github` | Displayed in the `links` table, used by the `github` command |
| `links.linkedin` | Displayed in the `links` table, used by the `linkedin` command (hidden if empty) |
| `links.blog` | Displayed in the `links` table (hidden if empty) |
| `links.others` | Displayed in the `links` table and creates custom commands (e.g., adding `Twitter` lets you type `twitter`) |
| `theme.defaultTheme` | Sets the initial color theme on page load |
| `theme.bannerText` | Text rendered as the ASCII banner |
| `theme.bannerFont` | Style of the banner (block, dotted, light, minimal, shadow) |
| `content.aboutLines` | The output of the `about` command (Fallback: "Hi there, I am {Full Name}") |

---

## 💻 Available Commands

| Command | Description |
| --- | --- |
| `help` | List all available commands |
| `about` | Display intro/about text |
| `links` | Display a table of GitHub, LinkedIn, blog, and custom links |
| `projects` | Fetch and display GitHub repositories via the GitHub API |
| `email` | Open the default mail client (`mailto:`) |
| `linkedin`, `github` | Open respective URLs in a new tab (linkedin is hidden if not configured) |
| `theme ls` | List all available themes |
| `theme set <name>` | Change the current theme |
| `theme random` | Apply a random theme |
| `banner` | Display the ASCII banner |
| `clear` | Clear the terminal output |
| `history` | Show command history |
| `echo <text>` | Print the text back to the terminal |
| `ping <host>` | Run a fake ping simulation |
| `explain`, `run`, `edit` | Claude-style easter eggs |
| `ls`, `cd` | Fake file system navigation |
| `vi`, `vim`, `nvim`, `emacs` | Text editor jokes |
| `sudo` | Permission denied message + easter egg |

*Note: Custom links added in `links.others` automatically become commands (e.g., configuring `Twitter|https://...` enables the `twitter` command).*

---

## 🎨 Themes & Customization

### Themes

The following themes are available out of the box:
`lila` (default), `midnight`, `chocolate`, `og` (original), `rainbow`, `orange`, `olive`, `bluescreen`

### ASCII Banner

* **Font styles:** block, dotted, light, minimal, shadow
* **Text format:** Both uppercase and lowercase characters are supported.
* **Configuration:** Managed via `theme.bannerText` (or falls back to `profile.name`) and `theme.bannerFont`.

---

## 🏗 Development Notes

### Script Load Order (`index.html`)

To ensure everything functions correctly, scripts are loaded in this order:

1. `terminal-config.js` (optional generator output)
2. `js/github.js`
3. `js/caret.js`
4. `js/ascii_banner.js`
5. `js/commands.js`
6. `js/main.js`

### Local Testing

* There are no build tools required (no Webpack, Vite, Node.js needed).
* Simply open `index.html` in your browser or serve the folder using any basic local web server (e.g., `python -m http.server`).

---

## 🌐 Deployment (GitHub Pages)

This template includes a ready-to-use GitHub Actions workflow located at `.github/workflows/deploy-pages.yml` to automatically deploy your site.

1. Create a new repository using this template (or fork/clone it).
2. Push your customizations to the default branch (`main` or `master`).
3. In your GitHub repository, navigate to **Settings → Pages**.
4. Set the **Source** dropdown to **GitHub Actions**.

After the GitHub Action **"Deploy terminal portfolio to GitHub Pages"** completes its first run, your live site will be available at:
`https://<your-github-username>.github.io/<your-repo-name>/`

---

## 🤝 Contributing

Pull requests, bug reports, and suggestions for improvements are always welcome!

## 📜 Credits

* Original terminal portfolio concept and template created by **[PythonToGo](https://github.com/PythonToGo)**.



Is there anything else you would like to adjust in this README?

```
