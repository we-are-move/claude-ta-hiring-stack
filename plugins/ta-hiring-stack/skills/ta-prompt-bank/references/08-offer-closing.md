# Stage 08 — Offer & Closing

Prompts for landing the offer: comp benchmarking, offer conversation prep, framing emails, counter-offer and multi-offer scenarios, and executive comp packs.

### 43. Build a Comp Benchmark Brief
**For:** Recruiter / Head of TA · **Time:** 5 min · **Output:** Brief

**Inputs to have ready:** None needed — role + level + market parameters. Stronger with: Perplexity for live comp data; recent comp data from last 2-3 hires in this role.

**The prompt:**

```
GOAL: A defensible compensation benchmark brief — Total package range with confidence, variables that move it, a suggested offer structure, and the 3 likeliest decline reasons with pre-emptive moves.

TASK: Build a Comp Benchmark Brief from the role parameters below.
Length: 600-900 words.
Format: 5 sections —
1. Total package range (base / bonus / equity / benefits) with 25th / 50th / 75th percentile markers
2. Variables that push higher or lower
3. Suggested offer structure — anchor, hold in reserve, surface only if pushed
4. The 3 likely decline reasons + how to pre-empt each
5. The "do not negotiate" floor

BRIEF
- Sounds like: a TA leader with live market intelligence.
- Success means: recruiter walks into the offer conversation knowing what to anchor at, what to hold back.

RULES (every rule is a TO DO)
- Always show three percentile markers (25th / 50th / 75th).
- Always name specific variables that move comp.
- Always recommend an anchor below the ceiling.
- Always name 3 likeliest decline reasons specifically.
- Always state the floor.

TOOLS: Perplexity or web search aggressively for live comp data. Cross-reference at least two sources.

CONVERSATION: only ask if the role + market is unusually narrow.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level + function]
- Candidate context: [years of experience + relevant background]
- Location: [city + remote-acceptable]
- Company stage: [paste]
- (Optional) Internal comp band: [paste]
```

**Sample output:** (extract)

> **Senior Backend Engineer, London + UK Remote, Series C-D fintech/SaaS.**
>
> | Component | 25th | 50th | 75th |
> |---|---|---|---|
> | Base | £125k | £140k | £158k |
> | Bonus (target) | 10% | 12% | 15% |
> | Equity (£ vest/yr) | £25k | £40k | £60k |
> | Total | £163k | £193k | £232k |
>
> **Suggested offer.** Anchor £148k base + 12% bonus + £45k equity = £207k total. Between 50th and 75th. Hold in reserve: £155k + £52k equity. Deeper reserve: signing bonus £15k.
>
> **Do not negotiate floor.** £135k base. Below this, the offer signals bottom-of-band, which 80% of strong candidates decline.

**Related prompts:** #44 Build an Offer Conversation Prep — the conversation that uses the benchmark · #46 Build a Counter-Offer Response Brief — if the current employer fights back

---

### 44. Build an Offer Conversation Prep
**For:** Recruiter · **Time:** 30 min · **Output:** Brief

