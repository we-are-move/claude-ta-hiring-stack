# Stage 07 — Hiring Manager Enablement

Prompts for making hiring managers better partners: interview prep briefs, intake preparation and probing questions, brief misalignment checks, search committee governance for senior roles, and post-hire signal handovers.

### 37. Build an HM Prep Brief for an Upcoming Interview
**For:** Recruiter / Head of TA · **Time:** 5 min · **Output:** Brief · **Wedge prompt**

**Inputs to have ready:** Candidate CV or summary; role brief; interview format (type + duration). Stronger with: scorecard from prompt #15; prior screening notes from prompt #33.

**The prompt:**

```
GOAL: An interview prep brief that takes a hiring manager from "I read the CV in the lift" to "I am asking the right questions of this specific candidate" — in 10 minutes of reading.

TASK: Build an HM Prep Brief for an upcoming interview.
Length: 400-500 words, single page.
Format: 5 sections —
1. The 2–3 most important things to probe based on this candidate's specific background
2. Suggested interview structure with time allocations
3. Five role-specific questions tailored to this candidate (referencing their actual experience, not generic)
4. 1–2 potential red flags to watch for and how to probe them
5. What a great answer looks like for each question

BRIEF
- Output: 400-500 words, single page.
- Sounds like: a senior recruiter briefing a busy executive — direct, anchored to the candidate, never generic.
- Success means: the hiring manager walks into the interview feeling 10x more prepared than they would have been with just the CV.

RULES (every rule is a TO DO)
- Always make the questions reference their actual experience ("Tell me about the activation redesign you led at X," not "Tell me about a project").
- Always include great-answer markers — what does a strong response sound like.
- Always flag red flags specifically — what you noticed, what to probe, what would resolve it.

CANDIDATE SUMMARY / CV: [paste]
ROLE BRIEF: [paste]
INTERVIEW FORMAT: [type + duration]

PUSH: go beyond the basics. Think before answering (maximum reasoning).
```

**Sample output:**

> **HM Prep — Sarah Chen, Senior Product Designer** — *45-min competency interview covering ownership and craft.*
>
> **The 2–3 most important things to probe.**
> 1. Independent craft ownership. She has always reported into a Director designer.
> 2. B2B → consumer → B2B trajectory. Why she moved away from B2B four years ago.
>
> **Five role-specific questions.**
> 1. "At Klarna, you led the activation flow redesign that lifted completion by 22%. Talk me through the moment you knew the original design was wrong."
> 2. "You mentored Adam from Junior to Mid at your last role — what made that work?"
> 3. "If you had to pick one thing about your move from B2B SaaS to consumer four years ago that you would do differently, what is it?"
> 4. [Show our dashboard] "Where would you start?"
> 5. "What would have to be true for you to leave your current role?"
>
> **Red flag to probe.** She has never been the most senior designer on craft. *Probe:* "Walk me through a moment where you disagreed with your design director and held your ground."

**Related prompts:** #15 Build a Role Scorecard + Interview Framework · #33 Write a Candidate Summary for the HM · #34 Run a Debrief Facilitation Guide

---

### 38. Run an Intake Prep Brief
**For:** Recruiter / Head of TA · **Time:** 5 min · **Output:** Brief

**Inputs to have ready:** JD draft + HM email thread. Stronger with: the role's history at the company.

**The prompt:**

```
GOAL: A pre-intake prep package — 3 clarifying questions to ask, misalignment flags, a 1-page prep doc, and a realistic candidate profile — produced in 5 minutes before any intake meeting.

TASK: Run an Intake Prep Brief from the inputs below.
Length: 500-800 words.
Format: 4 sections —
1. The 3 most important clarifying questions to ask this HM about this specific role
2. Potential misalignments flagged from the JD/notes vs market reality
3. A 1-page prep doc to bring into the meeting
4. A realistic candidate profile for this role in this market

BRIEF
- Sounds like: a senior recruiter who has run this kind of intake 50 times.
- Success means: you walk in with sharper questions than the HM expects.

RULES (every rule is a TO DO)
- Always ground questions in what's missing or vague in the inputs.
- Always flag misalignments specifically.
- Always include the 1-page prep doc with named sections.
- Always anchor the candidate profile to specific signals.

CONVERSATION: only ask if inputs are unusually thin.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title]
- HM context (name, function, hiring history if known): [paste]
- Any JD draft, HM email, role notes: [paste]
- Location / market: [paste]
- Comp band: [paste if known]
```

