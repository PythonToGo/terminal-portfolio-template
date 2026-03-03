# Terminal Portfolio Template

**언어:** [English](README.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [中文](README.zh-CN.md) | [Türkçe](README.tr.md)

---

터미널 스타일의 **개인 홈페이지** 템플릿입니다. HTML, CSS, JavaScript만 사용한 정적 사이트입니다.

몇 가지 설정 값을 직접 수정하거나, 내장된 **config generator**를 사용해 자신만의 페이지를 만들 수 있습니다.

<!-- <img width="1036" height="850" alt="image" src="https://github.com/user-attachments/assets/9d5c85f8-6b2d-438e-ac22-3578dbbbefc2" /> -->

## 데모

![demo_terminal_like_portfolio-ezgif com-crop](https://github.com/user-attachments/assets/b1a77e2b-0ec1-40d4-b592-3a73081e96f0)

### 설정 생성 및 웹사이트 제작 방법

![how_to_use-ezgif com-crop](https://github.com/user-attachments/assets/3f040e0c-4f50-4e9a-8954-d46b2a6e4804)

제작: [**PythonToGo**](https://github.com/PythonToGo).

## 프로젝트 구조

```
.
├── index.html              # 메인 터미널 페이지
├── terminal-config.js      # 사용자 설정 (생성됨, 선택)
├── js/
│   ├── main.js             # 명령 처리, UI 로직
│   ├── commands.js         # 설정값, 콘텐츠 배열, 명령 목록
│   ├── ascii_banner.js     # ASCII 배너 폰트 및 렌더링
│   ├── github.js           # GitHub API – projects용 repo 조회
│   └── caret.js            # 타이핑 시뮬레이션, 커서
├── css/
│   ├── style_lila.css      # 기본 테마
│   ├── style_midnight.css
│   ├── style_chocolate.css
│   ├── style_og.css         # original
│   ├── style_rainbow.css
│   ├── style_orange.css
│   ├── style_olive.css
│   └── style_bluescreen.css
└── generator/
    ├── index.html          # 설정 생성기 폼
    ├── main.js             # 폼 로직, 설정 빌드
    └── style.css           # 생성기 스타일
```

## 빠른 시작

1. 저장소를 클론하거나 GitHub 템플릿으로 사용합니다.
2. 브라우저에서 `index.html`을 열어 터미널을 확인합니다.
3. 다음 두 가지 중 하나로 커스터마이즈합니다:
   - **방법 A – `js/commands.js` 직접 수정** 또는
   - **방법 B – generator로 `terminal-config.js` 생성** (빠른 설정: [**Config Generator로 이동**](https://pythontogo.github.io/terminal-portfolio-template/generator/) ).

## 방법 A – 수동 설정

`js/commands.js`를 열고 상단 값을 수정합니다:

- `GITHUB_USERNAME`, `EMAIL_ADDRESS`
- `linkedin`, `github`, `blog` (비어 있으면 links에서 숨김)
- `linksOthers` – 커스텀 링크 `{ "twitter": { name: "Twitter", url: "..." } }`
- `CLAUDE_OWNER_NAME` (`profile.name`에서)
- `about`, `links`, `projects`, `help`, `welcomeMsg`, `banner`
- `themes` – 테마 이름 → CSS 경로
- `allCommands` – 탭 완성 목록

> 빌드 없이 사용할 수 있는 가장 단순한 방식입니다.

## 방법 B – generator 사용 (권장)

브라우저에서 `generator/index.html`을 엽니다 (또는 호스팅된 generator 사용).

### Generator 폼 섹션

| 섹션 | 필드 |
|------|------|
| **Profile** | 이름, 이메일, GitHub 사용자명, 블로그 제목, 소개/About 텍스트 (선택) |
| **Links** | GitHub URL, LinkedIn URL (선택), Blog URL (선택), Others (선택: 한 줄에 `Name`과 `URL`, `\|`로 구분) |
| **Theme** | 기본 테마 |
| **Banner** | 배너 텍스트, 배너 폰트 스타일 (block, dotted, light, minimal, shadow), 실시간 미리보기 |

### Config 출력

generator는 `window.TERMINAL_CONFIG`를 생성합니다:

```js
{
  profile: { name, email, githubUsername, blogTitle },
  links: { github, linkedin?, blog?, others? },
  theme: { defaultTheme, bannerText, bannerFont },
  content: { aboutLines? }
}
```

### Config 사용처

| Config 경로 | 용도 |
|-------------|------|
| `profile.name` | 배너 텍스트 (`theme.bannerText` 비어 있을 때), 프롬프트, about 기본값, `CLAUDE_OWNER_NAME` |
| `profile.email` | `email` 명령 |
| `profile.githubUsername` | GitHub 링크, projects repo 목록 |
| `links.github` | `links` 테이블, `github` 명령 |
| `links.linkedin` | `links` 테이블, `linkedin` 명령 (선택 – 비어 있으면 숨김) |
| `links.blog` | `links` 테이블 (선택 – 비어 있으면 숨김) |
| `links.others` | `links` 테이블 + 커스텀 명령 (예: `Twitter` → `twitter` 입력) |
| `theme.defaultTheme` | 로드 시 초기 테마 |
| `theme.bannerText` | ASCII 배너 텍스트 |
| `theme.bannerFont` | 배너 스타일: block, dotted, light, minimal, shadow |
| `content.aboutLines` | `about` 명령 본문 (선택 – 기본값: "Hi there, I am {Full Name}") |

## 사용 가능한 명령

| 명령 | 설명 |
|------|------|
| `help` | 명령 목록 |
| `about` | 소개/About 텍스트 |
| `links` | GitHub, LinkedIn, blog, 커스텀 링크 |
| `projects` | GitHub repos (API 사용) |
| `email` | mailto 열기 |
| `linkedin`, `github` | URL 열기 (linkedin 미설정 시 숨김) |
| `theme ls` | 테마 목록 |
| `theme set <name>` | 테마 설정 |
| `theme random` | 랜덤 테마 |
| `banner` | ASCII 배너 표시 |
| `clear` | 터미널 지우기 |
| `history` | 명령 기록 |
| `echo <text>` | 텍스트 출력 |
| `ping <host>` | 가짜 ping |
| `explain`, `run`, `edit` | Claude 스타일 이스터에그 |
| `ls`, `cd` | 가짜 파일 목록 |
| `vi`, `vim`, `nvim`, `emacs` | 에디터 농담 |
| `sudo` | 권한 거부 + 이스터에그 |

`links.others`의 커스텀 링크는 명령이 됩니다 (예: `Twitter|https://...` → `twitter` 입력).

## 테마

- `lila` (기본), `midnight`, `chocolate`, `og` (original), `rainbow`, `orange`, `olive`, `bluescreen`

## ASCII 배너

- **폰트 스타일**: block, dotted, light, minimal, shadow
- **텍스트**: 대문자·소문자 지원
- **Config**: `theme.bannerText` (또는 `profile.name`), `theme.bannerFont`

## 스크립트 로드 순서 (`index.html`)

1. `terminal-config.js` (선택)
2. `js/github.js`
3. `js/caret.js`
4. `js/ascii_banner.js`
5. `js/commands.js`
6. `js/main.js`

## 개발 참고

- 빌드 도구 없음; 순수 HTML/CSS/JS.
- 로컬 테스트: `index.html` 열기 또는 정적 서버로 폴더 서빙.
- GitHub Pages 바로 사용 가능.

### GitHub Actions 워크플로 예시 (GitHub Pages)

1. `.github/workflows/` 생성
2. `pages.yml` 추가:

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

3. 저장소 설정에서 **Pages** 활성화, 소스: **GitHub Actions**.

## 기여

Pull request, Improvement 는 언제나 환영!
## 크레딧

- 원본 터미널 포트폴리오 및 템플릿: [**PythonToGo**](https://github.com/PythonToGo).
