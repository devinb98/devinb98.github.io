---
title: Store data analysis
tagline: Modeling retail sales against the real-world signals that explain them.
summary: End-to-end incremental ingestion from S3 with dbt and Snowflake, then Python analysis correlating sales against unemployment, fuel price, CPI, and temperature.
role: builder
year: 2025
order: 5
featured: false
media: /media/store/pipeline.svg
mediaAlt: Incremental ingestion from S3 through dbt into Snowflake, then Python analysis
specs:
  - { label: 'Source', value: 'S3 (incremental)' }
  - { label: 'Transform', value: 'dbt' }
  - { label: 'Warehouse', value: 'Snowflake' }
  - { label: 'Analysis', value: 'Python' }
links: []
---

Store sales don't move in a vacuum — they track weather, fuel prices, and the
broader economy. This project builds the plumbing to see those relationships
clearly.

## What it does

An incremental ingestion job pulls data from S3, dbt models it inside Snowflake,
and Python visualizations correlate sales against external signals:
unemployment, fuel price, CPI, and temperature. The incremental design means
runs stay cheap and fast as data grows, rather than reprocessing everything each
time.

It's a compact demonstration of the modern analytics stack — object storage, a
warehouse, and dbt for transformation — used to answer a real question instead of
just moving bytes around.
