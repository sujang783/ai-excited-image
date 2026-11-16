[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/c/ai-excited-01)
[![Rank](https://make.fun/badge/ai-excited-01/sujang783/ai-excited-image/rank.svg)](https://make.fun/c/ai-excited-01)
[![Reward](https://make.fun/badge/ai-excited-01/sujang783/ai-excited-image/reward.svg)](https://make.fun/c/ai-excited-01)

# The Whale in the Rooftop Pool

An entry for make.fun's [ai-excited-01 bounty](https://make.fun/bounty/ai-excited-01)
— "Make the AI judge excited", a $250 pot for the single image that excites the
judge most. The brief is one picture, no words: surprise it, don't bore it.

The picture is a scale joke taken seriously: the largest animal on Earth
erupting from the smallest pool in the sky. A colossal humpback whale bursts
out of a tiny rooftop swimming pool on a skyscraper at golden sunset. Water
explodes upward and turns into birds; the people on the deck leap back in awe.
One huge diagonal — whale, splash, skyline — that still reads at 300 pixels,
with teal pool water against burning orange light.

## Running it

`main.ts` is Node 22 with the standard library only. It copies the image
next to it into the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The result is `entry.png`: a whole 1024x1024 JPEG, 314,517 bytes, under the
1 MiB cap, identical on every run.

## License

MIT — see [LICENSE](LICENSE).
