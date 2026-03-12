import { describe, it, expect } from "vitest";

// Mirrors buildOutputJs from generator/main.js
function buildOutputJs(config) {
  return "window.TERMINAL_CONFIG = " + JSON.stringify(config, null, 2) + ";\n";
}

describe("Generator output", () => {
  it("produces valid config with profile, links, theme", () => {
    const config = {
      profile: { name: "Test", email: "test@example.com", githubUsername: "test", blogTitle: "Blog" },
      links: { github: "https://github.com/test", linkedin: "", blog: "" },
      theme: { defaultTheme: "lila", bannerText: "Test", bannerFont: "block" },
    };

    const output = buildOutputJs(config);
    const match = output.match(/window\.TERMINAL_CONFIG = ([\s\S]*);/);
    const parsed = JSON.parse(match[1]);

    expect(parsed).toHaveProperty("profile");
    expect(parsed.profile).toHaveProperty("name", "Test");
    expect(parsed.profile).toHaveProperty("email");
    expect(parsed.profile).toHaveProperty("githubUsername");

    expect(parsed).toHaveProperty("links");
    expect(parsed.links).toHaveProperty("github");

    expect(parsed).toHaveProperty("theme");
    expect(parsed.theme).toHaveProperty("defaultTheme");
    expect(parsed.theme).toHaveProperty("bannerText");
    expect(parsed.theme).toHaveProperty("bannerFont");
  });
});
