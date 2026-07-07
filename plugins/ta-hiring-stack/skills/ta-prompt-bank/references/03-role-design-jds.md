# Stage 03 — Role Design & JDs

Prompts for turning intake meetings into sharp job briefs, outcome-led JDs, role scorecards, bias reviews, build-vs-buy decisions, and 30/60/90 success plans.

### 13. Build a Post-Intake Job Brief (WEDGE)
**For:** Recruiter / Head of TA · **Time:** 5 min · **Output:** Brief · **Wedge prompt**

**Inputs to have ready:** Intake meeting notes or transcript; (optional) existing JD draft; (optional) org chart of the team; (optional) previous incumbent's CV. Stronger with: Recent comp data for the level; a Role-Level EVP from prompt #10.

**The prompt:**

```
GOAL: An 8-section structured job brief that you can share with hiring managers, sourcers, and senior candidates — produced from your intake meeting notes in under five minutes.

TASK: Build a Post-Intake Job Brief from the intake meeting notes I will paste below.
Length: 600-800 words.
Format: 8 sections in this order —
1. Role overview and why it is open now
2. What success looks like in the first 90 days
3. Must-have requirements (maximum 5)
4. Nice-to-have requirements
5. Red flags and deal-breakers
6. The ideal candidate profile in plain language
7. Compensation range and key benefits
8. Interview process overview

BRIEF
- Output: 600-800 words, 8 sections.
- Sounds like: confident, direct, peer-to-peer. No filler.
- Success means: a hiring manager reads this and says "yes, that is the role" — a senior candidate reads it and knows exactly what they are signing up for.

RULES (every rule is a TO DO)
- Always cap must-haves at 5.
- Always describe 90-day success in concrete, evidence-able terms.
- Always include deal-breakers explicitly.
- Always state a comp range — placeholder if it is not yet finalised, but never omit.
- Always describe the ideal candidate in plain language, not in keyword form.

TOOLS: skip web search. Work from the pasted notes only.

CONVERSATION: do not execute yet. If the intake notes are sparse on any of the 8 sections, ask up to 3 clarifying questions before drafting. Use AskUserQuestion.

PLAN: first, list the 3 sections you have the least information on. Then draft.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

—

INTAKE NOTES:
[paste here]
```

**Sample output:** (abridged)

> **Senior Product Designer — Hiring Brief**
>
> **1. Role overview and why it is open now.** We are hiring a Senior Product Designer to lead the redesign of our merchant-facing dashboard. 35% of new merchants drop off before completing onboarding because the experience is fragmented.
>
> **2. What success looks like in the first 90 days.**
> - Day 30: completed the merchant journey audit, identified the 5 highest-leverage friction points.
> - Day 60: shipped the first iteration of the activation flow redesign.
> - Day 90: measurable improvement in merchant onboarding completion rate (baseline +5pp).
>
> **3. Must-have requirements.** Six-plus years designing SaaS products. At least 2 years on activation/onboarding flows. Direct experience designing for SMB merchants. Owned end-to-end design from research to engineering handoff. Strong written communication — we are async-first.
>
> *[Sections 4-7 follow]*
>
> **8. Interview process overview.** Four stages over 2–3 weeks: 30-min screen with Talent; 60-min portfolio walkthrough with the Head of Product; 90-min design exercise with the design team; 45-min values + culture with two cross-functional leaders.

**Related prompts:** #10 Build a Role-Level EVP from Incumbent Interviews — feeds the "What we offer" section · #14 Write an Outcome-Led Job Description — the next step after the brief · #37 Build an HM Prep Brief for an Upcoming Interview — use this brief as input later

---

### 14. Write an Outcome-Led Job Description
**For:** Recruiter / Head of TA · **Time:** 30 min · **Output:** Document

