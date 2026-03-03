# Terminal Portfolio Template

This is a small **terminal-style personal homepage**. It is built as a simple static site: just HTML, CSS and JavaScript.

You can use this repository as a **template** for your own page by either editing a few config values, or by using the built–in **config generator**.

Made by **PythonToGo**.

## Quick start

1. Clone this repository or use it as a GitHub template.
2. Open `index.html` in a browser to see the terminal.
3. Customize it in one of two ways:
   - **Option A – edit `js/commands.js` directly** OR
   - **Option B – use the generator to create `terminal-config.js`** (quick setup).

## Option A – manual configuration

Open `js/commands.js` and look at the top of the file.

There you will find configuration values such as:

- `GITHUB_USERNAME`
- `EMAIL_ADDRESS`
- the default `linkedin`, `github` and `blog` links
- Claude-style assistant names: `CLAUDE_ASSISTANT_NAME`, `CLAUDE_OWNER_NAME`
- `about`, `links`, `projects`, `welcomeMsg` text arrays

You can edit these directly and then reload `index.html` in a browser.

> This is the simplest mode and does not require any build step.

## Option B – using the generator (recommended)

This repository also provides a **small generator page** that creates a ready‑to‑use `terminal-config.js` file.

### 1. Open the generator

Open `generator/index.html` in your browser (you can just open the file from your file system).

You will see a form with these sections:

- **Profile** – name, tagline, location, author handle, email, GitHub username, blog title.
- **Links** – GitHub, LinkedIn, blog URLs.
- **Theme** – default theme (`lila`, `midnight`, or `chocolate`).
- **Content (optional)** – custom “About” text and a short projects intro line.

### 2. Fill the form and generate

1. Fill in the fields you care about (you can leave optional ones empty).
2. Click **“Generate config”**.
3. The **Generated config** textarea will show JavaScript that looks like:

```js
window.TERMINAL_CONFIG = {
  profile: {
    // ...
  },
  links: {
    // ...
  },
  theme: {
    // ...
  },
  content: {
    // optional overrides
  }
};
```

4. Either:
   - Copy this text into a new file named `terminal-config.js`, **or**
   - Click **“Download terminal-config.js”**.

### 3. Place `terminal-config.js` in the template root

Save `terminal-config.js` into the **root of this repo**, next to `index.html`.

The main `index.html` already includes:

```html
<script src="terminal-config.js"></script>
```

before loading the main scripts, so your config will be picked up automatically when the file exists.

### 4. How the config is used

If `window.TERMINAL_CONFIG` is present:

- `js/commands.js` will read:
  - `TERMINAL_CONFIG.profile.githubUsername` → used for:
    - the `github` link and
    - the GitHub projects list (`projects` command).
  - `TERMINAL_CONFIG.profile.email` → used for the `email` command.
  - `TERMINAL_CONFIG.links.github`, `.linkedin`, `.blog` → used for the `links` table.
  - `TERMINAL_CONFIG.profile.name` → used as the big ASCII banner text and as the owner name in the `explain`, `run`, `edit` messages.
  - `TERMINAL_CONFIG.content.aboutLines` (optional) → replaces the default `about` body text.
- Anything not provided in `TERMINAL_CONFIG` falls back to the defaults defined in `js/commands.js`.

This means:

- **You can safely delete or regenerate `terminal-config.js` at any time** – the template still works with built‑in defaults.
- You can also continue to tweak `js/commands.js` by hand, even when using the generator.

## Development notes

- No build tools are required; everything is plain HTML/CSS/JS.
- To test locally, you can simply open `index.html` in your browser, or serve the folder via a small static server.
- For deployment, GitHub Pages works out of the box: point it at the root of the repository.

### Example GitHub Actions workflow (GitHub Pages)

You can also deploy this template automatically using GitHub Actions and GitHub Pages.

1. In your repository, create the directory `.github/workflows/`.
2. Add a file like `.github/workflows/pages.yml` with the following contents:

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

3. In your repo settings on GitHub, enable **Pages** and choose `GitHub Actions` as the source.

Every push to `main` will then build and deploy the current state of the repository to GitHub Pages.

## Contributing

Pull requests and improvements are very welcome. If you build something cool on top of this template, feel free to share it back via PR.

## Credits

- Original terminal portfolio and template by **PythonToGo**.

