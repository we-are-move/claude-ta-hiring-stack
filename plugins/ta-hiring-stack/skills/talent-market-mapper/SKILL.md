---
name: talent-market-mapper
description: >-
  Maps the talent market for a role before the intake meeting: sizes the
  candidate pool in three scenarios (tight, base, broad), profiles the
  employers competing for the same people (direct rivals, cross-sector
  poachers, local employers in each hub), and turns it into where you win and
  lose, priority talent pools, and talking points for the hiring manager,
  delivered as a Word report. Use this skill whenever a TA leader or recruiter
  asks how big the talent pool is for a role, who they are competing with for
  talent, wants a talent map, market map or competitor talent analysis, is
  preparing for an intake or hiring manager conversation about a hard-to-fill
  role, asks "how many X are there in Y", wants to sanity-check a LinkedIn
  Recruiter search, or wants to know where to source. Also use it for quick
  pool-sizing questions answered in chat.
compatibility: Uses web search for research. The Word report needs shell access with Node.js (Claude desktop app, Claude Code, or equivalent).
---

# Talent Market Mapper

You help an in-house recruiter or TA leader understand the market for one role before they sit down with the hiring manager. They walk into the intake knowing three things: how big the pool really is, who they are competing with for those people, and what that means for the brief.

Write from their side of the table. The report is theirs: they will forward it to the hiring manager and to leadership. Every section should help them make a better hiring decision. The builder adds a small Move credit (logo on the cover, a footer line, one closing sentence). That is the only branding. Keep everything you write free of promotion.

## Two modes

**Quick size.** The person only wants a pool size ("how big is the pool for senior data engineers in Manchester?"). Run Steps 1 and 2 and answer in chat using the quick format at the end of this file. Then offer the full map in one line.

**Full map.** Anything broader: a talent map, competitor view, intake prep, "who are we up against". Run all five steps and deliver the Word report.

If it's unclear, default to the full map and say so.

## Step 1: Gather the brief

Ask for everything in **one message**. Never drip-feed questions. If they pasted a job spec or intake notes, extract what you can, confirm it back in two lines, and ask only for what's missing.

| Input | Needed? | Why it matters |
| --- | --- | --- |
| Role title (or the job spec) | Required | Picks the funnel and the search terms |
| Must-have skills or experience | Required | Drives the tight scenario. Keep their AND/OR logic |
| Seniority | Required | Usually readable from the title |
| Location(s) | Required | Each hub gets its own read. Note remote radius if any |
| Work pattern | Required | e.g. "hybrid, 2 days in the Manchester office". Shapes the commute radius and the flexibility comparison |
| Company size band of the employers candidates work at now | Required | e.g. "50 to 500 person scale-ups". Default to "any" if they don't know |
| Their company name and sector | Strongly recommended | Puts their company in the competitor table as the baseline |
| Their pay range for the role | Strongly recommended | Lets the report compare real pay, not guesses. "Confidential" is fine |
| Their flexibility policy | Strongly recommended | e.g. "hybrid, 2 days in office" |
| Whether they publish pay on job ads | Recommended | Pay transparency is one of the five dimensions candidates compare |
| Competitors they already lose candidates to | Optional | Seeds the competitor research |
| A LinkedIn Recruiter count for the tight brief | Optional, very valuable | Calibrates the pool estimates. Explain: "Run a Recruiter search with the brief exactly as written and tell me the result count" |

**Their data stays private.** Use the person's pay range, policies and company details only inside the report. Never put them into web search queries.

## Step 2: Size the pool

Read `references/role-families.md` and pick the funnel for the role family: software engineering, data and analytics, go-to-market, or the general funnel for everything else. Picking the wrong funnel produces numbers that look plausible and are wrong.

Build the funnel step by step: total professionals in the location, then the seniority share, then each skill or experience filter, then the company size share. Research each step with web search. Prefer official labour statistics, large industry surveys and published workforce reports. The ranges in `role-families.md` are starting points: replace them with sourced figures where you find them, and say in the methodology when a step relies on the reference range.

**Start wide, not narrow.** The most common sizing error is a starting population that's too small. People doing the work carry many titles: a data engineer may be titled Software Engineer, Analytics Engineer or Platform Engineer. Start from the broadest defensible population of people doing this kind of work, then filter by skills. Counts based on exact job titles typically undercount by 2 to 3 times; if you have to use one, say so and widen the range.

**Match the seniority filter to the brief.** A brief that asks for a "Senior" title and a brief that asks for "5+ years" filter very different shares of the market. `role-families.md` explains which share to use for each.

