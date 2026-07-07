# Extra — AI Mindset & Adoption for TA Teams

Prompts for shifting a TA team from ad-hoc AI experiments to disciplined team-wide adoption: adoption plans, use-case audits, principles documents, learning rituals, friction audits, and launch comms.

### 61. Build a TA Team's AI Adoption Plan
**For:** Head of TA · **Time:** Workflow · **Output:** Plan

**Inputs to have ready:** Team size + current AI usage + business priorities + known resistance. Stronger with: existing tooling stack.

**The prompt:**

```
GOAL: A 90-day plan to shift your TA team from individual, ad-hoc AI use to team-wide AI adoption — with the workflows, rituals, training, and measurement that make it stick.

TASK: Build a TA Team's AI Adoption Plan from the inputs below.
Length: 1,000-1,300 words.
Format: 5 sections —
1. Current state assessment
2. The 90-day plan (Days 1-30 / 31-60 / 61-90 with named workflows, training, rituals)
3. Adoption roles — champions, teachers, measurers
4. Measurement
5. The "do not do" list

BRIEF
- Sounds like: a TA leader who has run an AI rollout before and knows where they go wrong.
- Success means: 80%+ of the team using AI for 3 named workflows by day 90.

RULES (every rule is a TO DO)
- Always start with one high-leverage workflow.
- Always pair training with workflow rollout.
- Always name champions.
- Always measure adoption, not just feature usage.
- Always include the "do not do" list.

CONVERSATION: do not execute yet. Ask: where is the team today — early experimenters, mixed, resistant?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Team size + structure: [paste]
- Current AI usage: [paste]
- Business priorities for the quarter: [paste]
- Known resistance or scepticism: [paste]
- Existing tooling stack: [paste]
```

**Sample output:** (extract — 90-day plan)

