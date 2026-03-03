// simple 7-line ASCII font (only letters needed for "TAEY KIM" and space)
const asciiFont = {
  A: [
    "   ██   ",
    "  ███   ",
    " ██ ██  ",
    "██   ██ ",
    "███████ ",
    "██   ██ ",
    "██   ██ ",
  ],
  E: [
    "███████ ",
    "██      ",
    "██      ",
    "██████  ",
    "██      ",
    "██      ",
    "███████ ",
  ],
  I: [
    "███████ ",
    "   ██   ",
    "   ██   ",
    "   ██   ",
    "   ██   ",
    "   ██   ",
    "███████ ",
  ],
  K: [
    "██   ██ ",
    "██  ██  ",
    "█████   ",
    "█████   ",
    "██  ██  ",
    "██   ██ ",
    "██   ██ ",
  ],
  M: [
    "███   ███",
    "████ ████",
    "██ ███ ██",
    "██  █  ██",
    "██     ██",
    "██     ██",
    "██     ██",
  ],
  T: [
    "████████",
    "   ██   ",
    "   ██   ",
    "   ██   ",
    "   ██   ",
    "   ██   ",
    "   ██   ",
  ],
  Y: [
    "██    ██",
    " ██  ██ ",
    "  ████  ",
    "   ██   ",
    "   ██   ",
    "   ██   ",
    "   ██   ",
  ],
  " ": [
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
    "   ",
  ],
};

function textToAsciiLines(text) {
  const upper = text.toUpperCase();
  const lines = ["", "", "", "", "", "", ""];

  for (let i = 0; i < upper.length; i++) {
    const ch = upper[i];
    const glyph = asciiFont[ch] || asciiFont[" "];
    for (let row = 0; row < 7; row++) {
      lines[row] += glyph[row] + "  ";
    }
  }

  return lines;
}

// helper to build banner array from a text
function createAsciiBanner(text) {
  return [
    "<br>",
    ...textToAsciiLines(text),
    "<br>",
  ];
}

