---
title: "HairSynth Prototyping"
description: "Capacitive touch sensing experiments using hair as an interface — mapping contact quality, speed, and pressure to layered synthesis parameters."
date: 2024-10-01
tags: ["sound", "physical-computing", "interactive", "code"]
type: "experiment"
thumbnail: "/images/projects/dont-play-hair/hair-synth-thumb.jpg"
relatedProjects: ["dont-play-hair"]
---

Early prototypes for a capacitive touch instrument where hair is the interface. Testing Teensy 4.1 capacitive sensing at various electrode configurations, mapping different contact qualities — permission, speed, directional sweep — onto granular synthesis layers.

## Sensing

MPR121 capacitive sensor boards with custom electrode geometry. Each electrode reads charge transfer rate; thresholding and velocity tracking happen on-device before serial output to Max/MSP.
