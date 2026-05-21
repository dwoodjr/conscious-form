# Website Copy Changes for Experiential Studio Positioning

Apply these changes in a Claude Code session. All changes are targeted edits to existing files.
No new files needed unless noted.

---

## 1. src/pages/index.astro

**What to change:** The subtitle under the name on the homepage.

**Find:**
```
Cross-disciplinary researcher working at the intersection of
immersive sound, physical computing, and speculative design.
```

**Replace with:**
```
I design interactive experiences, immersive environments, and live
performance systems where technology, physical space, and people meet.
```

---

## 2. src/pages/about.astro

**What to change:** The entire contents inside the outer `<section>` tag.
Keep the `<BaseLayout>` wrapper and the `<section>` opening/closing tags.
Replace everything inside.

**New content for the subtitle line:**
```
Experience Designer · Creative Technologist · Interactive Systems
```

**New intro paragraph:**
```
I design interactive experiences, immersive environments, and live performance
systems where technology, physical space, and people come together. My work
spans interactive installation, live performance, AR/VR, and physical computing
from concept sketches and interaction prototypes through to production-ready systems.
```

**Replace the "Background" section with this:**

Section heading: `Practice`

Body:
```
I work across the full arc of experience design: conceiving interaction models,
prototyping physical and digital systems, and coordinating with creative,
engineering, and fabrication teams to make ideas real. Projects range from
gallery installations and staged performance to AR simulations and gesture-driven
instruments, with exhibitions and presentations at Ars Electronica, SXSW, and SIGGRAPH.

I am drawn to work that lives in physical space: systems people move through,
touch, or trigger. I bring both the technical fluency to build these things
and the design sensibility to know when they are working.
```

**Replace the "Research Interests" section with this:**

Section heading: `Background`

Body:
```
PhD researcher at Drexel University (Digital Media), where I lead development
on interactive AR and installation projects alongside my own practice. Prior roles
include art director and creative technologist for VR productions, multimedia
designer for live dance, and interactive media designer for educational simulations.
Currently also an Artist in Residence at the Robotics, Automation, and Dance (RAD) Lab,
prototyping gesture-based interaction systems for human-robot interaction research.
```

**Add a new section after Background:**

Section heading: `Tools and Approach`

Body:
```
Real-time environments in Unity and Unreal Engine. Interaction prototyping with
physical computing (Arduino, ESP32, Teensy) and computer vision (MediaPipe, OpenCV).
Audio systems in Max/MSP and Wwise. 3D and simulation in Maya and Houdini.
Fluent in C#, Python, and C++. Comfortable in a sketchbook or wiring a sensor
as much as in code.
```

**Update the contact email from:**
```
dkw34@drexel.edu
```
**To:**
```
darrenwoodland3@gmail.com
```

---

## 3. src/content/collaborations/mnemosi.md

**What to change:** Replace the `## Overview` and `## Role` sections.

**New Overview:**
```
A participatory interactive installation created in collaboration with MBDance (Maria Bauman),
presented as part of Womb: The Black Wealth Project at Drexel University's Pearlstein Gallery.
Participants were invited to leave a message of abundance and growth. Each message fed Mnemosi,
who grew over the course of the installation into a young Black girl.
```

**Add a new section between Overview and Role:**

```
## Concept and Approach

The interaction model was built around a single low-barrier gesture: leaving a message.
The challenge was making that input feel consequential without requiring any technical
knowledge from participants. I designed the audiovisual response system so each
contribution visibly and audibly changed the state of the piece, creating a feedback
loop between individual action and collective growth. The spatial layout guided visitors
through a clear arc: approach, contribute, witness.

The system combined real-time audio processing, generative visuals, and a custom
pipeline for message capture and transformation. I handled concept design, spatial
layout, interaction model, audio engineering, and full technical development.
```

**New Role line:**
```
Collaboration · Art Direction · Installation Design · Interaction Design · Development · Audio Engineering
```

---

## 4. src/content/collaborations/grief.md

**What to change:** Replace the `## Overview` and `## Role` sections.

**New Overview:**
```
A staged dance performance created in collaboration with Drexel University Performing Arts,
presented at Mandell Theater as part of their 50th Year Celebration showcase. The work
features live dance alongside real-time animation and simulation as interactive visual scenography.
```

**Add a new section between Overview and Role:**

```
## Concept and Approach

The design goal was to make the projection feel like a live scene partner, not a backdrop.
I worked with the choreographers early in the process to map key movement qualities and
structural moments in the piece, then built a real-time simulation system that could
track and react to those cues during performance.

The visual system used motion-derived parameters to drive particle simulations and
generative animation, with manual override for moments requiring precise timing.
All rendering ran live in TouchDesigner, projected across the full stage.
```

**New Role line:**
```
Collaboration · Art Direction · Interaction Design · Animation · Simulation · Real-Time Performance Systems
```

---

## 5. src/content/projects/harmonic-threads.md

**What to change:** Replace the `## Overview` and `## Role` sections. Add a Concept and Approach section.

**New Overview:**
```
A real-time performance installation and designer-dancer workshop exploring movement,
sound, and technology. Presented at Ars Electronica 2023 in Linz, Austria under the
theme Who Owns the Truth? as part of the Expanded Animation Symposium's Synaesthetic Syntax panel.
```

**Add a new section after Overview:**

```
## Concept and Approach

The project started as a question about translation: what happens when a dancer's
movement becomes the instrument? I designed a system that captured gestural input
in real-time and mapped it to a sonic vocabulary. Not a literal one-to-one mapping,
but one that kept the expressive character of the movement while introducing its own logic.

The workshop component was a core part of the design. Participants moved from audience
to co-creators by learning how the system worked through their bodies. This meant the
interaction model had to be discoverable without instruction: clear enough for a newcomer
to start exploring immediately, and deep enough to reward continued engagement.
```

**New Role line:**
```
Research · Collaboration · Art Direction · Interaction Design · Development · Audio Engineering
```

---

## Priority note

The Concept and Approach sections are the most important change across all project pages.
Experiential studio recruiters specifically look for evidence of how you think through an
interaction before building it. Even rough in-progress photos of sketches, diagrams, or
whiteboard work -- if you have any for these projects -- should be added to the project
image arrays in the frontmatter. That kind of process evidence does more work than
anything else on the page.
