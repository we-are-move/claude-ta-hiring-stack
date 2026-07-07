# Stage 01 — Strategy & Workforce Planning

Prompts for TA leaders to plan headcount, assess hiring risk, manage recruiter teams and agencies, handle freezes/RIFs, and diagnose the maturity of the TA function.

### 1. Build a Workforce Plan
**For:** Head of TA · **Time:** Workflow · **Output:** Plan

**Inputs to have ready:** Last 12 months HRIS headcount/attrition data; business plan with function-level targets. Stronger with: Finance budget per function; ATS data export.

**The prompt:**

```
GOAL: A 12-18 month workforce plan with scenarios, costs, and recruiter capacity, ready to defend at the next exec or board review.

TASK: Build a Workforce Plan from the inputs below.
Length: 1,500-2,000 words.
Format: 7 sections —
1. Executive summary (top 5 points for leadership)
2. Headcount baseline (current state by function + attrition trend)
3. 12-18 month forecast by function and quarter (Must-have / Important / Nice-to-have)
4. Three scenarios — Base / Stretch / Compressed — with cost and timing
5. Recruiter capacity & ramp model
6. Cost summary (compensation, recruiting, ramp)
7. Risks and dependencies

BRIEF
- Output: 1,500-2,000 words, presentable to leadership.
- Sounds like: a TA Leader briefing the CEO and CFO. Direct, numbered, dashboard-friendly.
- Success means: the CEO can read the executive summary and approve, the CFO can read the cost summary and budget, function heads can read their forecast and execute.

RULES (every rule is a TO DO)
- Always explain "why" before "how many".
- Always show three scenarios: Base, Stretch, Compressed.
- Always include attrition assumptions explicitly.
- Always cap recruiter capacity at 4-5 active reqs per generalist; 6-7 for specialists in volume markets.
- Always flag the assumption you are least confident in.

TOOLS: web search for talent market conditions; Perplexity for comp benchmark intel.

CONVERSATION: do not execute yet. List the 3 inputs you most need to make this credible.

PLAN: list your top 3 modelling assumptions before drafting.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Current headcount by function: [paste]
- Attrition data, last 12 months: [paste]
- Business plan / hiring targets: [paste]
- Recruiter team size: [paste]
```

**Sample output:** (executive summary)

> **FY26 Workforce Plan — Engineering, Product, Design & Data**
>
> 1. 42 net hires across FY26: 18 Engineering, 12 Product, 8 Design, 4 Data. 12 in H1, 30 in H2 to follow the platform launch.
> 2. Total comp cost (annualised) £4.2M. Recruiting cost £680k. Ramp cost £450k. Total FY26 invest £5.3M.
> 3. Current recruiter capacity is 80% utilised. Two new recruiters needed by Q2 to absorb the H2 wave.
> 4. Three at-risk roles: Staff Engineer (Platform), Head of Design (confidential), Senior PM (Growth).
> 5. Lowest-confidence assumption: 14% Engineering attrition. Q1-Q2 trend suggests it could land at 18%.

**Related prompts:** #2 Run a Hiring Risk Assessment — deeper view on at-risk roles · #59 Build a Recruiting KPI Set — metrics that flow from the plan

---

### 2. Run a Hiring Risk Assessment
**For:** Head of TA · **Time:** 30 min · **Output:** Audit

**Inputs to have ready:** Headcount targets by function; current team structure + known attrition risks. Stronger with: Perplexity or web search for talent availability on at-risk roles.

**The prompt:**

```
GOAL: A two-quarter risk map showing where hiring is most likely to slip, why, and what to do about it — usable in your next leadership update.

TASK: Run a Hiring Risk Assessment for the next two quarters.
Length: 600-900 words.
Format:
1. Top 5 highest-risk roles, ranked by impact × likelihood (role, reason, TTF estimate, mitigation)
2. Concentration risks (functions or seniority bands carrying disproportionate load)
3. External risks (market shifts, comp inflation, competitor activity)
4. Internal risks (capacity, hiring manager bandwidth, brief quality, attrition)
5. Three priority moves for the next 30 days, prioritised

BRIEF
- Output: 600-900 words, structured.
- Sounds like: a senior TA leader briefing peers — calibrated, opinionated, action-led.
- Success means: a leadership team reads this and approves the three priority moves on the spot.

RULES (every rule is a TO DO)
- Always rank top-5 risk roles by impact × likelihood, not just impact.
- Always name the mitigation for each top-5 role.
- Always flag at least one external risk and one internal risk.
- Always end with 3 things to do in the next 30 days, in priority order.

TOOLS: Perplexity or web search for talent availability and comp shifts.

CONVERSATION: do not execute yet. If no pipeline data, ask 2-3 questions about which roles you are most concerned about.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS (if you have them)
- Open requisitions list: [paste]
- Pipeline health by role: [paste]
- Known attrition or planned departures: [paste]
```

