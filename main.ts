// ai-excited-01 entry (Node 22, standard library only).
//
// The entry is the image shipped next to this file, entry.png. This program
// drops an exact copy of it at <output>/entry.png. Inside the grader the
// output directory is /output; locally, set MAKEFUN_OUTPUT_DIR instead:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

const image = readFileSync(path.join(scriptDir, 'entry.png'));
mkdirSync(outputDir, { recursive: true });
const target = path.join(outputDir, 'entry.png');
writeFileSync(target, image);
console.log(`wrote ${image.length} bytes to ${target}`);
