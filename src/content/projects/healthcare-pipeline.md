---
title: Healthcare data pipeline & analytics
tagline: Fifteen nursing datasets, one warehouse, and the metrics that actually move care.
summary: An end-to-end pipeline — Google Drive API into AWS Lambda, Glue, and Snowflake — feeding a Streamlit dashboard on readmission, staffing, and patient-to-provider ratios across ~14,700 facilities.
role: builder
year: 2025
order: 3
featured: true
diagram: healthcare
specs:
  - { label: 'Ingest', value: 'Google Drive API' }
  - { label: 'Compute', value: 'AWS Lambda + Glue' }
  - { label: 'Warehouse', value: 'Snowflake' }
  - { label: 'Dashboard', value: 'Streamlit' }
  - { label: 'Facilities', value: '~14,700' }
links:
  - { label: 'Live dashboard', href: 'https://devinb98-healthcare-dashboard-app-58tt5l.streamlit.app/' }
  - { label: 'GitHub', href: 'https://github.com/devinb98/healthcare-dashboard' }
---

Raw nursing data lived across fifteen separate files with no shared shape and no
easy way to ask questions of it. I built a pipeline to land it all in one place
and put the answers in front of the people who needed them.

## The pipeline

Files are pulled from Google Drive through its API, processed by AWS Lambda and
transformed with Glue, then loaded into Snowflake as the single source of truth.
On top of that, Streamlit dashboards surface the measures that matter for care
quality — readmission rates, staffing levels, and patient-to-provider ratios —
so the numbers are explorable rather than buried in spreadsheets.

This was a deliberate reps-building exercise in cloud data engineering end to
end: ingestion, transformation, warehousing, and the last-mile dashboards that
make the work useful to someone who isn't an engineer.

## Seeing it

The original dashboard was a Streamlit-in-Snowflake app, which can't be shared
outside a Snowflake login. So I ported it to a public, always-on version that
reads a small pre-aggregated slice of the data — no database, no credentials —
over ~14,700 CMS-certified facilities. The code is on GitHub.