**Sample output:** (top 5 only)

> **Q3-Q4 FY26 Hiring Risk Assessment**
>
> 1. **Staff Engineer (Platform)** — supply scarce; competing offers from Stripe + Anthropic; TTF 14 weeks. **Mitigate:** expand to remote-EU, raise top-of-band by £15k, prioritise H1 close.
> 2. **Head of Design (confidential)** — current Head leaving Q4. **Mitigate:** start search via intermediary; plan 16-week TTF.
> 3. **Senior PM (Growth)** — second open seat after a 4-month churn. **Mitigate:** retake the intake before sourcing.
> 4. **Data Engineer (ML Ops)** — niche stack, ~12 active candidates in market. **Mitigate:** budget for relocation, partner with one specialist agency.
> 5. **Sales Director (DACH)** — first hire in market. **Mitigate:** comp benchmarking sprint with web research.

**Related prompts:** #1 Build a Workforce Plan — the bigger picture · #57 Write a Monthly Hiring Update for Leadership — where risks get reported

---

### 3. Build a Recruiter 1:1 + Coaching Framework
**For:** Head of TA · **Time:** 30 min · **Output:** Framework

**Inputs to have ready:** Recruiter names + current requisitions; recent metrics per recruiter (TTF, candidate-to-hire, HM feedback). Stronger with: Recent debrief notes or HM feedback per recruiter.

**The prompt:**

```
GOAL: A structured 1:1 template, per-recruiter coaching plan, and capacity check you can use across your recruiter team.

TASK: Build a Recruiter 1:1 + Coaching Framework for the recruiter(s) named below.
Length: 700-1,000 words, broken out by recruiter where multiple.
Format: 4 sections —
1. Standard 1:1 agenda (30 min, structured)
2. Per-recruiter section — current load, performance indicators, strengths, 3 specific coaching priorities, 30-day actions
3. Team-level patterns to address
4. Suggested cadence and review milestones

BRIEF
- Output: 700-1,000 words.
- Sounds like: a TA leader who genuinely manages people. Supportive, specific, accountable.
- Success means: each recruiter walks out of their 1:1 with two actions and a clear sense of what good looks like for them.

RULES (every rule is a TO DO)
- Always personalise coaching priorities — never generic "improve sourcing."
- Always anchor priorities to observed performance, not assumption.
- Always include a strengths note alongside development areas.
- Always cap coaching priorities at 3 per recruiter.

CONVERSATION: do not execute yet. Ask 2-3 questions to calibrate: what has gone well recently, and what is the one thing you would most like each to improve?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS (if you have them)
- Recruiter names + current requisitions: [paste]
- Recent metrics per recruiter (TTF, candidate-to-hire, HM feedback): [paste]
- Recent wins or concerns you have noticed: [paste]
```

**Sample output:** (one recruiter section)

