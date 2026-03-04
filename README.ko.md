# 👨‍💻 Terminal Portfolio Template

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-success?style=flat-square&logo=github)](https://pythontogo.github.io/terminal-portfolio-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Read in:** [English](README.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [中文](README.zh-CN.md) | [Türkçe](README.tr.md)

---

이 프로젝트는 가벼운 **터미널 스타일의 개인 홈페이지 템플릿**입니다. 복잡한 빌드 도구 없이 순수 HTML, CSS, JavaScript만으로 구성된 심플한 정적 웹사이트입니다.

몇 가지 설정값을 직접 수정하거나, 내장된 **Config Generator**를 사용하여 나만의 멋진 포트폴리오를 만들어보세요!

[![Live Demo](https://img.shields.io/badge/🖥️_Live_Demo-2EA043?style=for-the-badge)](https://pythontogo.github.io/terminal-portfolio-template)
[![Config Generator](https://img.shields.io/badge/⚙️_Config_Generator-0052CC?style=for-the-badge)](https://pythontogo.github.io/terminal-portfolio-template/generator/)

## 👀 미리보기 및 데모

### 실시간 데모 (Live Demo)
> 💡 자연스러운 타이핑 애니메이션과 대화형 명령어들을 직접 경험해 보세요.
![demo_terminal_like_portfolio](https://github.com/user-attachments/assets/b1a77e2b-0ec1-40d4-b592-3a73081e96f0)

### 설정 생성기 (Config Generator)
> ⚙️ 코드를 한 줄도 만지지 않고 시각적으로 나만의 설정 파일을 만들어 보세요!
![how_to_use_generator](https://github.com/user-attachments/assets/3f040e0c-4f50-4e9a-8954-d46b2a6e4804)

제작자: [**PythonToGo**](https://github.com/PythonToGo)

---

## 🚀 빠른 시작 (Quick Start)

가장 빠르게 나만의 터미널 포트폴리오를 띄워보는 방법입니다. 터미널에 아래 명령어를 복사하여 붙여넣으세요!

```bash
# 1. 저장소 클론
git clone [https://github.com/PythonToGo/terminal-portfolio-template.git](https://github.com/PythonToGo/terminal-portfolio-template.git)

# 2. 폴더 이동
cd terminal-portfolio-template

# 3. 웹 브라우저로 index.html 열기
# (macOS는 'open', Windows는 'start', Linux는 'xdg-open' 사용)
open index.html

```

실행 후 다음 두 가지 방법 중 하나로 커스터마이징할 수 있습니다:

* **옵션 A (수동):** `js/commands.js` 파일을 열어 직접 값을 수정합니다.
* **옵션 B (추천):** **[설정 생성기(Config Generator)](https://pythontogo.github.io/terminal-portfolio-template/generator/)**에 접속하여 쉽게 `terminal-config.js` 파일을 생성합니다.

---

## 🛠 프로젝트 구조 (Project Structure)

주요 파일과 디렉토리에 대한 간단한 요약입니다:

```text
.
├── index.html              # 메인 터미널 페이지
├── terminal-config.js      # 사용자 설정 파일 (선택 사항, 생성기를 통해 만들어짐)
├── js/                     # 핵심 로직 (명령어, GitHub API 등)
├── css/                    # 다양한 터미널 색상 테마들
└── generator/              # 웹 기반 설정 생성기 도구
    ├── index.html          # 설정 생성기 폼
    ├── main.js             # 폼 로직 및 설정 파일 생성
    └── style.css           # 생성기 스타일

```

## ⚙️ 설정 방법 (Configuration Options)

### 옵션 A – 수동 설정

`js/commands.js` 파일을 열고 파일 상단에 있는 다음 상수 값들을 수정하세요:

* `GITHUB_USERNAME`, `EMAIL_ADDRESS`
* `linkedin`, `github`, `blog` (링크 섹션에서 숨기려면 값을 빈 문자열 `""`로 두세요)
* `linksOthers` – 커스텀 링크 추가 (형식: `{ "twitter": { name: "Twitter", url: "..." } }`)
* `CLAUDE_OWNER_NAME` (대체 이름)
* `about`, `links`, `projects`, `help`, `welcomeMsg`, `banner`
* `themes` – 테마 이름과 해당 CSS 파일 경로 매핑
* `allCommands` – Tab 자동완성에 사용되는 명령어 목록

> **참고:** 빌드 단계나 외부 설정 파일이 필요 없는 가장 간단한 방법입니다.

### 옵션 B – 생성기 사용 (추천)

브라우저에서 `generator/index.html`을 열거나, [호스팅된 생성기](https://pythontogo.github.io/terminal-portfolio-template/generator/)에 접속하세요.

#### 생성기 입력 항목

| 섹션 | 필드 |
| --- | --- |
| **Profile (프로필)** | 이름, 이메일, GitHub 사용자명, 블로그 제목, 소개/About 텍스트 (선택) |
| **Links (링크)** | GitHub URL, LinkedIn URL (선택), 블로그 URL (선택), 기타 (선택: 이름과 URL을 ` |
| **Theme (테마)** | 기본 테마 |
| **Banner (배너)** | 배너 텍스트, 배너 폰트 스타일 (block, dotted, light, minimal, shadow), 실시간 미리보기 |

#### 설정 출력 결과

생성기는 다음과 같은 형태의 `window.TERMINAL_CONFIG` 객체를 만듭니다:

```javascript
{
  profile: { name, email, githubUsername, blogTitle },
  links: { github, linkedin?, blog?, others? },
  theme: { defaultTheme, bannerText, bannerFont },
  content: { aboutLines? }
}

```

#### 설정값이 사용되는 곳

| 설정 경로 | 사용 용도 |
| --- | --- |
| `profile.name` | 배너 텍스트(`theme.bannerText`가 비어있을 때), 터미널 프롬프트, 기본 about 텍스트, `CLAUDE_OWNER_NAME` |
| `profile.email` | `email` 명령어 실행 시 수신자 |
| `profile.githubUsername` | GitHub 링크 생성 및 `projects` 명령어에서 저장소를 불러올 때 사용 |
| `links.github` | `links` 표에 표시, `github` 명령어에서 사용 |
| `links.linkedin` | `links` 표에 표시, `linkedin` 명령어에서 사용 (비어있으면 숨김) |
| `links.blog` | `links` 표에 표시 (비어있으면 숨김) |
| `links.others` | `links` 표에 표시되며 커스텀 명령어를 생성 (예: `Twitter` 추가 시 `twitter` 명령어 사용 가능) |
| `theme.defaultTheme` | 페이지 로드 시 적용될 초기 색상 테마 |
| `theme.bannerText` | ASCII 배너로 렌더링될 텍스트 |
| `theme.bannerFont` | 배너 스타일 (block, dotted, light, minimal, shadow) |
| `content.aboutLines` | `about` 명령어의 출력 내용 (기본값: "Hi there, I am {이름}") |

---

## 💻 사용 가능한 명령어 (Available Commands)

| 명령어 | 설명 |
| --- | --- |
| `help` | 사용 가능한 모든 명령어 목록 표시 |
| `about` | 소개/프로필 텍스트 표시 |
| `links` | GitHub, LinkedIn, 블로그 및 커스텀 링크 목록 표시 |
| `projects` | GitHub API를 통해 내 저장소(Repository) 목록을 불러와 표시 |
| `email` | 기본 메일 클라이언트 열기 (`mailto:`) |
| `linkedin`, `github` | 새 탭에서 해당 URL 열기 (설정되지 않은 경우 숨겨짐) |
| `theme ls` | 사용 가능한 모든 테마 목록 표시 |
| `theme set <name>` | 현재 테마 변경 |
| `theme random` | 무작위 테마 적용 |
| `banner` | ASCII 배너 표시 |
| `clear` | 터미널 출력 화면 지우기 |
| `history` | 명령어 사용 기록 표시 |
| `echo <text>` | 입력한 텍스트를 터미널에 그대로 출력 |
| `ping <host>` | 가짜 핑(ping) 시뮬레이션 실행 |
| `explain`, `run`, `edit` | Claude 스타일의 이스터 에그 |
| `ls`, `cd` | 가짜 파일 시스템 탐색 명령어 |
| `vi`, `vim`, `nvim`, `emacs` | 텍스트 에디터 관련 농담 |
| `sudo` | 권한 거부 메시지 및 이스터 에그 |

*참고: `links.others`에 추가된 커스텀 링크는 자동으로 명령어가 됩니다. (예: `Twitter|https://...`로 설정하면 `twitter` 명령어 활성화)*

---

## 🎨 테마 및 커스터마이징 (Themes)

### 테마 (Themes)

기본적으로 다음 테마들이 제공됩니다:
`lila` (기본값), `midnight`, `chocolate`, `og` (오리지널), `rainbow`, `orange`, `olive`, `bluescreen`

### ASCII 배너

* **폰트 스타일:** block, dotted, light, minimal, shadow
* **텍스트 포맷:** 대문자와 소문자 모두 지원합니다.
* **설정 방법:** `theme.bannerText` (또는 `profile.name`으로 대체됨) 및 `theme.bannerFont`를 통해 관리됩니다.

---

## 🏗 개발 참고 사항 (Development Notes)

### 스크립트 로드 순서 (`index.html`)

모든 기능이 정상적으로 작동하도록 스크립트는 다음 순서로 로드됩니다:

1. `terminal-config.js` (선택 사항, 생성기 출력물)
2. `js/github.js`
3. `js/caret.js`
4. `js/ascii_banner.js`
5. `js/commands.js`
6. `js/main.js`

### 로컬 테스트

* Webpack, Vite, Node.js와 같은 빌드 도구가 전혀 필요하지 않습니다.
* 브라우저에서 `index.html`을 직접 열거나, 간단한 로컬 웹 서버(예: `python -m http.server`)를 사용해 폴더를 서빙하면 됩니다.

---

## 🌐 배포 (GitHub Pages)

이 템플릿에는 사이트를 자동으로 배포할 수 있는 GitHub Actions 워크플로우(`.github/workflows/deploy-pages.yml`)가 포함되어 있습니다.

1. 이 템플릿을 사용하여 새로운 저장소를 생성합니다(또는 Fork/Clone 합니다).
2. 수정한 내용을 기본 브랜치(`main` 또는 `master`)에 푸시(Push)합니다.
3. GitHub 저장소의 **Settings(설정) → Pages**로 이동합니다.
4. **Source** 드롭다운 메뉴를 **GitHub Actions**로 설정합니다.

**"Deploy terminal portfolio to GitHub Pages"** GitHub Action이 처음 성공적으로 실행되고 나면, 아래 주소에서 웹사이트를 확인할 수 있습니다:
`https://<본인-GitHub-사용자명>.github.io/<저장소-이름>/`

---

## 🤝 기여하기 (Contributing)

풀 리퀘스트(PR), 버그 리포트, 개선 제안은 언제나 환영합니다!

## 📜 크레딧 (Credits)

* 원본 터미널 포트폴리오 컨셉 및 템플릿 제작: **[PythonToGo](https://github.com/PythonToGo)**