**Inputs to have ready:** Role + level + function, why the role is open, year-one success, comp range. Stronger with: A Role-Level EVP (from prompt #10).

**The prompt:**

```
GOAL: A Job Description anchored to year-one success — what someone in this seat will actually do and deliver. Ready to publish on the careers page, run paid ads against, and sit at the top of every outreach.

TASK: Write an Outcome-Led Job Description from the inputs below.
Length: 600-900 words.
Format: 7 sections —
1. Role headline (single sentence, names the outcome)
2. Why this role exists now (2-3 sentences)
3. What success looks like at 30 / 60 / 90 days and year-one
4. Must-haves (cap at 5; each evidenceable)
5. Nice-to-haves (3-5)
6. Deal-breakers (2-3)
7. What we offer (comp range + 3-4 specific role-level reasons)

BRIEF
- Sounds like: a Head of TA who actually wrote this themselves — not a JD template.
- Success means: a strong senior candidate reads the JD and knows whether to apply within 90 seconds. A weak candidate self-selects out.

RULES (every rule is a TO DO)
- Always lead with the outcome the seat produces — not the function.
- Always cap must-haves at 5.
- Always describe 90-day success in concrete terms.
- Always include a comp range. Placeholder if not finalised, but never omit.
- Always name 2-3 deal-breakers explicitly.
- Always write "What we offer" using the Role-Level EVP (#10) if available.

CONVERSATION: do not execute yet. Confirm: do you have a Role-Level EVP for this seat?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level + function]
- Why the role is open: [paste]
- Year-one success picture: [paste]
- Comp range: [paste, even if placeholder]
- Role-Level EVP (from #10): [paste if available]
- Existing JD draft: [paste if any]
```

**Sample output:** (abridged)

> **Senior Backend Engineer — Platform.** Headline: rewrite our core transaction processing layer over 12 months, lifting throughput from 12k to 50k transactions per second.
>
> **Must-haves (5).** Six-plus years backend with 2+ years on high-throughput transactional systems. Direct experience shipping a system rewrite (not green-field). Strong written communication. Comfortable being most senior on craft. Track record of measurable performance improvements.
>
> **Deal-breakers.** No production-scale experience. Strong preference for green-field over rewrite. Need close architectural oversight.
>
> **What we offer.** £130-£160k base + 0.1-0.15% equity. Beyond comp: real architectural ownership; codebase you'll see before signing; pay refreshed every six months.

**Related prompts:** #10 Build a Role-Level EVP from Incumbent Interviews — feeds the "What we offer" section · #16 Run a JD Bias Review — audit after writing · #18 Write a "90 Days to Success" Plan for a Role — expanded success section

---

### 15. Build a Role Scorecard + Interview Framework
**For:** Recruiter / Head of TA · **Time:** 30 min · **Output:** Score/Rubric

**Inputs to have ready:** JD or role brief, year-one success picture. Stronger with: Common failure modes from past hires in similar seats; interview process details (stages, duration).

**The prompt:**

```
GOAL: A combined Role Scorecard + Structured Interview Framework — five competencies with behavioural descriptors at 1-4, 2-3 STAR questions per competency, scoring guide, interview flow with time allocations.

TASK: Build a Role Scorecard + Interview Framework from the role inputs below.
Length: 1,200-1,500 words.
Format: 4 sections —
1. The five competencies (with definitions and weights)
2. Per-competency scoring rubric — 1-4 behavioural descriptors
3. Per-competency interview questions — 2-3 STAR-format questions plus what strong vs weak looks like
4. Interview flow — sequence, time allocations (45-60 min total), who interviews what

BRIEF
- Sounds like: a hiring manager and a senior recruiter agreeing on what good looks like.
- Success means: any interviewer on the team can pick this up and produce comparable signal across candidates.

RULES (every rule is a TO DO)
- Always cap competencies at 5. More than 5 and interviewers stop using the scorecard.
- Always anchor scoring 1-4: 1 = below bar, 2 = meets some criteria, 3 = strong, 4 = exceptional.
- Always tie questions to the actual job.
- Always specify what a strong answer sounds like (3+) and what a weak answer sounds like (1-2).
- Always recommend who interviews which competency if multi-stage.

CONVERSATION: do not execute yet. List which competencies you propose before drafting the full scorecard.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level + function]
- Job brief or JD: [paste]
- Year-one success picture: [paste]
- Common failure modes from past hires: [paste if known]
- Interview process (number of stages, duration): [paste]
```

**Sample output:** (competency 1 extract)

> **Competency 1 — Architectural judgement (30%).**
>
> *Definition.* The ability to make architectural decisions independently, justify them, recognise downstream consequences, revisit when data changes.
>
> *Scoring rubric.*
> - *1:* makes decisions based on familiarity, not fit. Cannot articulate trade-offs.
> - *2:* describes trade-offs when prompted. Defers to seniors. Documents inconsistently.
> - *3:* makes decisions independently with clear written rationale. Names trade-offs unprompted.
> - *4:* the team's reference point. Decisions land cleanly. Coaches others on trade-off thinking.
>
> *Question 1.* "Walk me through an architectural decision you'd make differently today, and why."
> *Strong:* names the decision, owns the reasoning, references data that changed their view.
> *Weak:* generic; or claims to have made no decisions worth revisiting.

**Related prompts:** #31 Run a CV-to-Brief Comparison — the scorecard is the comparison anchor · #34 Run a Debrief Facilitation Guide — the scorecard feeds the debrief · #32 Build a Structured Screening Question Bank — the screen-stage equivalent

---

### 16. Run a JD Bias Review
**For:** Head of TA · **Time:** 5 min · **Output:** Audit

**Inputs to have ready:** The JD. Stronger with: Your company's DE&I language guidelines.

**The prompt:**

```
GOAL: A line-by-line review of a Job Description for gendered, ableist, age-coded or culturally exclusive language — with concrete rewrites — produced in 5 minutes so it can run on every JD before publication.

TASK: Run a JD Bias Review on the JD I'll paste below.
Length: 400-700 words.
Format: 4 sections —
1. Summary verdict
2. Line-by-line findings — each flagged phrase, why it's problematic, suggested rewrite
3. Structural notes — content patterns that are exclusionary even when phrases are fine
4. Pre-publish checklist (8-10 items)

BRIEF
- Sounds like: an experienced TA leader running a final-eye check. Direct, specific, never sanctimonious.
- Success means: the JD is more inclusive without losing its edge or specificity.

RULES (every rule is a TO DO)
- Always provide a concrete rewrite for every flagged phrase.
- Always cite the specific bias type — gendered, ageist, ableist, culturally coded.
- Always preserve the JD's voice and specificity.
- Always flag exhaustive requirements lists as exclusionary (women apply at 100% match; men at 60%).
- Always include the structural check.

CONVERSATION: only ask if the JD is unusually short or missing context.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- The JD: [paste]
- (Optional) Your company's DE&I language guidelines: [paste if any]
```

**Sample output:** (extract)

> **JD Bias Review — Senior Backend Engineer.**
>
> **Findings.**
> 1. "Backend rockstar" — *"Rockstar"* gender-coded (men 2.3× more likely to self-identify). **Rewrite:** "Senior Backend Engineer to lead the rewrite of our core processing layer."
> 2. "Strong cultural fit" — *"Cultural fit"* known proxy for affinity bias. **Rewrite:** name specific working preferences like "comfortable with async work."
> 3. "Native English speaker" — legally questionable in UK/EU. **Rewrite:** "Strong written communication in English (async-first team)."
>
> **Structural notes.** Requirements list has 11 items. Cut to 5 must-haves and 3-4 nice-to-haves. Women apply at 100% match; men at 60%. 11 requirements means you're losing strong female candidates.
>
> **Pre-publish checklist.** Requirements ≤ 5 must-haves · Comp range included · No "rockstar"/"ninja"/"guru"/"crushes" · No "cultural fit" without behavioural specifics · No "native speaker" language · Gender-neutral pronouns · Years-of-experience minimums challenged.

**Related prompts:** #14 Write an Outcome-Led Job Description — the JD this prompt audits · #11 Build Inclusive Employer Brand Content — broader inclusive comms · #23 Run a Slate Diversity Audit — the downstream check on hiring outcomes

---

### 17. Run a Build-vs-Buy Decision for a Role
**For:** Head of TA · **Time:** 30 min · **Output:** Decision

**Inputs to have ready:** Role + problem + timeline + comp band. Stronger with: Internal capability map; current internal performance review data.

**The prompt:**

```
GOAL: A structured decision framework for the role you're considering opening — comparing Build (internal mobility), Upskill, Buy (external hire), and Contract — with a clear recommendation and rationale.

TASK: Run a Build-vs-Buy Decision from the role inputs below.
Length: 1,000-1,300 words.
Format: 6 sections —
1. The decision framing — problem, success, timeline
2. The four options — brief description of each for this role
3. Decision criteria — speed, cost, knowledge retention, team continuity, capability ceiling, risk
4. Scoring each option against each criterion (1-3 scale, with rationale)
5. Recommendation — single option with reasoning, plus a fallback
6. Implementation plan — first 30 days

BRIEF
- Sounds like: a TA Leader and a hiring manager thinking this through together. Calibrated, opinionated, accountable.
- Success means: the recommendation is defensible at exec/board review, with trade-offs explicit and risk acknowledged.

RULES (every rule is a TO DO)
- Always consider all four options.
- Always cost each option honestly — including opportunity cost of an internal move.
- Always factor team continuity.
- Always state the capability ceiling for each option.
- Always make a recommendation. Do not say "depends."

TOOLS: web search for comp benchmarks if needed.

CONVERSATION: do not execute yet. Ask: is there a known internal candidate already, or comparing in principle?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role being considered: [title + level + function]
- The problem / outcome the role needs to deliver: [paste]
- Timeline: [paste]
- Known internal candidates: [paste]
- Internal capability map: [paste if you have one]
- Comp band for the role: [paste]
```

**Sample output:** (extract)

> **Build-vs-Buy — Head of Design.** Current Head leaving in 8 weeks. Team of 9.
>
> | Option | Speed | Cost | Retention | Continuity | Ceiling | Risk |
> |---|---|---|---|---|---|---|
> | Build | 3 | 3 | 3 | 2 | 1 | 2 |
> | Upskill | 1 | 2 | 1 | 1 | 2 | 1 |
> | Buy | 2 | 1 | 1 | 2 | 3 | 2 |
> | Contract | 3 | 2 | 1 | 3 | 2 | 3 |
>
> **Recommendation: Contract for 6 months, then Buy.** 8-week timeline too tight for a credible permanent search without compromising quality. Interim keeps team stable through brand launch + restructure while we run a properly resourced permanent search.
>
> **Fallback:** if contract unsustainable beyond 6 months, promote internally (Build — Maya is stronger) with explicit coaching.

**Related prompts:** #14 Write an Outcome-Led Job Description — if you decide to Buy · #41 Build a Search Committee Framework for Senior Roles — if Buy and senior · #3 Build a Recruiter 1:1 + Coaching Framework — if Build (internal promotion)

---

### 18. Write a 90 Days to Success Plan for a Role
**For:** Recruiter / Head of TA · **Time:** 5 min · **Output:** Plan

**Inputs to have ready:** Role, job brief or year-one expectations, team context. Stronger with: Previous incumbent's actual first-90-day milestones.

**The prompt:**

```
GOAL: A clear, evidence-able 30 / 60 / 90 day success picture for a role — usable in the JD, offer letter, candidate pitch, and as input to the HM's onboarding plan.

TASK: Write a "90 Days to Success" Plan for the role from the inputs below.
Length: 400-600 words.
Format: 5 sections —
1. The one-line outcome the seat exists to produce
2. Day 30 milestones — orientation + early deliverables (3-4 items)
3. Day 60 milestones — first measurable impact (3-4 items)
4. Day 90 milestones — operating independently + early team contribution (3-4 items)
5. What success at year-one looks like (single paragraph)

BRIEF
- Sounds like: a hiring manager being honest about what they're really expecting. Specific, concrete, measurable.
- Success means: a candidate reads this and can decide if they want it. A new hire can use this on Day 1.

RULES (every rule is a TO DO)
- Always make each milestone evidenceable — could you verify it happened.
- Always name a deliverable, not a learning.
- Always anchor to the actual role and team, never generic.
- Always include at least one early team-contribution milestone.
- Always cap at 3-4 milestones per period.

CONVERSATION: only ask if role context is unusually thin.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level + function]
- Job brief or year-one expectations: [paste]
- Team context — current team size, recent priorities: [paste]
- (Optional) Previous incumbent's actual first-90-day milestones: [paste]
```

**Sample output:** (abridged)

> **90 Days to Success — Senior Backend Engineer.**
>
> *Outcome:* one of two architects of the core processing layer rewrite (12k → 50k+ transactions per second over 12 months).
>
> *Day 30.* Architectural proposal for first subsystem shipped + signed off by Staff Engineer and CTO. Familiar enough with the codebase to flag the three highest-risk dependencies. At least 5 substantive code reviews; one mid-level engineer cites your review as teaching them something new.
>
> *Day 60.* Led first subsystem migration to production; throughput lift matches forecast (±10%). Authored design doc for the second subsystem. Took on-call; handled at least one incident end-to-end.
>
> *Day 90.* Operating autonomously on the next two subsystems. Team's debrief calibration calls you out as a benchmark contributor. Mentoring a mid-level engineer.
>
> *Year-one.* Core processing layer shipped, running 25k+/sec, with runway to 50k. Three architectural choices that will define how we build for three years.

**Related prompts:** #14 Write an Outcome-Led Job Description — the 90-day section lifts from here · #42 Write a Post-Hire Signals Brief for the HM — feeds into onboarding · #37 Build an HM Prep Brief — interview prep that lands the right hire
