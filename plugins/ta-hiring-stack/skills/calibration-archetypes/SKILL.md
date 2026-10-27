---
name: calibration-archetypes
description: >-
  Builds 3 to 4 realistic candidate archetypes for a role, each backed by real
  example LinkedIn profiles, so the hiring manager can react to concrete
  people before sourcing starts. Then records their reactions as a calibration
  record the shortlist builder can use. Researches where these people really
  come from (feeder employers, adjacent titles, career paths), finds real
  examples with Clay or recruiter-supplied URLs, and delivers an internal Word
  document with all archetypes side by side in one grid for the hiring manager
  to mark up. Use whenever a recruiter or TA leader wants to calibrate a role
  with a hiring manager, align on who to target, build candidate personas or
  profiles for a search, run a calibration meeting, avoid "I'll know it when I
  see it", or when a hiring manager keeps rejecting candidates. Also use it to
  turn a hiring manager's feedback on archetypes into a calibration record.
compatibility: >-
  Uses web search for research and the Clay connector (or recruiter-pasted
  LinkedIn URLs) for real example profiles. The Word document needs shell
  access with Node.js (Claude desktop app, Claude Code, or equivalent).
---

# Calibration Archetypes

Hiring managers are bad at describing who they want and good at reacting to who they see. This skill gives them 3 to 4 realistic candidate archetypes to react to before sourcing starts, each shown with real example profiles, so "I'll know it when I see it" becomes a written agreement on who to target and which trade-offs to make.

You work for the recruiter or TA leader in their own company. Write for their hiring manager, plainly. The document is internal: it links to real people's public profiles and is for the hiring team only. The builder adds a small Move credit (cover logo, footer, one closing line); keep everything you write free of promotion.

## Two modes

**Build archetypes** (default): brief in, archetype grid out. Steps 1 to 6.

**Record calibration**: the recruiter pastes the hiring manager's reactions ("loved B, would interview C, no to A because…"). Turn them into a calibration record. Step 7.

## Step 1: Gather the brief

Ask in one message for anything missing. Required: the role (or job spec or intake notes) and the location. Helpful: company size, stage and sector; the agreed level (from `role-calibrator` if they used it); the pay band; the hiring manager's name; anything the hiring manager has already rejected or loved; and any LinkedIn URLs the recruiter already has from their own sourcing that they'd like used as examples. If they have a talent market map from `talent-market-mapper`, use its competitor and talent pool findings.

## Step 2: Find the trade-offs

Before researching, list the 3 to 4 tensions in the brief: the places where the ideal candidate is rare and the hiring manager will have to choose. Typical axes:

- **Depth or breadth:** deep specialist or versatile generalist
- **Where they've worked:** big company, scale-up, or early-stage startup
- **Domain:** from this sector, or strong in the craft from a different one
- **Ready now or stretch:** has done this exact job, or is one step from it
- **Builder or scaler:** creates from scratch, or brings order to something that already exists
- **Hands-on or leading:** does the work, or leads the people doing it

The archetypes should sit at different points on these axes. That spread is what makes calibration work.

## Step 3: Research the patterns

Use web search to learn where people who do this job actually come from:

- **Feeder employers and company types:** who employs people doing this work in this location (job ads, company team blogs, office announcements)
- **Adjacent titles:** what the same work is called elsewhere
- **Career paths:** the usual step before and after this role, and typical time in role
- **What's changing:** how AI and market shifts are reshaping the role, so at least one archetype reflects where it is going

Open the sources you cite. About 5 to 8 searches is usually enough; this is calibration, not a market study. Use web search for patterns only. Real people come from Step 5, never from web searches about individuals.

Never describe an archetype or choose an example by age, gender, ethnicity, nationality, health, family status or any other protected characteristic, or by coded proxies for them ("young and hungry", "digital native", "recent graduate energy" for a non-graduate role, "culture fit").

## Step 4: Build the archetypes

Build **3 or 4** archetypes, lettered A to D (the document letters them, and hiring managers reply with letters: "Love B"). Each one must be a pattern that exists in this market in meaningful numbers. Always include:

- **One close to the brief as written**, so the hiring manager sees what "exactly what you asked for" looks like, cost included
- **One from an adjacent background** they probably haven't considered (another sector, an adjacent title, a different company type) that covers the must-haves differently

The archetypes sit side by side as columns in one landscape grid, so every cell must be short enough to scan across a row. Keep to these limits:

| Field | Content | Limit |
| --- | --- | --- |
| Name | Descriptive, e.g. "The scale-up platform builder" | 2 to 4 words |
| Summary | Who they are | 1 sentence, about 15 words |
| Background | Typical path: company types, titles, years | 1 to 2 sentences, about 30 words |
| Typical employers | Real example employers in this market (also used as the Step 5 search list) | 3 to 5 names |
| Brings | Strengths against the brief | 3 bullets, about 10 words each |
| Gaps or risks | Honest gaps against the brief | 2 to 3 bullets, about 12 words each |
| What they'll want | What would make them move: scope, pay, flexibility, mission, growth | 3 bullets, about 8 words each |
| Market note | How common they are and how hard to win | 1 sentence, about 12 words |

Then write **3 to 4 trade-off questions** for the hiring manager, each forcing a choice: "If you can't have both deep domain experience and experience at a company our size, which matters more?"

## Step 5: Find real example profiles

