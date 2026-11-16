// ai-excited-01 — "The Whale in the Rooftop Pool"
//
// One job, done plainly: take the single image that ships with this
// entry and place it where the grader expects it, at
// <output>/entry.png. The picture is finished before this program
// ever runs; nothing here draws, edits, or re-encodes it, so what
// the judge sees is exactly the file in this repository.
//
// Run it (Node 22, standard library only, no installs):
//   node main.ts                          -> /output/entry.png
//   MAKEFUN_OUTPUT_DIR=out node main.ts   -> out/entry.png

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const IMAGE_NAME = "entry.png";

// The image sits beside this script; resolve it relative to the
// script's own directory so the working directory doesn't matter.
const scriptDir = new URL(".", import.meta.url).pathname;
const sourcePath = join(scriptDir, IMAGE_NAME);

const pixels = readFileSync(sourcePath);

const destinationDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(destinationDir, { recursive: true });

const destinationPath = join(destinationDir, IMAGE_NAME);
writeFileSync(destinationPath, pixels);

console.log(`wrote ${destinationPath} (${pixels.length} bytes)`);
