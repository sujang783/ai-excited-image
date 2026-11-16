// ai-excited-01 entrypoint.
//
// The entry is a single image. This program places it where the grader
// expects it: <output>/entry.png. The output directory comes from
// MAKEFUN_OUTPUT_DIR when set, and defaults to /output. Nothing else is
// produced, and the image is copied byte for byte, so every run yields
// the same file.
//
// Run it with Node 22 (standard library only):
//   MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const imagePath = join(scriptDir, "entry.png");

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const outPath = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(imagePath, outPath);

const { size } = statSync(outPath);
console.log(`entry.png -> ${outPath} (${size} bytes)`);
