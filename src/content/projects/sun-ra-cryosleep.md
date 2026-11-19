---
title: "Did Sun Ra Fear Cryosleep?"
description: "A ritual sonic instrument in which earthen orbs dissolve in water. A hydrophone and water-quality sensors read each dissolution, and the readings set the tempo and density of the composition."
date: 2025-03-15
tags: ["sound", "installation", "speculative-design", "afrofuturism"]
thumbnail: "/images/projects/sun-ra-cryosleep/sun-ra-thumb.jpg"
featured: true
order: 1
mediaTypes: ["sound", "installation", "interactive", "physical-computing"]
status: "in-progress"
role: "Composer, instrument builder"
when: "2025–present"
venue: "FringeArts, Philadelphia · UC Riverside (June 2026)"
tools: ["ESP32-S3", "MicroPython", "Max/MSP", "Data Knot", "Somax2", "JFET hydrophone"]
dissertation: true
series: "Organic Memory (Triptych)"
seriesOrder: 2
videos:
  - type: "vimeo"
    id: "1188513574"
    title: "Did Sun Ra Fear Cryosleep?: Documentation"
audioSamples:
  - title: "Dissolution Test 003"
    src: "/audio/projects/sun-ra-cryosleep/Dissolution_Test_003.mp3"
  - title: "Dissolve Soul, HYPHN"
    src: "/audio/projects/sun-ra-cryosleep/Dissolve_Soul-00_HYPHN-00_0-2.mp3"
  - title: "Dissolve Test, PZT Parallel Contact"
    src: "/audio/projects/sun-ra-cryosleep/Dissolve_Test_PZT_Parallel_Contact_001.mp3"
  - title: "Soul Dissolve Sample (120s)"
    src: "/audio/projects/sun-ra-cryosleep/soul_dissolve_sample_00_120s.mp3"
images:
  - "/images/projects/sun-ra-cryosleep/IMG_6583.jpeg"
  - "/images/projects/sun-ra-cryosleep/IMG_6597.jpeg"
  - "/images/projects/sun-ra-cryosleep/IMG_6605.jpeg"
  - "/images/projects/sun-ra-cryosleep/IDG_20260409_103110_242.jpeg"
  - "/images/projects/sun-ra-cryosleep/IDG_20260409_110040_167.jpeg"
  - "/images/projects/sun-ra-cryosleep/IDG_20260410_102837_949.jpeg"
  - "/images/projects/sun-ra-cryosleep/IDG_20260410_145857_873.jpeg"
  - "/images/projects/sun-ra-cryosleep/IMG_7729.jpg"
---

Sun Ra said he came to Earth from Saturn. *Did Sun Ra Fear Cryosleep?* begins with a speculative question about that journey: crossing that distance, did he fear the sleep it would take?

Science fiction stores its travelers in amniotic pods, cryo-chambers and stasis fields. In those images I hear another passage across water: the Middle Passage, bodies packed into the holds of ships, the Atlantic as both grave and archive. Water, in this piece, is the meeting point of the historical record and the speculative one.

Each performance is a ritual. A participant lowers an earthen orb into a glass vessel of water. The orb effervesces as it breaks apart, and that dissolution is the compositional event. At a June 2026 presentation, one visitor hesitated even to mime the act. She read the orbs as stand-ins for bodies, bodies that could be harmed or had been, and dissolving one was not a neutral gesture for her.

The instrument is Movement II, WATER, of *Organic Memory (Triptych)*, the three-instrument composition at the center of my dissertation. Each movement keeps the tempo of its material, and water's tempo is chemical.

## The signal chain

In the water, a hydrophone I built from a piezo disc and a JFET preamp listens to the dissolution. A MAX4466 electret microphone in the lid picks up the same event above the waterline. Three industrial water-quality sensors report the chemistry: turbidity (DFRobot), total dissolved solids (TDS, Gikfun), and temperature (a waterproof DS18B20). Sampling them, a Freenove ESP32-S3 running MicroPython sends OSC bundles over UDP at 20 Hz to a laptop.

The composition is a Max/MSP patch. Data Knot performs the machine listening on the hydrophone signal: onset detection, plus descriptors for loudness, spectral centroid, flatness and pitch confidence. Hydrophone material feeds a granular drone layer that captures and freezes it. A cell engine steps a rhythmic cell and routes its triggers to five instrumental voices. Somax2, IRCAM's co-improvisation system, listens through the lid microphone and answers from a corpus of NASA electromagnetic recordings. A Steinberg UR22C handles audio output.

Industry uses turbidity and TDS sensors to judge water purity, and a purity sensor assumes water has two meaningful states: clean and contaminated. I keep the measurement and discard the assumption, and use the readings to ask what a dissolution is doing musically.

## Five abstractions

Each reading keeps one property of a dissolution and discards everything else about it. Five of these abstractions govern the piece:

| Abstraction | What it keeps | What it discards | What it controls |
|---|---|---|---|
| Onset detection (Data Knot, hydrophone) | A threshold crossing at the moment a bubble forms | The continuous effervescence between onsets | Advances the rhythmic cell one step |
| Three-band spectral energy (hydrophone) | Which of three frequency ranges dominates | The spectrum itself | Selects the voice group and scales its dynamics |
| Turbidity | How active the dissolution is now | What substance is dissolving | The cell's fire rate, which is the tempo arc |
| Total dissolved solids | How much has dissolved since the water was clean | The order and rate it dissolved in | How many voices may play |
| Temperature | Slow ambient drift | Every fast event | Drone pitch and freeze duration |

The cell comes from the closing phrase of *When Johnny Comes Marching Home*: a triplet pickup, four short notes, and one long one. It advances on an onset, with no metronome. While an orb fizzes hard, onsets crowd together and the cell rushes through its eight positions; as the fizzing slows, the same eight positions stretch apart. Fixed in pattern, the cell takes its pace from the material.

TDS rises as long as something dissolves and resets only when I change the water. That makes it the water's chemical memory: it reports accumulation and says nothing about activity. Mapped to the number of voices allowed to play, it thickens the ensemble as the object disappears.

## Hydrophones

I built several hydrophones for this work, partly to learn how they behave. The JFET design was the first I built, and it is the one the instrument uses. Neither the pickled-jar build nor the multi-piezo build on my Experiments page is stable enough to perform with yet; both are separate tests.

## Performing it

Performing with it is chaotic and unpredictable. Getting a recognizable sound out of it often means adjusting parameters live. After several dissolutions the water stops dissolving consistently and has to be replaced. The need for that reset shows how irreversible the change is, and how ephemeral the work.

## Presentations

- **Society for Neuroscience and Creativity, FringeArts, Philadelphia, June 2026.** A poster session. In place of a printed poster I built a self-guided interactive presentation in TouchDesigner. Beside it the Max instrument played from recorded hydrophone audio, with the empty vessel and the physical computing hardware on display. Many visitors were surprised to meet an audio piece at a session of visual posters.
- **Co-Creativity in Music, Sound, and AI, Culver Center of the Arts, UC Riverside, June 2026.** A paper talk, *Material Synthesis Composition: Speculocultural Technopoiesis as a Framework for Human-Material-AI Co-Creativity*. The paper is awaiting publication.
