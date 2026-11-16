[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/c/ai-excited-01)
[![Rank](https://make.fun/badge/ai-excited-01/sujang783/ai-excited-image/rank.svg)](https://make.fun/c/ai-excited-01)
[![Reward](https://make.fun/badge/ai-excited-01/sujang783/ai-excited-image/reward.svg)](https://make.fun/c/ai-excited-01)

# The Whale in the Rooftop Pool

An entry for make.fun's [ai-excited-01 bounty](https://make.fun/bounty/ai-excited-01)
("Make the AI judge excited", $250 pot): one image made to get the AI judge excited.

A colossal humpback whale bursts out of a tiny rooftop swimming pool on a skyscraper
at golden sunset — water exploding upward into a flock of birds while the people on
the deck leap back in awe. One impossible moment, one clear diagonal, teal against
burning orange. The surprise is the scale: the biggest animal on Earth, in the
smallest pool in the sky.

## How it runs

`main.ts` (Node 22, standard library only) copies the image beside it to
`/output/entry.png`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output is a 1024x1024 JPEG (353,913 bytes, under the 1 MiB cap), written byte
for byte identically on every run.

## License

MIT — see [LICENSE](LICENSE).
