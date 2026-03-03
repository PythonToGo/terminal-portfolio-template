var THEME_PREVIEW_COLORS = {
  lila: {
    bodyBg: "#241634",
    bodyColor: "#ecdcf9",
    cardBg: "#1a0f24",
    cardBorder: "rgba(201, 146, 246, 0.35)",
    headerColor: "#f7e9ff",
    mutedColor: "#c4a8e8",
    inputBg: "#1a0f24",
    accent: "#c992f6"
  },
  midnight: {
    bodyBg: "#001427",
    bodyColor: "#F4D58D",
    cardBg: "#000d1a",
    cardBorder: "rgba(254, 147, 140, 0.35)",
    headerColor: "#F4D58D",
    mutedColor: "#c9a86e",
    inputBg: "#000d1a",
    accent: "#FE938C"
  },
  chocolate: {
    bodyBg: "#43281C",
    bodyColor: "#C06E52",
    cardBg: "#2d1a12",
    cardBorder: "rgba(168, 155, 231, 0.35)",
    headerColor: "#d4a574",
    mutedColor: "#a67c5c",
    inputBg: "#2d1a12",
    accent: "#A09BE7"
  },
  og: {
    bodyBg: "#211D1B",
    bodyColor: "#519975",
    cardBg: "#161210",
    cardBorder: "rgba(115, 171, 173, 0.35)",
    headerColor: "#73ABAD",
    mutedColor: "#6b8f7a",
    inputBg: "#161210",
    accent: "#73ABAD"
  },
  rainbow: {
    bodyBg: "#1a1a2e",
    bodyColor: "#e8e0f0",
    cardBg: "#12121f",
    cardBorder: "rgba(167, 139, 250, 0.35)",
    headerColor: "#e8e0f0",
    mutedColor: "#a78bfa",
    inputBg: "#12121f",
    accent: "#a78bfa"
  },
  orange: {
    bodyBg: "#2d1f14",
    bodyColor: "#fed7aa",
    cardBg: "#1f150e",
    cardBorder: "rgba(251, 146, 60, 0.35)",
    headerColor: "#fed7aa",
    mutedColor: "#d4a574",
    inputBg: "#1f150e",
    accent: "#fb923c"
  },
  olive: {
    bodyBg: "#2a2e1f",
    bodyColor: "#d4e4c4",
    cardBg: "#1c1f15",
    cardBorder: "rgba(143, 188, 74, 0.35)",
    headerColor: "#d4e4c4",
    mutedColor: "#9cb87a",
    inputBg: "#1c1f15",
    accent: "#8fbc4a"
  },
  bluescreen: {
    bodyBg: "#000080",
    bodyColor: "#ffffff",
    cardBg: "#000066",
    cardBorder: "rgba(255, 255, 255, 0.35)",
    headerColor: "#ffffff",
    mutedColor: "#b0b0ff",
    inputBg: "#000066",
    accent: "#ffffff"
  }
};

function applyThemePreview(themeId) {
  var styleEl = document.getElementById("theme-preview-styles");
  if (!styleEl) return;

  var colors = THEME_PREVIEW_COLORS[themeId];
  if (!colors) {
    styleEl.textContent = "";
    return;
  }

  styleEl.textContent =
    "body { background: " + colors.bodyBg + "; color: " + colors.bodyColor + "; } " +
    ".page-header, .page-header h1, .page-header p { color: " + colors.headerColor + " !important; } " +
    ".card { background: " + colors.cardBg + "; border-color: " + colors.cardBorder + "; } " +
    ".card h2, .card p, .card li { color: " + colors.bodyColor + " !important; } " +
    ".field-row label { color: " + colors.mutedColor + " !important; } " +
    ".field-row input, .field-row textarea, .field-row select { background: " + colors.inputBg + "; color: " + colors.bodyColor + "; border-color: " + colors.cardBorder + "; } " +
    ".banner-preview { background: " + colors.inputBg + "; color: " + colors.mutedColor + "; border-color: " + colors.cardBorder + "; } " +
    ".output { background: " + colors.inputBg + "; color: " + colors.bodyColor + "; border-color: " + colors.cardBorder + "; } " +
    "code { background: " + colors.cardBg + "; } " +
    "#downloadBtn { color: " + colors.bodyColor + "; border-color: " + colors.cardBorder + "; }";
}

function getValue(id, fallback) {
  var el = document.getElementById(id);
  if (!el) return fallback;
  var value = el.value != null ? el.value.trim() : "";
  return value || fallback;
}

