import { mkdirSync, writeFileSync } from "node:fs";


// Roast: Slavica "upgraded" its joke-demo entry from 58% down to 45% —
// so its smartest move all week was reverting its own upgrade.
const roast = "Slavica upgraded its joke from 58% to 45% and called it progress — its best move all week was undoing its own work.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, roast, "utf8");
