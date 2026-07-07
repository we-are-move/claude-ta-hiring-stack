# Stage 10 — Hiring Outcomes & Quality of Hire

Prompts for measuring whether hiring actually works: QoH frameworks, exec dashboards, leadership updates, placement post-mortems, KPI sets, and HM feedback at milestones.

### 55. Build a Quality of Hire Framework
**For:** Head of TA · **Time:** Playbook (2-4 hours prep + comp committee or ExCo review) · **Output:** Framework

**Inputs to have ready:** Hiring volume + team size + existing performance review process (this prompt benefits from preparation). Stronger with: existing performance review process documentation.

**The prompt:**

```
GOAL: A complete Quality of Hire (QoH) framework for your TA function — milestones, metrics, formula, stakeholder roles, tool stack.

TASK: Build a Quality of Hire Framework from the inputs below.
Length: 2,000-2,500 words.
Format: 7 sections —
1. Key principles
2. Milestones to track — Wk2, M1, M3, M6, M12
3. Core metrics (HM feedback, eNPS, performance, team ranking, customer feedback, business metrics)
4. QoH formula — start simple
5. Stakeholder roles
6. Tool stack — lightweight, automation-friendly
7. Implementation plan — first 90 days

LABEL: Playbook-tier diagnostic. Expect 2-4 hours of preparation and comp committee / ExCo review.

BRIEF
- Sounds like: a senior TA leader who has stood up QoH and knows where it goes wrong.
- Success means: framework can be implemented in 90 days with the team you have.

RULES (every rule is a TO DO)
- Always start simple.
- Always benchmark existing top performers first.
- Always keep inputs lightweight for HMs.
- Always track over time, not once.
- Always identify management gaps when QoH dips.

CONVERSATION: do not execute yet. List the 3 things you most need to build this credibly.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Hiring volume (last 12 months + planned next 12): [paste]
- Team / company size + stage: [paste]
- Existing performance review process: [paste]
- Existing tools (ATS, HRIS, performance management): [paste]
- Top 3 known hiring outcome questions leadership asks: [paste]
```

**Sample output:** (milestones + formula extract)

> **Milestones.**
>
> | Milestone | Look for | Collected by |
> |---|---|---|
> | Week 2 | Initial adaptation, engagement | HM (3 questions) |
> | Month 1 | Role clarity, feedback loops opened | HM + new hire |
> | Month 3 | Signs of integration, team feedback | HM scorecard + 360 lite |
> | Month 6 | Performance milestones, learning velocity | HM + peer + new hire NPS |
> | Month 12 | Long-term performance, promotion potential, regret-rate | Full review + retention check |
>
> **Formula v1 (start simple).** `QoH = (HM Score + eNPS + Performance Score) / 3`
>
> Triangulation beats any single signal. Three signals enough for v1. QoH improves predictive value over 18-24 months.

**Related prompts:** #60 Write an HM Feedback Template at QoH Milestones — the HM input · #56 Build a Hiring Outcomes Dashboard for Execs — where QoH shows up · #58 Run a Post-Mortem on a Low-Stick-Rate Placement — when QoH dips

---

### 56. Build a Hiring Outcomes Dashboard for Execs
**For:** Head of TA · **Time:** Playbook (3-5 hours prep + ExCo review) · **Output:** Document

**Inputs to have ready:** Current metrics tracked + hiring plan & actuals. Stronger with: ATS connector for live data.

**The prompt:**

```
GOAL: A dashboard structure leadership actually cares about — time-to-fill, Quality of Hire, stick rate, source ROI — defensible at ExCo and board level.

TASK: Build a Hiring Outcomes Dashboard for Execs from the inputs below.
Length: 1,500-2,000 words plus a one-page dashboard layout.
Format: 6 sections —
1. The audience — what each exec needs at a glance (CEO, CFO, function heads)
2. The headline view — single most important number
3. The 5-6 supporting metrics — calculation, source, target, current state
4. Visual layout (wireframe)
5. The cadence — daily / weekly / monthly views
6. The "do not include" list — metrics that mislead at exec level

LABEL: Playbook-tier. 3-5 hours of preparation + ExCo review.

BRIEF
- Sounds like: a TA leader who has presented to ExCo and knows which metrics drive decisions vs questions.
- Success means: CEO reads in 60 seconds and either approves / questions / acts.

RULES (every rule is a TO DO)
- Always lead with one headline metric.
- Always design for 60-second readers.
- Always include calculation + source for every metric.
- Always state the target alongside the current state.
- Always include the "do not include" list.

TOOLS: web search for dashboard design patterns.

CONVERSATION: do not execute yet. Ask: who's the primary audience?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Current metrics tracked: [paste]
- Hiring plan + actuals (last 6 months): [paste]
- ATS data structure: [paste]
- (Optional) Existing dashboard: [paste]
```

