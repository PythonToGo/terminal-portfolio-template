import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["node_modules/", "**/*.cjs", "terminal-config.js"] },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        // Globals from script load order (commands.js, main.js, etc.)
        TERMINAL_CONFIG: "readonly",
        GITHUB_USERNAME: "readonly",
        EMAIL_ADDRESS: "readonly",
        email: "readonly",
        linkedin: "readonly",
        github: "readonly",
        blog: "readonly",
        linksOthers: "readonly",
        CLAUDE_ASSISTANT_NAME: "readonly",
        CLAUDE_OWNER_NAME: "readonly",
        about: "writable",
        links: "writable",
        projects: "writable",
        help: "writable",
        banner: "writable",
        welcomeMsg: "writable",
        allCommands: "writable",
        themes: "writable",
        allArgs: "writable",
        createAsciiBanner: "readonly",
        textToAsciiLines: "readonly",
        FONT_STYLES: "readonly",
        loadReposIntoBox: "readonly",
        completeQuery: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "script",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "off",
      "no-redeclare": "warn",
      "no-useless-escape": "warn",
    },
  },
];
