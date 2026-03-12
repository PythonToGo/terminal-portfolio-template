import { describe, it, expect } from "vitest";
import { completeQuery } from "./utils.cjs";

describe("completeQuery", () => {
  const commands = ["help", "about", "links", "history", "home", "theme"];

  it("returns commands that start with the query", () => {
    expect(completeQuery(commands, "h")).toEqual(["help", "history", "home"]);
    expect(completeQuery(commands, "he")).toEqual(["help"]);
    expect(completeQuery(commands, "theme")).toEqual(["theme"]);
  });

  it("returns empty array when no match", () => {
    expect(completeQuery(commands, "xyz")).toEqual([]);
    expect(completeQuery(commands, "z")).toEqual([]);
  });

  it("handles empty query", () => {
    expect(completeQuery(commands, "")).toEqual(commands);
  });

  it("handles empty array", () => {
    expect(completeQuery([], "help")).toEqual([]);
  });

  it("is case-sensitive", () => {
    expect(completeQuery(commands, "H")).toEqual([]);
    expect(completeQuery(commands, "Help")).toEqual([]);
  });
});