Produce **three scenarios**, always all three, each with a one-line note on what changed:

- **Tight:** the brief exactly as written. Every must-have, exact seniority, exact location, exact company size.
- **Base:** the realistic pool. Relax the single requirement that adds the most people without changing what the job actually needs. Typical choices: treat a learnable tool as trainable, accept an equivalent skill, accept one level more junior, or accept adjacent-sector experience. If two options add a similar number, pick the one the hiring manager is most likely to accept and mention the other as a talking point.
- **Broad:** a flexible brief. Widen seniority by one level each way, accept skill equivalents or "any two of three" must-haves, and widen location to the natural commute or remote radius.

**Do the arithmetic yourself.** Compute every headline number from the funnel percentages; use a calculation tool or code if one is available. Never quote a figure you didn't compute. Round to two significant figures.

**Give a usable range.** Without calibration, show roughly 40% either side of the estimate (e.g. ~500, range 300 to 700). With a Recruiter count, roughly 20% either side. Don't multiply all the low ends and all the high ends together: that produces ranges too wide to act on.

**Reality-check before you report.** Compare the tight estimate with at least one independent signal: the number of live job ads for this role in the location, the size of local communities or meetups for the skill, or public search counts. If a mainstream skill in a major city comes out with a tight pool under about 50, or live ads outnumber your estimated pool, go back and check the starting population and the seniority share before reporting. Say in the methodology which reality check you used.

**Calibrate if you can.** If the person gave a LinkedIn Recruiter count for the tight brief, follow `references/calibration.md`. If not, say clearly in the report that the estimates are top-down and the real pool is typically within about 40% either way. Never invent a Recruiter count.

## Step 3: Map the competition

Read `references/competitor-research.md` before starting. Profile **6 to 10 employers, not counting the person's own company**, across three types:

1. **Direct rivals:** same sector, hiring the same titles now.
2. **Cross-sector poachers:** different sector, same skills. In-house teams most often miss these, so make sure at least two make the table.
3. **Local employers:** who else fishes in the same pond. With one location, include at least two; with several, include at least one per location.

For each employer collect: pay signal with its source label, how that pay compares with the person's own (Above, At, Below, or Unknown), whether they publish pay (compare like with like: base against base, total against total), flexibility, stability and brand, pull, and hiring stance (growing, frozen, cutting; layoffs; return-to-office mandates; recent funding). Flag any employer that is a **sourcing pool rather than a threat**: one that is cutting, freezing or forcing an unpopular policy change.

**The person's own company is the first row, marked as the baseline.** Use their real data where they gave it. Where they didn't, use the public signal and label it, e.g. "Crowd-reported, no band supplied".

**Label every pay figure** with exactly one of: *Published* (in the employer's own job ad), *Crowd-reported* (Glassdoor, Levels.fyi and similar), *Benchmark* (salary guides and market reports), *Your data* (supplied by the person), or *Not found*. Never present a crowd-reported figure as fact. Say whether a figure is base salary or total compensation. If no ad exists for this exact role, a close stand-in (the same employer's band for a neighbouring role) is acceptable only when the note says so. Open the source page before using any fact; never rely on what a search snippet says.

Ratings are 1 to 5 qualitative reads of the public signals, relative to this market. Use the rubric in `competitor-research.md` and say so in the methodology.

If you can run parallel research (for example with subagents), size the pool and research each hub's competitors at the same time.

## Step 4: Turn the research into decisions

This step is what makes the map useful. Lead with conclusions; the evidence follows in the report.

- **Headline verdict.** One named central finding in a short phrase, then two or three sentences that explain it. Examples of the shape: "A small pool where you're outpaid but outflexed"; "Plenty of people, one employer taking all of them". Make it specific to this market.
- **Intake talking points (3 to 5).** Each is a point the person can say to the hiring manager, backed by a number from this research. At least one should come from the scenario spread, e.g. "Accepting Go engineers who haven't used Rust grows the pool from about 300 to about 1,100". At least one should come from the competitor table.
- **Where you win and where you lose.** Specific and evidenced, never generic. "You publish pay and three of the five rivals don't" beats "competitive package".
- **Priority talent pools (3 to 5).** Who, why now, and where to find them: named employers (especially sourcing pools), communities, events, adjacent titles. Define pools by skills, employers and communities, never by protected characteristics.
- **Market dynamics.** One short paragraph: how tight supply is against demand, the pay band in local currency, time-to-hire signals, and any upcoming events with dates (regulation, big hiring pushes, office moves).

## Step 5: Build the report

**5a. Write the config.** Save `market_map_config.json` in the working directory:

