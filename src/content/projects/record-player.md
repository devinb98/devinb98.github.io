---
title: Robotic record-player cell
tagline: Teaching myself OpenUSD by simulating a robot that plays a record.
summary: A 4-DOF arm picks a record from a crate, places it on the platter, flips to side B, and plays it — built in pure OpenUSD, no Omniverse or Blender.
role: learner
year: 2026
order: 1
featured: true
media: /media/record-player/loop.gif
still: /media/record-player/still.png
mediaAlt: The simulated arm lifting a record onto the turntable
specs:
  - { label: 'DOF', value: '4 (articulation)' }
  - { label: 'Stack', value: 'pure OpenUSD' }
  - { label: 'Physics', value: 'UsdPhysics' }
  - { label: 'Phases', value: '4 shipped' }
  - { label: 'Render', value: 'usdrecord' }
links:
  - { label: 'GitHub', href: 'https://github.com/devinb98/usd-record-player' }
---

I wanted to understand how digital twins are actually authored, so I gave
myself a concrete target: a tabletop cell where a robot arm plays a vinyl
record, start to finish, in simulation. The rule was no shortcuts — pure
OpenUSD, no Omniverse, Isaac, or Blender — so that every part of the scene was
something I had to understand rather than drag in.

## What it does

The cell runs as a sequence of shots. A 4-DOF arm reaches into a crate, grasps
a record, and places it on the platter. The tonearm drops, the platter spins,
then the arm lifts the record, flips it to side B, and replays it. All of the
motion is baked procedurally — joint angles come from a small forward-kinematics
solver, not hand-tuned keyframes.

## What I learned

The interesting problems were the ones the tutorials skip. Handing the record
from the crate to the gripper to the platter meant baking its world transform at
each handoff so it didn't snap. Flipping to side B taught me how USD's
composition rules (LIVRPS) decide which opinion wins — a local color opinion was
quietly masking the variant I was switching to until I cleared it. And a camera
whose clipping range defaulted to meters-scale wrong clipped the entire scene
until I fixed the near/far planes.

> The build is phased: turntable, then pick-and-place, then the side-B flip, and
> finally a full looping state machine. Each phase was a chance to hit — and
> write up — a new class of USD gotcha.

Next: domain-randomized synthetic data generation, then porting to a real
physics engine for closed-loop control.
