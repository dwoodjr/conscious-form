---
title: "BioreactAR"
description: "An AR learning simulation for Meta Quest 3 that places an industrial 30L bioreactor into a student's physical space, letting them explore its components and processes in context."
date: 2024-06-01
tags: ["AR", "interactive", "education", "Unity", "Quest 3", "spatial UX", "3d"]
thumbnail: "/images/projects/bioreact-ar/bioreact-thumb.jpg"
featured: true
status: "in-progress"
mediaTypes: ["ar-vr", "interactive", "3d"]
images:
  - "/images/projects/bioreact-ar/bioreact-thumb.jpg"
  - "/images/projects/bioreact-ar/bioreact-passthrough-01.jpg"
  - "/images/projects/bioreact-ar/bioreact-ui-01.jpg"
  - "/images/projects/bioreact-ar/bioreact-model-01.jpg"
  - "/images/projects/bioreact-ar/bioreact-process-01.jpg"
---

## Overview

BioreactAR is an interactive AR learning simulation for Meta Quest 3 built in Unity 6.
Using passthrough, a detailed 3D model of an industrial 30L bioreactor is placed directly
into the student's physical environment. Students can move around it at full scale, select
individual components, and access contextual information through a spatial UI — effectively
bringing a piece of industrial lab equipment into any classroom.

The project is designed to grow into a full classroom learning module covering both the
physical components and function of the bioreactor and the biological and chemical processes
it supports.

## Concept and Approach

The core design premise was that scale and physical context matter for understanding
industrial equipment. A diagram or video of a bioreactor cannot communicate the same
thing as standing next to one. Passthrough AR on Quest 3 lets the simulation occupy real
space at real scale, which changes how a student relates to the object.

The interaction model was built around component-level exploration: students select parts
of the model to surface information specific to that component. This keeps learning anchored
to the physical object rather than pulling attention into a separate UI space. The spatial
UI was designed to stay readable across the range of distances and angles a student might
view from, and to feel attached to the model rather than floating independently.

The passthrough layer required careful work to keep the digital model visually grounded
in the real environment. Material calibration in Unity and lighting adjustments were
necessary to prevent the model from reading as a clearly foreign object sitting on top of
the real world.

## Development

Led all technical development and experience design from initial build through handoff.
Work included:

- Maya model cleanup and optimization for real-time AR rendering
- Material authoring and updates in Unity to match real-world lighting conditions
- AR passthrough implementation for Meta Quest 3 in Unity 6
- Interaction scripting for component selection and state management
- Spatial UI design and implementation
- Overall experience design and interaction model

## Role

Technical Lead · Experience Design · AR Development (Unity 6 + Quest 3) ·
Spatial UI Design · 3D Asset Pipeline (Maya to Unity)

GitHub: https://github.com/dwoodjr/BioreactAR
Vimeo Dev Video: https://vimeo.com/1181429566?fl=ml&fe=ec