**Inputs to have ready:** Candidate motivations + current situation; the offer (TC + structure); interview panel scorecards. Stronger with: Persona Messaging Framework outputs (#7).

**The prompt:**

```
GOAL: A pre-offer conversation prep — three role-fit reasons specific to this candidate, likely objections with responses, temperature-check questions before presenting the offer, and a 48-hour follow-up plan.

TASK: Build an Offer Conversation Prep from the candidate notes below.
Length: 900-1,200 words.
Format: 5 sections —
1. The 3 role-fit reasons specific to this candidate (not generic)
2. The 3-4 likely objections + a specific response to each
3. Temperature-check questions to ask BEFORE presenting the offer
4. How to frame the offer (anchor, sequence, body language)
5. The 48-hour follow-up plan

BRIEF
- Sounds like: a recruiter preparing for the most important conversation of the search.
- Success means: candidate accepts on the call or within 48 hours.

RULES (every rule is a TO DO)
- Always anchor role-fit reasons in things the candidate themselves said in the process.
- Always pre-write the response to each objection.
- Always include temperature-check questions BEFORE the offer.
- Always have a 48-hour plan.
- Always plan the close.

CONVERSATION: do not execute yet. Confirm: do you know what's important to this candidate beyond pay?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Candidate situation: [paste motivations, current role, what they said]
- Competing processes / counter-offer risk: [paste]
- The offer: [paste]
- Interview panel scorecards / standout moments: [paste]
- (Optional) Persona Messaging Framework outputs (#7): [paste]
```

**Sample output:** (extract)

> **Role-fit reason 1.** *Architectural authority she's been waiting for.* In the screen she said her current Director's deference left her "wondering whether the title was the role." We've structured this seat with explicit ownership of the first rewrite subsystem within 30 days. *Frame:* "You named architectural ownership as the gap. This role gives you sub-system ownership in writing in your offer letter."
>
> **Objection: 'Comp is slightly below my other offer.'**
> *Response:* "Tell me about the comp gap — base, equity, total? [Listen.] We anchored at £148k vs your other comp because we believe the seniority of scope at this stage is the more meaningful long-term lever. If the gap is on equity, we have a refresh after 18 months written into the offer."
>
> **Temperature-check questions (before presenting offer).** "Where's your head at on the role itself, putting comp aside?" "If we got the offer right today, are you in a position to accept this week?"

**Related prompts:** #43 Build a Comp Benchmark Brief — the comp anchor · #45 Write an Offer Letter Framing Email — the post-call comms · #46 Build a Counter-Offer Response Brief — if current employer fights back

---

### 45. Write an Offer Letter Framing Email
**For:** Recruiter · **Time:** 5 min · **Output:** Email

**Inputs to have ready:** Candidate name + role; what excited them + standout moments + what's special about this team. Stronger with: a specific moment from the interview process to reference.

**The prompt:**

```
GOAL: A 200-word warm personal email that accompanies the formal offer — reminds the candidate why they were excited, in human voice, with a specific moment from the process referenced.

TASK: Write an Offer Letter Framing Email from the candidate context below.
Length: 200 words for the email + brief framing notes.
Format: 3 sections —
1. The email itself (~200 words, 3-4 paragraphs)
2. Why this email lands
3. Send timing

BRIEF
- Sounds like: a peer welcoming a peer — direct, warm, never corporate.
- Success means: candidate reads it before the formal PDF and the offer feels like an invitation, not a transaction.

RULES (every rule is a TO DO)
- Always reference a specific moment from the interview process.
- Always name what's special about THIS team.
- Always sign off in human voice.
- Always avoid "we're so excited to offer you."
- Always include a single named next step.

CONVERSATION: only ask if process notes are unusually thin.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Candidate name + role: [paste]
- What excited them about the role: [paste specific things they said]
- Standout moments from the interview process: [paste]
- The genuinely special thing about this team: [paste]
```

**Sample output:**

> Subject: Before you open the offer
>
> "Sarah,
>
> Before the formal offer hits your inbox in 30 minutes — wanted to send a quick note.
>
> The design exercise on Tuesday — when you walked us through why our strawman architecture was wrong and proposed the cleaner version — that's the moment Marta turned to me afterwards and said 'she's the one.' Not a soft 'she did well.' A direct 'she's the one.' That's not common.
>
> The reason we let candidates see the codebase before signing is because we want to hire people who choose us with full information. You did. You also pushed back on the architecture you saw, which is exactly what we'll be paying you to do for the next decade.
>
> The offer is in the next email. Real architectural ownership starts Week 1 — the first subsystem is yours.
>
> I'll call you 11am Monday to walk through it. Bring questions.
>
> — Adriano"
> *(189 words)*

**Related prompts:** #44 Build an Offer Conversation Prep — the conversation this follows · #42 Write a Post-Hire Signals Brief for the HM — the next handoff

---

### 46. Build a Counter-Offer Response Brief
**For:** Recruiter · **Time:** 30 min · **Output:** Brief

**Inputs to have ready:** Candidate situation + counter-offer details + our offer. Stronger with: web search for counter-offer regret-rate data.

**The prompt:**

```
GOAL: A response brief for when the candidate has received a counter-offer from their current employer — psychological dynamics, temperature-check questions, an honest non-desperate response, and clear hold-vs-escalate guidance.

TASK: Build a Counter-Offer Response Brief from the situation inputs below.
Length: 900-1,200 words.
Format: 5 sections —
1. Psychological dynamics — why people accept counter-offers and what usually happens next
2. Temperature-check questions
3. The honest response
4. Hold-vs-escalate guidance
5. The 7-day plan

BRIEF
- Sounds like: a senior recruiter who has lost candidates to counter-offers and learned what works.
- Success means: candidate either declines counter and proceeds, or declines us cleanly with relationship intact.

RULES (every rule is a TO DO)
- Always name the research on counter-offer regret (70% leave within 18 months).
- Always ask why the current employer waited until they were leaving to make the offer.
- Always be honest if the gap is real.
- Always have a walk-away point clear in your own mind.
- Always preserve the relationship even if they accept the counter.

TOOLS: web search for current counter-offer regret data.

CONVERSATION: do not execute yet. Confirm: is this counter a real jump or retention theatre?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Candidate situation: [current role, current TC, reasons leaving]
- Counter-offer details: [TC, structure, anything else promised]
- Our offer: [paste]
- Timeline to decision: [paste]
```

**Sample output:** (extract — honest response)

> "Sarah — I'm glad you're being honest with me. Two things I want to share.
>
> First: research on counter-offers is uncomfortable but consistent. Around 70% of people who accept them are gone within 18 months. The reason they leave is rarely comp — it's that nothing else changed except the number. The thing that made you start looking will still be there in 6 months.
>
> Second: you came to us because you wanted architectural ownership and the chance to lead a rewrite. We've structured the role around exactly that. Your current employer made you a comp move. We made you a scope move.
>
> I'm not going to match the counter blindly. If there's a real comp gap, we have some room — but only if the scope is the actual reason you're saying yes. If it's just the number, you should take the counter; that decision is honest and clean.
>
> What's your head saying?"

**Related prompts:** #44 Build an Offer Conversation Prep — the prior conversation · #47 Build a Multi-Offer Scenario Response — when there are competing external offers

---

### 47. Build a Multi-Offer Scenario Response
**For:** Recruiter / Head of TA · **Time:** 30 min · **Output:** Framework

**Inputs to have ready:** Our offer + competing offers + candidate criteria + motivations. Stronger with: comparative comp/equity data on competitors.

**The prompt:**

```
GOAL: A framework for engaging a candidate weighing 2-3 competing offers — how to position your offer without sounding desperate, what questions to ask, what to share vs hold back, the follow-up cadence.

TASK: Build a Multi-Offer Scenario Response from the situation inputs below.
Length: 900-1,200 words.
Format: 5 sections —
1. Diagnostic — genuine 3-way vs leverage attempt
2. Questions to ask before adjusting your position
3. Positioning the offer — leading with what you have that the others don't
4. What to share vs hold back
5. Follow-up cadence — +24h, +72h, +7 days

BRIEF
- Sounds like: a senior recruiter who has won and lost competitive offers.
- Success means: candidate makes a clean decision; if they accept us, for the right reasons.

RULES (every rule is a TO DO)
- Always diagnose the situation first.
- Always ask what the candidate's decision criteria are.
- Always lead with what you have that others don't.
- Always treat competing offers respectfully.
- Always have a walk-away point.

CONVERSATION: do not execute yet. Confirm: what do you know about the competing offers?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Our offer: [paste]
- Competing offers (what's known): [paste]
- Candidate's stated decision criteria: [paste]
- Candidate's motivations from the process: [paste]
- Timeline to decision: [paste]
```

**Sample output:** (extract)

> **Diagnostic.** Three offers: ours (Senior Backend, Series C fintech, £207k); Competitor A (Staff, Series E SaaS, £195k — more mature, less ownership); Competitor B (Senior, seed-stage fintech, £130k + 0.5% equity — high risk, high autonomy). Genuine 3-way. Different stage, different value props.
>
> **Questions to ask.**
> "What's the one thing you're still uncertain about for each company? What would resolve it?" *Surfaces decision blockers across all three, not just ours.*
>
> **Positioning.** Lead with what we have that others don't:
> 1. True architectural ownership at Senior level. Competitor A's Staff role coordinates with 4-5 Staff engineers + Director above. Less ownership in practice.
> 2. Rewrite mandate. Competitor A is polish-and-scale; Competitor B doesn't have a system to rewrite yet.
> 3. Specific clarity on first 90 days. Subsystem #1 owned by you in writing.
>
> Do NOT lead with comp — Competitor A beats us on base.

**Related prompts:** #44 Build an Offer Conversation Prep — the foundational prep · #46 Build a Counter-Offer Response Brief — if it's also a retention play

---

### 48. Build an Executive Comp & Equity Pack
**For:** Head of TA · **Time:** Workflow · **Output:** Document

**Inputs to have ready:** Role + company stage + valuation + existing comp bands (this prompt benefits from preparation). Stronger with: comp & equity benchmarking access; legal/comp committee guidance.

**The prompt:**

```
GOAL: A complete total package model for a senior executive offer — base, bonus, equity (grant + refresh + accelerators), severance, and negotiating positions — calibrated to attract a sitting executive without breaking comp principles.

TASK: Build an Executive Comp & Equity Pack from the inputs below.
Length: 1,500-2,000 words.
Format: 7 sections —
1. Total package summary (target, floor, ceiling)
2. Base salary — band, anchor, negotiation room
3. Cash bonus — target %, payout, performance conditions
4. Equity grant — size, vesting, cliff, refresh policy
5. Accelerators — single-trigger, double-trigger, change-of-control
6. Severance — notice period, severance multiple, garden leave
7. Negotiating positions — fixed, negotiable, board escalation

BRIEF
- Sounds like: a Head of TA who has negotiated executive offers.
- Success means: competitive enough to win, doesn't break internal comp principles, defensible at comp committee.

RULES (every rule is a TO DO)
- Always show three scenarios (target / floor / ceiling).
- Always include refresh policy explicitly.
- Always specify accelerator treatment for change-of-control.
- Always include severance and garden leave.
- Always identify what requires board approval.

TOOLS: web search for executive comp benchmarks; SEC filings if public comparable.

CONVERSATION: do not execute yet. Ask three sensitive questions: (1) exact seniority/scope? (2) First-time exec or experienced? (3) Existing exec comp band + comp committee briefed?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + reporting line]
- Company stage + valuation: [paste]
- Existing executive comp bands: [paste]
- Comp committee approval thresholds: [paste]
- (Optional) Candidate's current comp: [paste]
```

**Sample output:** (extract — package summary)

> **CPO, Series C fintech, £80M valuation.**
>
> | Component | Floor | Target | Ceiling |
> |---|---|---|---|
> | Base | £180k | £210k | £240k |
> | Bonus (% base) | 25% | 35% | 50% |
> | Equity (% diluted) | 0.40% | 0.60% | 0.85% |
> | Refresh at 18 months | 0.10% | 0.15% | 0.20% |
> | Severance | 6 months | 9 months | 12 months |
>
> **Equity grant.** 0.60% target = £480k at current valuation. Vesting: 4-year, 1-year cliff, monthly after. Refresh: 0.15% at 18 months + 0.10% at 36 months. *Why refresh:* without it, executives feel locked in and start looking at 24 months.
>
> **Accelerators.** Single-trigger NO. Double-trigger YES (100% on change-of-control + termination without cause within 12 months). Standard market position.

**Related prompts:** #43 Build a Comp Benchmark Brief — the IC-level equivalent · #41 Build a Search Committee Framework for Senior Roles — the governance
