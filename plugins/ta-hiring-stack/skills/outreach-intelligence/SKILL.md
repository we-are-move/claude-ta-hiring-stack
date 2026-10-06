---
name: outreach-intelligence
description: >-
  Turns candidate outreach responses into market intelligence, the way sales
  teams run win/loss analysis: codes every decline by reason (pay,
  flexibility, scope, company, message, timing, not looking, already
  committed), separates what you can fix from what you can't, and pulls out
  the pay figures, competitor moves and re-engage dates hidden in the replies.
  Gives teams a branded Excel tracker to start logging responses, and turns an
  uploaded CSV of responses into a Word report of tables for the hiring
  manager plus a tagged spreadsheet. Use whenever a recruiter or TA leader
  asks why candidates are saying no, wants to track or analyse outreach
  rejections, closed-lost or decline reasons, reply rates, or market feedback
  from sourcing, or asks for an outreach or rejection tracker.
compatibility: Needs shell access with Python (pandas, openpyxl) and Node.js for the outputs (Claude desktop app, Claude Code, or equivalent). No web research.
---

# Outreach Intelligence

Most teams record outreach as yes, no or silence, then move on. But every decline is free market research: "thanks, but I'm on £95k and it's 3 days in the office" tells you exactly what's costing you hires. Sales teams learned this long ago with win/loss analysis. This skill brings it to recruiting.

You work for the recruiter or TA leader. The outputs carry a small Move credit (logo, footer, one closing line); keep everything you write free of promotion.

## Two modes

**Start tracking.** The user wants a way to log responses, or has no data yet. Copy `assets/outreach-tracker.xlsx` into their working folder and present it. In chat, explain in three lines: log every response, give each decline a reason code and their exact words, and come back with a CSV export at 15+ replies. The tracker's "How to use" and "Reason codes" sheets carry the theory.

**Analyse.** The user uploads a CSV or spreadsheet of responses (their tracker, or an export from LinkedIn Recruiter, Gem, Instantly, an ATS, or pasted replies). Steps 1 to 4.

## The reason codes

Use exactly these, one main reason per decline:

| Code | Sounds like | Fixable? | What it tells you |
| --- | --- | --- | --- |
| Pay | "I'm already on more than that" | Yes | Your pay band. Evidence for the hiring manager; recheck the market with `talent-market-mapper` |
| Flexibility or location | "I'm fully remote now", "too far" | Yes | Your work pattern. Evidence for leadership on office policy |
| Scope or level | "That's a step back for me" | Yes | The spec or level (`role-calibrator`, `job-spec-auditor`), or your targeting |
| Company | Stage, stability, sector, brand | Partly | Your employer story: address it earlier in the message |
| Message | "Not my area", "you didn't read my profile" | Yes | Targeting and copy (`candidate-outreach-writer`). A message problem, not a market one |
| Timing | "Just started", "ask me in the spring" | No | Re-engage later, with a date |
| Not looking | Happy, no reason given | No | Nurture pool. High volume can mean you're reaching people too settled to move |
| Already committed | Accepted elsewhere, late stages elsewhere | No | Competitor intel; if frequent, your process may be too slow |
| Other | Doesn't fit, or too vague to code | Review | Review: a frequent "Other" may need its own code |

## Step 1: Load and normalise

Read the file with pandas. Map the columns you find to: date, candidate (or ID), role, channel, touch, outcome (No reply, Declined, Interested, Referred someone), reason code, their words, pay mentioned, company mentioned, re-engage date. Say in one line which columns you mapped and anything you couldn't find. Never invent missing values. Map raw values to the nearest tracker option (a generic "LinkedIn" channel stays "LinkedIn InMail" only if the export says InMail; otherwise "Other"). Split generic statuses like "Replied" into Declined, Interested or Referred someone from the reply text. Keep dates as dates, without times.

If replies aren't coded yet, code each one from its text. Pick the reason they led with. Where a reply is too vague to code, use "Other" and say why. Extract any pay figure, company name and return date mentioned.

## Step 2: Analyse, in code

Compute every number in code, never by eye:

