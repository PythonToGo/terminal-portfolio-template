
var TERMINAL_CONFIG = (typeof window !== "undefined" && window.TERMINAL_CONFIG) ? window.TERMINAL_CONFIG : {};

// basic profile & contact configuration with safe fallbacks
var GITHUB_USERNAME = (TERMINAL_CONFIG.profile && TERMINAL_CONFIG.profile.githubUsername) || "PythonToGo";
var EMAIL_ADDRESS = (TERMINAL_CONFIG.profile && TERMINAL_CONFIG.profile.email) || "pythontogoplease@gmail.com";
var email = "mailto:" + EMAIL_ADDRESS;

var linkedin = (TERMINAL_CONFIG.links && TERMINAL_CONFIG.links.linkedin) || "";
var github = (TERMINAL_CONFIG.links && TERMINAL_CONFIG.links.github) || ("https://github.com/" + GITHUB_USERNAME);
var blog = (TERMINAL_CONFIG.links && TERMINAL_CONFIG.links.blog) || "";

var linksOthers = {};
if (TERMINAL_CONFIG.links && TERMINAL_CONFIG.links.others && Array.isArray(TERMINAL_CONFIG.links.others)) {
  TERMINAL_CONFIG.links.others.forEach(function (item) {
    var key = String(item.name).toLowerCase().replace(/\s+/g, "");
    if (key && item.url) linksOthers[key] = { name: item.name, url: item.url };
  });
}

// Claude-style assistant branding (owner name follows profile full name)
const CLAUDE_ASSISTANT_NAME = "ClaudeCode";
var CLAUDE_OWNER_NAME = (TERMINAL_CONFIG.profile && TERMINAL_CONFIG.profile.name) || "Taey";
const empty = "&nbsp";

var about = (function () {
  if (TERMINAL_CONFIG.content && Array.isArray(TERMINAL_CONFIG.content.aboutLines) && TERMINAL_CONFIG.content.aboutLines.length > 0) {
    var lines = ["<br>"];
    for (var i = 0; i < TERMINAL_CONFIG.content.aboutLines.length; i++) {
      lines.push(TERMINAL_CONFIG.content.aboutLines[i]);
    }
    lines.push("<br>");
    return lines;
  }
  var fullName = (TERMINAL_CONFIG.profile && TERMINAL_CONFIG.profile.name) || "Taey";
  var lines = [
    "<br>",
    "Hi there, 👋🏻",
    "I am " + fullName,
  ];
  if (fullName === "Taey") {
    lines.push("a Korean Dream Explorer based in Germany.");
    lines.push("I'm driven by the challenge of building intelligent systems that learn, adapt, and scale, passionate about applying deep learning and machine learning to real-world problems and managing the entire machine learning lifecycle through MLOps practices.");
  }
  lines.push("<br>");
  return lines;
})();

links = (function () {
  var rows = [];
  var fullName = (TERMINAL_CONFIG.profile && TERMINAL_CONFIG.profile.name) || "Taey";

  // If this is Taey's own page, always show fixed links
  if (fullName === "Taey") {
    var taeyGithub = "https://github.com/PythonToGo";
    var taeyLinkedin = "https://linkedin.com/in/taeyoungkimtaey";
    var taeyBlog = "https://pythontogo.github.io/";

    rows.push("<tr><td>linkedin</td><td><a href=\"" + taeyLinkedin + "\" target=\"_blank\">" + taeyLinkedin + "</a></td></tr>");
    rows.push("<tr><td>github</td><td><a href=\"" + taeyGithub + "\" target=\"_blank\">" + taeyGithub + "</a></td></tr>");
    rows.push("<tr><td>blog</td><td><a href=\"" + taeyBlog + "\" target=\"_blank\">" + taeyBlog + "</a></td></tr>");
  } else {
    if (linkedin) {
      rows.push("<tr><td>linkedin</td><td><a href=\"" + linkedin + "\" target=\"_blank\">" + linkedin + "</a></td></tr>");
    }
    rows.push("<tr><td>github</td><td><a href=\"" + github + "\" target=\"_blank\">" + github + "</a></td></tr>");
    if (blog) {
      rows.push("<tr><td>blog</td><td><a href=\"" + blog + "\" target=\"_blank\">" + blog + "</a></td></tr>");
    }
  }

  for (var k in linksOthers) {
    var o = linksOthers[k];
    rows.push("<tr><td>" + o.name + "</td><td><a href=\"" + o.url + "\" target=\"_blank\">" + o.url + "</a></td></tr>");
  }
  return ["<table>\n   " + rows.join("\n   ") + "\n   </table>"];
})();