**Sample output:**

> **Intake Prep — Senior Backend Engineer.**
>
> **3 clarifying questions.**
> *Q1.* "The JD draft mentions 'lead the rewrite' — does that mean architectural decision-making authority, or technical leadership of a 2-3 person team? Materially different roles."
> *Q2.* "Comp band £130-160k. Skill profile (rewrite + Kafka + async written) sits at top of London market. Confirm we'd go to £160k for the right candidate?"
> *Q3.* "You hired this profile before. What surprised you about who actually performed vs who interviewed well?"
>
> **Misalignment flags.**
> - JD lists 11 must-haves. Realistic is 4-5.
> - "5+ years experience" combined with "Staff-level architectural authority" is internally inconsistent.
> - "Remote-friendly" but team meets in person Tue-Thu — pure-remote candidates will misunderstand and drop at offer.

**Related prompts:** #39 Write 10 Probing Intake Questions — the deeper question set · #40 Run a Misalignment Check on a Brief — after the intake meeting · #13 Build a Post-Intake Job Brief — the next step

---

### 39. Write 10 Probing Intake Questions
**For:** Recruiter · **Time:** 5 min · **Output:** Document

**Inputs to have ready:** Role title and HM context. Stronger with: existing JD draft.

**The prompt:**

```
GOAL: 10 probing questions to ask in the intake meeting — designed to uncover unstated requirements, team dynamics, and past-hire failure modes that won't appear in the JD but matter for the search.

TASK: Write 10 Probing Intake Questions from the role + HM context below.
Length: 700-1,000 words.
Format: 3 sections —
1. The 10 questions, grouped by theme (Unstated requirements / Team dynamics / Failure modes / Future picture)
2. For each question: why you're asking, what a strong answer sounds like, what an evasive answer signals
3. Tactical advice on order, follow-ups, push-back when HM dodges

BRIEF
- Sounds like: a senior recruiter who treats intake as the highest-leverage 60 minutes.
- Success means: you uncover 2-3 things not in the brief but materially change the search.

RULES (every rule is a TO DO)
- Always design each question to surface something hidden.
- Always include "why you're asking."
- Always describe strong vs weak answers.
- Always include at least one question about past hires.
- Always include at least one question about the future.

CONVERSATION: only ask if role function is unusually broad.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level + function]
- HM context: [paste]
- Type of company / team: [paste]
```

**Sample output:**

> *Q1 — Unstated requirements.* "Tell me about the last person who did this role well, and the last person who struggled. What was different?"
> *Why:* patterns from past hires reveal what actually matters more than the JD does.
> *Strong:* names specific people, specific differences. Reveals the real bar.
> *Weak:* "they were all fine." *Push:* "Walk me through the closest comparison — even from a previous company."
>
> *Q3 — Team dynamics.* "Walk me through who this person will work most closely with. Who do they need to win over in the first 30 days?"
> *Why:* role success often hinges on 1-2 specific peer relationships, not the HM.
> *Strong:* names specific colleagues with personality detail.
> *Weak:* "they'll work with the whole team."

**Related prompts:** #38 Run an Intake Prep Brief — prep before this question set · #40 Run a Misalignment Check on a Brief — after the intake

---

### 40. Run a Misalignment Check on a Brief
**For:** Recruiter / Head of TA · **Time:** 5 min · **Output:** Audit

