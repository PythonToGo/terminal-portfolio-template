# 👨‍💻 Terminal Portfolio Template

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-success?style=flat-square&logo=github)](https://pythontogo.github.io/terminal-portfolio-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Read in:** [English](README.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [中文](README.zh-CN.md) | [Türkçe](README.tr.md)

---

Dies ist ein leichtgewichtiges **persönliches Homepage-Template im Terminal-Stil**. Es ist als einfache statische Website aufgebaut, die keine Build-Tools benötigt: nur reines HTML, CSS und JavaScript.

Du kannst dieses Repository als **Vorlage (Template)** für dein eigenes Portfolio nutzen, indem du entweder einige Konfigurationswerte manuell anpasst oder den integrierten **Config Generator** verwendest.

[![Live Demo](https://img.shields.io/badge/🖥️_Live_Demo-2EA043?style=for-the-badge)](https://pythontogo.github.io/terminal-portfolio-template)
[![Config Generator](https://img.shields.io/badge/⚙️_Config_Generator-0052CC?style=for-the-badge)](https://pythontogo.github.io/terminal-portfolio-template/generator/)

## 👀 Vorschau & Demo

### Live-Demo
> 💡 Erlebe die Schreibmaschinen-Animation und interaktive Befehle.
![demo_terminal_like_portfolio](https://github.com/user-attachments/assets/b1a77e2b-0ec1-40d4-b592-3a73081e96f0)

### Config Generator
> ⚙️ Erstelle deine personalisierte Konfigurationsdatei visuell, ohne Code anzufassen!
![how_to_use_generator](https://github.com/user-attachments/assets/3f040e0c-4f50-4e9a-8954-d46b2a6e4804)

Erstellt von [**PythonToGo**](https://github.com/PythonToGo).

---

## 🚀 Schnellstart (Quick Start)

Bringe dein Terminal-Portfolio in Sekundenschnelle zum Laufen. Kopiere die unten stehenden Befehle und füge sie in dein Terminal ein:

```bash
# 1. Repository klonen
git clone [https://github.com/PythonToGo/terminal-portfolio-template.git](https://github.com/PythonToGo/terminal-portfolio-template.git)

# 2. In das Verzeichnis wechseln
cd terminal-portfolio-template

# 3. Die Datei index.html im Standard-Webbrowser öffnen
# (Nutze 'open' unter macOS, 'start' unter Windows oder 'xdg-open' unter Linux)
open index.html

```

Nach dem Öffnen kannst du es auf eine der folgenden Arten anpassen:

* **Option A (Manuell):** Bearbeite die Datei `js/commands.js` direkt.
* **Option B (Empfohlen):** Nutze den **[Config Generator](https://pythontogo.github.io/terminal-portfolio-template/generator/)**, um einfach deine `terminal-config.js` zu erstellen.

> **Hinweis:** Für die reine Portfolio-Nutzung sind keine Build-Tools oder `npm` erforderlich. `npm` wird nur beim Ändern des Template-Codes oder bei Beiträgen benötigt.

---

## 🛠 Projektstruktur

Ein kurzer Überblick über die wichtigsten Dateien und Verzeichnisse:

```text
.
├── index.html              # Haupt-Terminal-Seite
├── terminal-config.js      # Deine persönliche Konfiguration (optional, generiert)
├── js/                     # Kernlogik (Befehle, GitHub-API, etc.)
├── css/                    # Verschiedene Terminal-Farb-Themes
└── generator/              # Web-basiertes Config-Generator-Tool
    ├── index.html          # Config-Generator-Formular
    ├── main.js             # Formularlogik & Erstellung der Config
    └── style.css           # Styling des Generators

```

## ⚙️ Konfigurationsmöglichkeiten

### Option A – Manuelle Konfiguration

Öffne `js/commands.js` und bearbeite die konstanten Werte oben in der Datei:

* `GITHUB_USERNAME`, `EMAIL_ADDRESS`
* `linkedin`, `github`, `blog` (leer lassen `""`, um sie im Links-Bereich zu verbergen)
* `linksOthers` – Benutzerdefinierte Links hinzufügen (Format: `{ "twitter": { name: "Twitter", url: "..." } }`)
* `CLAUDE_OWNER_NAME` (Fallback-Name)
* `about`, `links`, `projects`, `help`, `welcomeMsg`, `banner`
* `themes` – Weist Theme-Namen ihren jeweiligen CSS-Dateipfaden zu
* `allCommands` – Definiert die Liste für die Tab-Autovervollständigung

> **Hinweis:** Dies ist der einfachste Modus und erfordert keine Build-Schritte oder externe Konfigurationsdateien.

### Option B – Nutzung des Generators (Empfohlen)

Öffne `generator/index.html` in einem Browser oder besuche den [gehosteten Generator](https://pythontogo.github.io/terminal-portfolio-template/generator/).

#### Bereiche des Generator-Formulars

| Bereich | Felder |
| --- | --- |
| **Profile (Profil)** | Vollständiger Name, E-Mail, GitHub-Benutzername, Blog-Titel, Intro/Über-mich-Text (optional) |
| **Links** | GitHub-URL, LinkedIn-URL (optional), Blog-URL (optional), Andere (optional: Name und URL pro Zeile, getrennt durch ` |
| **Theme** | Standard-Theme |
| **Banner** | Banner-Text, Banner-Schriftstil (block, dotted, light, minimal, shadow), Live-Vorschau |

#### Config-Ausgabe

Der Generator erstellt ein `window.TERMINAL_CONFIG`-Objekt, das wie folgt aussieht:

```javascript
{
  profile: { name, email, githubUsername, blogTitle },
  links: { github, linkedin?, blog?, others? },
  theme: { defaultTheme, bannerText, bannerFont },
  content: { aboutLines? }
}

```

#### Wie die Config verwendet wird

| Config-Pfad | Verwendet für |
| --- | --- |
| `profile.name` | Banner-Text (wenn `theme.bannerText` leer ist), Terminal-Prompt, Fallback-About-Text, `CLAUDE_OWNER_NAME` |
| `profile.email` | Ausführung des `email`-Befehls |
| `profile.githubUsername` | Generierung des GitHub-Links und Abrufen der Repositories für den `projects`-Befehl |
| `links.github` | Wird in der `links`-Tabelle angezeigt, genutzt durch den `github`-Befehl |
| `links.linkedin` | Wird in der `links`-Tabelle angezeigt, genutzt durch den `linkedin`-Befehl (ausgeblendet, falls leer) |
| `links.blog` | Wird in der `links`-Tabelle angezeigt (ausgeblendet, falls leer) |
| `links.others` | Wird in der `links`-Tabelle angezeigt und erstellt benutzerdefinierte Befehle (z.B. Hinzufügen von `Twitter` lässt dich `twitter` tippen) |
| `theme.defaultTheme` | Legt das anfängliche Farb-Theme beim Laden der Seite fest |
| `theme.bannerText` | Text, der als ASCII-Banner gerendert wird |
| `theme.bannerFont` | Stil des Banners (block, dotted, light, minimal, shadow) |
| `content.aboutLines` | Die Ausgabe des `about`-Befehls (Fallback: "Hi there, I am {Name}") |

---

## 💻 Verfügbare Befehle

| Befehl | Beschreibung |
| --- | --- |
| `help` | Zeigt alle verfügbaren Befehle an |
| `about` | Zeigt den Intro/Über-mich-Text an |
| `links` | Zeigt eine Tabelle mit GitHub, LinkedIn, Blog und benutzerdefinierten Links |
| `projects` | Ruft GitHub-Repositories über die GitHub-API ab und zeigt sie an |
| `email` | Öffnet den Standard-Mail-Client (`mailto:`) |
| `linkedin`, `github` | Öffnet die entsprechenden URLs in einem neuen Tab (LinkedIn wird ausgeblendet, falls nicht konfiguriert) |
| `theme ls` | Zeigt alle verfügbaren Themes an |
| `theme set <name>` | Ändert das aktuelle Theme |
| `theme random` | Wendet ein zufälliges Theme an |
| `banner` | Zeigt das ASCII-Banner an |
| `clear` | Leert die Terminal-Ausgabe |
| `history` | Zeigt den Befehlsverlauf an |
| `echo <text>` | Gibt den eingegebenen Text im Terminal aus |
| `ping <host>` | Führt eine gefälschte Ping-Simulation aus |
| `explain`, `run`, `edit` | Claude-artige Easter Eggs |
| `ls`, `cd` | Gefälschte Dateisystem-Navigationsbefehle |
| `vi`, `vim`, `nvim`, `emacs` | Witze über Texteditoren |
| `sudo` | "Permission denied" (Zugriff verweigert) Nachricht + Easter Egg |

*Hinweis: Benutzerdefinierte Links in `links.others` werden automatisch zu Befehlen (z. B. aktiviert die Konfiguration `Twitter|https://...` den Befehl `twitter`).*

---

## 🎨 Themes & Anpassung

### Themes

Die folgenden Themes sind standardmäßig verfügbar:
`lila` (Standard), `midnight`, `chocolate`, `og` (Original), `rainbow`, `orange`, `olive`, `bluescreen`

### ASCII-Banner

* **Schriftstile:** block, dotted, light, minimal, shadow
* **Textformat:** Sowohl Groß- als auch Kleinbuchstaben werden unterstützt.
* **Konfiguration:** Gesteuert über `theme.bannerText` (oder Fallback auf `profile.name`) und `theme.bannerFont`.

---

## 🏗 Entwicklungshinweise

### Skript-Lade-Reihenfolge (`index.html`)

Um sicherzustellen, dass alles korrekt funktioniert, werden die Skripte in dieser Reihenfolge geladen:

1. `terminal-config.js` (optional, Generator-Ausgabe)
2. `js/github.js`
3. `js/caret.js`
4. `js/ascii_banner.js`
5. `js/commands.js`
6. `js/main.js`

### Lokales Testen

* Es werden keine Build-Tools benötigt (kein Webpack, Vite, Node.js erforderlich).
* Öffne einfach `index.html` in deinem Browser oder stelle den Ordner über einen einfachen lokalen Webserver bereit (z. B. `python -m http.server`).

### CI/CD & Qualitätsprüfung

Wenn du das Template forkst oder änderst, läuft die CI automatisch:

* **Tests** (`npm test`): Unit-Tests (z. B. `completeQuery`, Generator-Ausgabevalidierung).
* **Lint** (`npm run lint`): ESLint für Code-Qualität.
* **Audit** (`npm audit`): Abhängigkeits-Sicherheitsprüfung.

Lokal ausführen: `npm install` → `npm test` → `npm run lint`

---

## 🌐 Deployment (GitHub Pages)

Dieses Template enthält einen einsatzbereiten GitHub Actions-Workflow unter `.github/workflows/deploy-pages.yml`, um deine Seite automatisch bereitzustellen.

1. Erstelle ein neues Repository aus diesem Template (oder Fork/Clone es).
2. Pushe deine Anpassungen in den Standard-Branch (`main` oder `master`).
3. Navigiere in deinem GitHub-Repository zu **Settings → Pages**.
4. Setze das Dropdown-Menü **Source** auf **GitHub Actions**.

Nachdem die GitHub Action **"Deploy terminal portfolio to GitHub Pages"** zum ersten Mal erfolgreich ausgeführt wurde, ist deine Live-Seite unter folgender Adresse erreichbar:
`https://<dein-github-benutzername>.github.io/<dein-repo-name>/`

---

## 🤝 Mitwirken (Contributing)

Pull Requests, Fehlerberichte (Bug Reports) und Verbesserungsvorschläge sind jederzeit willkommen!

## 📜 Credits

* Ursprüngliches Terminal-Portfolio-Konzept und Template erstellt von **[PythonToGo](https://github.com/PythonToGo)**.

