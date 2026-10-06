---
name: motivation-discovery
description: >-
  Builds a screening call guide that uses sales discovery questions to surface
  what would really make a candidate move, woven together with role-specific
  questions from the job spec, delivered as a Word guide to keep open during
  the call. After the call, turns the recruiter's notes into a motivation
  summary: readiness, reasons to move and stay, counter-offer risk, and whether
  the role gives them what they need. Use whenever a recruiter wants screening
  questions, a screen guide or call script, wants to understand candidate
  motivation, avoid ghosting, late withdrawals or counter-offers, or wants to
  write up a screening call. Also use for "what should I ask this candidate".
compatibility: The Word guide needs shell access with Node.js (Claude desktop app, Claude Code, or equivalent). No web research.
---

# Motivation Discovery

An excited hiring manager doesn't mean a committed candidate. Most late withdrawals, ghosting and accepted counter-offers were predictable at the first screen: nobody asked what would really make the person move. This skill adapts seven sales discovery questions for the recruiter screen and weaves in questions specific to the role.

The principle: **listen first, sell second.** Find out what the candidate needs, then show where the role delivers it. Never pitch before you know what matters to them.

You work for the recruiter. The builder adds a small Move credit (logo, footer, one closing line); keep everything you write free of promotion.

## Two modes

**Build a screen guide** (default): spec in, Word guide out. Steps 1 to 3.
**Write up a call:** the recruiter pastes their call notes. Step 4.

## The seven questions

Use these exactly as written. In a guide for one named candidate, fill the bracketed parts where you can. In a general guide, leave them as written: they're prompts for the recruiter to fill live from the candidate's earlier answers.

| # | Stage | Ask | Ask next | Why it works |
| --- | --- | --- | --- | --- |
| 1 | Motivation | "What would make a new role worth considering for you?" | "What's made that important now?" | Reveals what could motivate a move without assuming they're unhappy; the follow-up separates curiosity from a concrete reason to act |
| 2 | Readiness | "If the right opportunity came along, how ready would you be to leave your current role, from 1 to 10?" | "What makes it that number?" | Separates interest in a role from readiness to leave; the reasoning tells you more than the score |
| 3 | Reasons to move | "What makes it a [their number] rather than a [lower number]?" | "And what's keeping you where you are?" | Draws out their own reasons to move, then the reasons to stay, including counter-offer risk |
| 4 | Success criteria | "Six months into a new role, what would tell you the move had been worthwhile?" | "Which of those things would be essential?" | Turns a vague wish for change into specific expectations, and separates must-haves from preferences |
| 5 | Underlying needs | "When you say you want [their word, e.g. more ownership], what would that give you that you're missing now?" | "Have you discussed that with your manager? What came out of that conversation?" | Clarifies what their words mean to them; shows whether they've tried to fix it and whether a counter-offer could keep them |
| 6 | Concerns | "You want [their pulls], but you're concerned about [their hesitation]. Have I understood that correctly?" | "What would you need to see or hear to resolve that concern?" | Confirms the pull and the hesitation and lets them correct you; tells the hiring team what to address before it becomes a withdrawal |
| 7 | Next steps | "What would be useful to understand next before deciding whether to continue?" | "Shall we make sure the next conversation covers that, then reconnect afterwards?" | Gives the next interview a clear purpose and sets a checkpoint |

## Step 1: Gather the inputs

If the brief already covers the role, its must-haves and its context, go straight to building. Otherwise ask in one message for anything missing. Required: the job spec, intake notes or calibration record. Helpful: call length (default 30 minutes); the role's genuine selling points (or let you draw them from the spec); a candidate's CV or profile, if they want the guide tailored to one person; anything known about the candidate's situation.

## Step 2: Write the role-specific content