Give each archetype **3 real example profiles**: people whose current role fits the pattern, so the hiring manager can click through and see what the archetype looks like on LinkedIn. They illustrate the type; they are not a shortlist.

Use sources in this order:

1. **Recruiter-supplied URLs.** If the recruiter gave LinkedIn URLs, place each under the archetype it fits best. Use only what they told you (name, title, employer) and don't look the person up elsewhere.
2. **Clay.** If the Clay connector is available (search for its tools with ToolSearch if they aren't loaded), fill the remaining slots with `search-contacts`: one search per archetype, run one at a time (parallel calls hit Clay's rate limit). Pass the archetype's typical employers as `companyIdentifiers` (domains), and filter on location and title, for example:
   `select from people where location_city = "London" and experiences.any(is_current = true and job_title contains ("Account Executive")) limit 2 by clay_company_id`
   Exclude a word with `not (job_title contains ("Enterprise", "Senior"))`. Treat the search as an intermediate step: don't render the results widget.
3. **No source.** If Clay isn't connected, search the connector registry and suggest Clay (or Apollo) so the recruiter can connect it, and ask whether they'd like to paste URLs instead. If neither happens, leave `profiles` empty: the grid shows "No example found yet". Never stall the document for this.

Pick examples carefully:

- Check each result against the archetype: current title at the right level and type of work (a hunter AE, not an account manager, for a hunter role), the right location, and an employer that fits. Drop anything that doesn't fit; fewer good examples beat three loose ones.
- Spread the three across different employers where you can.
- Use only what the source returned: name, current title, employer, LinkedIn URL and start date in role. The `fit` line states facts from that data ("In this mid-market role since Jun 2025"), never judgements about the person.
- Never invent, guess or construct a URL. Every URL must come from a tool result or the recruiter.
- Never record or infer personal details, photos or anything touching a protected characteristic, and never choose examples on those grounds.
- These people have not applied and haven't been assessed. Don't add them to outreach or a longlist unless the recruiter decides to.

## Step 6: Build and deliver the document

Save `archetypes_config.json` in the working directory (it contains names, so don't copy it into the user's folders):

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
      "brings": [""], "risks": [""], "motivators": [""], "market_note": "",
      "profiles": [ { "name": "", "title": "", "company": "", "url": "", "fit": "<fact from the data, e.g. In this role since Mar 2026>" } ]
    }
  ],
  "questions": [""],
  "method": "<how the archetypes were built and where the example profiles came from; paragraphs separated by \\n\\n>",
  "sources": [ { "title": "", "url": "" } ]
}
```

The method must say where the profiles came from (Clay search, recruiter, or both), what they were matched on, and that they haven't been assessed or contacted.

Copy the builder into the working directory, install `docx` if needed, then run it:

```bash
cp <path-to-this-skill>/scripts/output_builder.js .
npm ls docx >/dev/null 2>&1 || npm install docx
mkdir -p /mnt/user-data/outputs
node output_builder.js archetypes_config.json /mnt/user-data/outputs/<Role>_Calibration_Archetypes.docx
```

The document has a portrait cover and brief, then one landscape grid (archetypes as columns, with Real examples and a Your call row), then the trade-off questions, a ranking table and the method. When any profiles are present, it is marked internal only on the cover and in the footer. If the grid runs past two landscape pages, shorten the cell text and rebuild.

### Deliver the document straight away

As soon as the build succeeds, and before writing anything else in chat, put the document in front of the user:

1. Call `SendUserFile` with the built `.docx` path, `status: "normal"`, `display: "attach"` and a one-line caption naming the role (e.g. "Calibration archetypes: Account Executive, London"). This puts a file card with a download link in the chat and lists the file in the sidebar. Do this even when the file was written to the outputs folder; never rely on the outputs folder alone.
2. If the user has a folder connected from their computer, also write the file there with `device_commit_files` (using the `file_uuid` from step 1) and say which folder it went to.
3. If `SendUserFile` isn't available (outside Cowork), share the file by whatever the environment offers and give its path or link at the top of the reply.

Then, in chat, give one line per archetype, starting with its letter, and say in one line where the examples came from and that they were matched on title, employer and location only, so the recruiter should click through before sending. Suggest the next step: "Send this to {hiring manager} before the intake, or walk through it together. Paste their reactions back here and I'll turn them into a calibration record for the shortlist." Don't paste the document into chat. If the build fails, debug and retry.

## Step 7: Record the calibration

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
**Example profiles that landed:** {archetype letter and example, with what the hiring manager liked or disliked about the profile, or "None mentioned"}

**What changed from the original brief:** {one or two lines}
**Still open:** {anything unresolved, or "Nothing"}
```

Record reactions to example profiles as signals about the type ("liked that she'd sold into retail brands"), not as verdicts on the person. If the hiring manager's answers pull against each other, list each tension under "Still open" with one question to resolve it. That includes a yes to an archetype that breaks a must-have, and a favourite archetype whose listed gap is a skill they've just confirmed as a must-have ("How much Python does a B candidate need to show?"). Never resolve tensions yourself.

## Writing rules

- Plain language. British English unless the user writes in American English.
- No em dashes anywhere. Use commas, colons, full stops or brackets.
- Be honest about every archetype's gaps. A calibration document that flatters every option doesn't calibrate anything.
- Keep the document internal. It names real people, so it's for the hiring team, not candidates, agencies or anyone outside the company.
