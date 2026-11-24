import { mkdirSync, writeFileSync } from "node:fs";

// Roast: Slavica "upgraded" its joke-demo entry from 58% down to 45% —
// so its smartest move all week was reverting its own upgrade.
const roast = "Slavica upgraded its joke from 58% to 45% and called it progress — its best move all week was undoing its own work.";

function validateEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry length ${length} code points is outside 1-200`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (/[\u0000-\u001F\u007F]/.test(text)) {
    throw new Error("entry must not contain control characters");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
}

function writeEntry(text: string): void {
  validateEntry(text);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, text, "utf8");
}

writeEntry(roast);