- **Role-fit questions (3 to 5).** Each tests one must-have from the spec. Non-leading and behavioural: ask about a real past example, never "Do you have X?". Don't name the technology or skill in the question; put it in the strong-answer note. Add one line describing a strong answer.
- **"For this role" notes** on each of the seven questions: what to listen for given this role. For example, at question 4: "If their six-month picture is 'shipping weekly', this role delivers that. If it's 'leading a team', it doesn't yet."
- **Selling points to hold back (3 to 5).** The role's genuine strengths, each mapped to the motivator it speaks to (ownership, progression, pay, flexibility, mission, stability, learning). Use them only after the candidate has named that motivator, at question 4 or 6.
- **Watch-outs (2 to 3).** Honest weaknesses of the role a candidate may raise (office days, pay ceiling, early-stage risk), and a straight answer for each. Never tell the recruiter to hide a weakness.
- **If tailored to one candidate:** add one or two questions from their CV (a recent move, a short tenure, a change of direction), asked neutrally. Never ask about or infer age, family, health, nationality beyond right to work, or any other protected characteristic.

## Step 3: Build the guide

Save `screen_guide_config.json`:

```json
{
  "role": "", "company": "", "date": "<month and year>", "length_minutes": 30,
  "candidate": "<name or ID if tailored, otherwise empty>",
  "selling_points": [ { "point": "", "motivator": "<the motivator it speaks to>" } ],
  "watch_outs": [ { "issue": "", "answer": "" } ],
  "running_order": [ { "time": "<e.g. 0 to 3 min>", "part": "", "goal": "" } ],
  "motivation_steps": [
    { "n": 1, "title": "Motivation", "question": "", "ask_next": "", "listen_for": "", "for_this_role": "" }
  ],
  "role_questions": [ { "question": "", "strong": "" } ],
  "candidate_questions": [ "<only if tailored to a candidate>" ],
  "admin": [ "Notice period", "Salary expectations", "Location and right to work", "Other processes and how far along they are" ]
}
```

Include all seven motivation steps. Base `listen_for` on the "Why it works" column, made concrete for this role. Don't add quote marks to questions: the builder adds them. The builder places the role-fit questions after step 3, so the running order should match: intro, motivation (1 to 3), role fit, motivation (4 to 6), admin, next steps (7).

Copy the builder into the working directory, install `docx` if needed, then run it:

```bash
cp <path-to-this-skill>/scripts/output_builder.js .
npm ls docx >/dev/null 2>&1 || npm install docx
node output_builder.js screen_guide_config.json <Role>_Screen_Guide.docx
```

Present the file. In chat, add one line: "After the call, paste your notes here and I'll write up the candidate's motivation summary." If the build fails, debug and retry.

## Step 4: Write up a call

When the recruiter pastes call notes, reply in chat:

```markdown
**Motivation summary: {candidate} · {role}**

**Readiness:** {score}/10. {Their reasoning, in their words where possible}
**Reasons to move:** {list}
**Reasons to stay:** {list}
**Counter-offer risk:** {Low / Medium / High}. {Why: have they raised it with their manager, and what happened?}

**What they need** (essential): {list}
**Would like:** {list}
**Does this role deliver?** For each essential: Yes / Partly / No / Not in the spec (confirm with the hiring manager), with one line of evidence.

**Concerns to resolve:** {concern}: {what they said would resolve it}
**Other processes:** {who, what stage, or "Not discussed"}
**Admin:** {salary expectation, notice period, location or right to work: "Not discussed" for any not covered}
**Next step agreed:** {what the next conversation must cover}

**Brief the hiring manager:** 2 to 3 lines on what to emphasise and what to address in the next interview.
**Gaps in the notes:** {any of the seven questions not covered, so the recruiter can follow up}
```

Use only what's in the notes. If something wasn't covered, say "Not discussed" rather than guessing. Notes rarely separate essentials from preferences: treat as essential whatever the candidate called essential, repeated, or tied to their reason for leaving, and fold supporting details into that essential rather than listing them separately. If an essential is a "No", say so plainly: a candidate who needs something the role can't give is a likely withdrawal, and it's kinder to know now.

## Writing rules

- Plain, conversational questions a recruiter can say out loud.
- British English unless the user writes in American English.
- No em dashes anywhere. Use commas, colons, full stops or brackets.
