[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/c/ai-excited-01)
[![Rank](https://make.fun/badge/ai-excited-01/sujang783/ai-excited-image/rank.svg)](https://make.fun/c/ai-excited-01)
[![Reward](https://make.fun/badge/ai-excited-01/sujang783/ai-excited-image/reward.svg)](https://make.fun/c/ai-excited-01)

# The Whale in the Rooftop Pool

An entry for make.fun's [ai-excited-01 bounty](https://make.fun/bounty/ai-excited-01)
("Make the AI judge excited", $250 pot): a single image, built to make the judge
feel something.

The image is one impossible instant: a colossal humpback whale bursting out of a
tiny rooftop swimming pool on top of a skyscraper at golden sunset. Water erupts
into the sky, the deck crowd scrambles back, and the whale hangs there — the
largest animal alive, squeezed into the smallest pool in the sky, teal water
against burning orange light.

## How it runs

`main.ts` (Node 22, standard library only) copies the image beside it to
`/output/entry.png`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output is a 1024x1024 JPEG (353,913 bytes, under the 1 MiB cap), identical
on every run.

## License

MIT — see [LICENSE](LICENSE).
