---
name: pipeline-analyst
description: >-
  Cleans and analyses an ATS export: triages who needs action now (stale
  candidates, feedback owed by hiring managers, open offers), then maps the
  hiring funnel stage by stage to show where candidates drop off and why, by
  source, by role and over time. Delivers a Word report of tables for hiring
  managers and leadership, plus a cleaned workbook with the recruiter's named
  action list. Use whenever a recruiter or TA leader uploads an ATS export or
  pipeline CSV (Greenhouse, Lever, Ashby, Workable, Teamtailor, SmartRecruiters
  and others), asks where candidates are dropping off, wants funnel
  conversion, time-in-stage or source-of-hire analysis, wants to clean up or
  prioritise their pipeline, or needs a pipeline review for leadership.
compatibility: Needs shell access with Python (pandas, openpyxl) and Node.js for the outputs (Claude desktop app, Claude Code, or equivalent). No web research.
---

# Pipeline Analyst

Every ATS holds the answer to "where are we losing people?", but the export is usually messy and nobody has time to work it out. This skill cleans the export, tells the recruiter who needs action today, and shows the hiring team exactly where the funnel leaks.

You work for the recruiter or TA leader. The outputs carry a small Move credit (logo, footer, one closing line); keep everything you write free of promotion.

## Step 1: Load and understand the export

Ask for anything missing in one message: the export (CSV or Excel), which roles or period to cover (default: everything in the file), and their stage names in order if the export doesn't make the order obvious.

Read it with pandas and work out its shape:

- **Snapshot:** one row per candidate, with current stage, status and dates (applied, last activity, maybe a date per stage).
- **Event log:** one row per stage move (candidate, stage, date).

Map columns to: candidate (or ID), role, source, stage, status (active, rejected, withdrew, hired), dates (applied, last activity, interview, offer, job opened, if present), rejection or withdrawal reason, owner. Confirm the mapping and the stage order back in a few lines before analysing. Never invent missing values.

## Step 2: Clean, and report what you fixed

Fix in code, and list every fix in a "Data quality" table: duplicate candidates (same person, same role), inconsistent stage names ("Phone screen" and "Phone Screen"), impossible dates (offer before application), candidates rejected with no stage, rows with no role, withdrawals recorded as rejections (a "Rejected" status with a reason like "Candidate withdrew": reclassify as withdrew), and rejections with no reason recorded. Don't silently drop anything: count it and say why. Data quality findings are useful in their own right ("31% of rejections have no reason recorded").

## Step 3: Triage: who needs action now

Build the action list in code. Use these defaults unless the user gives their own:

- **Stale:** active, with no activity for 7+ days at screen or interview stages, or 3+ days at offer.
- **Feedback owed:** interviewed, with no next step recorded for 3+ working days.
- **Open offers:** offer stage, with days since the offer was made.
- **Long in stage:** more than twice the median time for that stage.

Put each candidate in one group only, in this priority order: open offer, feedback owed, stale, long in stage. Within each group, rank by days waiting, longest first. "Feedback owed" needs evidence an interview happened (an interview date or scorecard column, or an event log); in a snapshot without that, report interview-stage candidates idle for 3+ working days as "Waiting at interview stage" instead. "Days since offer" needs an offer date; without one, use days since last activity and say so. Every candidate who is waiting is someone who may accept another offer.

## Step 4: Analyse the funnel

Compute everything in code:

