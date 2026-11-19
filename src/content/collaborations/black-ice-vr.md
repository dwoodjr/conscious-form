---
title: "Black Ice VR"
description: "A single-viewer cyberpunk VR film. You play a memory slicer, extracting a young woman's memories one at a time to learn what she wants erased."
date: 2022-03-15
tags: ["collaboration", "VR", "narrative", "cyberpunk", "spatial audio", "motion capture", "Unreal Engine", "interactive"]
thumbnail: "/images/collaborations/black-ice-vr/black-ice-splash.jpg"
partner: "Arif Khan and Lawrence Yip, UNCSA METL Immersive Storytelling Residency"
role: "Art Director, Technical Artist"
when: "2021–2022"
venue: "SECCA · SXSW 2022 · SIGGRAPH 2022 VR Theater · Bucheon (BIFAN) 2022"
tools: ["Unreal Engine", "Wwise", "Vicon", "Maya", "Quest 2", "Perforce"]
featured: true
thumbnailCredit:
  name: "Poster design and artwork by Dead Seagull"
  url: "https://deadcult.co"
order: 1
images:
  - "/images/collaborations/black-ice-vr/black-ice-splash.jpg"
  - "/images/collaborations/black-ice-vr/rin-in-chair.png"
  - "/images/collaborations/black-ice-vr/rin-image-1.png"
  - "/images/collaborations/black-ice-vr/memory-space.png"
  - "/images/collaborations/black-ice-vr/carride-seq.png"
  - "/images/collaborations/black-ice-vr/embody-spheres.png"
  - "/images/collaborations/black-ice-vr/office-1.png"
  - "/images/collaborations/black-ice-vr/custom-hand.png"
  - "/images/collaborations/black-ice-vr/ambients-unreal.png"
  - "/images/collaborations/black-ice-vr/destruction-wwise.png"
  - "/images/collaborations/black-ice-vr/screenshot-unreal.png"
---

*Black Ice* is a single-viewer cyberpunk VR film. In its near future, memory editing is a paid service, and a young woman, Rin, comes to a slicer's parlor wanting one memory gone. You are the slicer, working through her memories one extraction at a time until you learn what she wants erased, and why.

We made it in six months at the UNCSA Media and Emerging Technology Lab's Immersive Storytelling Residency. SXSW picked it as one of 29 pieces for its 2022 XR Experience, the first UNCSA film the festival accepted.

## My role

Three of us formed the core team. Arif Khan directed, wrote and produced. Lawrence Yip was lead engine developer: he brought every asset into Unreal, programmed the mechanics, got the headset working, and wrote and optimized the cel shader. He also set up our Perforce server and introduced Arif and me to version control; Perforce is the system I now administer for Drexel's digital media programs. As art director and technical artist, I designed, modeled and sourced the assets and built the materials, set up Wwise and implemented all of the audio, co-directed the motion capture with Arif, and cleaned, retargeted and implemented the animation. He and I split the Blueprint work for animation and Sequencer.

Our target was the standalone Quest 2. Keeping the frame rate up on that hardware meant retopologizing models, merging meshes and consolidating materials.

## Sound

Four memory states organize the audio, down from the six we planned. Sequencer drives most state changes; memory-editing interactions and triggers on the player's position drive the rest. In the office scene, sound sources attached to animated objects move through the space outside it, with attenuation and falloff tuned so the world outside sounds occupied.

I mixed for headphones. Our first public showing, at SECCA in Winston-Salem, put several headsets on visitors at once, all of them in headphones, and some on the team pushed back because the Quest's built-in speakers no longer matched. I kept the mix: exhibitions would play the piece through headphones, and most Quest owners listen through earbuds anyway.

## Motion capture

Over two near-full-day sessions on UNCSA's Vicon stage, Grace Mori performed Rin in full-body capture. Matching the physical stage to the virtual set was the hardest part. Working from measurements in the Maya scenes, I taped the layout on the floor and gathered props at comparable scale, so contact points lined up on the day and cleanup stayed manageable.

## The extraction mechanic

The slicer's job had to feel like labor. At the editing desk you pick up a piece of black ice, consume it, and push a lever to start the loading sequence. Inside a memory you handle objects to pull out pieces of it and uncover what Rin is hiding.

## Problems

Sequencer timing drifted: small shifts pulled animation and audio cues out of sync, and fixing one sequence could knock the next one out. At SXSW, COVID-era sanitation slowed us down, with every headset going through a UV station and a wipe-down after each viewer. Sessions lasted close to thirty minutes, and our slots stayed full.

It was a blast to work on. The pace was intense, and I got my hands into more phases of cinema and VR production than I would have anywhere else.

## Credits

- Arif Khan: director, writer, producer
- Lawrence Yip: lead engine developer, Perforce administration
- Darren Woodland Jr.: art director, technical artist
- Matt Hill (as Umberto): composer
- Ajeng Canyarasmi and Andrew Vernon: sound design
- Hana Wu: Rin Kobayashi
- Grace Mori (as Grace Woosley): Rin, motion capture

Mentors included Ryan Schmaltz (METL director), Bob Keen and Navid Khonsari. Full cast and crew are on [IMDb](https://www.imdb.com/title/tt17718160/fullcredits/).

## Links

- [Audiokinetic blog: Cybernetic Thrills, The Audio and Visuals of Black Ice VR](https://www.audiokinetic.com/en/library/edge/?source=Blog&id=cybernetic_thrills_black_ice_vr)
- [UNCSA News: VR film selected for SXSW](https://www.uncsa.edu/news/20220202-vr-film-at-sxsw.aspx)
- [SIGGRAPH 2022 VR Theater program announcement](https://www.prnewswire.com/news-releases/discover-unique-storytelling-and-exquisite-visual-styling-at-the-siggraph-2022-vr-theater-program-301590571.html)
- [Pico store listing](https://www.picoxr.com/global/games/black-ice-vr)