- **Totals:** contacted, replied, declined, interested, no reply; reply rate and interest rate.
- **Decline reasons:** count and share of declines per code, split into fixable and not fixable, with the strongest one or two quotes per code.
- **Message performance:** reply rate by channel and by touch, if those columns exist.
- **Market intel:** every pay figure mentioned (with base or total if stated), every company mentioned and how often, any other market signal (layoffs, hiring sprees).
- **Re-engage list:** everyone with a return date or a Timing decline, sorted by date, plus how many fall due in the next 30 days.
- **By role,** if the file covers more than one role and each has enough replies.

**Sample size:** with fewer than 15 replies in total, set `low_sample` to true. Any single reason with fewer than 5 declines, and any channel or touch with fewer than 10 messages sent, gets "(early signal)" added to its share or reply rate. Never present a pattern from 3 replies as a conclusion.

## Step 3: Decide the actions

Write 3 to 5 actions, each tied to evidence. Lead with fixable reasons in order of volume. Each action names the issue, the evidence ("7 of 18 declines, 39%"), what to do, who owns it (recruiter, hiring manager, leadership) and the skill that helps, where one does. Example: "Pay: 6 of 18 declines cite pay; four quoted £90k to £100k base against a £75k to £90k band. Take the quotes to the hiring manager and decide: raise the band, or target one level earlier."

Then a one-line verdict for the top of the report, e.g. "You're losing on pay and office days, not on the role."

## Step 4: Build the outputs

**4a. Tagged spreadsheet.** Write every response back into a copy of `assets/outreach-tracker.xlsx` (Log sheet, same columns, starting at row 2, overwriting the example rows) using openpyxl, filling in the codes you assigned. Name it `<Role>_Outreach_Log_Tagged.xlsx`. Clear any example rows you don't overwrite. This is the recruiter's working file: it may contain names.

**4b. Report for the hiring manager.** Save `outreach_report_config.json`:

```json
{
  "role": "<role, or 'All roles'>", "company": "", "date": "<month and year>",
  "period": "<e.g. 1 to 30 September 2026>",
  "low_sample": false,
  "totals": { "contacted": 0, "replied": 0, "declined": 0, "interested": 0, "no_reply": 0, "reply_rate": "0%", "interest_rate": "0%" },
  "headline": { "verdict": "", "text": "<2 to 3 sentences>" },
  "reasons": [ { "code": "", "count": 0, "share": "0%", "fixable": "Yes | Partly | No | Review", "quote": "<the candidate's words only, anonymised>", "note": "<your coding note, e.g. too vague to code, or empty>" } ],
  "actions": [ { "issue": "", "evidence": "", "action": "", "owner": "", "skill": "<skill name or empty>" } ],
  "pay_intel": [ { "figure": "", "context": "<role or level, base or total>", "mentions": 1 } ],
  "companies": [ { "name": "", "mentions": 0, "context": "<joined, interviewing, mentioned as better offer>" } ],
  "message": [ { "segment": "<channel or touch>", "sent": 0, "replies": 0, "reply_rate": "0%" } ],
  "reengage_count": 0,
  "method": "<how the data was coded and counted; paragraphs separated by \\n\\n>"
}
```

**The report never contains candidate names or identifying details.** Quotes are anonymised and trimmed to the useful part. The re-engage list stays in the spreadsheet; the report gives only the count.

Copy the builder into the working directory, install `docx` if needed, then run it:

```bash
cp <path-to-this-skill>/scripts/output_builder.js .
npm ls docx >/dev/null 2>&1 || npm install docx
node output_builder.js outreach_report_config.json <Role>_Outreach_Intelligence.docx
```

Work in the current working directory and save both outputs where the user can open them. Delete `outreach_report_config.json` after building: it holds quotes. Present both files. In chat, give the verdict, the top two fixable reasons with their counts, and the number of people to re-engage this month. If a build fails, debug and retry.

## Writing rules

- Plain language. British English unless the user writes in American English.
- No em dashes anywhere. Use commas, colons, full stops or brackets.
- Quote candidates' words exactly, but anonymised; never strengthen or soften them.
- Replies are personal data: use them only for this analysis and keep names out of anything meant for sharing.
