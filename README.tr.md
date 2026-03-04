# 👨‍💻 Terminal Portfolio Template

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-success?style=flat-square&logo=github)](https://pythontogo.github.io/terminal-portfolio-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Read in:** [English](README.md) | [한국어](README.ko.md) | [Deutsch](README.de.md) | [中文](README.zh-CN.md) | [Türkçe](README.tr.md)

---

Bu, hafif bir **terminal tarzı kişisel web sayfası şablonudur**. Herhangi bir derleme aracına (build tool) ihtiyaç duymayan basit bir statik site olarak oluşturulmuştur: Sadece saf HTML, CSS ve JavaScript.

Bu depoyu kendi portföyünüz için bir **şablon (template)** olarak kullanabilirsiniz. Bunun için birkaç yapılandırma değerini manuel olarak düzenleyebilir veya yerleşik **yapılandırma oluşturucuyu (config generator)** kullanabilirsiniz.

[![Live Demo](https://img.shields.io/badge/🖥️_Live_Demo-2EA043?style=for-the-badge)](https://pythontogo.github.io/terminal-portfolio-template)
[![Config Generator](https://img.shields.io/badge/⚙️_Config_Generator-0052CC?style=for-the-badge)](https://pythontogo.github.io/terminal-portfolio-template/generator/)

## 👀 Önizleme ve Demo (Preview & Demo)

### Canlı Demo (Live Demo)
> 💡 Daktilo animasyonunu ve etkileşimli komutları canlı olarak deneyimleyin.
![demo_terminal_like_portfolio](https://github.com/user-attachments/assets/b1a77e2b-0ec1-40d4-b592-3a73081e96f0)

### Yapılandırma Oluşturucu (Config Generator)
> ⚙️ Kodlara hiç dokunmadan kişiselleştirilmiş yapılandırma dosyanızı görsel olarak oluşturun!
![how_to_use_generator](https://github.com/user-attachments/assets/3f040e0c-4f50-4e9a-8954-d46b2a6e4804)

Geliştirici: [**PythonToGo**](https://github.com/PythonToGo)

---

## 🚀 Hızlı Başlangıç (Quick Start)

Terminal portföyünüzü saniyeler içinde çalışır hale getirin. Aşağıdaki komutları kopyalayıp terminalinize yapıştırın:

```bash
# 1. Depoyu klonlayın
git clone [https://github.com/PythonToGo/terminal-portfolio-template.git](https://github.com/PythonToGo/terminal-portfolio-template.git)

# 2. Dizin içerisine girin
cd terminal-portfolio-template

# 3. index.html dosyasını varsayılan web tarayıcınızda açın
# (macOS için 'open', Windows için 'start', Linux için 'xdg-open' kullanın)
open index.html

```

Açıldıktan sonra, aşağıdaki yöntemlerden birini kullanarak özelleştirebilirsiniz:

* **A Seçeneği (Manuel):** Doğrudan `js/commands.js` dosyasını düzenleyin.
* **B Seçeneği (Önerilen):** `terminal-config.js` dosyanızı kolayca oluşturmak için **[Yapılandırma Oluşturucuyu (Config Generator)](https://pythontogo.github.io/terminal-portfolio-template/generator/)** kullanın.

---

## 🛠 Proje Yapısı (Project Structure)

Temel dosya ve dizinlere kısa bir bakış:

```text
.
├── index.html              # Ana terminal sayfası
├── terminal-config.js      # Kişisel yapılandırmanız (isteğe bağlı, oluşturucu ile üretilir)
├── js/                     # Çekirdek mantık (komutlar, GitHub API, vb.)
├── css/                    # Çeşitli terminal renk temaları
└── generator/              # Web tabanlı yapılandırma oluşturucu aracı
    ├── index.html          # Yapılandırma oluşturucu formu
    ├── main.js             # Form mantığı ve yapılandırma oluşturma
    └── style.css           # Oluşturucu stilleri

```

## ⚙️ Yapılandırma Seçenekleri (Configuration Options)

### A Seçeneği – Manuel Yapılandırma

`js/commands.js` dosyasını açın ve dosyanın en üstündeki sabit değerleri düzenleyin:

* `GITHUB_USERNAME`, `EMAIL_ADDRESS`
* `linkedin`, `github`, `blog` (bağlantılar bölümünden gizlemek için boş `""` bırakın)
* `linksOthers` – Şu formatı kullanarak özel bağlantılar ekleyin: `{ "twitter": { name: "Twitter", url: "..." } }`
* `CLAUDE_OWNER_NAME` (yedek isim)
* `about`, `links`, `projects`, `help`, `welcomeMsg`, `banner`
* `themes` – Tema adlarını ilgili CSS dosya yollarına eşler
* `allCommands` – Tab (Sekme) otomatik tamamlama için kullanılan listeyi tanımlar

> **Not:** Bu en basit moddur ve hiçbir derleme adımı veya harici yapılandırma dosyası gerektirmez.

### B Seçeneği – Oluşturucuyu Kullanma (Önerilen)

Tarayıcıda `generator/index.html` dosyasını açın veya [barındırılan oluşturucuyu](https://pythontogo.github.io/terminal-portfolio-template/generator/) ziyaret edin.

#### Oluşturucu Form Bölümleri

| Bölüm | Alanlar |
| --- | --- |
| **Profile (Profil)** | Tam ad, e-posta, GitHub kullanıcı adı, blog başlığı, Giriş/Hakkımda metni (isteğe bağlı) |
| **Links (Bağlantılar)** | GitHub URL, LinkedIn URL (isteğe bağlı), Blog URL (isteğe bağlı), Diğerleri (isteğe bağlı: Her satıra bir Ad ve URL, ` |
| **Theme (Tema)** | Varsayılan tema |
| **Banner (Afiş)** | Afiş metni, Afiş yazı tipi stili (block, dotted, light, minimal, shadow), canlı önizleme |

#### Yapılandırma Çıktısı

Oluşturucu, aşağıdaki gibi görünen bir `window.TERMINAL_CONFIG` nesnesi üretir:

```javascript
{
  profile: { name, email, githubUsername, blogTitle },
  links: { github, linkedin?, blog?, others? },
  theme: { defaultTheme, bannerText, bannerFont },
  content: { aboutLines? }
}

```

#### Yapılandırma Nasıl Kullanılır?

| Yapılandırma Yolu | Kullanım Amacı |
| --- | --- |
| `profile.name` | Afiş metni (`theme.bannerText` boşsa), terminal komut satırı, yedek about metni, `CLAUDE_OWNER_NAME` |
| `profile.email` | `email` komutunu çalıştırırken kullanılır |
| `profile.githubUsername` | GitHub bağlantısını oluşturur ve `projects` komutu için depoları (repo) çeker |
| `links.github` | `links` tablosunda gösterilir, `github` komutu tarafından kullanılır |
| `links.linkedin` | `links` tablosunda gösterilir, `linkedin` komutu tarafından kullanılır (boşsa gizlenir) |
| `links.blog` | `links` tablosunda gösterilir (boşsa gizlenir) |
| `links.others` | `links` tablosunda gösterilir ve özel komutlar oluşturur (Örn: `Twitter` eklendiğinde `twitter` yazabilirsiniz) |
| `theme.defaultTheme` | Sayfa yüklendiğinde uygulanacak başlangıç renk temasını ayarlar |
| `theme.bannerText` | ASCII afiş (banner) olarak oluşturulacak metin |
| `theme.bannerFont` | Afiş stili (block, dotted, light, minimal, shadow) |
| `content.aboutLines` | `about` komutunun çıktı içeriği (Yedek değer: "Hi there, I am {Tam Ad}") |

---

## 💻 Kullanılabilir Komutlar (Available Commands)

| Komut | Açıklama |
| --- | --- |
| `help` | Kullanılabilir tüm komutları listeler |
| `about` | Giriş/hakkımda metnini gösterir |
| `links` | GitHub, LinkedIn, blog ve özel bağlantıları içeren bir tablo gösterir |
| `projects` | GitHub API aracılığıyla GitHub depolarını (repo) çeker ve gösterir |
| `email` | Varsayılan e-posta istemcisini açar (`mailto:`) |
| `linkedin`, `github` | İlgili URL'leri yeni bir sekmede açar (yapılandırılmamışsa linkedin gizlenir) |
| `theme ls` | Kullanılabilir tüm temaları listeler |
| `theme set <name>` | Mevcut temayı değiştirir |
| `theme random` | Rastgele bir tema uygular |
| `banner` | ASCII afişi (banner) gösterir |
| `clear` | Terminal çıktı ekranını temizler |
| `history` | Komut geçmişini gösterir |
| `echo <text>` | Girilen metni terminalde aynen yazdırır |
| `ping <host>` | Sahte ping simülasyonu çalıştırır |
| `explain`, `run`, `edit` | Claude tarzı sürpriz yumurtalar (easter eggs) |
| `ls`, `cd` | Sahte dosya sistemi gezinme komutları |
| `vi`, `vim`, `nvim`, `emacs` | Metin düzenleyici şakaları |
| `sudo` | Erişim engellendi mesajı + sürpriz yumurta |

*Not: `links.others` içine eklenen özel bağlantılar otomatik olarak komut haline gelir. (Örn: `Twitter|https://...` olarak yapılandırmak `twitter` komutunu etkinleştirir).*

---

## 🎨 Temalar ve Özelleştirme (Themes & Customization)

### Temalar

Aşağıdaki temalar varsayılan olarak mevcuttur:
`lila` (varsayılan), `midnight`, `chocolate`, `og` (orijinal), `rainbow`, `orange`, `olive`, `bluescreen`

### ASCII Afiş (Banner)

* **Yazı tipi stilleri:** block, dotted, light, minimal, shadow
* **Metin formatı:** Hem büyük hem de küçük harfler desteklenir.
* **Yapılandırma:** `theme.bannerText` (veya yedek olarak `profile.name`) ve `theme.bannerFont` aracılığıyla yönetilir.

---

## 🏗 Geliştirme Notları (Development Notes)

### Komut Dosyası Yükleme Sırası (`index.html`)

Her şeyin doğru çalışmasını sağlamak için, komut dosyaları (script) şu sırayla yüklenir:

1. `terminal-config.js` (isteğe bağlı, oluşturucu çıktısı)
2. `js/github.js`
3. `js/caret.js`
4. `js/ascii_banner.js`
5. `js/commands.js`
6. `js/main.js`

### Yerel Test

* Hiçbir derleme aracına (Webpack, Vite, Node.js) ihtiyaç yoktur.
* Tarayıcınızda doğrudan `index.html` dosyasını açın veya herhangi bir basit yerel web sunucusunu (örn. `python -m http.server`) kullanarak klasörü sunun.

---

## 🌐 Dağıtım / Yayınlama (GitHub Pages)

Bu şablon, sitenizi otomatik olarak yayınlamak (deploy) için `.github/workflows/deploy-pages.yml` konumunda kullanıma hazır bir GitHub Actions iş akışı içerir.

1. Bu şablonu kullanarak yeni bir depo oluşturun (veya Fork/Clone yapın).
2. Yaptığınız özelleştirmeleri varsayılan dalınıza (branch - `main` veya `master`) pushlayın.
3. GitHub deponuzda **Settings (Ayarlar) → Pages (Sayfalar)** bölümüne gidin.
4. **Source (Kaynak)** açılır menüsünü **GitHub Actions** olarak ayarlayın.

**"Deploy terminal portfolio to GitHub Pages"** adlı GitHub Action ilk kez başarıyla çalıştıktan sonra, canlı sitenize şu adresten erişilebilecektir:
`https://<github-kullanici-adiniz>.github.io/<repo-adiniz>/`

---

## 🤝 Katkıda Bulunma (Contributing)

Pull Request (PR) gönderimleri, hata bildirimleri (bug report) ve iyileştirme önerileri her zaman kabul edilir!

## 📜 Krediler (Credits)

* Orijinal terminal portföyü konsepti ve şablonu **[PythonToGo](https://github.com/PythonToGo)** tarafından oluşturulmuştur.
