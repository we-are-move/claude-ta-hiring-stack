---
name: calibration-archetypes
description: Builds an interactive calibration scorecard for a role. It sets out 3 to 4 realistic candidate types and six real example LinkedIn profiles (three close matches, two borderline, one edge case). The hiring manager, a second hiring manager, someone doing the job and leadership each score every profile 1 to 5 on Projects, Skills, Level and Employers, on their own, before they can see each other's scores. Then it turns the team's scores into a calibration record the shortlist builder can use. Use whenever a recruiter or TA leader wants to calibrate a role with a hiring manager or hiring team, align on who to target, build candidate personas or archetypes, score sample profiles, run a calibration meeting, avoid "I'll know it when I see it", or when a hiring manager keeps rejecting candidates. Also use it to turn calibration scores or feedback into a calibration record.
compatibility: Uses web search for research and the Clay connector (or recruiter-pasted LinkedIn URLs) for real profiles. Builds an HTML page with Node.js. In Claude (Cowork), the page is published as a private artifact whose scores are saved for everyone it's shared with. Elsewhere, it's delivered as an HTML file, and scorers copy their scores back.
---

# Calibration Archetypes

Hiring managers are bad at describing who they want and good at reacting to who they see. And when a hiring team discusses candidates together, the first opinion in the room sets the bar. This skill fixes both. It gives the team six real profiles to react to before sourcing starts, and each person scores them alone before they see anyone else's scores. Then the team compares and agrees what good looks like.

You work for the recruiter or TA leader in their own company. Write for the hiring team, plainly and briefly: the page is something people click through, not a document they read. It links to real people's public profiles, so it's internal to the hiring team. The page carries a small Move credit (logo and footer); keep everything you write free of promotion.

## Two modes

**Build the scorecard** (default): brief in, interactive scorecard out. Steps 1 to 6.

**Record calibration**: the recruiter pastes the team's results (the scorecard's "Copy results" text, scorers' copied scores, or notes on the hiring manager's reactions). Turn them into a calibration record. Step 7.

## Step 1: Gather the brief

Ask in one message for anything missing. Required: the role (or job spec or intake notes) and the location. Helpful:

- company size, stage and sector
- the agreed level (from `role-calibrator`, if they used it) and the pay band
- the recruiter's name (shown on the page and used when scorers are asked to send scores back)
- who will score (hiring manager, a second hiring manager or interviewer, someone doing the job today, leadership)
- anything the hiring manager has already rejected or loved
- LinkedIn URLs the recruiter already has from their own sourcing and wants used

If they have a talent market map from `talent-market-mapper`, use its competitor and talent pool findings.

## Step 2: Find the trade-offs

Before researching, list the 3 to 4 tensions in the brief: the places where the ideal candidate is rare and the team will have to choose. Typical axes:

- **Depth or breadth:** deep specialist or versatile generalist
- **Where they've worked:** big company, scale-up, or early-stage startup
- **Domain:** from this sector, or strong in the craft from a different one
- **Ready now or stretch:** has done this exact job, or is one step from it
- **Builder or scaler:** creates from scratch, or brings order to something that exists
- **Hands-on or leading:** does the work, or leads the people doing it

## Step 3: Research the patterns

Use web search to learn where people who do this job actually come from:

- **Feeder employers and company types:** who employs people doing this work in this location (job ads, company team blogs, office announcements)
- **Adjacent titles:** what the same work is called elsewhere
- **Career paths:** the usual step before and after this role
- **What's changing:** how AI and market shifts are reshaping the role

Open the sources you cite. About 5 to 8 searches is usually enough; this is calibration, not a market study. Use web search for patterns only. Real people come from Step 5, never from web searches about individuals.

Never describe a type or choose a profile by age, gender, ethnicity, nationality, health, family status or any other protected characteristic, or by coded proxies for them ("young and hungry", "digital native", "culture fit").

## Step 4: Build the candidate types and questions

Build **3 or 4** candidate types, lettered A to D. Each one must be a pattern that exists in this market in meaningful numbers. Always include one close to the brief as written, and one from an adjacent background the team probably hasn't considered.

On the page each type is a small card, so keep it tight:

| Field | Limit |
| --- | --- |
| `name` | 2 to 4 words, e.g. "The CRM vendor closer" |
| `summary` | 1 sentence, about 15 words |
| `employers` | 3 to 5 real example employers in this market (also the Step 5 search list) |

Then write **4 trade-off questions**, each forcing a choice and each under about 25 words: "Enterprise closer from day one, or a strong mid-market closer who grows into enterprise?" Scorers answer them in a text box.

Also set the **four scoring criteria**. Always use the same four (Projects, Skills, Level, Employers), so scores compare across roles, but write a role-specific hint for each (under 10 words):

- **Projects:** relevance of past work (e.g. "Deals and work like ours: net-new, technical SaaS")
- **Skills:** the must-have skills visible on the profile
- **Level:** seniority match (e.g. "Mid-level closer, inside the pay band")
- **Employers:** relevance of past and current companies

## Step 5: Pick six real profiles

The team scores **exactly six** real profiles. Every one is someone you could plausibly approach: no deliberate misses. The tiers test where the edges of the brief really are:

- **3 × Tier 1, close match:** someone you would message today. Spread them across the types closest to the brief.
- **2 × Tier 2, borderline:** close to the brief but missing or light on one thing it asks for (a smaller company, one level below, the craft without the domain). Name that one thing in the note. The team's scores decide whether it matters.
- **1 × Tier 3, edge case:** a strong person from a different background, usually the adjacent type, who would widen the search if the team likes them.

Getting the tiers right is the point of the exercise, so check each one against the brief's must-haves before you place it. Tag each profile with the type it illustrates.

Find them in this order:

