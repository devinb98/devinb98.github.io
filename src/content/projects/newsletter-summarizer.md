---
title: Multi-agent newsletter summarizer
tagline: A three-agent pipeline that reads my inbox and writes me a digest.
summary: LangGraph + Claude pipeline — Parser, Summarizer, and Editor agents turn each morning's newsletters into one clean digest, delivered back to my inbox on a cron.
role: ai
year: 2026
order: 3
featured: true
media: /media/newsletter/pipeline.svg
mediaAlt: Diagram of the Parser, Summarizer, and Editor agent pipeline
specs:
  - { label: 'Agents', value: '3 (graph)' }
  - { label: 'Orchestration', value: 'LangGraph' }
  - { label: 'Model', value: 'Claude' }
  - { label: 'Source', value: 'Gmail API' }
  - { label: 'Runtime', value: 'daily cron' }
links:
  - { label: 'GitHub', href: 'https://github.com/devinb98/newsletter-summarizer' }
---

I subscribe to more newsletters than I can keep up with, so I built something to
read them for me. It runs every morning without my touching it and drops a
single digest in my inbox.

## How it works

It's a small state graph of three agents, each with one job:

- **Parser** — pulls the day's newsletters from Gmail and strips them down to
  clean text, dropping boilerplate and markup.
- **Summarizer** — condenses each one into its actual substance.
- **Editor** — stitches the summaries into one coherent digest with a consistent
  voice, then it's sent back to my inbox.

LangGraph wires the three together as a typed pipeline; Claude does the reading
and writing at each node; the Gmail API handles fetch and send. A cron job runs
the whole thing on a schedule.

## Why I built it this way

I could have done this in one big prompt, but splitting it into roles made each
step easy to inspect and tune on its own — I can look at exactly what the Parser
produced before the Summarizer ever sees it. It's a small, honest example of
treating an LLM as a component in a system rather than a chat box, which is the
pattern I'm most interested in getting good at.