- **Furthest stage reached** per candidate. For snapshot data with only current stage, a rejected or withdrawn candidate's furthest stage is the stage they were at when it happened.
- **Stage conversion:** of those who reached a stage, the share who reached the next one. Also count, at each stage, how many were rejected and how many withdrew. Withdrawals point to candidate experience and pace; rejections point to targeting and the bar.
- **Time in stage:** median days per stage, where dates allow. A snapshot without per-stage dates can't give this: write "n/a" and say so in the method, and skip "long in stage" in triage.
- **Candidates still in progress:** leave active candidates out of the conversion for the stage they're currently at (they haven't converted or failed yet), and say so in the method.
- **By source:** candidates, how many reached interview, offers, hires, per source. The best source is the one that produces hires, not the one with the most volume.
- **By role:** active pipeline, stale count (all candidates in any triage group for that role), days open (from the job-opened date, or the earliest application if there isn't one; say which), where each role is stuck.
- **Reasons:** top rejection and withdrawal reasons, if recorded.
- **Over time,** if the period is long enough: monthly applications and conversion.

**The bottleneck** is the stage with the biggest unexplained loss: lowest conversion, highest withdrawals or longest wait. Name one, with evidence.

**No external benchmarks.** Compare within the data (source against source, role against role, this month against last). If the user asks how they compare with the market, say published benchmarks vary too widely by role and company to be reliable, and offer the internal comparison instead.

**Sample size:** a stage, source or role with fewer than 10 candidates gets "(small sample)" on its figures. Never draw a conclusion from 4 people.

## Step 5: Decide the actions

Write 3 to 5 actions tied to evidence. Each one names the issue, the evidence ("12 of 19 withdrawals happen between final interview and offer, median 9 days"), the action, and the owner (recruiter, hiring manager, TA leadership). Point to a skill where one helps: `motivation-discovery` for withdrawals, `job-spec-auditor` or `talent-market-mapper` for a thin top of funnel, `interview-pack-builder` for inconsistent interview outcomes, `outreach-intelligence` for weak sourcing replies.

Then a one-line verdict, e.g. "Plenty of people in, but you lose a third of finalists waiting for an offer."

## Step 6: Build the outputs

**6a. Cleaned workbook** (openpyxl, in code): sheets "Action list" (ranked, with names, stage, days waiting and the action), "Funnel", "By source", "Cleaned data", "Data quality". Bold headers, frozen top row, sensible column widths. Name it `<Scope>_Pipeline_Workbook.xlsx`. This is the recruiter's working file: it contains names.

**6b. Report** for hiring managers and leadership. Save `pipeline_report_config.json`:

```json
{
  "scope": "<e.g. 'Engineering roles' or a role title>", "company": "", "date": "<month and year>",
  "period": "<date range covered>",
  "totals": { "candidates": 0, "active": 0, "hired": 0, "rejected": 0, "withdrew": 0 },
  "headline": { "verdict": "", "text": "<2 to 3 sentences>" },
  "funnel": [ { "stage": "", "reached": 0, "conversion": "<share reaching next stage, e.g. 34%, or empty for the last stage>", "median_days": "", "rejected": 0, "withdrew": 0 } ],
  "bottleneck": { "stage": "", "finding": "<one or two sentences with the evidence>" },
  "triage": { "offers_open": 0, "feedback_owed": 0, "stale": 0 },
  "sources": [ { "source": "", "candidates": 0, "interviewed": 0, "offers": 0, "hires": 0, "note": "" } ],
  "roles": [ { "role": "", "active": 0, "stale": 0, "days_open": "", "stuck_at": "" } ],
  "reasons": [ { "type": "<Rejection | Withdrawal>", "reason": "", "count": 0 } ],
  "actions": [ { "issue": "", "evidence": "", "action": "", "owner": "" } ],
  "data_quality": [ { "issue": "", "count": 0, "fix": "" } ],
  "method": "<how the data was cleaned and analysed; paragraphs separated by \\n\\n>"
}
```

**The report contains no candidate names.** Triage appears as counts; names stay in the workbook.

Copy the builder into the working directory, install `docx` if needed, then run it:

```bash
cp <path-to-this-skill>/scripts/output_builder.js .
npm ls docx >/dev/null 2>&1 || npm install docx
node output_builder.js pipeline_report_config.json <Scope>_Pipeline_Report.docx
```

Delete the config afterwards. Present both files. In chat, give the verdict, the bottleneck, and the top three people on the action list (names are fine in chat; the user owns this data). If a build fails, debug and retry.

## Writing rules

- Plain language. British English unless the user writes in American English.
- No em dashes anywhere. Use commas, colons, full stops or brackets.
- Every number comes from code. State the period covered; pipelines change weekly.