1. **Recruiter-supplied URLs.** Place each where it fits best. Use only what the recruiter told you (name, title, employer), and don't look the person up elsewhere.
2. **Clay.** If the Clay connector is available (search for its tools with ToolSearch if they aren't loaded), fill the remaining slots with `search-contacts`. Run searches one at a time: parallel calls hit Clay's rate limit. Pass the type's typical employers as `companyIdentifiers` (domains), and filter on location and title, for example:
   `select from people where location_city = "London" and experiences.any(is_current = true and job_title contains ("Account Executive") and not (job_title contains ("Enterprise", "Senior"))) limit 2 by clay_company_id`
   Treat each search as an intermediate step: don't render the results widget.
3. **No source.** If Clay isn't connected, search the connector registry and suggest Clay (or Apollo), and ask whether the recruiter would rather paste six URLs. The scorecard needs real profiles, so don't build it with invented or empty ones. Wait for one or the other.

**Get role context for every profile.** A title alone isn't enough to score Projects and Skills. Before you pick the final six, enrich your shortlist (two or three candidates per slot) with Clay's `add-contact-data-points` on the search's `taskId`, passing the candidates' `entityIds` and two data points:

- `{ "type": "Summarize Work History" }`
- `{ "type": "Custom", "dataPointName": "Current role description", "dataPointDescription": "The description the person wrote for their current role on their LinkedIn profile (projects, tools, scope), quoted or closely summarised from the profile itself. Say 'No description on profile' if there is none. Do not infer." }`

Enrichment takes a few minutes and the call can time out. That's fine: read the results with `get-task-context` and wait if values are still in progress. If a "Current role description" value doesn't read like a description of the person's role (for example, it describes the employer's product, or it's text about prompts or formatting), treat it as no description.

Then:

- **Prefer candidates whose current role has a description**, especially when the headline says little. Aim for at least four of the six. Between two otherwise equal candidates, take the one with the description.
- Write `context` for each profile: what they do in their current role, condensed from their own description (projects, tools, scope), under 50 words. Set `context_source` to `"role"`.
- If the current role has no description but you keep the profile (it's the best fit for its tier), write `context` from the work history summary instead and set `context_source` to `"profile"`. The page labels it so scorers know.
- Add `before` (optional, under 20 words) when the previous role adds something the current one doesn't, such as an earlier staff title.
- Use only what the profile says. Don't add tools, scale or achievements it doesn't mention, and don't judge the person.
- For recruiter-supplied URLs, use `search-contacts-by-name` to get a task, then enrich the same way.

Pick carefully:

- Check each result against its tier and type: current title at the right level and type of work, the right location, an employer that fits. Drop anything that doesn't fit.
- **Six different current employers, always.** No two profiles may share a current employer, even if both are strong. Keep the better fit and replace the other. Where you can, also avoid repeating the same previous employer across profiles (check the work history summaries and `before` lines), so the team sees six different career paths.
- Use only what the source returned: name, current title, employer, LinkedIn URL, start date in role and the enrichment above. `since` states a fact from that data ("In this role since Jun 2025").
- `note` is the recruiter's reason for the tier, in under 15 words, about the role and employer, never a judgement of the person: "Borderline: e-commerce buyers, but marketing tech, not CRM."
- Never invent, guess or construct a URL. Every URL must come from a tool result or the recruiter. Keep the URL exactly as returned, including any unusual characters.
- Never record or infer personal details, photos or anything touching a protected characteristic.
- These people haven't applied or been assessed. Don't add them to outreach or a longlist unless the recruiter decides to.

**Check every link works before it goes on the page.** LinkedIn URLs in data sources go stale when people change their profile address. If a browser is available (Claude in Chrome or the built-in browser), open each of the six URLs: a working profile loads with the person's name in the page title ("Name | LinkedIn"); a broken one redirects to linkedin.com/404/ ("This page doesn't exist"). Open them one at a time and wait a few seconds for each to load. For a broken link, search LinkedIn people for the person's name and employer in the same browser and take the profile URL from the matching result, or re-run Clay's `search-contacts-by-name`. Use the new URL only if it opens the same person; otherwise replace the profile. If no browser is available, say in chat that the links haven't been checked and ask the recruiter to click through before sharing.

**Order the six so tiers are mixed** (for example 1, 2, 1, 3, 1, 2). The page hides tiers and notes until each person submits, so scorers judge the profile, not the recruiter's label.

## Step 6: Build and deliver the scorecard

Save `scorecard_config.json` in the working directory (it contains names, so don't copy it into the user's folders). `scripts/example_config.json` is a complete worked example. The shape:

```json
{
  "title": "<2 to 4 word page name, e.g. Northline AE Calibration>",
  "role": "", "company": "", "location": "<e.g. London, hybrid>", "date": "<month and year>",
  "recruiter": "<recruiter's name, or empty>",
  "brief": {
    "summary": "<1 to 2 sentences: who the role is for and what they'll do>",
    "must_haves": ["<3 to 5, each under 10 words>"],
    "level": "<one line>", "pay_band": "<one line, or empty>"
  },
  "archetypes": [ { "letter": "A", "name": "", "summary": "", "employers": "" } ],
  "criteria": [
    { "key": "projects", "label": "Projects", "hint": "" },
    { "key": "skills", "label": "Skills", "hint": "" },
    { "key": "level", "label": "Level", "hint": "" },
    { "key": "employers", "label": "Employers", "hint": "" }
  ],
  "profiles": [
    { "id": "p1", "name": "", "title": "", "company": "", "url": "", "since": "", "tier": 1, "archetype": "A", "note": "",
      "context": "<under 50 words: what they do in this role, from their profile>", "context_source": "role", "before": "<optional, under 20 words>" }
  ],
  "questions": ["", "", "", ""],
  "method": "<how the types were built and where the profiles came from; paragraphs separated by \\n\\n>",
  "sources": [ { "title": "", "url": "" } ]
}
```

Profile ids are `p1` to `p6`. The method must say where the profiles came from (Clay search, recruiter, or both), that they were matched on title, employer and location only, and that nobody has been assessed or contacted.

Build the page:

```bash
cp <path-to-this-skill>/scripts/build_scorecard.js <path-to-this-skill>/scripts/scorecard_template.html <path-to-this-skill>/scripts/move_logo.b64 .
node build_scorecard.js scorecard_config.json <Company>_<Role>_Calibration.html
```

The builder checks the config (six profiles, valid tiers, LinkedIn URLs) and stops with a clear message if something is missing. Fix the config and rerun. Don't edit the template.

### Deliver it

**If the `Artifact` tool is available (Claude, Cowork),** publish the built file as a private artifact with these capabilities, exactly:

```json
{ "db": { "rules": [
    { "path": "scores", "read": "view", "write": "owner" },
    { "path": "scores/{self}", "read": "view", "write": "interact" } ] },
  "user": { "scopes": ["profile"] } }
```

Use `icon: "people"` and a one-sentence description. These rules let each scorer save only their own scores, keep drafts private until they submit, and let the recruiter (the owner) see everyone's submitted scores. After publishing, list the `scores` collection once with `ArtifactData` to confirm the store answers. It will be empty.

Then tell the recruiter, briefly, how to share it. The artifact is private until they do:

- Open the page's **Share** menu and invite each scorer **by email**. Teammates in the same Claude organization need **Contributor** or higher. People outside the organization (usually the client's hiring team) need **Editor**, because outside viewers can only view.
- **Don't turn on a public link.** Outside Editors lose the ability to save while a link is on, and the page names real people.
- Anyone who can only view can still score: their scores stay in their browser, and **Copy my scores** gives them text to send back.
- The recruiter sees everyone's scores as they come in (the page shows "Recruiter view").

**If there is no `Artifact` tool (Claude Code and other environments),** deliver the HTML file itself: `SendUserFile` with `display: "attach"` (or give the path), and commit it to a connected folder if there is one. Scores then stay in each scorer's browser, so tell the recruiter to send the file to each scorer and ask them to submit and click **Copy my scores**, then paste what comes back into chat.

In chat, give one line per candidate type (starting with its letter), the six profiles with their tiers in one compact list, and where the profiles came from (matched on title, employer and location only, so click through before sending). Suggest the next step: "Share it with the hiring team before the intake. Once everyone has submitted, click Copy results and paste them back here, and I'll turn them into a calibration record for the shortlist." If the build fails, debug and retry.

## Step 7: Record the calibration

When the recruiter pastes the results, reply in chat with this record. It's the input for `shortlist-builder`.

Read the scores first:

- **Team average per profile:** 4 or above means target this, 3 to 4 means possible, below 3 means avoid.
- **Spread:** a gap of 1.5 or more between two scorers on one profile is a disagreement to resolve, not to average away.
- **Tier check:** a Tier 1 profile scored below 3 means the brief is off. A Tier 2 (borderline) scored 3.5 or above means the missing thing doesn't matter much, so target it; below 2.5 means it does, so rule it out. A Tier 3 (edge case) scored 3.5 or above widens the search to that type.
- **Criteria by scorer:** if one person scores Level or Employers much harder than the others, they mean something different by it. Name it.

```markdown
**Calibration record: {role}** · scored by {roles or names} · {date}

**Target profile:** {one or two lines on what good looks like, from the profiles that scored highest}
**Ranking:** 1. {profile, type, team avg} · 2. … · Out: {profile, with reason}

**Where the team agreed:** {short list}
**Where the team disagreed:** {profile or criterion, who scored how, and the question to settle it}

**Trade-offs decided:**
- {trade-off}: {the team's answer, in their words where possible}

**Must-haves confirmed:** {list}
**Now nice-to-have:** {anything downgraded}
**Deal-breakers:** {hard nos, with reasons}
**Green flags to look for:** {specific signals the scorers reacted well to}
**Types to source first:** {letters and names, in order}

**What changed from the original brief:** {one or two lines}
**Still open:** {anything unresolved, or "Nothing"}
```

Record reactions to profiles as signals about the type ("liked that she'd sold into retail brands"), not verdicts on the person. If the team's answers pull against each other, list each tension under "Still open" with one question to resolve it. That includes a high score for a profile that breaks a must-have, and two scorers rating the same profile far apart. Never resolve tensions yourself.

## Writing rules

- Plain language. British English unless the user writes in American English.
- No em dashes anywhere. Use commas, colons, full stops or brackets.
- Short. Every field has a word limit because the page is scanned, not read.
- Be honest in the tier notes. A calibration that flatters every profile doesn't calibrate anything.
- Keep it internal. The page names real people, so it's for the hiring team, not candidates, agencies or anyone outside the company.
