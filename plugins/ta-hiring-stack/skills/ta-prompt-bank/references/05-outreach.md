# Stage 05 — Outreach

Prompts for candidate outreach that earns replies: personalised LinkedIn messages, multi-touch sequences, subject line testing, re-engagement of cold or rejected candidates, discreet confidential-role approaches, and persona-quote-led copy.

### 25. Write a Personalised LinkedIn Outreach Message
**For:** Recruiter / Sourcer · **Time:** 5 min · **Output:** Email · **Wedge prompt**

**Inputs to have ready:** Candidate's LinkedIn profile or summary; role context (2-3 things that might appeal to this person). Stronger with: a Role-Level EVP (from prompt #10) or persona quote to draw from; LinkedIn connector for direct profile access.

**The prompt:**

```
GOAL: A 100-word LinkedIn outreach message that opens a real conversation with a passive candidate — produced from their profile in under three minutes.

TASK: Write a Personalised LinkedIn Outreach Message to the candidate whose profile I will paste below.
Length: under 100 words.
Format: 3 short paragraphs. No greeting bloat ("I hope this finds you well"). No openers like "I came across your profile."

BRIEF
- Output: 100 words or fewer.
- Sounds like: a smart person talking to another smart person. Direct, warm, specific.
- Success means: they reply — even if to say "not now, but interesting" — because the message earned the response.

RULES (every rule is a TO DO)
- Always open with one specific, genuine observation about their background — something concrete you noticed, not "I was impressed by your work."
- Always explain in one sentence why you thought of them for this opportunity.
- Always end with a low-commitment, interesting question — never "are you open to opportunities?" (that question defaults to no).
- Always sound human. Never AI-templated.

ROLE CONTEXT: [I will paste role title + 2–3 things that might genuinely appeal to this person based on their background]

CANDIDATE PROFILE: [paste here]

TOOLS: skip web search unless you need to verify a specific publication or company.

CONVERSATION: do not execute yet. Confirm: which 2–3 things about the role you have identified as the strongest pull for this specific person. Then draft.

PUSH: go beyond the basics. Think before answering (maximum reasoning).
```

**Sample output:**

> "Saw your recent post on the trade-off between AI-led screening and human signal — interesting take. The line about 'context is the moat' resonated.
>
> Reaching out because we are hiring a Head of Talent at a Series C fintech, and the role is genuinely about building TA from the ground up rather than running someone else's playbook. Given your background scaling TA at two prior fintechs from 50 to 200, you are one of probably six people in London with directly relevant experience.
>
> Quick question — what is the hiring problem you are most enjoying solving right now?"

**Related prompts:** #26 Write a 3-Message Outreach Sequence — the multi-touch version · #27 Write Subject Line A/B Variants for Cold Email — if running this as email instead · #30 Write Outreach Copy from Persona Quotes — when you have persona interview material

---

### 26. Write a 3-Message Outreach Sequence
**For:** Recruiter · **Time:** 30 min · **Output:** Sequence

**Inputs to have ready:** Role brief + company context + target candidate profile. Stronger with: Role-Level EVP from #10; persona insights from #7.

**The prompt:**

```
GOAL: A three-message outreach sequence — Message 1 opens, Message 2 adds new value (+5 days), Message 3 closes short and direct (+5 days). Each under 100 words.

TASK: Write a 3-Message Outreach Sequence from the role + context below.
Length: 3 messages, each under 100 words. Total ~600-800 words with cadence notes.
Format: 3 sections plus cadence guidance —
1. Message 1 — specific observation + clear reason + low-commitment question
2. Message 2 — +5 days: new value (fact about role / team / company not in M1)
3. Message 3 — +5 days: short, direct, leaves the door open without pressure
Plus: cadence notes — timing, what to do if they reply mid-sequence

BRIEF
- Sounds like: a smart person talking to another smart person across three short exchanges.
- Success means: the sequence lands replies. Even rejections come back warmly.

RULES (every rule is a TO DO)
- Always open Message 1 with a specific observation.
- Always make Message 2 carry genuinely new value, not "just following up."
- Always make Message 3 short and self-contained.
- Always vary the question across messages.
- Always sound human. Never AI-templated.
- Always end Messages 1 and 2 with a low-commitment question; never "are you open?"

CONVERSATION: do not execute yet. Confirm 2-3 things about the role that would appeal to this persona.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level + function]
- Company context: [paste]
- Target candidate profile: [paste]
- Role-Level EVP (#10) if available: [paste]
```

**Sample output:**

