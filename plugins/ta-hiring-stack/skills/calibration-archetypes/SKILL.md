---
name: calibration-archetypes
description: >-
  Builds 3 to 4 realistic candidate archetypes for a role so the hiring
  manager can react to concrete profiles before sourcing starts, then records
  their reactions as a calibration record the shortlist builder can use.
  Researches where these people really come from (feeder employers, adjacent
  titles, career paths) and delivers a Word document for the hiring manager to
  mark up. Use whenever a recruiter or TA leader wants to calibrate a role
  with a hiring manager, align on who to target, build candidate personas or
  profiles for a search, run a calibration meeting, avoid "I'll know it when I
  see it", or when a hiring manager keeps rejecting candidates. Also use it to
  turn a hiring manager's feedback on archetypes into a calibration record.
compatibility: Uses web search for research. The Word document needs shell access with Node.js (Claude desktop app, Claude Code, or equivalent).
---

# Calibration Archetypes

Hiring managers are bad at describing who they want and good at reacting to who they see. This skill gives them 3 to 4 realistic candidate archetypes to react to before sourcing starts, so "I'll know it when I see it" becomes a written agreement on who to target and which trade-offs to make.

You work for the recruiter or TA leader in their own company. Write for their hiring manager, plainly. The builder adds a small Move credit (cover logo, footer, one closing line); keep everything you write free of promotion.

## Two modes

**Build archetypes** (default): brief in, archetype document out. Steps 1 to 4.

**Record calibration**: the recruiter pastes the hiring manager's reactions ("loved B, would interview C, no to A because…"). Turn them into a calibration record. Step 5.

## Step 1: Gather the brief

Ask in one message for anything missing. Required: the role (or job spec or intake notes) and the location. Helpful: company size, stage and sector; the agreed level (from `role-calibrator` if they used it); the pay band; the hiring manager's name; anything the hiring manager has already rejected or loved. If they have real profiles from their own sourcing, they can paste them, anonymised, to ground the archetypes. If they have a talent market map from `talent-market-mapper`, use its competitor and talent pool findings.

## Step 2: Find the trade-offs

Before researching, list the 3 to 4 tensions in the brief: the places where the ideal candidate is rare and the hiring manager will have to choose. Typical axes:

- **Depth or breadth:** deep specialist or versatile generalist
- **Where they've worked:** big company, scale-up, or early-stage startup
- **Domain:** from this sector, or strong in the craft from a different one
- **Ready now or stretch:** has done this exact job, or is one step from it and hungry
- **Builder or scaler:** creates from scratch, or brings order to something that already exists
- **Hands-on or leading:** does the work, or leads the people doing it

The archetypes should sit at different points on these axes. That spread is what makes calibration work.

## Step 3: Research the patterns

Use web search to learn where people who do this job actually come from. Research patterns, never people:

- **Feeder employers and company types:** who employs people doing this work in this location (job ads, company engineering or team blogs, office announcements)
- **Adjacent titles:** what the same work is called elsewhere
- **Career paths:** the usual step before and after this role, and typical time in role
- **What's changing:** how AI and market shifts are reshaping the role, so at least one archetype reflects where it is going

Open the sources you cite. About 5 to 8 searches is usually enough; this is calibration, not a market study.

**Never search for, name or profile real individuals.** Archetypes are composites. Example employers are fine; example people are not. If the recruiter pasted real profiles, use them to ground the archetypes, but never reproduce names or identifying details. Never describe an archetype by age, gender, ethnicity, nationality, health, family status or any other protected characteristic, or by coded proxies for them ("young and hungry", "digital native", "recent graduate energy" for a non-graduate role, "culture fit").

## Step 4: Build the archetypes

Build **3 or 4** archetypes, lettered A to D (the document letters them, and hiring managers reply with letters: "Love B"). Each one must be a believable person who exists in this market in meaningful numbers. Always include:

- **One close to the brief as written**, so the hiring manager sees what "exactly what you asked for" looks like, cost included
- **One from an adjacent background** they probably haven't considered (another sector, an adjacent title, a different company type) that covers the must-haves differently

For each archetype write:

| Field | Content |
| --- | --- |
| Name | Descriptive, two to four words, e.g. "The scale-up platform builder" |
| Summary | One sentence: who they are |
| Background | Typical path: company types, titles, years |
| Typical employers | 3 to 5 real example employers in this market |
| Brings | 2 to 3 strengths against the brief |
| Gaps or risks | 1 to 3 honest gaps against the brief |
| What they'll want | What would make them move: scope, pay, flexibility, mission, growth |
| Where to find them | Employers, communities, events, adjacent titles to search |
| Market note | How common they are and how hard they are to win, in a few words |

Then write **3 to 4 trade-off questions** for the hiring manager, each forcing a choice: "If you can't have both deep domain experience and experience at a company our size, which matters more?"

### Write the config and build the document

Save `archetypes_config.json`:

```json
{
  "role": "", "company": "", "date": "<month and year>", "hiring_manager": "<name or empty>",
  "level": "<agreed or read level, or empty>", "pay_band": "<e.g. £75k to £90k plus equity, or empty>",
  "summary": "<2 to 3 sentences: what the brief asks for and why calibration matters for this role>",
  "must_haves": [""],
  "tradeoffs": [ { "tradeoff": "<e.g. Depth or breadth>", "why": "<why it matters for this role>" } ],
  "archetypes": [
    {
      "name": "", "summary": "", "background": "", "employers": "",
      "brings": [""], "risks": [""], "motivators": [""],
      "where": "", "market_note": ""
    }
  ],
  "questions": [""],
  "method": "<how the archetypes were built; paragraphs separated by \\n\\n>",
  "sources": [ { "title": "", "url": "" } ]
}
```

Copy the builder into the working directory, install `docx` if needed, then run it:

```bash
cp <path-to-this-skill>/scripts/output_builder.js .
npm ls docx >/dev/null 2>&1 || npm install docx
node output_builder.js archetypes_config.json <Role>_Calibration_Archetypes.docx
```

Present the file. In chat, give one line per archetype, starting with its letter, and suggest the next step: "Send this to {hiring manager} before the intake, or walk through it together. Paste their reactions back here and I'll turn them into a calibration record for the shortlist." Don't paste the document into chat. If the build fails, debug and retry.

## Step 5: Record the calibration

When the recruiter pastes the hiring manager's reactions, reply in chat with this record. It's the input for `shortlist-builder`.

```markdown
**Calibration record: {role}** · {hiring manager} · {date of the calibration conversation}

**Ranking:** 1. {archetype} · 2. {archetype} · 3. {archetype} · Out: {archetype, with reason}

**Trade-offs decided:**
- {trade-off}: {the hiring manager's choice, in their words where possible}

**Must-haves confirmed:** {list}
**Now nice-to-have:** {anything downgraded}
**Deal-breakers:** {hard nos, with reasons}
**Green flags to look for:** {specific signals the hiring manager reacted well to}

**What changed from the original brief:** {one or two lines}
**Still open:** {anything unresolved, or "Nothing"}
```

If the hiring manager's answers pull against each other, list each tension under "Still open" with one question to resolve it. That includes a yes to an archetype that breaks a must-have, and a favourite archetype whose listed gap is a skill they've just confirmed as a must-have ("How much Python does a B candidate need to show?"). Never resolve tensions yourself.

## Writing rules

- Plain language. British English unless the user writes in American English.
- No em dashes anywhere. Use commas, colons, full stops or brackets.
- Be honest about every archetype's gaps. A calibration document that flatters every option doesn't calibrate anything.