function buildTerminalConfig() {
  var fullName = getValue("fullName", "Your Name");
  var email = getValue("email", "you@example.com");
  var githubUsername = getValue("githubUsername", "your-github-id");
  var blogTitle = getValue("blogTitle", "My Blog");

  var githubUrl = getValue("githubUrl", "https://github.com/" + githubUsername);
  var linkedinUrl = getValue("linkedinUrl", "");
  var blogUrl = getValue("blogUrl", "");
  var linksOthersRaw = getValue("linksOthers", "");

  var linksOthers = [];
  if (linksOthersRaw) {
    var lines = linksOthersRaw.split(/\r?\n/);
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line) continue;
      var sep = line.indexOf("|");
      if (sep >= 0) {
        var name = line.substring(0, sep).trim();
        var url = line.substring(sep + 1).trim();
        if (name && url) {
          linksOthers.push({ name: name, url: url });
        }
      }
    }
  }

  var defaultTheme = getValue("defaultTheme", "lila");
  var bannerText = getValue("bannerText", "");
  var bannerFont = getValue("bannerFont", "block");

  var aboutTextRaw = getValue("aboutText", "");

  var aboutLines = [];
  if (aboutTextRaw) {
    var parts = aboutTextRaw.split(/\r?\n/);
    for (var i = 0; i < parts.length; i++) {
      if (parts[i].trim() !== "") {
        aboutLines.push(parts[i].trim());
      }
    }
  }

  var contentConfig = {};
  if (aboutLines.length > 0) {
    contentConfig.aboutLines = aboutLines;
  }

  var config = {
    profile: {
      name: fullName,
      email: email,
      githubUsername: githubUsername,
      blogTitle: blogTitle
    },
    links: (function () {
      var l = { github: githubUrl, linkedin: linkedinUrl, blog: blogUrl };
      if (linksOthers.length > 0) l.others = linksOthers;
      return l;
    })(),
    theme: {
      defaultTheme: defaultTheme,
      bannerText: bannerText || fullName,
      bannerFont: bannerFont
    }
  };

  if (Object.keys(contentConfig).length > 0) {
    config.content = contentConfig;
  }

  return config;
}

function jsStringEscape(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$")
    .replace(/\r/g, "\\r")
    .replace(/\n/g, "\\n");
}

function stringifyConfig(config) {
  return JSON.stringify(config, null, 2);
}

function buildOutputJs(config) {
  var body = stringifyConfig(config);
  return "window.TERMINAL_CONFIG = " + body + ";\n";
}

function setOutput(text) {
  var output = document.getElementById("output");
  if (output) {
    output.value = text;
  }
}

function enableDownload(enabled) {
  var btn = document.getElementById("downloadBtn");
  if (btn) {
    btn.disabled = !enabled;
  }
}

function handleFormSubmit(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }

  var config = buildTerminalConfig();
  var js = buildOutputJs(config);
  setOutput(js);
  enableDownload(true);
}

function handleDownloadClick() {
  var output = document.getElementById("output");
  if (!output || !output.value) {
    return;
  }
  var blob = new Blob([output.value], { type: "application/javascript;charset=utf-8" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "terminal-config.js";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function updateBannerPreview() {
  var preview = document.getElementById("bannerPreview");
  if (!preview || typeof textToAsciiLines !== "function") return;

  var bannerTextVal = getValue("bannerText", "");
  var fullNameVal = getValue("fullName", "Your Name");
  var text = bannerTextVal || fullNameVal;
  var font = getValue("bannerFont", "block");
  var lines = textToAsciiLines(text, font);

  if (typeof createAsciiBanner === "function" && FONT_STYLES && FONT_STYLES[font] && FONT_STYLES[font].shadow) {
    var lastRow = lines[6].replace(/\u2588/g, "\u2591");
    lines.push(" " + lastRow);
  }

  preview.textContent = lines.join("\n");
}

function initGenerator() {
  var form = document.getElementById("config-form");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
  var downloadBtn = document.getElementById("downloadBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", handleDownloadClick);
  }

  var bannerTextEl = document.getElementById("bannerText");
  var fullNameEl = document.getElementById("fullName");
  var bannerFontEl = document.getElementById("bannerFont");
  if (bannerTextEl) {
    bannerTextEl.addEventListener("input", updateBannerPreview);
    bannerTextEl.addEventListener("change", updateBannerPreview);
  }
  if (fullNameEl) {
    fullNameEl.addEventListener("input", updateBannerPreview);
    fullNameEl.addEventListener("change", updateBannerPreview);
  }
  if (bannerFontEl) {
    bannerFontEl.addEventListener("change", updateBannerPreview);
  }
  updateBannerPreview();

  var defaultThemeEl = document.getElementById("defaultTheme");
  if (defaultThemeEl) {
    defaultThemeEl.addEventListener("change", function () {
      applyThemePreview(getValue("defaultTheme", "lila"));
    });
    applyThemePreview(getValue("defaultTheme", "lila"));
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGenerator);
} else {
  initGenerator();
}