**Sample output:** (headline + do-not-include extract)

> **Headline view.**
> > **HIRING AGAINST PLAN (90 days)**
> > **38 of 42 planned (90%) · 6 weeks ahead of forecast**
> > QoH trend: 7.2 → 7.6 (positive)
>
> **The "do not include" list.**
> - Sourcing volume by channel — vanity; volume doesn't predict quality.
> - Recruiter activity (calls, emails, InMails) — activity is not outcome.
> - Pipeline depth at top of funnel — big number, no signal.
> - Average tenure of hiring team — irrelevant to outcomes.
> - NPS aggregate without segmentation — conceals the gap that matters.

**Related prompts:** #55 Build a Quality of Hire Framework — produces QoH metric · #57 Write a Monthly Hiring Update for Leadership — narrative companion to the dashboard · #59 Build a Recruiting KPI Set — the metric philosophy

---

### 57. Write a Monthly Hiring Update for Leadership
**For:** Head of TA · **Time:** 30 min · **Output:** Brief

**Inputs to have ready:** Pipeline + metric data for the month; hiring plan + active risks + open decisions. Stronger with: ATS connector for live numbers.

**The prompt:**

```
GOAL: An exec-ready monthly hiring update — progress vs plan, risks, decisions needed, headline outcomes — that lands action rather than producing more questions.

TASK: Write a Monthly Hiring Update for Leadership from the pipeline + metric data below.
Length: 600-900 words. One-page document.
Format: 5 sections —
1. Headline (single sentence + one key number)
2. Progress vs plan (bullet form, function by function)
3. Risks (top 3, ranked by impact, with action you're taking)
4. Decisions needed (named decisions with owner and deadline)
5. Headline outcomes (1-2 QoH or retention signals worth flagging)

BRIEF
- Sounds like: a TA leader writing to the CEO and CFO, not the People team. Direct, numerated, action-oriented.
- Success means: exec reads in 4 minutes, takes one action, no follow-up clarification needed.

RULES (every rule is a TO DO)
- Always lead with the headline.
- Always quantify progress vs plan.
- Always rank risks by impact, not likelihood.
- Always name owners and deadlines for decisions.
- Always include 1-2 outcomes.

CONVERSATION: only ask if data is unusually thin.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Pipeline + hires data for the month: [paste]
- Hiring plan + progress: [paste]
- Active risks / blockers: [paste]
- Open decisions needed: [paste]
- QoH or retention signal: [paste]
```

**Sample output:** (extract)

> **Hiring Update — September.**
>
> *Headline.* 13 hires closed (vs 11 planned). Engineering 6 weeks ahead on H2 plan; Sales 2 hires behind in DACH.
>
> *Risks (top 3).*
> 1. DACH Sales delay. Impact: Q4 revenue. Action: specialist agency on contingent. Decision needed: fee approval below.
> 2. Senior Eng offer-stage withdrawals up. Action: equity refresh policy drafted. Brief comp committee.
> 3. Head of Design search. 6 weeks in; no shortlist. Action: engaging retained firm parallel to investor intros.
>
> *Decisions needed.*
>
> | Decision | Owner | Deadline | Detail |
> |---|---|---|---|
> | Agency fee for DACH Sales (25%) | CFO | Mon 7 Oct | Est £40k total fee |
> | Equity refresh policy for Series E+ candidates | Comp committee | Fri 11 Oct | 0.15% refresh at 18 months |
> | Retained search firm for Head of Design | CEO | Wed 9 Oct | £35k retainer + £35k on placement |

**Related prompts:** #56 Build a Hiring Outcomes Dashboard for Execs — the visual companion · #2 Run a Hiring Risk Assessment — the risks section input

---

### 58. Run a Post-Mortem on a Low-Stick-Rate Placement
**For:** Head of TA / Recruiter · **Time:** 30 min · **Output:** Audit

