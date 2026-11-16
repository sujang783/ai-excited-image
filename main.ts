// ai-excited-01 entry: "The Whale in the Rooftop Pool".
//
// The judge gets one image. This program is the smallest honest way to
// deliver it: it takes the picture that lives next to this file and drops
// it into the output directory the grader looks at. Nothing is generated
// or transformed at run time — the picture IS the entry.
//
// Usage (Node 22, no dependencies):
//   node main.ts                       -> writes /output/entry.png
//   MAKEFUN_OUTPUT_DIR=out node main.ts -> writes out/entry.png

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

if (!existsSync(source)) {
  console.error(`missing entry image: ${source}`);
  process.exit(1);
}

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.png");
copyFileSync(source, target);

const { size } = statSync(target);
console.log(`wrote ${target} (${size} bytes)`);
