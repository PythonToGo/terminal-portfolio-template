
var linkedin = "https://www.linkedin.com/in/taeyoungkimtaey/";
var github = "https://github.com/PythonToGo";
var email = "mailto:pythontogoplease@gmail.com";
var blog = "https://pythontogo.github.io/";
const empty = "&nbsp";

about = [
  "<br>",
  "Hi there, 👋🏽",
  `I am Taey Kim, a Korean Dream Explorer based in Munich, Germany`,
  `I write on my blog "PythonToGo" about programming, learning, and the way to live like a hedgehog 🦔.`,
  "<br>",
];

links = [
  // format as table to achieve responsive column layout
  `<table>
   <tr><td>linkedin</td><td><a href="${linkedin}" target="_blank">linkedin/taeyoungkimtaey</a></td></tr>
   <tr><td>github</td><td><a href="${github}" target="_blank">github/PythonToGo</a></td></tr>
   <tr><td>blog</td><td><a href="${blog}" target="_blank">pythontogo.github.io/</a></td></tr>
   </table>`,
];

projects = [
  "<br>",
  "Always WIP:) Most projects are private, on GitHub or confidential.👀",
  "Here is a list of some GitHub repos that I worked on:",
  "<br>",
  `<div id="repo-box"></div>`,
];

help = [
  "<br>",
  'Use these commands to navigate my web-terminal:',
  // format as table to achieve responsive column layout
  `<table>
  <tr><td><span class="command">about</span></td><td>Who is Taey?</td></tr>
  <tr><td><span class="command">links</span></td><td>Display my links</td></tr>
  <tr><td><span class="command">projects</span></td><td>View coding projects</td></tr>
  <tr><td><span class="command">explain</span></td><td>ClaudeCode explains a topic</td></tr>
  <tr><td><span class="command">run</span></td><td>ClaudeCode runs a command</td></tr>
  <tr><td><span class="command">edit</span></td><td>ClaudeCode edits a file</td></tr>
  <tr><td><span class="command">history</span></td><td>View command history</td></tr>
  <tr><td><span class="command">help</span></td><td>You obviously already know what this does</td></tr>
  <tr><td><span class="command">email</span></td><td>Do not email me</td></tr>
  <tr><td><span class="command">clear</span></td><td>Clear terminal</td></tr>
  <tr><td><span class="command">banner</span></td><td>Display the banner</td></tr>
  <tr><td><span class="command">theme</span></td><td>Change the theme</td></tr>
  <tr><td><span class="command">[tab]</span></td><td>Trigger completion</td></tr>
  </table>`,
  "<br>",
  'Feel free to try any commands you know. There might be some hidden easter eggs.🥚🐣🐤',
  "<br>",
];

// reload name to banner ASCII-style
const name_ascii = "TAEY KIM";

banner = createAsciiBanner(name_ascii);

welcomeMsg = [
  '<span class="color2 terminal-welcome-msg">Welcome to my personal website.</span>',
  "<span class=\"color2 terminal-welcome-msg\">Type </span> <span class=\"command terminal-welcome-msg\">'help'</span><span class=\"color2 terminal-welcome-msg\"> (and hit 'return') to see a list of available commands.</span>",
  "<br>",
];

allCommands = [
  "help", "about", "links", "projects", "email", "linkedin", "github", "history", "clear", "banner", "theme",
  "echo", "ping", "ls", "cd",
  "explain", "run", "edit",
  "vi", "vim", "nvim", "emacs",
  "sudo", "gui",
];

themes = {
  "lila": "css/style_lila.css",
  "midnight": "css/style_midnight.css",
  "chocolate": "css/style_chocolate.css",
};

allArgs = [
  "ls", "set", "random", ...themes,
];