> **Days 1-30 — Concentration.** Pick ONE workflow: Post-Intake Job Brief (#13). 90-min team training. Each recruiter runs it on next intake within 7 days. Weekly "show your work" — 2 recruiters share output.
>
> **Days 31-60 — Expansion.** Add Personalised LinkedIn Outreach (#25). Champions emerge — appoint 2. Second 90-min training. Build first internal prompt library.
>
> **Days 61-90 — Embedding.** Add a third workflow based on team request. Move ritual to bi-weekly. Start measurement: % using each workflow, monthly quality review.
>
> **The "do not do" list.**
> - Don't roll out 8 workflows at once.
> - Don't mandate without training.
> - Don't measure prompt-volume — measure workflow adoption.
> - Don't punish non-adopters at month 1.

**Related prompts:** #62 Run an AI Use-Case Audit for Your TA Function — helps pick the first workflow · #63 Write Your TA Team's AI Principles Document — the rulebook · #64 Build a Recurring "What Worked This Week with AI" Team Ritual — the ritual

---

### 62. Run an AI Use-Case Audit for Your TA Function
**For:** Head of TA · **Time:** 30 min · **Output:** Audit

**Inputs to have ready:** Current TA workflows + pain points + current AI tools. Stronger with: team size + AI literacy distribution.

**The prompt:**

```
GOAL: An audit of where AI can deliver highest leverage in your TA function right now — prioritising by impact × ease of adoption.

TASK: Run an AI Use-Case Audit from the inputs below.
Length: 800-1,100 words.
Format: 4 sections —
1. TA workflows ranked by AI leverage (high / medium / low / not yet)
2. The top 3 to start with
3. The "AI is not yet useful here" list
4. Implementation sequence

BRIEF
- Sounds like: a TA leader who has tested AI across the lifecycle.
- Success means: a defensible roadmap, not a wish list.

RULES (every rule is a TO DO)
- Always rank by impact × ease.
- Always include the "not yet useful" list.
- Always recommend ONE workflow to start with.
- Always be specific to the workflows your team actually runs.

CONVERSATION: only ask if you don't have a clear picture of what the team does.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Current TA workflows: [paste]
- Pain points the team flags most: [paste]
- Current AI tools you have access to: [paste]
- Team size + AI literacy distribution: [paste]
```

**Sample output:** (extract)

> *High leverage:*
> - Job briefs from intake notes (#13) — 5-min output, replaces 60-min writing.
> - Personalised LinkedIn outreach (#25) — 30-50% response rate uplift.
> - CV-to-Brief comparisons (#31) — 10-15 min saved per CV.
>
> *Medium leverage:* Structured interview frameworks. Comp benchmarking with Perplexity. Decline messages.
>
> *Low leverage:* Final-stage hire decisions. References.
>
> *Not yet useful:* Live phone screening for senior roles. Final cultural fit assessment.
>
> **Top 3 to start with.** Post-Intake Job Brief (#13). Personalised LinkedIn Outreach (#25). CV-to-Brief Comparison (#31).

**Related prompts:** #61 Build a TA Team's AI Adoption Plan — the plan that follows the audit · #63 Write Your TA Team's AI Principles Document — the rulebook

---

### 63. Write Your TA Team's AI Principles Document
**For:** Head of TA · **Time:** 30 min · **Output:** Document

**Inputs to have ready:** Team's current AI workflows + company AI policy. Stronger with: team values / operating principles.

**The prompt:**

```
GOAL: A 1-2 page principles document for your TA team — what you will use AI for, what you won't, how you handle errors and ethics, what's reviewed.

TASK: Write your TA Team's AI Principles Document from the inputs below.
Length: 700-1,000 words.
Format: 6 sections —
1. What AI is for in this team (3-5 specific workflows)
2. What AI is not for (3-5 decisions where humans own outright)
3. Review protocols
4. Ethical guardrails (candidate data, bias risks, transparency)
5. Quality + measurement
6. The escalation rule

BRIEF
- Sounds like: a Head of TA who has thought this through. Specific, opinionated, never preachy.
- Success means: any team member can answer "should I use AI here?" without asking you.

RULES (every rule is a TO DO)
- Always be specific.
- Always include the "not for" list.
- Always specify review protocols.
- Always address bias risk explicitly.
- Always include an escalation rule.

CONVERSATION: only ask if there's no company AI policy to align to.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Team's current AI workflows: [paste]
- Company AI policy: [paste if any]
- Team values / operating principles: [paste]
- Sensitive workflows you want to call out: [paste]
```

**Sample output:** (extract)

> **What AI is for.** First-pass written output (JDs, briefs, outreach, summaries, decline messages). Structuring decisions (scorecards, screening frameworks). Pattern analysis. Comp benchmarking with Perplexity. Internal comms.
>
> **What AI is not for.** Final hire/no-hire decision. The first contact in a sensitive candidate situation. The actual interview conversation. References. Anything where the candidate isn't told AI was involved if asked.
>
> **Ethical guardrails.** Don't paste into AI: home address, demographic data, social profile data unrelated to work. Every AI-generated screening rubric reviewed for bias (run #16). If asked, we tell candidates AI was involved.
>
> **Escalation.** When AI gets it wrong, the recruiter owns the consequence AND the fix. Share in the bi-weekly ritual. Nobody blamed; everyone responsible for learning.

**Related prompts:** #61 Build a TA Team's AI Adoption Plan — the rollout these principles govern · #65 Run a Friction Audit on AI Tooling — enforcement of the principles

---

### 64. Build a Recurring "What Worked This Week with AI" Team Ritual
**For:** Head of TA · **Time:** 30 min · **Output:** Framework

**Inputs to have ready:** Team size + existing meeting cadence + tools. Stronger with: existing prompt library (if any).

**The prompt:**

```
GOAL: A weekly or bi-weekly team ritual that captures and shares AI wins, failures and prompt iterations — building team-wide learning without becoming a meeting tax.

TASK: Build a Recurring "What Worked This Week with AI" Team Ritual from the inputs below.
Length: 600-900 words.
Format: 4 sections —
1. Ritual design — cadence, duration, format, owner
2. Agenda template
3. The shared artefact — where wins, failures, prompts get logged
4. The "kill switch" — when to retire or change the ritual

BRIEF
- Sounds like: a TA leader who respects team time and knows rituals decay without discipline.
- Success means: ritual lasts 6 months; team members reference each other's prompt iterations.

RULES (every rule is a TO DO)
- Always cap the ritual at 30 minutes.
- Always include both wins AND failures.
- Always create a shared artefact.
- Always rotate facilitation.
- Always include the kill switch.

CONVERSATION: only ask if team is unusually large (>10).

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Team size: [paste]
- Existing team meeting cadence: [paste]
- Tools (Slack, Notion, etc.): [paste]
```

**Sample output:**

> **Ritual design.** Bi-weekly, 30 min, Friday 11am. Coincides with team standup. Owner: rotating; each member facilitates one session per quarter.
>
> **Agenda template (30 min).**
> 1. *(5 min)* One win each — 30 sec per person.
> 2. *(10 min)* One deep-dive win — one member walks through prompt + output. Q&A.
> 3. *(10 min)* One failure — one member shares a prompt that didn't work. Group debugs.
> 4. *(5 min)* Resource updates.
>
> **Shared artefact.** Notion page "TA Prompt Library" — sections per workflow. Each entry: prompt text, use case, example input, example output, contributor.
>
> **Kill switch.** Retire when attendance drops below 60% for 3 sessions; "win" sharing becomes repetitive; shared artefact stops being updated.

**Related prompts:** #61 Build a TA Team's AI Adoption Plan — the broader rollout · #65 Run a Friction Audit on AI Tooling — the diagnostic when the ritual surfaces patterns

---

### 65. Run a Friction Audit on AI Tooling
**For:** Head of TA · **Time:** 30 min · **Output:** Audit

**Inputs to have ready:** Team adoption data + recent team feedback. Stronger with: specific workflows that have stalled.

**The prompt:**

```
GOAL: A diagnostic of where AI is breaking down for your team — which workflows have stalled, why adoption stuck, what's getting in the way — with specific actions to unblock.

TASK: Run a Friction Audit on AI Tooling from the inputs below.
Length: 800-1,000 words.
Format: 5 sections —
1. Adoption snapshot — who's using what, who's not
2. Friction points by workflow
3. Cause classification — tool / training / workflow / culture
4. The 3 highest-leverage unblocks for the next 30 days
5. What to do about persistent non-adopters

BRIEF
- Sounds like: a TA leader who treats adoption friction as data, not failure.
- Success means: 2 of 3 unblocks ship within 30 days.

RULES (every rule is a TO DO)
- Always classify friction by cause.
- Always interview a non-adopter directly.
- Always rank unblocks by impact × ease.
- Always have a conversation with persistent non-adopters.

CONVERSATION: only ask if you don't have visibility into individual adoption.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Team adoption data: [paste]
- Recent team feedback on AI tooling: [paste]
- Specific workflows that have stalled: [paste]
- Known concerns or objections: [paste]
```

**Sample output:** (extract)

> **Snapshot.** Team of 8: 4 active users across 3+ workflows, 2 active on 1-2, 2 non-adopters.
>
> **By workflow.**
> - *Intake Brief:* 6/8 use it. 2 non-adopters have strong personal templates. *Cause: culture problem.* Not worth forcing.
> - *Outreach:* 5/8. 3 non-adopters tried, got generic output, abandoned. *Cause: training problem.* Fix: 30-min 1:1s.
> - *CV-to-Brief:* 3/8. 5 non-adopters: "I've always done this in my head." *Cause: workflow problem.* Fix: make required process; output saved to ATS.
>
> **3 unblocks.**
> 1. Outreach training 1:1s. 90 min total. ~30% adoption gain.
> 2. CV-to-Brief as required workflow. Process change.
> 3. Don't fix Intake. Adoption good enough.
>
> **Persistent non-adopters.** Have the conversation. "I notice you're not using X. Walk me through your reasoning." If principled, respect it. If fear or unwillingness, name it. Don't avoid.

**Related prompts:** #61 Build a TA Team's AI Adoption Plan — the plan this audits · #64 Build a Recurring "What Worked This Week" Team Ritual — where friction surfaces

---

### 66. Write an Internal Comms Post Introducing AI Tools to the TA Team
**For:** Head of TA · **Time:** 5 min · **Output:** Email

**Inputs to have ready:** What's being launched + why now + audience + support being provided. Stronger with: prior comms templates in the team's voice.

**The prompt:**

```
GOAL: An internal launch announcement to introduce a new AI tool, workflow or rollout to your TA team — clear, motivating, never corporate, never demanding an immediate behaviour change without support.

TASK: Write an Internal Comms Post from the inputs below.
Length: 300-500 words.
Format: 5 sections —
1. The headline (what's launching, what's not changing)
2. Why now (the business reason)
3. What you'll get (specific benefit per team member)
4. What we're asking from you (the explicit ask in the next 30 days)
5. Support (training, office hours, who to ask)

BRIEF
- Sounds like: a Head of TA writing to people they actually manage.
- Success means: 80%+ of the team engages with the rollout in the first 14 days.

RULES (every rule is a TO DO)
- Always lead with what's changing AND what's not.
- Always specify benefit per team member.
- Always state the ask explicitly.
- Always name the support.

CONVERSATION: only ask if rollout context is unusually thin.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- What's being launched: [paste]
- Why now: [paste]
- Audience (full TA team, sourcers, recruiters, partners): [paste]
- Support being provided: [paste]
```

**Sample output:**

> **From: Marta, Head of TA**
> **Subject: Two new prompts launching this week**
>
> Team —
>
> Starting Monday, we're rolling out two new AI workflows team-wide: the **Post-Intake Job Brief** and **Personalised LinkedIn Outreach**.
>
> *What's changing:* these become the default. Briefs go through Claude from Monday; outreach gets drafted in Claude before going out.
>
> *What's not changing:* you still own the final decision, the relationship with the candidate, the hire/no-hire judgement. Claude doesn't decide anything — it drafts.
>
> **Why now.** We're hiring 42 people this year. Last month we lost two strong candidates to faster offers. The Intake Brief takes 5 min vs the 45 we currently spend; that recovered 40 min goes into faster screening, faster scheduling, faster outreach.
>
> **What you'll get.** 30+ min back per intake. Outreach response rates up 30-50%. Consistent quality across the team.
>
> **What we're asking.** Run the Intake Brief on your next intake before Friday. Run the Outreach prompt on three messages this week. Bring one win and one failure to Friday's team session.
>
> **Support.** Sasha and Daniel are champions — office hours Wednesday 2-3pm. 30-min onboarding session Tuesday 10am.
>
> — Marta

**Related prompts:** #61 Build a TA Team's AI Adoption Plan — the rollout this announces · #63 Write Your TA Team's AI Principles Document — the doc to attach to the launch