**Inputs to have ready:** Hire context + outcome + HM notes + interview scorecards. Stronger with: reference check notes from the original process; the original brief.

**The prompt:**

```
GOAL: A structured post-mortem of a placement that didn't work — diagnostic of what signal we missed, what onboarding/management gap appeared, what brief or sourcing assumption was wrong — plus specific changes for future hiring.

TASK: Run a Post-Mortem on a Low-Stick-Rate Placement from the inputs below.
Length: 1,200-1,500 words.
Format: 5 sections —
1. The story — 4-5 sentences
2. Process retrospective — what we observed vs what showed up post-hire
3. Cause classification — brief / signal / onboarding/management / candidate problem
4. The 2-3 specific changes — ranked by likelihood of preventing the pattern
5. The "honest no" — what we won't change

BRIEF
- Sounds like: a senior TA leader who treats hiring outcomes as learnable. Never defensive.
- Success means: at least one specific change is identified that would have improved the outcome.

RULES (every rule is a TO DO)
- Always classify cause honestly.
- Always look for the signal you missed before the hire.
- Always distinguish brief/signal/onboarding/management causes.
- Always include the "honest no."
- Always be respectful of the person who left.

CONVERSATION: do not execute yet. Confirm: do you have the full process record?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Hire context: [paste]
- Outcome — what happened, when they left, stated reason: [paste]
- HM outcome notes: [paste]
- Interview scorecards: [paste]
- (Optional) Reference check notes: [paste]
- (Optional) Original brief: [paste]
```

**Sample output:** (extract)