> **Maya — Senior Recruiter, Engineering** · 6 active reqs (over capacity by 1)
>
> *Strengths:* candidate experience scores top of team (NPS 78), strong HM relationship with VP Eng.
>
> *Coaching priorities:*
> 1. **Sourcing breadth.** Only two active channels. Pipeline drying up on the Staff Eng req.
> 2. **Pipeline diagnostics.** Pattern of late-stage drop-off on senior reqs — three withdrawals at offer in Q2.
> 3. **Brief quality on senior reqs.** Recent intake for the L7 PM read a level below what the team actually needs.
>
> *30-day actions:* Run a sourcing channel map for the Staff Eng req (#22). Debrief the last 3 late-stage drops. Retake the intake for the L7 PM with the VP Eng (#40).

**Related prompts:** #22 Run a Sourcing Channel Map — referenced in coaching actions · #40 Run a Misalignment Check on a Brief — the retake-intake action

---

### 4. Build an Agency Brief & QA Framework
**For:** Head of TA · **Time:** 30 min · **Output:** Framework

**Inputs to have ready:** Role brief; existing agency contract or proposed terms. Stronger with: Prior submission data from this or comparable agencies.

**The prompt:**

```
GOAL: A reusable agency brief template + QA scorecard for evaluating agency-submitted candidates — so engaging external partners doesn't become a long-tail of low-signal submissions.

TASK: Build an Agency Brief & QA Framework for the role and agency relationship below.
Length: 800-1,200 words.
Format: 5 sections —
1. Agency Brief Template — sections to include, what to say, what to omit
2. Submission QA Scorecard — what makes a strong submission vs a noisy one
3. Commercial terms summary — fee structure, replacement guarantee, exclusivity stance
4. Submission review cadence and feedback loop
5. Decision rules for renewing or cutting the agency relationship

BRIEF
- Output: 800-1,200 words.
- Sounds like: a TA leader who has been burned by agencies once or twice. Clear, fair, accountable on both sides.
- Success means: the agency knows exactly what good looks like; your team can QA a submission in 90 seconds.

RULES (every rule is a TO DO)
- Always include must-haves and deal-breakers in the brief, not just role overview.
- Always set a submission cap per role so the agency curates rather than spams.
- Always specify response SLAs in both directions.
- Always set explicit success criteria (e.g. 3 of 5 progressing = good).

CONVERSATION: do not execute yet. Ask: is this a one-off contingent engagement or a retained relationship?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS (if you have them)
- Role brief: [paste]
- Existing agency contract or proposed terms: [paste]
- Prior submission data: [paste]
```

**Sample output:** (extract)

> **Agency Engagement Pack — Senior Product Designer search**
>
> **Agency Brief Template.** Section 1: role overview. Section 2: three things we want the candidate excited about. Section 3: must-haves (max 5) and deal-breakers (max 3). Section 4: comp, equity, location/flex. Section 5: process overview. Section 6: submission rules — max 5 candidates over the engagement, each with cover note. Section 7: SLAs — 48hr both ways.
>
> **QA Scorecard.** *Strong:* cover note explicitly maps candidate to must-haves; CV shows directly relevant work; agency has spoken to the candidate about this role. *Noisy:* generic CV forward, no rationale, no recent contact. *Action on noisy:* flag back, count against the 5-cap, one warning then de-prioritise.

**Related prompts:** #13 Build a Post-Intake Job Brief — the brief format the agency would use · #15 Build a Role Scorecard + Interview Framework — calibration the agency should know

---

### 5. Build a Hiring Freeze / RIF Comms & Redeployment Plan
**For:** Head of TA · **Time:** Workflow · **Output:** Plan

**Inputs to have ready:** Situation details, current pipeline status, affected employee count. Stronger with: Existing comms templates from People/Comms.

**The prompt:**

```
GOAL: Three deliverables you can use the day a hiring freeze, RIF, or significant restructure is announced — internal comms for affected employees and managers, candidate pipeline comms for everyone in live process, and a redeployment framework.

TASK: Build a Hiring Freeze / RIF Comms & Redeployment Plan from the situation below.
Length: 1,500-2,000 words total across the three deliverables.
Format: Three distinct deliverables —
1. Internal comms pack — announcement framing, FAQ for managers, team meeting talking points
2. Candidate pipeline comms — messages for candidates at every stage (offer, final, interview, screen, sourced)
3. Redeployment framework — process for matching affected employees to open roles internally

BRIEF
- Output: three deliverables, each ready to use.
- Sounds like: an experienced People leader being honest with humans who deserve directness. Calm, specific, never corporate.
- Success means: managers can run the meeting tomorrow; candidates feel respected, not ghosted; affected employees know exactly what's available.

RULES (every rule is a TO DO)
- Always be honest about scope and reasoning — do not minimise.
- Always give people concrete next steps, never vague reassurance.
- Always honour candidate processes — no ghosting, no "we will be in touch" templates.
- Always state clearly which roles are frozen and which are still hiring.
- Always treat affected employees as candidates for redeployment, not a problem to process.

CONVERSATION: do not execute yet. Ask: is this complete freeze, selective freeze, or RIF? Is leadership comfortable being honest about reasoning?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Situation details (freeze scope, affected functions, timeline): [paste]
- Current pipeline status: [paste]
- Affected employee count (anonymised): [paste]
- Existing comms templates: [paste if available]
```

**Sample output:** (candidate pipeline comms extract)

> *For candidates with verbal offer accepted:*
> "Hi [name] — wanted to come to you directly. Because of changes to our business plan announced internally today, we're pausing hiring across the [function] team for the next six months. Your offer is the exception — your start date and terms are unchanged. I will be your point of contact through onboarding."
>
> *For candidates in final-stage process:*
> "Hi [name] — I owe you an honest update before Thursday's final. Our business announced a hiring pause today across [function]. We are not in a position to make a hire from your current process. I am sorry — you've put real work in. Two things I would like to do: move Thursday to a 30-min conversation so you can hear it from me; keep your CV at the top of the list when the freeze lifts, with your permission."

**Related prompts:** #49 Write a Decline Message that Builds Advocacy — similar craft for individual declines · #51 Build a Talent Pool Nurture Sequence — where affected candidates can opt in

---

### 6. Run a TA Maturity Diagnostic
**For:** Head of TA · **Time:** Playbook (3-5 hours prep + follow-up review cycle) · **Output:** Audit

**Inputs to have ready:** 12 months hiring data (volume, TTF, source mix, drop-off); TA team headcount + structure; ATS + tooling stack; existing playbooks, scorecards, brief templates; top 3 known pain points. Stronger with: Exec/board hiring updates; HM or candidate NPS data.

**The prompt:**

```
GOAL: A maturity scoring of your TA function across six pillars — strategy, sourcing, screening, interviewing, ops, metrics — with the three highest-leverage improvements named and resourced.

TASK: Run a TA Maturity Diagnostic from the inputs below.
Length: 2,500-3,500 words.
Format:
1. Executive summary (overall maturity score, top 3 priorities, total resourcing implication)
2. Pillar-by-pillar scoring on a 1-4 scale
3. For each pillar: current state, target state, gap, top 1-2 actions
4. Top 3 priority improvements (cross-pillar) for the next 90 days
5. Suggested implementation sequence
6. Resourcing implications

LABEL: This is a Playbook-tier diagnostic. Expect 3-5 hours of preparation and a follow-up review cycle.

BRIEF
- Output: 2,500-3,500 words, presentable to ExCo.
- Sounds like: an experienced TA consultant being honest with a client. Diagnostic, not flattering.
- Success means: the Head of TA can present the 3 priority improvements to ExCo and get the resourcing.

RULES (every rule is a TO DO)
- Always score 1-4: 1 = ad-hoc, 2 = repeatable, 3 = managed, 4 = optimised.
- Always anchor scores to observed practice, not aspiration.
- Always name 1-2 specific actions per pillar.
- Always identify the one pillar that, if improved, would lift the others most.
- Always flag where the function is over-invested as well as under-invested.

CONVERSATION: do not execute yet. List the 5 things you most need to score this credibly.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS (this prompt benefits from preparation)
- 12 months hiring data: [paste]
- TA team headcount + structure: [paste]
- ATS + tools currently in use: [paste]
- Existing playbooks, scorecards, brief templates: [paste]
- Top 3 known pain points: [paste]
- Recent exec or board hiring updates: [paste]
```

**Sample output:** (executive summary)

> **TA Maturity Diagnostic — Q3 FY26**
>
> **Overall maturity: 2.3 / 4** (Repeatable, edging toward Managed)
>
> Strengths in candidate experience (3.5) and HM partnership (3.0). Three areas pulling overall maturity down: structured interview design (1.5), QoH measurement (1.0), recruiter capacity modelling (2.0).
>
> **Top 3 priority improvements (90 days).**
> 1. **Structured Interview Design.** Scorecards exist but not consistently used. **Action:** standardise on Role Scorecard (#15) for senior roles.
> 2. **Quality of Hire baseline.** No measurement. **Action:** stand up QoH Framework (#55) starting with last 12 senior hires.
> 3. **Recruiter Capacity Model.** Two recruiters persistently >6 reqs; one at 3. **Action:** rebalance using Capacity Model (#1) within 30 days.
>
> Resourcing total: ~£8k tooling. ~4-6 weeks of Head of TA time over the quarter.

**Related prompts:** #15 Build a Role Scorecard + Interview Framework — the structured interview fix · #55 Build a Quality of Hire Framework — the QoH measurement fix · #1 Build a Workforce Plan — the capacity model fix