> **M1 (Day 0).** "Saw your commit history on kafka-go — the consumer group rebalancing work in v0.4 was sharp. Reaching out because we're rewriting our core processing layer (12k → 50k/sec). Two Senior Engineers are owning it. Given your work on message-bus internals, you're one of the very few people I'd ask. Quick question — what's the most interesting backend problem you've worked on this year?" *(94 words)*
>
> **M2 (+5 days).** "Quick follow-up. Two of our last three Senior hires said the deciding factor was that we let them see the actual codebase before they accepted the offer — not a sanitised version, the real code. If that changes anything, would love to chat. Otherwise no worries — what's the rest of your week looking like?" *(86 words)*
>
> **M3 (+10 days).** "Last one — I'll get out of your inbox. If now's not the right time, totally fine. If it ever is, DM me directly here. Role's open until early Q1; we tend to hire 2 a quarter at this level. All the best with whatever's keeping you busy." *(67 words)*

**Related prompts:** #25 Write a Personalised LinkedIn Outreach Message — the single-message version · #27 Write Subject Line A/B Variants — if email-based · #30 Write Outreach Copy from Persona Quotes — quote-led variants

---

### 27. Write Subject Line A/B Variants for Cold Email
**For:** Recruiter / Sourcer · **Time:** 5 min · **Output:** Document

**Inputs to have ready:** The email body and role audience. Stronger with: A/B test data from previous campaigns.

**The prompt:**

```
GOAL: Five subject line variants for cold outreach email — covering five different angles with predicted performance and mobile preview truncation.

TASK: Write Subject Line A/B Variants from the email + role + candidate context below.
Length: 500-700 words.
Format: 5 sections —
1. The 5 subject lines (each under 60 characters, labelled by angle: direct, curiosity-led, short-human, background-referenced, bold)
2. Performance prediction — which 2 to test first and why
3. The "do not test" list
4. Mobile preview check — truncation on iPhone Mail (~35) vs Gmail mobile (~40)
5. Iteration plan if winning subject doesn't break 30% open rate

BRIEF
- Sounds like: an outreach strategist who has tested thousands of cold emails.
- Success means: at least 2 of 5 beat 30% open rate; predicted top-2 are actual top-2.

RULES (every rule is a TO DO)
- Always keep each subject under 60 chars total.
- Always cover 5 distinct angles.
- Always show mobile preview truncation explicitly.
- Always predict performance and explain why.
- Always include an iteration plan.

CONVERSATION: only ask if email body is missing.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Email body content: [paste]
- Role + audience: [paste]
- (Optional) Performance data from previous campaigns: [paste]
```

**Sample output:**

> **5 variants.**
> *A — Direct:* "Senior Backend role: 12k → 50k/sec rewrite" (49 chars)
> *B — Curiosity:* "Five-round interview, no take-home" (35)
> *C — Short-human:* "Quick Q on your Kafka work" (28)
> *D — Background-referenced:* "Your kafka-go v0.4 commits caught my eye" (43)
> *E — Bold:* "Most Senior backend roles aren't" (33)
>
> **Prediction.** Test C and D first. C feels like a peer DM, not recruiter pitch — predicted 38-44% open. D signals you did homework — predicted 35-42%.
>
> **Do not test.** "Re: …" or "Following up on …" — deceptive. All caps. Emoji-led for senior engineers — reads as marketing spam.

**Related prompts:** #26 Write a 3-Message Outreach Sequence — use these subjects with the sequence · #29 Write Discreet Outreach for a Confidential Role — subjects that withhold detail

---

### 28. Write Re-engagement Outreach for Cold or Rejected Candidates
**For:** Recruiter · **Time:** 5 min · **Output:** Email

**Inputs to have ready:** Prior interaction context (stage reached, why declined); what's genuinely changed since. Stronger with: ATS connector for full relationship history.

**The prompt:**

```
GOAL: A warm re-engagement message for a candidate who went cold or was previously declined — respects the history, presents a genuinely new angle, never feels like "circling back."

TASK: Write Re-engagement Outreach from the prior context + new opportunity inputs below.
Length: 120-180 word message + brief context notes.
Format: 4 sections —
1. The message itself (120-180 words, 3-4 paragraphs)
2. Why the message lands — specific design choices
3. Send timing recommendation
4. Reply handling

BRIEF
- Sounds like: an honest TA leader re-opening a door without pretending nothing happened.
- Success means: they reply — even if to say "not now" — because the message respects them rather than treats them as pipeline.

RULES (every rule is a TO DO)
- Always reference the prior interaction explicitly.
- Always be clear about what's changed.
- Always give the candidate a clean out.
- Always avoid "circling back," "touching base," "just checking in."
- Always send from the same person who handled the prior interaction.

CONVERSATION: only ask if prior context is missing.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Prior interaction context: [paste]
- What's genuinely changed: [paste]
- New opportunity: [title + level + distinctive features]
```

**Sample output:**

> "Hi Sarah,
>
> No follow-up since you decided to stay last March — and that was clearly the right call at the time. Hope the year's been good.
>
> Writing because something specific has changed: we're hiring two Senior Backend Engineers to own the core processing rewrite (12k → 50k/sec) over the next 12 months. The remit is a level up from the role we discussed — real architectural ownership, not implementation. Comp band has moved up since we last spoke (now £130-160k vs £115-140k then).
>
> If the timing's still wrong, no worries at all. If you'd ever be open to a 20-min catch-up — about the role or just to compare notes on what you're seeing in the market — let me know."
> *(143 words)*