> **Post-Mortem — Staff Engineer (left at month 11).**
>
> *Story.* James joined as Staff Engineer on platform team. Strong in process (3.8/4 average). Month 4: HM flagged concerns about architectural decision pace (cautious, asking for sign-off). Month 8: struggling with team cohesion. Resigned at month 11 saying the role wasn't "what he thought it was."
>
> *Signal we missed:* in the design exercise, he proposed three options rather than naming a recommendation. We read this as thoroughness. In retrospect: a tell — uncomfortable making the decisive call in an evaluative context.
>
> *Cause classification.* Brief: moderate. "Track record of independent architectural authority" wasn't a must-have. Signal: high. The behavioural signal was available; we didn't probe it. Onboarding: moderate. Existing Staff Engineer was strongly opinionated; new Staff Engineer found it hard to assert.
>
> *The 2-3 changes.*
> 1. Add "track record of independent architectural authority" as a must-have for senior platform seats. Probe in screen (#32).
> 2. Treat design-exercise behavioural signal as a probe target. If candidate presents options without a recommendation, next interviewer probes decisiveness.
> 3. Use the post-hire signals brief (#42) for every Senior+ hire.

**Related prompts:** #42 Write a Post-Hire Signals Brief for the HM — the prevention · #55 Build a Quality of Hire Framework — the measurement that surfaces these · #15 Build a Role Scorecard + Interview Framework — where probe questions land

---

### 59. Build a Recruiting KPI Set
**For:** Head of TA · **Time:** Workflow · **Output:** Framework

**Inputs to have ready:** Current TA metrics tracked + business priorities. Stronger with: business priorities to align KPIs to.

**The prompt:**

```
GOAL: A recruiting KPI set that leadership actually cares about — each with calculation, source, reporting cadence, threshold, and action trigger.

TASK: Build a Recruiting KPI Set from the inputs below.
Length: 1,200-1,500 words.
Format: 5 sections —
1. The principles — what makes a KPI worth tracking
2. The 6-8 KPIs, grouped by purpose (Capacity / Speed / Quality / Cost / Experience)
3. For each KPI — calculation, source, cadence, thresholds, action trigger
4. The "do not track" list
5. Implementation plan — first 90 days

BRIEF
- Sounds like: a TA leader who has been asked the wrong KPI questions enough times to know which ones matter.
- Success means: the KPI set survives an ExCo review; leadership uses these to make decisions.

RULES (every rule is a TO DO)
- Always limit to 6-8 KPIs.
- Always group by purpose.
- Always define the action trigger.
- Always include the "do not track" list.
- Always align KPIs to business priorities.

CONVERSATION: do not execute yet. Ask: what does leadership currently ask about that you wish they didn't, and what do they not ask about that they should?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Current TA metrics tracked: [paste]
- Business priorities for the year: [paste]
- Audience for the KPIs (ExCo? function heads?): [paste]
- ATS + HRIS data structure: [paste]
```

**Sample output:** (extract — KPIs + do-not-track)

> **The 7 KPIs.**
>
> *Capacity:* Recruiter load = active reqs ÷ recruiters. Cadence: weekly. Target: 4-5 generalist; 6-7 specialist. *Action trigger:* >6 sustained for 2+ weeks = redistribute or hire.
>
> *Speed:* Time-to-fill (Senior+) = days from req opened to offer accepted. Target: <45 days. *Trigger:* >60 days = retake brief (#40).
>
> *Quality:* Quality of Hire = #55 output. Target: 7.5/10 at M6. *Trigger:* <7 = manager 1:1. 12-month stick rate = % in role at 12 months. Target: 90%. *Trigger:* <85% = post-mortem (#58).
>
> *Cost:* Cost per hire = total recruiting cost ÷ hires (rolling 6 months). Target: <£8k. *Trigger:* >£10k = source-mix review.
>
> *Experience:* Candidate NPS (#53). Target: NPS >30. *Trigger:* <0 = process audit. HM NPS. Target: >40. *Trigger:* <20 on any recruiter for 2 months = coaching (#3).
>
> **"Do not track."**
> - Sourcing volume by channel — vanity.
> - Recruiter activity (InMails sent, calls made) — activity is not outcome.
> - Average pipeline depth.
> - Diversity slate composition without funnel context — misleading.

**Related prompts:** #55 Build a Quality of Hire Framework — produces the QoH KPI · #56 Build a Hiring Outcomes Dashboard for Execs — visualises these KPIs · #57 Write a Monthly Hiring Update for Leadership — the narrative companion

---

### 60. Write an HM Feedback Template at QoH Milestones
**For:** Head of TA · **Time:** 5 min · **Output:** Survey

**Inputs to have ready:** Role types + existing scorecard format. Stronger with: your QoH formula from prompt #55; existing scorecard format.

**The prompt:**

```
GOAL: A lightweight structured feedback form for hiring managers at each Quality of Hire milestone — Wk2, M3, M6, M12 — capturing the right signal at each stage without overburdening HMs.

TASK: Write an HM Feedback Template at QoH Milestones from the inputs below.
Length: 800-1,100 words.
Format: 5 sections —
1. The principles — why lightweight matters
2. Week 2 questions (3 questions, <3 min)
3. Month 3 questions (4 questions, <5 min)
4. Month 6 questions (5 questions, <8 min — substantive QoH input)
5. Month 12 questions (4 questions, <5 min — long-term + retention check)

BRIEF
- Sounds like: a TA leader who knows HMs are busy and respects their time. Practical, never bureaucratic.
- Success means: 80%+ completion rate across all milestones.

RULES (every rule is a TO DO)
- Always cap at 5 questions per milestone.
- Always include one open-text per milestone.
- Always make questions specific to the milestone.
- Always include the QoH score question (1-10) at M6.
- Always send via automated reminder.

CONVERSATION: only ask if your QoH formula uses different inputs.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role types you hire: [paste]
- Existing scorecard format: [paste]
- Existing performance review cadence: [paste]
- (Optional) Your QoH formula from #55: [paste]
```

**Sample output:** (extract — M6 + action triggers)

> **Month 6 (5 questions, <8 min). The substantive QoH input.**
>
> 1. **On a scale of 1-10, what is your Quality of Hire score for this person?** (This feeds the QoH calculation.)
> 2. Has this person delivered against the year-one expectations set at hire (paste original 90-day plan from #18 if available)?
> 3. Knowing what you know now, would you hire them again? (Yes / Yes with reservations / No)
> 4. If you needed to fill this seat again, what would you change about the brief?
> 5. *Open text:* What's the most important piece of feedback for our hiring process based on this hire?
>
> *Action trigger:* score <7 = full post-mortem (run #58). "No" on Q3 = manager + HoTA conversation within 2 weeks.

**Related prompts:** #55 Build a Quality of Hire Framework — the framework this template feeds · #58 Run a Post-Mortem on a Low-Stick-Rate Placement — triggered by low M6 scores · #18 Write a "90 Days to Success" Plan for a Role — the year-one expectations Q2 references
