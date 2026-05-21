---
title: "BioreactAR"
description: "An AR learning simulation for Meta Quest 3 that places an industrial 30L bioreactor into a student's physical space, letting them explore its components and processes in context."
date: 2024-06-01
tags: ["AR", "interactive", "education", "Unity", "Quest 3", "spatial UX", "3d"]
thumbnail: "/images/projects/bioreact-ar/passthrough-full-system.jpg"
featured: true
status: "in-progress"
mediaTypes: ["ar-vr", "interactive", "3d"]
videos:
  - type: "vimeo"
    id: "1181429566"
    title: "BioreactAR — Development Build"
images:
  - "/images/projects/bioreact-ar/passthrough-full-system.jpg"
  - "/images/projects/bioreact-ar/passthrough-scale-room.jpg"
  - "/images/projects/bioreact-ar/passthrough-vessel-top.jpg"
  - "/images/projects/bioreact-ar/ui-component-gauge.jpg"
  - "/images/projects/bioreact-ar/ui-component-screen.jpg"
  - "/images/projects/bioreact-ar/passthrough-quest-overlay.jpg"
  - "/images/projects/bioreact-ar/early-dev-model.jpg"
---

## Overview

BioreactAR is an interactive AR learning simulation for Meta Quest 3 built in Unity 6.
Using passthrough, a detailed 3D model of an industrial 30L bioreactor is placed directly
into a student's physical environment at full scale. Students can walk around the system,
select individual components, and surface contextual information through a spatial UI —
effectively bringing a piece of industrial lab equipment into any classroom or workspace.

The project is a commission currently in active development, designed to grow into a full
learning module covering both the physical components of the bioreactor and the biological
and chemical processes it supports.

## Concept and Approach

The core premise was that scale and physical context matter for understanding industrial
equipment. A diagram or video cannot communicate what it feels like to stand next to a
30L bioreactor — passthrough AR on Quest 3 lets the simulation occupy real space at real
scale, which changes how a student relates to the object.

The interaction model is built around component-level exploration: students select parts
of the model to surface information specific to that component. This keeps learning
anchored to the physical object rather than pulling attention into a separate UI space.
The spatial UI is designed to stay readable across the range of distances and angles a
student might view from, and to feel attached to the model rather than floating
independently.

Keeping the digital model visually grounded in the real environment required careful
material work — calibrating Unity materials and lighting so the AR model reads as
occupying the same physical space rather than sitting on top of it.

## Development

Led all technical development and experience design from initial build through handoff.
Documentation shown is from the development build; content population is ongoing.

- Maya model cleanup and optimization for real-time AR rendering
- Material authoring in Unity calibrated to real-world passthrough lighting
- AR passthrough implementation for Meta Quest 3 in Unity 6
- Component selection interaction and UI state management
- Spatial UI design and implementation
- Overall experience architecture and interaction model

## Links

- [GitHub — BioreactAR](https://github.com/dwoodjr/BioreactAR)

## Role

Technical Lead · Experience Design · AR Development (Unity 6 + Quest 3) ·
Spatial UI Design · 3D Asset Pipeline (Maya → Unity)