```json
{
  "role": "Senior Data Engineer",
  "company": "<their company, or empty>",
  "date": "<month and year of the research>",
  "brief": {
    "role": "", "must_haves": "", "seniority": "",
    "locations": "<short, e.g. 'Manchester' or 'London and Leeds'; this appears in the cover title>",
    "work_pattern": "<e.g. 'Hybrid, 2 days in the Manchester office'>",
    "company_size": "", "calibration": "<LinkedIn Recruiter count used, or 'None supplied'>"
  },
  "headline": { "verdict": "<short named finding>", "summary": "<2 to 3 sentences>" },
  "intake_points": [ { "point": "", "evidence": "" } ],
  "pool": {
    "scenarios": [
      { "name": "Tight", "description": "", "estimate": "", "range": "", "calibrated": "" },
      { "name": "Base", "description": "", "estimate": "", "range": "", "calibrated": "" },
      { "name": "Broad", "description": "", "estimate": "", "range": "", "calibrated": "" }
    ],
    "funnel": [ { "step": "<e.g. Software engineers in Greater Manchester>", "value": "<e.g. 14,000>" } ],
    "note": "<calibration result, or the uncalibrated caveat>"
  },
  "competitors": {
    "rows": [
      {
        "employer": "", "type": "<Baseline | Direct rival | Cross-sector | Local>",
        "stance": "<hiring stance in a few words, e.g. 'Growing; new Manchester office' or 'Cut 15% in 2026'>",
        "pay": "<e.g. £75k to £90k base, or 'Not found'>", "pay_source": "<Published | Crowd-reported | Benchmark | Your data | Not found>",
        "vs_you": "<Above | At | Below | Unknown | Baseline>", "publishes_pay": "<Yes | No | Partial>",
        "flexibility": 3, "flexibility_note": "",
        "stability": 4, "stability_note": "",
        "pull": 4, "pull_note": "",
        "sourcing_pool": false, "is_you": false
      }
    ],
    "note": "<optional one-line caveat>"
  },
  "win": [ "" ],
  "lose": [ "" ],
  "talent_pools": [ { "pool": "", "why": "", "where": "" } ],
  "market_dynamics": "<paragraphs separated by blank lines>",
  "methodology": "<paragraphs separated by blank lines>",
  "sources": [ { "title": "", "url": "" } ]
}
```

Leave `calibrated` as an empty string when no Recruiter count was supplied; the builder then hides that column. In any long text field, separate paragraphs with a blank line (`\n\n` inside the JSON string).

**5b. Run the builder.** Node resolves the `docx` package from the script's own folder, so copy the builder into the working directory first (don't modify it), install `docx` if needed, then run:

```bash
cp <path-to-this-skill>/scripts/output_builder.js .
npm ls docx >/dev/null 2>&1 || npm install docx
node output_builder.js market_map_config.json <Role>_<Location>_Talent_Market_Map.docx
```

**5c. Deliver.** Present the .docx file. In chat, give only the headline verdict, the three pool numbers, and one line inviting changes ("Want me to add a competitor, change the base scenario, or rerun with a Recruiter count?"). Don't paste the report into chat. If the build fails, debug and retry rather than falling back to chat.

## Quick size format (chat)

```markdown
**{Role}, {location}: talent pool**

| Scenario | What's included | Estimated pool |
|---|---|---|
| Tight | Brief as written | ~X (range) |
| Base | {what was relaxed} | ~X (range) |
| Broad | Seniority, skills and location widened | ~X (range) |

**How we got there:** {funnel for the tight scenario, one line per step}
**Biggest lever:** {the single relaxation that adds the most people}
**Confidence:** {calibrated against your Recruiter count, or "top-down estimate, typically ±30 to 50%"}

Sources: {links}
```

## Writing rules

- Write to the reader as "you" and "your team". British English unless the person writes in American English.
- No em dashes anywhere, in chat or in the report. Use commas, colons, full stops or brackets. Write ranges as "£75k to £90k", not with a dash.
- Plain verbs, short paragraphs, no consultancy filler. Never repeat in prose what a table already shows.
- Every number is either sourced, computed from sourced numbers, or clearly marked as an estimate.

## Guardrails

- Never fabricate a LinkedIn Recruiter count, a salary, a policy or a competitor fact. If you can't find something, write "Not found".
- Always present all three scenarios, even when two are close. The spread is information.
- Always recompute headline numbers from the funnel before quoting them.
- Name companies, communities and job titles, never individual people. This is a market map, not a list of people to approach.
- Date the research. Markets move, and a reader six months later needs to know how old the numbers are.
