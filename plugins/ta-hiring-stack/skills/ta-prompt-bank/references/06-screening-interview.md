# Stage 06 — Screening & Interview

Prompts for evaluating candidates rigorously and fairly: CV-to-brief comparisons, structured screening question banks, HM candidate summaries, debrief facilitation, debiased screening and panel composition, and legal defensibility checks.

### 31. Run a CV-to-Brief Comparison
**For:** Recruiter · **Time:** 5 min · **Output:** Decision · **Wedge prompt**

**Inputs to have ready:** Candidate CV; job brief or JD. Stronger with: scorecard or competency framework (from prompt #15 or #33); failure mode notes from past hires in similar roles.

**The prompt:**

```
GOAL: A structured CV vs brief comparison that turns a 10-minute manual review into a 2-minute decision — with a clear, justified recommendation.

TASK: Run a CV-to-Brief Comparison for the candidate whose CV I will paste below.
Length: under 300 words.
Format:
1. Match score out of 10 with one-paragraph rationale
2. Top 3 signals in their background relative to the brief
3. Top 3 gaps or questions to probe in a screening call
4. Recommended decision: Progress to phone screen / Hold for now / Decline — with reasoning

BRIEF
- Output: under 300 words, structured.
- Sounds like: a senior recruiter who has seen a lot of these — direct, honest, decision-making.
- Success means: the hiring manager can read this and make a yes / no / dig-deeper call in 90 seconds.

RULES (every rule is a TO DO)
- Always look for evidence of actual achievement and trajectory, not just keywords.
- Always anchor the score to the brief — a 10/10 for one role can be 5/10 for this one.
- Always name the most important question to probe in the screening call.
- Always make a recommendation. Do not say "it depends."

JOB BRIEF: [paste here]
CANDIDATE CV: [paste here]

PUSH: go beyond the basics. Think before answering (maximum reasoning).
```

**Sample output:**

> **Match score: 7/10.** Strong domain experience and clear progression, but the seniority of her SaaS roles is one level below the seat we are hiring for. Reads as a stretch candidate who could grow into the role rather than land at level.
>
> **Top 3 signals.** Seven years across two product-led SaaS companies, both Series B–D. Owned end-to-end design work on activation flows specifically. Promotion from Senior to Lead at last company in 18 months suggests trajectory.
>
> **Top 3 gaps to probe.** Has only ever reported into a Director-level designer. No evidence of mentoring or coaching juniors. Last B2B role was four years ago; mostly consumer products since.
>
> **Recommendation: Progress to phone screen.** Strong on substance, but the seniority gap and the consumer detour need to be tested. The screen should probe (1) whether she has been the most senior designer on a project, (2) why she is moving from consumer back to B2B SaaS.

**Related prompts:** #13 Build a Post-Intake Job Brief — the brief this prompt scores against · #15 Build a Role Scorecard + Interview Framework — the competency framework · #33 Write a Candidate Summary for the HM — the next step after the comparison

---

### 32. Build a Structured Screening Question Bank
**For:** Recruiter / Head of TA · **Time:** 30 min · **Output:** Document

**Inputs to have ready:** JD or role brief, past hire failure modes. Stronger with: team / company context.

**The prompt:**

```
GOAL: A structured screening question bank for a 30-min phone screen — 13 questions across motivation, competency, working style and red flags — with strong-vs-weak answer markers.

TASK: Build a Structured Screening Question Bank from the role inputs below.
Length: 1,200-1,500 words.
Format: 5 sections —
1. Coverage map
2. Motivation & career direction (3 questions with strong/weak markers)
3. Role-specific competency (4 questions with strong/weak markers)
4. Working style & team fit (3 questions with strong/weak markers)
5. Red flag probes (3 questions anchored on the most common failure modes)

BRIEF
- Sounds like: a senior recruiter who has screened hundreds of candidates and knows where strong vs weak answers diverge.
- Success means: any recruiter on the team produces comparable signal.

RULES (every rule is a TO DO)
- Always keep questions open-ended.
- Always avoid leading questions.
- Always include strong-vs-weak answer markers.
- Always anchor red flag probes in actual past failure modes.
- Always recommend the order — motivation first, red flags last.

CONVERSATION: do not execute yet. Ask: what are the 2-3 most common reasons past hires haven't worked out?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level + function]
- Job brief or JD: [paste]
- Past hire failure modes: [paste]
- Team / company context: [paste]
```

**Sample output:**

> **Q1 — Motivation.** "Walk me through what's prompted you to start looking now — and what you'd want from your next role that you're not getting from your current one."
> *Strong:* specific. Names a concrete thing missing. Doesn't badmouth.
> *Weak:* generic ("new challenges"). No specific dissatisfaction.
>
> **Q11 — Red flag probe (anchored on "couldn't operate without architectural oversight").**
> "Tell me about an architectural decision you made in the last 12 months without checking with a senior colleague first."
> *Strong:* names a specific decision, owns the reasoning, reflects on outcome.
> *Weak:* can't recall a recent unilateral architectural decision.

**Related prompts:** #15 Build a Role Scorecard + Interview Framework — the structured deep-interview equivalent · #33 Write a Candidate Summary for the HM — turns the screen into a brief

---

### 33. Write a Candidate Summary for the HM
**For:** Recruiter · **Time:** 5 min · **Output:** Brief

**Inputs to have ready:** Screening call notes; job brief or role context. Stronger with: candidate CV alongside the screen notes.

**The prompt:**

```
GOAL: A 2-minute candidate brief for the hiring manager — structured, evidence-based, with a clear recommendation.

TASK: Write a Candidate Summary for the HM from the screening notes below.
Length: 400-600 words.
Format: 6 sections —
1. Current situation + reason for looking
2. Relevant experience summary (2-3 paragraphs, evidence-based)
3. Strengths for this role specifically (3 bullets)
4. Areas to probe further (2-3 questions)
5. Comp & process fit
6. Recommendation (Progress / Hold / Decline with reasoning)

BRIEF
- Sounds like: a senior recruiter briefing a busy HM — direct, evidence-based, opinionated.
- Success means: HM either approves the next stage or asks one clarifying question. Never "go find out more."

RULES (every rule is a TO DO)
- Always anchor experience claims in evidence from the screen.
- Always cap strengths at 3.
- Always include 2-3 specific probe questions.
- Always make a recommendation.
- Always include comp + notice period.

CONVERSATION: only ask if screening notes are unusually thin.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Screening call notes: [paste]
- Job brief or role context: [paste]
- (Optional) Candidate CV: [paste]
```

**Sample output:**

> **Candidate Summary — Sarah Chen, Senior Backend Engineer.**
>
> *Current situation.* Senior Engineer at Klarna, 3 years in seat. Reports into Director-level engineer. Looking now because team is shifting to consumer work; she wants platform/infrastructure. Notice: 3 months. One competing process (early-stage).
>
> *Strengths for this role specifically.*
> - Direct rewrite experience (not green-field) — central to our 12-month roadmap.
> - High-throughput systems background — Klarna activation runs at comparable scale.
> - Strong written communication — referenced 2 design docs with clear audience awareness.
>
> *Areas to probe.* (1) Architectural authority — only in current team. (2) Domain transfer — BNPL to payments rails.
>
> *Recommendation: Progress to HM interview.* Strongest candidate this campaign; prioritise her slot this week.

**Related prompts:** #32 Build a Structured Screening Question Bank — produces the notes this summarises · #37 Build an HM Prep Brief — the next step · #31 Run a CV-to-Brief Comparison — the pre-screen equivalent

---

### 34. Run a Debrief Facilitation Guide
**For:** Head of TA / Recruiter · **Time:** 30 min · **Output:** Framework

**Inputs to have ready:** Role, panel composition, scorecard format. Stronger with: known disagreement going into the debrief.

**The prompt:**

```
GOAL: A structured debrief facilitation guide — surfaces evidence before opinions, makes disagreement productive, lands a decision with documented rationale. Prevents "loudest voice wins."

TASK: Run a Debrief Facilitation Guide from the role + panel inputs below.
Length: 900-1,200 words.
Format: 5 sections —
1. Pre-debrief checklist
2. Debrief agenda — 45-minute structure
3. Disagreement protocol
4. Decision framework — Hire / Hold / Pass
5. Documentation requirements

BRIEF
- Sounds like: a senior TA leader who has facilitated hundreds of debriefs.
- Success means: decision made on evidence, documented clearly, defensible if challenged.

RULES (every rule is a TO DO)
- Always require scorecards submitted independently BEFORE the debrief.
- Always cover evidence before opinions.
- Always treat divergence as data, not conflict.
- Always document decision rationale.
- Always plan the "no" outcome with as much care as the "yes."

CONVERSATION: do not execute yet. Confirm: how many interviewers, what stages, role seniority?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level]
- Interview panel composition: [paste]
- Scorecard format used: [paste or describe]
- (Optional) Time available: [default 45 min]
- (Optional) Known disagreement going in: [paste]
```

**Sample output:**

> **Debrief agenda (45 min).**
>
> *0-5 min — Opening.* Facilitator restates role, decision rule, recommendation distribution.
>
> *5-25 min — Evidence first.* Competency by competency. "What evidence did you observe?" before anyone interprets. Then: "What did you score, and why?" Most time on widest-spread.
>
> *25-35 min — Disagreement protocol.* For >1 point spread: lowest scorer first ("Help me understand what you saw that landed as a 2"); then highest ("What did you see I might have missed?"). Convergence not required; documented divergence acceptable.
>
> *35-42 min — Decision.* Holistic call.
>
> *42-45 min — Communication & documentation.* Decline message ownership + deadline. Offer brief ownership + deadline. Rationale in ATS within 24 hours.

**Related prompts:** #15 Build a Role Scorecard + Interview Framework — produces the scorecards · #49 Write a Decline Message that Builds Advocacy — the "no" output · #36 Run a Structured-Interview Defensibility Check — the legal layer

---

### 35. Build a Debiased Screening + Panel Composition Framework
**For:** Head of TA · **Time:** 30 min · **Output:** Framework

**Inputs to have ready:** Current screening process + panel composition pattern; slate composition data + geography. Stronger with: same-role historical slate data.

**The prompt:**

```
GOAL: A framework for blind/structured screening plus rules for panel composition that reduce affinity bias — without becoming performative or undermining candidate experience.

TASK: Build a Debiased Screening + Panel Composition Framework from the inputs below.
Length: 1,200-1,500 words.
Format: 5 sections —
1. Screening protocols — what's redacted vs visible at first read
2. Structured screen scripts — questions, scoring, calibration
3. Panel composition rules — who interviews what, why diversity matters, the dangers of tokenism
4. Calibration practices
5. Measurement — what to track

BRIEF
- Sounds like: a senior TA leader who treats debiased hiring as a craft problem. Diagnostic, mechanical, not performative.
- Success means: slate composition shifts measurably over 90 days without compromising hire quality.

RULES (every rule is a TO DO)
- Always specify what gets redacted at first read.
- Always use structured questions with calibrated scoring.
- Always require panel diversity at interview stage for senior roles.
- Always train calibration as recurring practice.
- Always measure the outcome — slate composition by stage.
- Always treat token panellists with extra care.

CONVERSATION: do not execute yet. Ask: what does current screen and panel look like?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level]
- Current screening process: [paste]
- Current panel composition pattern: [paste]
- Slate composition data by stage: [paste if available]
- Geography: [paste — UK/EU GDPR vs US EEOC]
```

**Sample output:**

> **Screening protocols.**
> *First-pass:* redact name (use candidate ID), photo, full address (keep city/region), university name (keep degree subject + class), date of birth. First-pass takes max 90 sec/CV. Longer invites bias.
>
> **Anti-token rule.** If you cannot constitute a mixed panel from internal staff, do not mandate one. Tokenism damages the experience for the panellist and the candidate. Better to acknowledge the gap honestly and address it structurally (hiring to fix the composition gap is a valid 12-month project).
>
> **Calibration practices.** 60-min calibration before first interview; 30-min refresher every 6 months. Monthly scorecard review by HoTA for drift.

**Related prompts:** #23 Run a Slate Diversity Audit — the diagnostic this framework addresses · #36 Run a Structured-Interview Defensibility Check — the legal layer · #16 Run a JD Bias Review — the upstream filter

---

### 36. Run a Structured-Interview Defensibility Check
**For:** Head of TA · **Time:** 30 min · **Output:** Audit

**Inputs to have ready:** Current interview process, jurisdictions, sample scorecard. Stronger with: past challenges from declined candidates.

**The prompt:**

```
GOAL: An audit of your current interview process for legal defensibility — EEOC (US), Equality Act 2010 (UK), GDPR (EU) — surfacing specific risks and the remediations that close them.

TASK: Run a Structured-Interview Defensibility Check on your current process.
Length: 1,200-1,500 words.
Format: 5 sections —
1. Current process summary
2. Legal framework (jurisdiction, key statutes and case law)
3. Risk register — specific risks, ranked by likelihood × impact
4. Remediations — priority order, specific actions
5. Documentation requirements — what to retain, for how long, where

BRIEF
- Sounds like: a TA-leader-meets-employment-lawyer. Calibrated, specific, never paranoid.
- Success means: process is defensible if a declined candidate raises a complaint; you can produce the documentation.

RULES (every rule is a TO DO)
- Always specify jurisdiction explicitly.
- Always rank risks by likelihood × impact.
- Always include the documentation requirement.
- Always recommend remediations a TA leader can act on without legal review for low-risk items; flag what needs legal review.
- Always include the 12-month retention rule.

CONVERSATION: do not execute yet. Ask: what jurisdiction(s) do you hire in?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Current interview process: [paste]
- Jurisdictions: [paste]
- Roles + seniority: [paste]
- Sample scorecard or structure: [paste]
- (Optional) Past challenges from declined candidates: [paste]
```

**Sample output:**

> **UK — Equality Act 2010.** Prohibits direct and indirect discrimination across 9 protected characteristics. Burden of proof shifts to employer once claimant establishes prima facie case (Section 136). Interview notes disclosable in tribunal proceedings (12-month time limit).
>
> **High risk.**
> 1. *Unstructured interviews.* Without scorecard tied to job-relevant criteria, an "I just didn't feel it" decline is indefensible. *Fix:* mandate scorecard use.
> 2. *Inconsistent question sets.* Comparability is weak. *Fix:* same question set per stage; variations documented.
> 3. *No panel diversity at senior levels.* Invites Section 136 challenges. *Fix:* minimum diversity policy (#35).
>
> **Documentation.** Per candidate: structured scorecards, consolidated decision with rationale, candidate-specific feedback for decline message, record of any adjustments granted or refused. Retention: 12 months for unsuccessful (matches GDPR + tribunal time limit).

**Related prompts:** #35 Build a Debiased Screening + Panel Composition Framework — the structural fix · #34 Run a Debrief Facilitation Guide — the documented decision layer · #54 Run a GDPR / EEO Hiring Comms Audit — the comms layer