**Inputs to have ready:** The job brief; location / market. Stronger with: market intel from web search or Perplexity.

**The prompt:**

```
GOAL: A sceptical review of a job brief — the 3 likeliest misalignments between what the brief describes and what the market will actually deliver, with questions to take back to the HM before sourcing starts.

TASK: Run a Misalignment Check on the brief I'll paste below.
Length: 500-800 words.
Format: 3 sections —
1. The 3 most likely misalignments — what the brief says, what the market delivers, the gap
2. The HM conversation script — how to surface misalignment without making the HM defensive
3. Decision rules — for each misalignment, what would need to change for the search to be winnable

BRIEF
- Sounds like: a senior recruiter who has seen searches fail because the brief was wrong.
- Success means: recruiter leaves with a clear understanding of where brief and market diverge.

RULES (every rule is a TO DO)
- Always rank misalignments by severity.
- Always quantify the gap where possible.
- Always include the HM conversation script.
- Always provide a decision rule.
- Always treat "the HM is wrong" with care — frame as "the market is delivering X."

CONVERSATION: only ask if the brief is unusually thin.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- The job brief: [paste]
- Location / market: [paste]
- (Optional) Comparable comp data: [paste]
```

**Sample output:**

> **Misalignment 1: Comp anchor vs skill profile.**
>
> *Brief:* £125-145k base + 0.05-0.10% equity for a Senior Backend Engineer who will lead a rewrite, owns architecture without senior oversight, 5+ years' experience.
>
> *Market:* engineers with rewrite + architectural authority + Kafka-at-scale sit at £140-170k base + ~0.10-0.15% at Series C.
>
> *Gap:* brief anchored ~£15-25k below where this profile sits.
>
> **HM script.** "Marta — quick one before we start sourcing. The skill profile you've described sits at the top of the Senior band right now. Our current band of £125-145k reaches the bottom 30% of that talent pool. To attract the candidates you'd actually hire, we'd need to be willing to go to £155-160k. Would you have the conversation with Finance, or shall I prep the data?"

**Related prompts:** #38 Run an Intake Prep Brief — catches misalignment before the meeting · #13 Build a Post-Intake Job Brief — the brief that gets misaligned

---

### 41. Build a Search Committee Framework for Senior Roles
**For:** Head of TA · **Time:** Workflow · **Output:** Framework

**Inputs to have ready:** Role + reporting line + hiring sponsor + committee members + timeline. Stronger with: past search committee experience at this org — what worked, what didn't.

**The prompt:**

```
GOAL: A complete Search Committee Framework for a senior executive search — composition, terms of reference, decision rights, calibration, meeting cadence — that accelerates the search rather than slowing it.

TASK: Build a Search Committee Framework from the senior search inputs below.
Length: 1,500-2,000 words.
Format: 6 sections —
1. Committee composition — who's on it, why, who is explicitly NOT on it
2. Terms of reference — decision rights, scope, escalation, confidentiality
3. Calibration mechanism — how the committee aligns BEFORE candidates appear
4. Meeting cadence — kick-off, weekly, decision-stage
5. Decision rubric — how to decide between candidates; how to resolve disagreement
6. Communication discipline — how leaks are prevented

BRIEF
- Sounds like: an executive search consultant who has run dozens and knows where committees go wrong.
- Success means: confident, defensible decision in 8-12 weeks without leaking.

RULES (every rule is a TO DO)
- Always cap committee at 5 members maximum.
- Always assign decision rights explicitly.
- Always run calibration BEFORE candidates appear.
- Always plan meeting cadence in advance.
- Always include the "do not approach" list.

CONVERSATION: do not execute yet. Ask: who's the hiring sponsor, what's the role, is there a known internal candidate?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role being searched: [title + reporting line]
- Hiring sponsor: [paste]
- Proposed committee members: [paste]
- Timeline: [paste]
- Confidentiality requirements: [paste]
```

**Sample output:**

