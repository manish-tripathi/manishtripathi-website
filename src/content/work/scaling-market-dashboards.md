---
title: Scaling power-market dashboards to new regions
description: How I grew Aurora Energy Research's historical market dashboards by more than 400%, across Europe, Australia, Asia Pacific and North America.
order: 1
metric: 400%+
metricLabel: growth in coverage
role: Product Manager, Aurora Energy Research
period: 2025 – present
tools: [SQL, Python, dbt, Snowflake, Star schema modelling, Data APIs]
---

## The problem

Aurora's historical market dashboards covered wholesale power in a handful of key European markets: the UK, Germany, France and Italy. Clients wanted more countries, more market types and more regions.

## What I did

- Worked with the external data-collection partner to gather the raw data, and checked it was correct before anything moved on.
- Harmonized data from many sources and overlapping price series into one star schema of facts and dimensions in the data warehouse.
- Wrote the configurations that publish that data to Aurora's data APIs, and the configurations behind the dashboard charts.
- Worked with research teams to review and approve the data before release.
- Split the work into collection, processing and visualisation, each with a clear owner, on a sprint cadence.

## The result

Coverage grew more than 400%:

- **Europe:** 10 to 11 more countries, including the Netherlands, Ireland and Spain.
- **European ancillary markets** added for almost every country: aFRR, mFRR, FCR, replacement reserves and capacity.
- **Australia:** built the WEM dashboards and moved the NEM onto the new setup.
- **Asia Pacific:** Korea and the Philippines.
- **North America:** nodal data extended beyond ERCOT and MISO to PJM, ISO-NE and WECC.

The same harmonized data now feeds backcasts and automated monthly market commentary.

