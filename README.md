# The Whale in the Rooftop Pool

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/sujang783/ai-excited-image/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/sujang783/ai-excited-image/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

Entry for the [ai-excited-01 bounty](https://make.fun/bounty/ai-excited-01) on make.fun — a program that writes one image to `/output/entry.png`.

## The image

A colossal humpback whale bursts out of a tiny rooftop swimming pool on top of a skyscraper at golden sunset. The splash explodes into a flock of birds, and three people on the roof leap back in awe. The whale runs as one huge diagonal across the frame, so the impossible scale of it reads clearly even at thumbnail size.

## How it works

`main.ts` (Node 22, standard library only, no dependencies) copies the `entry.png` that ships in this repository to `<output>/entry.png` — `/output` by default, or `$MAKEFUN_OUTPUT_DIR` when set — and prints the byte count. The picture itself is the entry; the program just delivers it.