> **Composition (CPO search).**
> - *Decision-maker (1):* CEO. Final hiring authority. Sole voice on offer terms.
> - *Voting members (2):* Chair + Lead Investor. Vote-equivalent influence.
> - *Advisor (1):* Head of TA. Manages process; surfaces patterns; non-voting.
> - *Specialist advisor (1):* outgoing CPO if staying, or a CPO advisor from investor network.
>
> *Explicitly NOT on the committee:* existing leadership team (CMO, CTO). They'll meet candidates at final but their input is data, not a vote. Reason: 5+ voices = consensus capture, where the strongest candidate becomes the safest candidate.
>
> **Calibration (Week 1, 90 min, all members).** The role, success at year-one, agreed "right candidate" profile (3 must-haves, 2 deal-breakers), calibration exercise (each member names 1-2 sitting CPOs they'd hire), draft decision rubric. Output: 1-page signed off doc — the document the slate is judged against.

**Related prompts:** #24 Build a Confidential / Executive Search Plan — the broader strategy · #29 Write Discreet Outreach for a Confidential Role — the first-touch outreach

---

### 42. Write a Post-Hire Signals Brief for the HM
**For:** Recruiter / Head of TA · **Time:** 5 min · **Output:** Brief

**Inputs to have ready:** Interview process notes, reference notes, offer conversation notes. Stronger with: scorecards from each interviewer; any case study or exercise output.

**The prompt:**

```
GOAL: A signals brief for the hiring manager about their new hire — strengths observed in the process, weaknesses to develop, motivations, learning style, what made them say yes — so the HM can build a tailored 30/60/90 plan.

TASK: Write a Post-Hire Signals Brief from the process notes below.
Length: 600-900 words.
Format: 5 sections —
1. Strengths observed in the process (3-4 items with evidence)
2. Weaknesses to develop (2-3 items with how-to-coach suggestions)
3. Motivations (what drives this person)
4. Learning style (how they absorb context)
5. What made them say yes — and what could make them leave

BRIEF
- Sounds like: a recruiter handing over the candidate to the hiring manager.
- Success means: HM's 30/60/90 plan is materially better; new hire feels seen on day one.

RULES (every rule is a TO DO)
- Always anchor strengths and weaknesses in specific evidence.
- Always include "how to coach" for each weakness.
- Always treat motivations as actionable.
- Always name the implicit conditions — what made them say yes, what would make them leave.
- Always end with "things I'd want the HM to do in the first 30 days."

CONVERSATION: only ask if process notes are unusually thin.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- New hire name + role: [paste]
- Interview process notes (all stages): [paste]
- Reference check notes: [paste]
- Offer conversation notes: [paste]
- Any case study or exercise output: [paste]
```

**Sample output:**

> **Post-Hire Signals — Sarah Chen.**
>
> *Strength 1: Independent architectural judgement.* In the design exercise, she rejected our strawman and proposed a cleaner one with concrete trade-off reasoning. Staff Engineer's debrief: "we should consider what she suggested in the actual rewrite."
>
> *Weakness: Domain transfer ramp.* Klarna is BNPL; we're payments rails. *How to coach:* pair her with the existing Staff Engineer for 6 weeks; weekly 1:1 on "things you're discovering about our domain."
>
> *Motivations.* Top: real architectural ownership. She said in offer call: "the third thing on my list, after scope and team, is pay."
>
> *What could make her leave.* If architectural ownership turns out nominal. The HM needs to protect this.
>
> *First 30 days for the HM.*
> 1. Confirm ownership of first subsystem within 7 days. Make it formal.
> 2. Set up pair with the Staff Engineer.
> 3. Give her ALL platform design docs on day 1.
> 4. Day 5: 30-min Q&A on what she's read.

**Related prompts:** #44 Build an Offer Conversation Prep — produces the motivation notes · #18 Write a "90 Days to Success" Plan for a Role — the HM's onboarding plan input
