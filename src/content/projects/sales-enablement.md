---
title: Sales Enablement Pro
tagline: An AI deal room that turns a rep's own documents into a source-backed action plan.
summary: Upload meeting notes, company profiles, and RFPs; it returns a situation summary, sequenced next steps, and a checklist — where every claim links back to the exact passage that justifies it.
role: ai
year: 2026
order: 2
featured: true
diagram: sales-enablement
specs:
  - { label: 'Client', value: 'React' }
  - { label: 'Server', value: 'Flask' }
  - { label: 'AI', value: 'LangChain RAG' }
  - { label: 'Model', value: 'Gemini' }
  - { label: 'Pattern', value: 'cited RAG' }
  - { label: 'Deploy', value: 'Render' }
links:
  - { label: 'GitHub', href: 'https://github.com/devinb98/sales-enablement-pro' }
  - { label: 'Live demo', href: 'https://sales-enablement-web.onrender.com' }
---

A sales rep's context about a deal is scattered across notes, PDFs, and memory.
After every customer conversation they have to re-read all of it to answer one
question — *what do I actually do next?* Deals stall not because they were lost,
but because a follow-up was missed. This app does that synthesis, and shows its
sources so the rep can trust and verify it.

## What it does

A rep uploads the artifacts for a deal — meeting notes, a company profile, an
RFP. An ingestion pipeline extracts, chunks, embeds, and indexes them, and a RAG
step generates an action plan from *only that deal's* documents: a situation
summary, sequenced next steps, and action items. Every step and item carries a
citation that resolves back to the quoted source passage, so nothing is a
black-box assertion.

## How it's built

A React client and a Flask server, with email/password auth and strict per-user
data isolation — each rep only ever sees their own deals and documents. Deals are
the protected, user-owned resource with full CRUD; documents (PDF / TXT / MD) run
through the extract → chunk → embed → index pipeline; plans are generated with
LangChain RAG over Gemini. It exports a pitch deck, and runs on Render.

> Built for individual B2B reps juggling several deals without a dedicated
> enablement team — the exact user I spent years selling alongside.
