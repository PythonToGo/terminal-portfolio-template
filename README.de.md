# Terminal Portfolio Template

**Sprache:** [English](README.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [中文](README.zh-CN.md) | [Türkçe](README.tr.md)

---

Dies ist eine kleine **Terminal-artige persönliche Homepage**. Sie besteht aus einer einfachen statischen Seite: nur HTML, CSS und JavaScript.

Sie können dieses Repository als **Vorlage** für Ihre eigene Seite verwenden, indem Sie entweder einige Konfigurationswerte bearbeiten oder den eingebauten **Config Generator** nutzen.

<!-- <img width="1036" height="850" alt="image" src="https://github.com/user-attachments/assets/9d5c85f8-6b2d-438e-ac22-3578dbbbefc2" /> -->

## Demo

![demo_terminal_like_portfolio-ezgif com-crop](https://github.com/user-attachments/assets/b1a77e2b-0ec1-40d4-b592-3a73081e96f0)

### So generieren Sie die Config und erstellen Ihre eigene Website

![how_to_use-ezgif com-crop](https://github.com/user-attachments/assets/3f040e0c-4f50-4e9a-8954-d46b2a6e4804)

Erstellt von [**PythonToGo**](https://github.com/PythonToGo).

## Projektstruktur

```
.
├── index.html              # Haupt-Terminalseite
├── terminal-config.js      # Benutzerkonfiguration (generiert, optional)
├── js/
│   ├── main.js             # Befehlsverarbeitung, UI-Logik
│   ├── commands.js         # Konfigurationswerte, Inhaltsarrays, Befehlsliste
│   ├── ascii_banner.js     # ASCII-Banner-Schriften und -Rendering
│   ├── github.js           # GitHub API – lädt Repos für Projekte
│   └── caret.js            # Tipp-Simulation, Cursor
├── css/
│   ├── style_lila.css      # Standard-Theme
│   ├── style_midnight.css
│   ├── style_chocolate.css
│   ├── style_og.css         # original
│   ├── style_rainbow.css
│   ├── style_orange.css
│   ├── style_olive.css
│   └── style_bluescreen.css
└── generator/
    ├── index.html          # Config-Generator-Formular
    ├── main.js             # Formularlogik, Config-Erstellung
    └── style.css           # Generator-Styles
```

## Schnellstart

1. Repository klonen oder als GitHub-Vorlage verwenden.
2. `index.html` im Browser öffnen, um das Terminal zu sehen.
3. Anpassen auf eine von zwei Arten:
   - **Option A – `js/commands.js` direkt bearbeiten** ODER
   - **Option B – Generator verwenden, um `terminal-config.js` zu erstellen** (schnelle Einrichtung: [**Zum Config Generator**](https://pythontogo.github.io/terminal-portfolio-template/generator/) ).

## Option A – manuelle Konfiguration

`js/commands.js` öffnen und die Werte oben bearbeiten:

- `GITHUB_USERNAME`, `EMAIL_ADDRESS`
- `linkedin`, `github`, `blog` (leer = in Links ausgeblendet)
- `linksOthers` – benutzerdefinierte Links `{ "twitter": { name: "Twitter", url: "..." } }`
- `CLAUDE_OWNER_NAME` (aus `profile.name`)
- `about`, `links`, `projects`, `help`, `welcomeMsg`, `banner`
- `themes` – Theme-Name → CSS-Pfad
- `allCommands` – Tab-Vervollständigungsliste

> Dies ist der einfachste Modus und erfordert keinen Build-Schritt.

## Option B – Generator verwenden (empfohlen)

`generator/index.html` im Browser öffnen (oder den gehosteten Generator).

### Generator-Formularbereiche

| Bereich | Felder |
|---------|--------|
| **Profile** | Vollständiger Name, E-Mail, GitHub-Benutzername, Blog-Titel, Intro/About-Text (optional) |
| **Links** | GitHub-URL, LinkedIn-URL (optional), Blog-URL (optional), Andere (optional: `Name` und `URL` pro Zeile, getrennt durch `\|`) |
| **Theme** | Standard-Theme |
| **Banner** | Banner-Text, Banner-Schriftstil (block, dotted, light, minimal, shadow), Live-Vorschau |

### Config-Ausgabe

Der Generator erzeugt `window.TERMINAL_CONFIG` mit:

```js
{
  profile: { name, email, githubUsername, blogTitle },
  links: { github, linkedin?, blog?, others? },
  theme: { defaultTheme, bannerText, bannerFont },
  content: { aboutLines? }
}
```

### Verwendung der Config

| Config-Pfad | Verwendung |
|-------------|------------|
| `profile.name` | Banner-Text (wenn `theme.bannerText` leer), Prompt, About-Fallback, `CLAUDE_OWNER_NAME` |
| `profile.email` | `email`-Befehl |
| `profile.githubUsername` | GitHub-Link, Projekte-Repo-Liste |
| `links.github` | `links`-Tabelle, `github`-Befehl |
| `links.linkedin` | `links`-Tabelle, `linkedin`-Befehl (optional – ausgeblendet wenn leer) |
| `links.blog` | `links`-Tabelle (optional – ausgeblendet wenn leer) |
| `links.others` | `links`-Tabelle + benutzerdefinierte Befehle (z.B. `Twitter` → `twitter` eingeben) |
| `theme.defaultTheme` | Initiales Theme beim Laden |
| `theme.bannerText` | ASCII-Banner-Text |
| `theme.bannerFont` | Banner-Stil: block, dotted, light, minimal, shadow |
| `content.aboutLines` | `about`-Befehl-Inhalt (optional – Fallback: "Hi there, I am {Full Name}") |

## Verfügbare Befehle

| Befehl | Beschreibung |
|--------|---------------|
| `help` | Befehlsliste |
| `about` | Intro/About-Text |
| `links` | GitHub, LinkedIn, Blog, benutzerdefinierte Links |
| `projects` | GitHub-Repos (über API) |
| `email` | Mailto öffnen |
| `linkedin`, `github` | URLs öffnen (linkedin ausgeblendet wenn nicht konfiguriert) |
| `theme ls` | Themes auflisten |
| `theme set <name>` | Theme setzen |
| `theme random` | Zufälliges Theme |
| `banner` | ASCII-Banner anzeigen |
| `clear` | Terminal leeren |
| `history` | Befehlsverlauf |
| `echo <text>` | Text ausgeben |
| `ping <host>` | Fake-Ping |
| `explain`, `run`, `edit` | Claude-artige Easter Eggs |
| `ls`, `cd` | Fake-Dateiliste |
| `vi`, `vim`, `nvim`, `emacs` | Editor-Witze |
| `sudo` | Berechtigung verweigert + Easter Egg |

Benutzerdefinierte Links aus `links.others` werden zu Befehlen (z.B. `Twitter|https://...` → `twitter` eingeben).

## Themes

- `lila` (Standard), `midnight`, `chocolate`, `og` (original), `rainbow`, `orange`, `olive`, `bluescreen`

## ASCII-Banner

- **Schriftstile**: block, dotted, light, minimal, shadow
- **Text**: Groß- und Kleinbuchstaben unterstützt
- **Config**: `theme.bannerText` (oder `profile.name`), `theme.bannerFont`

## Skript-Ladereihenfolge (`index.html`)

1. `terminal-config.js` (optional)
2. `js/github.js`
3. `js/caret.js`
4. `js/ascii_banner.js`
5. `js/commands.js`
6. `js/main.js`

## Entwicklungshinweise

- Keine Build-Tools; reines HTML/CSS/JS.
- Lokal testen: `index.html` öffnen oder Ordner mit statischem Server bereitstellen.
- GitHub Pages funktioniert sofort.

### Beispiel-GitHub-Actions-Workflow (GitHub Pages)

1. `.github/workflows/` erstellen
2. `pages.yml` hinzufügen:

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

3. **Pages** in den Repo-Einstellungen aktivieren, Quelle: **GitHub Actions**.

## Mitwirken

Pull Requests und Verbesserungen sind willkommen.

## Credits

- Originales Terminal-Portfolio und Vorlage von [**PythonToGo**](https://github.com/PythonToGo).