projects = [
  "<br>",
  "Always WIP:) Most projects are private, on GitHub or confidential.👀",
  "Here is a list of some GitHub repos that I worked on:",
  "<br>",
  `<div id="repo-box"></div>`,
];

var profileFullName = (TERMINAL_CONFIG.profile && TERMINAL_CONFIG.profile.name) || "Taey";
help = [
  "<br>",
  'Use these commands to navigate my web-terminal:',
  // format as table to achieve responsive column layout
  `<table>
  <tr><td><span class="command">about</span></td><td>Who is ${profileFullName}?</td></tr>
  <tr><td><span class="command">links</span></td><td>Display my links</td></tr>
  <tr><td><span class="command">projects</span></td><td>View coding projects</td></tr>
  <tr><td><span class="command">explain</span></td><td>ClaudeCode explains a topic</td></tr>
  <tr><td><span class="command">run</span></td><td>ClaudeCode runs a command</td></tr>
  <tr><td><span class="command">edit</span></td><td>ClaudeCode edits a file</td></tr>
  <tr><td><span class="command">history</span></td><td>View command history</td></tr>
  <tr><td><span class="command">help</span></td><td>You obviously already know what this does</td></tr>
  <tr><td><span class="command">email</span></td><td>Do not email me</td></tr>
  <tr><td><span class="command">home</span></td><td>Return to the home screen</td></tr>
  <tr><td><span class="command">clear</span></td><td>Clear terminal</td></tr>
  <tr><td><span class="command">banner</span></td><td>Display the banner</td></tr>
  <tr><td><span class="command">theme</span></td><td>Change the theme</td></tr>
  <tr><td><span class="command">[tab]</span></td><td>Trigger completion</td></tr>
  </table>`,
  "<br>",
  'Feel free to try any commands you know. There might be some hidden easter eggs.🥚🐣🐤',
  "<br>",
];

// reload banner text (theme.bannerText) or fallback to profile.name
var bannerText = (TERMINAL_CONFIG.theme && TERMINAL_CONFIG.theme.bannerText) ||
  (TERMINAL_CONFIG.profile && TERMINAL_CONFIG.profile.name) || "TAEY KIM";
var bannerFontStyle = (TERMINAL_CONFIG.theme && TERMINAL_CONFIG.theme.bannerFont) || "block";
banner = createAsciiBanner(bannerText, bannerFontStyle);

welcomeMsg = (function () {
  var msgs = [
    '<span class="color2 terminal-welcome-msg">Welcome to my personal terminal-like website!</span>',
    "<span class=\"color2 terminal-welcome-msg\">Type </span> <span class=\"command terminal-welcome-msg\">'help'</span><span class=\"color2 terminal-welcome-msg\"> to see a list of available commands!</span>",
  ];

  var fullName = (TERMINAL_CONFIG.profile && TERMINAL_CONFIG.profile.name) || "Taey";
  if (fullName === "Taey") {
    msgs.push(
      '<span class="terminal-welcome-msg">Want to build your own terminal-style portfolio? Visit the <a class="command terminal-welcome-msg terminal-generator-link" href="./generator/" target="_blank">config generator</a>.</span>'
    );
    msgs.push(
      '<span class="header-links-wrap"><a href="https://github.com/PythonToGo/terminal-portfolio-template" target="_blank" rel="noopener noreferrer" class="header-link-code terminal-welcome-msg"><span class="header-link-prefix">$</span><span class="header-link-command">open</span><span class="header-link-label">GitHub</span></a><a href="./generator/" target="_blank" rel="noopener noreferrer" class="header-link-code terminal-welcome-msg"><span class="header-link-prefix">$</span><span class="header-link-command">open</span><span class="header-link-label">Generator</span></a></span>'
    );
  }

  msgs.push(
    '<span class="terminal-welcome-msg" style="font-size: 0.6em;">This terminal template was made by <a class="command" href="https://github.com/PythonToGo" target="_blank">PythonToGo</a>.</span>'
  );

  msgs.push("<br>");
  return msgs;
})();

allCommands = [
  "help", "about", "links", "projects", "email", "linkedin", "github", "history", "home", "clear", "banner", "theme",
  "echo", "ping", "ls", "cd",
  "explain", "run", "edit",
  "vi", "vim", "nvim", "emacs",
  "sudo", "gui",
].concat(Object.keys(linksOthers));

themes = {
  "lila": "css/style_lila.css",
  "midnight": "css/style_midnight.css",
  "chocolate": "css/style_chocolate.css",
  "original": "css/style_og.css",
  "rainbow": "css/style_rainbow.css",
  "orange": "css/style_orange.css",
  "olive": "css/style_olive.css",
  "bluescreen": "css/style_bluescreen.css",
};

allArgs = [
  "ls", "set", "random", ...themes,
];
