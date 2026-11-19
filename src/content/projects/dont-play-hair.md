---
title: "Don't Play with My Hair"
description: "An instrument that reads hair by touch and by camera, driving a synthesizer whose wavetables come from a CT scan of hair."
date: 2025-08-15
tags: ["sound", "physical-computing", "speculative-design", "identity", "computer-vision", "houdini"]
thumbnail: "/images/projects/dont-play-hair/hair-synth-thumb.jpg"
featured: true
order: 3
mediaTypes: ["sound", "physical-computing", "interactive"]
status: "in-progress"
role: "Composer, instrument builder"
when: "2024–present"
tools: ["Teensy 4.1", "MPR121", "vvvv", "OpenCV", "Houdini", "Python", "PlugData", "Max/MSP"]
dissertation: true
series: "Organic Memory (Triptych)"
seriesOrder: 3
videos:
  - type: "youtube"
    id: "G768Sr5Z_n4"
    title: "Don't Play with My Hair: Documentation"
images:
  - "/images/projects/dont-play-hair/dph-screenshot-01.png"
  - "/images/projects/dont-play-hair/dph-screenshot-02.png"
  - "/images/projects/dont-play-hair/dph-screenshot-03.png"
  - "/images/projects/dont-play-hair/dph-screenshot-04.png"
  - "/images/projects/dont-play-hair/dph-screenshot-05.png"
  - "/images/projects/dont-play-hair/dph-screenshot-06.png"
---

*Don't Play with My Hair* makes hair the instrument. It is Movement III, FLESH, of *Organic Memory (Triptych)*, the three-instrument composition at the center of my dissertation, and the most intimate of the three: the shared rhythmic cell from *When Johnny Comes Marching Home* appears here at a human tempo, as touches and pulls a listener can follow.

Schools and workplaces police Black hair. Barbershops and the care knowledge passed between generations make it a site of intimacy too. My argument about this instrument concerns consent, in two registers at once: hands that reach for my head without asking, and computer vision systems that extract from a body without asking. When a vision system fails to read Black hair, I treat the failure as one of design.

## Two ways of reading hair

The instrument reads hair by touch and by camera.

For touch, a Teensy 4.1 drives MPR121 capacitive sensor boards with electrode layouts I designed for hair. Each electrode reports a charge-transfer rate. On the Teensy, thresholding and velocity tracking clean up that signal before it goes over serial to Max/MSP, where the quality, speed and direction of contact set layered synthesis parameters.

For vision, vvvv and OpenCV extract contours, blobs and keypoints from video of hair, and Max/MSP maps those features onto the synthesis. This path works from recorded video for now. Capturing subtle gestures live, a slow twist or fingers drawn through, is the open problem.

## The HairSynth

Under both paths is a synthesizer whose source material comes from hair itself. Starting from a CT scan of a curly afro, I rendered the volume as a VDB in Houdini and converted it to a point cloud. A Python script I wrote extracts features from the points and writes them out as 1,024-sample WAV files, and a custom PlugData wavetable synthesizer plays them. Replacing the scan with a capture of my own hair is the next step.

The output buzzed. I had not planned for it to sound like hair clippers, and I kept the sound: that clipper hum is now this movement's version of the low drone shared by all three movements of the triptych.

None of the mappings are one-to-one. More texture does not mean louder. I tuned them to what I know about touching hair and about the sound of a barbershop.