**Related prompts:** #50 Build a Silver Medalist Re-engagement Sequence — the multi-touch version · #25 Write a Personalised LinkedIn Outreach Message — if they're not silver-medalist tier

---

### 29. Write Discreet Outreach for a Confidential Role
**For:** Recruiter / Head of TA · **Time:** 5 min · **Output:** Email

**Inputs to have ready:** Role band (without naming the company); confidentiality driver, comp ceiling, timeline. Stronger with: existing intermediary relationship.

**The prompt:**

```
GOAL: A first-touch outreach message for a confidential role where the company name cannot be revealed up front — but the candidate still needs enough to engage. Qualifies seriousness before disclosure.

TASK: Write Discreet Outreach from the confidential role context below.
Length: 100-140 word message + brief context notes.
Format: 4 sections —
1. The message itself (100-140 words)
2. What's disclosed vs withheld
3. The qualifying question
4. NDA + escalation flow — how disclosure unlocks in stages

BRIEF
- Sounds like: a senior TA leader signalling the opportunity is real and worth confidentiality.
- Success means: candidates who would consider a senior move engage; others self-select out without ever knowing what they declined.

RULES (every rule is a TO DO)
- Always signal seriousness.
- Always disclose the seniority band without naming the company.
- Always include the comp ceiling band.
- Always ask a qualifying question that screens for seriousness.
- Always provide a stage-gate process.
- Always send from a senior person.

CONVERSATION: do not execute yet. Confirm: what's the absolute minimum you can disclose?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role band (without naming the company): [paste]
- Confidentiality driver: [paste]
- Comp ceiling band: [paste]
- Timeline: [paste]
```

**Sample output:**

> "Sarah — wanted to reach out directly.
>
> A Series C-D B2B SaaS company in fintech is running a confidential CPO search. I can't name the company yet, but it's a sub-500-employee business with a Series D ahead this calendar year. Comp is at the very senior end of London market plus equity at meaningful percentage.
>
> Given your trajectory at [her current company] and the IPO-readiness phase of your current org, the timing might be either perfect or impossible. I respect either.
>
> If there's even a 10% openness, would you have 20 minutes for a discreet first call this week? I can disclose more once we're talking." *(118 words)*

**Related prompts:** #24 Build a Confidential / Executive Search Plan — the broader strategy · #41 Build a Search Committee Framework for Senior Roles — the governance

---

### 30. Write Outreach Copy from Persona Quotes
**For:** Recruiter · **Time:** 5 min · **Output:** Email

**Inputs to have ready:** Persona quotes from #8; role being marketed + target candidate profile. Stronger with: a candidate profile to personalise each variant to.

**The prompt:**

```
GOAL: Three outreach message variants drawn from real employee story snippets — specific, story-led, distinguishable from generic recruiter outreach because every line traces back to something an actual employee said.

TASK: Write Outreach Copy from Persona Quotes — take the verbatim employee quotes I paste, build 3 outreach variants.
Length: 600-900 words — 3 messages each under 110 words + rationale notes.
Format: 3 messages + rationale —
1. Variant A — Lead with the headline quote
2. Variant B — Lead with the contrast ("different from other companies because…")
3. Variant C — Lead with the future hook
Plus: per-message rationale + A/B testing recommendation

BRIEF
- Sounds like: a marketer who treats employee quotes as gold.
- Success means: each variant reads like the engineer who said it is still in the room.

RULES (every rule is a TO DO)
- Always quote the employee directly in at least one variant.
- Always tag which persona each variant draws from.
- Always keep each variant under 110 words.
- Always end with a low-commitment question.
- Always show the source quote alongside the variant.

CONVERSATION: only ask if quotes are unusually thin.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Persona quotes (from #8): [paste]
- Role being marketed: [title + level + function]
- Target candidate profile: [paste]
```

**Sample output:**

> **Variant A — Lead with the headline quote.**
> *Source (Seasoned Pro):* "I'd been bored for two years. The first month here, I was learning something new every day — and I'd been doing this for nine years."
>
> *Message:* "Saw your work on [specific project] — strong stuff. Reaching out because one of our Senior Backend Engineers said something to me last month that stuck: 'I'd been bored for two years. The first month here, I was learning something new every day — and I'd been doing this for nine years.' We're hiring two more like her. Where does your work feel most stretched right now?" *(83 words)*
>
> **A/B testing.** Test A and B first. A leads with intrinsic motivation (boredom → learning); B leads with tangible differentiator (codebase access pre-offer). C tests well with engineers actively looking for technical challenge but converts less in cold outreach.

**Related prompts:** #7 Build a Persona Messaging Framework — produces the interview structure · #8 Write Messaging Assets from Persona Interview Notes — produces the quotes this prompt uses · #25 Write a Personalised LinkedIn Outreach Message — the candidate-specific version
