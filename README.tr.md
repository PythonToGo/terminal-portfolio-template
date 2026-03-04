# Terminal Portfolio Template

**Dil:** [English](README.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [中文](README.zh-CN.md) | [Türkçe](README.tr.md)

---

Bu, **terminal tarzı kişisel ana sayfa** şablonudur. Yalnızca HTML, CSS ve JavaScript kullanan basit bir statik site olarak oluşturulmuştur.

Birkaç yapılandırma değerini düzenleyerek veya yerleşik **config generator**'ı kullanarak kendi sayfanızı oluşturabilirsiniz.

<!-- <img width="1036" height="850" alt="image" src="https://github.com/user-attachments/assets/9d5c85f8-6b2d-438e-ac22-3578dbbbefc2" /> -->

## Demo

![demo_terminal_like_portfolio-ezgif com-crop](https://github.com/user-attachments/assets/b1a77e2b-0ec1-40d4-b592-3a73081e96f0)

### Config oluşturma ve kendi web sitenizi yapma

![how_to_use-ezgif com-crop](https://github.com/user-attachments/assets/3f040e0c-4f50-4e9a-8954-d46b2a6e4804)

[**PythonToGo**](https://github.com/PythonToGo) tarafından yapılmıştır.

## Proje yapısı

```
.
├── index.html              # Ana terminal sayfası
├── terminal-config.js      # Kullanıcı yapılandırması (üretilir, isteğe bağlı)
├── js/
│   ├── main.js             # Komut işleme, UI mantığı
│   ├── commands.js         # Yapılandırma değerleri, içerik dizileri, komut listesi
│   ├── ascii_banner.js     # ASCII banner fontları ve işleme
│   ├── github.js           # GitHub API – projeler için repo çeker
│   └── caret.js            # Yazma simülasyonu, imleç
├── css/
│   ├── style_lila.css      # Varsayılan tema
│   ├── style_midnight.css
│   ├── style_chocolate.css
│   ├── style_og.css         # original
│   ├── style_rainbow.css
│   ├── style_orange.css
│   ├── style_olive.css
│   └── style_bluescreen.css
└── generator/
    ├── index.html          # Config generator formu
    ├── main.js             # Form mantığı, config oluşturma
    └── style.css           # Generator stilleri
```

## Hızlı başlangıç

1. Bu depoyu klonlayın veya GitHub şablonu olarak kullanın.
2. Terminali görmek için tarayıcıda `index.html` açın.
3. İki yoldan biriyle özelleştirin:
   - **Seçenek A – `js/commands.js` dosyasını doğrudan düzenleyin** VEYA
   - **Seçenek B – `terminal-config.js` oluşturmak için generator kullanın** (hızlı kurulum: [**Config Generator'a Git**](https://pythontogo.github.io/terminal-portfolio-template/generator/) ).

## Seçenek A – manuel yapılandırma

`js/commands.js` dosyasını açın ve üstteki değerleri düzenleyin:

- `GITHUB_USERNAME`, `EMAIL_ADDRESS`
- `linkedin`, `github`, `blog` (boş = linklerde gizlenir)
- `linksOthers` – özel linkler `{ "twitter": { name: "Twitter", url: "..." } }`
- `CLAUDE_OWNER_NAME` (`profile.name`'den)
- `about`, `links`, `projects`, `help`, `welcomeMsg`, `banner`
- `themes` – tema adı → CSS yolu
- `allCommands` – sekme tamamlama listesi

> Bu en basit moddur ve herhangi bir derleme adımı gerektirmez.

## Seçenek B – generator kullanma (önerilen)

Tarayıcıda `generator/index.html` açın (veya barındırılan generator'ı kullanın).

### Generator form bölümleri

| Bölüm | Alanlar |
|-------|---------|
| **Profile** | Ad soyad, e-posta, GitHub kullanıcı adı, blog başlığı, Giriş/About metni (isteğe bağlı) |
| **Links** | GitHub URL, LinkedIn URL (isteğe bağlı), Blog URL (isteğe bağlı), Diğerleri (isteğe bağlı: satır başına `Name` ve `URL`, `\|` ile ayrılmış) |
| **Theme** | Varsayılan tema |
| **Banner** | Banner metni, Banner font stili (block, dotted, light, minimal, shadow), canlı önizleme |

### Config çıktısı

Generator `window.TERMINAL_CONFIG` oluşturur:

```js
{
  profile: { name, email, githubUsername, blogTitle },
  links: { github, linkedin?, blog?, others? },
  theme: { defaultTheme, bannerText, bannerFont },
  content: { aboutLines? }
}
```

### Config kullanımı

| Config yolu | Kullanım |
|-------------|----------|
| `profile.name` | Banner metni (`theme.bannerText` boşsa), istem, about yedeği, `CLAUDE_OWNER_NAME` |
| `profile.email` | `email` komutu |
| `profile.githubUsername` | GitHub linki, projeler repo listesi |
| `links.github` | `links` tablosu, `github` komutu |
| `links.linkedin` | `links` tablosu, `linkedin` komutu (isteğe bağlı – boşsa gizlenir) |
| `links.blog` | `links` tablosu (isteğe bağlı – boşsa gizlenir) |
| `links.others` | `links` tablosu + özel komutlar (örn. `Twitter` → `twitter` yazın) |
| `theme.defaultTheme` | Yüklemede başlangıç teması |
| `theme.bannerText` | ASCII banner metni |
| `theme.bannerFont` | Banner stili: block, dotted, light, minimal, shadow |
| `content.aboutLines` | `about` komutu gövdesi (isteğe bağlı – yedek: "Hi there, I am {Full Name}") |

## Mevcut komutlar

| Komut | Açıklama |
|-------|----------|
| `help` | Komut listesi |
| `about` | Giriş/About metni |
| `links` | GitHub, LinkedIn, blog, özel linkler |
| `projects` | GitHub repoları (API üzerinden) |
| `email` | Mailto aç |
| `linkedin`, `github` | URL'leri aç (linkedin yapılandırılmamışsa gizlenir) |
| `theme ls` | Temaları listele |
| `theme set <name>` | Tema ayarla |
| `theme random` | Rastgele tema |
| `banner` | ASCII banner göster |
| `clear` | Terminali temizle |
| `history` | Komut geçmişi |
| `echo <text>` | Metin yazdır |
| `ping <host>` | Sahte ping |
| `explain`, `run`, `edit` | Claude tarzı easter egg'ler |
| `ls`, `cd` | Sahte dosya listesi |
| `vi`, `vim`, `nvim`, `emacs` | Editör şakaları |
| `sudo` | İzin reddedildi + easter egg |

`links.others`'taki özel linkler komut olur (örn. `Twitter|https://...` → `twitter` yazın).

## Temalar

- `lila` (varsayılan), `midnight`, `chocolate`, `og` (original), `rainbow`, `orange`, `olive`, `bluescreen`

## ASCII banner

- **Font stilleri**: block, dotted, light, minimal, shadow
- **Metin**: Büyük ve küçük harf desteklenir
- **Config**: `theme.bannerText` (veya `profile.name`), `theme.bannerFont`

## Betik yükleme sırası (`index.html`)

1. `terminal-config.js` (isteğe bağlı)
2. `js/github.js`
3. `js/caret.js`
4. `js/ascii_banner.js`
5. `js/commands.js`
6. `js/main.js`

## Geliştirme notları

- Derleme aracı yok; düz HTML/CSS/JS.
- Yerel test: `index.html` açın veya klasörü statik sunucu ile sunun.
- GitHub Pages hazır çalışır.

## GitHub Pages dağıtımı (Actions ile)

Bu şablon, `.github/workflows/deploy-pages.yml` konumunda kullanıma hazır bir GitHub Actions iş akışı içerir.

1. Bu depoyu şablon olarak kullanarak yeni bir depo oluşturun veya kendi hesabınıza fork/clone edin.
2. Değişikliklerinizi varsayılan dala (`main` veya `master`) push edin.
3. Depoda **Settings → Pages** bölümüne gidin ve **Source** alanını **GitHub Actions** olarak ayarlayın.

**Deploy terminal portfolio to GitHub Pages** iş akışı ilk kez başarıyla çalıştıktan sonra siteniz şu adresten erişilebilir olur:

- `https://<GitHub-kullanıcı-adınız>.github.io/<depo-adınız>/`

Bu şablonun kendi demo sürümü şu adreste yayınlanmaktadır:

- `https://pythontogo.github.io/terminal-portfolio-template`

## Katkıda bulunma

Pull request'ler ve iyileştirmeler memnuniyetle karşılanır.

## Teşekkürler

- Orijinal terminal portfolyo ve şablon [**PythonToGo**](https://github.com/PythonToGo) tarafından yapılmıştır.
