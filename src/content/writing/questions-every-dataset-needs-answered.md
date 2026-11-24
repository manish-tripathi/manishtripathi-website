---
title: The questions every dataset needs answered before you use it
description: Five usage questions I ask of every licensed or in-house dataset, and why the answers belong next to the data rather than in a contract folder.
date: 2026-11-24
draft: true
---

Most data products mix data you own with data you license from someone else. Before any of it reaches a client, someone has to be able to answer a short list of questions. If nobody can, the dataset is a risk, however good the numbers are.

## The questions

1. **Who may see it?** Which clients, which teams, and on what terms.
2. **Can it be redistributed?** In raw form, aggregated, or not at all.
3. **Can it be used to train AI models?** This is now a standard question, and the answer is often different from the answer for analytics.
4. **Can it be embedded in a client's own model?** Data that powers someone else's product is a different use from data shown on a dashboard.
5. **Who is responsible for its quality?** A named person, not a team.

## Where the answers should live

Answers that live only in a contract or a spreadsheet get lost. The answers should travel with the data: in entitlements that control who can see what, in a named owner for every table, and in monitoring that notices when a table stops arriving on time.

That is the direction I am working in now: data contracts for every data asset, written to an open standard, so anyone can find out how a dataset is governed, and data lineage, so it is clear where each dataset comes from and what depends on it.

