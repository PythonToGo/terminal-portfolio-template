# Terminal Portfolio Template

**Read in:** [English](README.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [中文](README.zh-CN.md) | [Türkçe](README.tr.md)

---

This is a small **terminal-style personal homepage**. It is built as a simple static site: just HTML, CSS and JavaScript.

You can use this repository as a **template** for your own page by either editing a few config values, or by using the built-in **config generator**.

<!-- <img width="1036" height="850" alt="image" src="https://github.com/user-attachments/assets/9d5c85f8-6b2d-438e-ac22-3578dbbbefc2" /> -->

## Demo

![demo_terminal_like_portfolio-ezgif com-crop](https://github.com/user-attachments/assets/b1a77e2b-0ec1-40d4-b592-3a73081e96f0)

### How to generate config and your own website like

![how_to_use-ezgif com-crop](https://github.com/user-attachments/assets/3f040e0c-4f50-4e9a-8954-d46b2a6e4804)

Made by [**PythonToGo**](https://github.com/PythonToGo).

## Project structure

```
.
├── index.html              # Main terminal page
├── terminal-config.js      # User config (generated, optional)
├── js/
│   ├── main.js             # Command handling, UI logic
│   ├── commands.js         # Config values, content arrays, commands list
│   ├── ascii_banner.js     # ASCII banner fonts and rendering
│   ├── github.js           # GitHub API – fetches repos for projects
│   └── caret.js            # Typing simulation, cursor
├── css/
│   ├── style_lila.css      # Default theme
│   ├── style_midnight.css
│   ├── style_chocolate.css
│   ├── style_og.css         # original
│   ├── style_rainbow.css
│   ├── style_orange.css
│   ├── style_olive.css
│   └── style_bluescreen.css
└── generator/
    ├── index.html          # Config generator form
    ├── main.js             # Form logic, config building
    └── style.css           # Generator styles
```

## Quick start

1. Clone this repository or use it as a GitHub template.
2. Open `index.html` in a browser to see the terminal.
3. Customize it in one of two ways:
   - **Option A – edit `js/commands.js` directly** OR
   - **Option B – use the generator to create `terminal-config.js`** (quick setup: [**Go To Config Generator**](https://pythontogo.github.io/terminal-portfolio-template/generator/) ).

## Option A – manual configuration

Open `js/commands.js` and edit the values at the top:

- `GITHUB_USERNAME`, `EMAIL_ADDRESS`
- `linkedin`, `github`, `blog` (empty = hidden from links)
- `linksOthers` – custom links `{ "twitter": { name: "Twitter", url: "..." } }`
- `CLAUDE_OWNER_NAME` (from `profile.name`)
- `about`, `links`, `projects`, `help`, `welcomeMsg`, `banner`
- `themes` – theme name → CSS path
- `allCommands` – tab completion list

> This is the simplest mode and does not require any build step.

## Option B – using the generator (recommended)

Open `generator/index.html` in a browser (or the hosted generator).

### Generator form sections

| Section | Fields |
|--------|--------|
| **Profile** | Full name, email, GitHub username, blog title, Intro/About text (optional) |
| **Links** | GitHub URL, LinkedIn URL (optional), Blog URL (optional), Others (optional: `Name` and `URL` per line, separated by `|`) |
| **Theme** | Default theme |
| **Banner** | Banner text, Banner font style (block, dotted, light, minimal, shadow), live preview |

### Config output

The generator produces `window.TERMINAL_CONFIG` with:

```js
{
  profile: { name, email, githubUsername, blogTitle },
  links: { github, linkedin?, blog?, others? },
  theme: { defaultTheme, bannerText, bannerFont },
  content: { aboutLines? }
}
```

### How the config is used

| Config path | Used for |
|-------------|----------|
| `profile.name` | Banner text (if `theme.bannerText` empty), prompt, about fallback, `CLAUDE_OWNER_NAME` |
| `profile.email` | `email` command |
| `profile.githubUsername` | GitHub link, projects repo list |
| `links.github` | `links` table, `github` command |
| `links.linkedin` | `links` table, `linkedin` command (optional – hidden if empty) |
| `links.blog` | `links` table (optional – hidden if empty) |
| `links.others` | `links` table + custom commands (e.g. `Twitter` → type `twitter`) |
| `theme.defaultTheme` | Initial theme on load |
| `theme.bannerText` | ASCII banner text |
| `theme.bannerFont` | Banner style: block, dotted, light, minimal, shadow |
| `content.aboutLines` | `about` command body (optional – fallback: "Hi there, I am {Full Name}") |

## Available commands

| Command | Description |
|---------|-------------|
| `help` | List commands |
| `about` | Intro/about text |
| `links` | GitHub, LinkedIn, blog, custom links |
| `projects` | GitHub repos (via API) |
| `email` | Open mailto |
| `linkedin`, `github` | Open URLs (linkedin hidden if not configured) |
| `theme ls` | List themes |
| `theme set <name>` | Set theme |
| `theme random` | Random theme |
| `banner` | Show ASCII banner |
| `clear` | Clear terminal |
| `history` | Command history |
| `echo <text>` | Echo text |
| `ping <host>` | Fake ping |
| `explain`, `run`, `edit` | Claude-style easter eggs |
| `ls`, `cd` | Fake file listing |
| `vi`, `vim`, `nvim`, `emacs` | Editor jokes |
| `sudo` | Permission denied + easter egg |

Custom links from `links.others` become commands (e.g. `Twitter|https://...` → type `twitter`).

## Themes

- `lila` (default), `midnight`, `chocolate`, `og` (original), `rainbow`, `orange`, `olive`, `bluescreen`

## ASCII banner

- **Font styles**: block, dotted, light, minimal, shadow
- **Text**: Uppercase and lowercase supported
- **Config**: `theme.bannerText` (or `profile.name`), `theme.bannerFont`

## Script load order (`index.html`)

1. `terminal-config.js` (optional)
2. `js/github.js`
3. `js/caret.js`
4. `js/ascii_banner.js`
5. `js/commands.js`
6. `js/main.js`

## Development notes

- No build tools; plain HTML/CSS/JS.
- Test locally by opening `index.html` or serving the folder.
- GitHub Pages works out of the box.

### Example GitHub Actions workflow (GitHub Pages)

1. Create `.github/workflows/`
2. Add `pages.yml`:

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

3. Enable **Pages** in repo settings, source: **GitHub Actions**.

## Contributing

Pull requests and improvements are welcome.

## Credits

- Original terminal portfolio and template by [**PythonToGo**](https://github.com/PythonToGo).
