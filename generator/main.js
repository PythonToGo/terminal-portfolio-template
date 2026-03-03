function getValue(id, fallback) {
  var el = document.getElementById(id);
  if (!el) return fallback;
  var value = el.value != null ? el.value.trim() : "";
  return value || fallback;
}

function buildTerminalConfig() {
  var fullName = getValue("fullName", "Your Name");
  var tagline = getValue("tagline", "");
  var location = getValue("location", "");
  var authorHandle = getValue("authorHandle", "PythonToGo");
  var email = getValue("email", "you@example.com");
  var githubUsername = getValue("githubUsername", "your-github-id");
  var blogTitle = getValue("blogTitle", "My Blog");

  var githubUrl = getValue("githubUrl", "https://github.com/" + githubUsername);
  var linkedinUrl = getValue("linkedinUrl", "");
  var blogUrl = getValue("blogUrl", "https://example.com");

  var defaultTheme = getValue("defaultTheme", "lila");

  var aboutTextRaw = getValue("aboutText", "");
  var projectsIntroRaw = getValue("projectsIntro", "");

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
  if (projectsIntroRaw) {
    contentConfig.projectsIntro = projectsIntroRaw;
  }

  var config = {
    profile: {
      name: fullName,
      tagline: tagline,
      location: location,
      authorHandle: authorHandle,
      email: email,
      githubUsername: githubUsername,
      blogTitle: blogTitle
    },
    links: {
      github: githubUrl,
      linkedin: linkedinUrl,
      blog: blogUrl
    },
    theme: {
      defaultTheme: defaultTheme
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

function initGenerator() {
  var form = document.getElementById("config-form");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
  var downloadBtn = document.getElementById("downloadBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", handleDownloadClick);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGenerator);
} else {
  initGenerator();
}

