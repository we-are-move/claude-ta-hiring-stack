# Stage 04 — Sourcing & Talent Intel

Prompts for finding and sizing talent: Boolean strings and X-Ray searches, TAM estimates, target company lists, non-LinkedIn channel maps, slate diversity audits, and confidential executive search plans.

### 19. Build a Boolean Search String + X-Ray Variants
**For:** Sourcer / Recruiter · **Time:** 5 min · **Output:** Document

**Inputs to have ready:** None needed — parameters. Stronger with: a target company list to layer in.

**The prompt:**

```
GOAL: A reusable Boolean Search String + X-Ray variants — LinkedIn Recruiter + Google X-Ray + GitHub X-Ray (where relevant) + 3 test variations + the logic behind each so you can iterate.

TASK: Build a Boolean Search String + X-Ray Variants for the role parameters below.
Length: 400-700 words.
Format: 5 sections —
1. LinkedIn Recruiter Boolean — ready to paste
2. Google X-Ray — finding LinkedIn profiles not in Recruiter results
3. GitHub X-Ray — only if technical (engineering, data, ML, devops)
4. Three test variations — narrow / broad / lateral
5. The logic — why each string is constructed this way

BRIEF
- Sounds like: a sourcer who has hand-built thousands of these.
- Success means: the sourcer can paste a string today and get a workable result set.

RULES (every rule is a TO DO)
- Always include parentheses around OR clauses.
- Always quote multi-word phrases.
- Always include job-title variations.
- Always explain why a keyword is in the string.
- Always offer narrow + broad + lateral variations.

CONVERSATION: only ask if the must-haves are vague.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level]
- Type of company target talent comes from: [e.g. Series B-D SaaS]
- Key requirements (3-5 must-haves): [paste]
- Location / region: [paste]
- (Optional) Target companies: [paste]
```

**Sample output:**

> **LinkedIn Recruiter Boolean.**
> `("Senior Backend Engineer" OR "Sr Backend Engineer" OR "Senior Software Engineer" OR "Staff Engineer") AND ("Go" OR "Golang" OR "Rust" OR "Java") AND ("Kafka" OR "Pulsar" OR "RabbitMQ") AND ("high throughput" OR "real-time" OR "low latency") NOT ("intern" OR "junior")`
>
> **Three variations.**
> *Narrow:* add `("system rewrite" OR "platform migration")`.
> *Broad:* drop `("Kafka" OR "Pulsar")` — widens to high-throughput experience with stack flexibility.
> *Lateral:* replace seniority terms with `("Tech Lead" OR "Engineering Lead")`.
>
> **The logic.** Both "Senior Backend Engineer" AND "Senior Software Engineer": ~40% use the broader title. Kafka/Pulsar cluster: concrete message-bus experience > generic "distributed systems." NOT junior: ~5% of false positives are mis-tagged early-career.

**Related prompts:** #20 Run a Talent TAM Estimate — the volume sanity check · #21 Build a Target Company List — the companies to layer into the string · #22 Run a Sourcing Channel Map (non-LinkedIn) — where else to look

---

### 20. Run a Talent TAM Estimate
**For:** Head of TA / Recruiter · **Time:** 5 min · **Output:** Audit

**Inputs to have ready:** Role + level + market + company stage + comp band + hiring need. Stronger with: Perplexity connector for live market data; LinkedIn Recruiter total-result anchor.

**The prompt:**

```
GOAL: A defensible Talent TAM estimate — Tight / Base / Broad ranges with funnel sanity check, so you can answer "how many of these candidates exist?" with credible numbers.

TASK: Run a Talent TAM Estimate for the parameters below.
Length: 500-800 words.
Format: 5 sections —
1. Headline range — Tight / Base / Broad (single number for each, ± confidence)
2. Methodology — how the numbers are derived; sources
3. Funnel sanity check — at typical conversion rates, how many hires possible per tier
4. Gap analysis — if Base TAM × conversion < hiring need, name the three levers
5. Confidence flags — assumptions that could materially shift the estimate

BRIEF
- Sounds like: a talent intelligence analyst — calibrated, sourced, never hand-wavy.
- Success means: Head of TA can present the TAM to ExCo and defend each number.

RULES (every rule is a TO DO)
- Always show three tiers.
- Always sanity check via funnel maths.
- Always cross-reference at least two sources and name them.
- Always flag the assumption you are least confident in.
- Always end with a recommendation on whether the search is winnable.

TOOLS: use Perplexity or web search aggressively for market data. Cross-reference at least two sources.

CONVERSATION: if you don't have a LinkedIn Recruiter total-result anchor, flag the estimate will be less precise.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + seniority + function]
- Market / geography: [city, region, remote-acceptable]
- Company stage constraint: [paste]
- Comp band: [paste]
- (Optional) LinkedIn Recruiter total result count: [paste — this anchors the estimate]
- Hiring need: [how many hires over what timeframe]
```

**Sample output:**

> **Talent TAM — Senior Backend Engineer, London + UK Remote.**
> *Tight (strict ICP):* ~1,800 (±15%). LinkedIn Recruiter strict query: 1,940. Hired UK 2025 supply report.
> *Base:* ~4,200 (±10%). Includes Staff Engineers taking Senior title for ownership step-up.
> *Broad:* ~7,800. Includes Senior Eng without specific high-throughput experience.
>
> **Funnel sanity check.** At Tight TAM (1,800), with 12% outreach response × 40% screen × 35% interview × 60% accept = ~18 possible hires. Need: 2 over 12 weeks. **Winnable.**
>
> **Confidence flag.** 12% response rate — Q4 conditions softer; could land at 8-15%.

**Related prompts:** #19 Build a Boolean Search String — produces the count to anchor TAM · #21 Build a Target Company List — where the TAM sits

---

### 21. Build a Target Company List
**For:** Sourcer / Recruiter · **Time:** 5 min · **Output:** Document

**Inputs to have ready:** None needed — ICP parameters. Stronger with: Perplexity / web search for live market intel; companies you have already approached (to avoid duplication).

**The prompt:**

```
GOAL: A 20-company target list for sourcing — each with rationale, specific teams to target, and 1-2 notable signals. Plus a pass list of 5 companies that look adjacent but should NOT be on the list.

TASK: Build a Target Company List from the role parameters below.
Length: 800-1,200 words.
Format: 3 sections —
1. The 20 companies ranked into tiers — Tier 1 (priority), Tier 2 (strong adjacent), Tier 3 (worth a look)
2. For each: rationale + specific team + 1-2 notable signals
3. The pass list — 5 companies that look adjacent but should NOT be on the list, with reasoning

BRIEF
- Sounds like: a sourcer who has run real campaigns and knows which companies produce candidates vs dead ends.
- Success means: the sourcer can start a 2-week campaign on Monday and trust the list.

RULES (every rule is a TO DO)
- Always rank into 3 tiers — 7-8 in Tier 1, 8-9 in Tier 2, 4-5 in Tier 3. No flat lists.
- Always name a specific team or function.
- Always flag at least one recent signal.
- Always include the pass list.
- Always cite where the rationale comes from.

TOOLS: Perplexity or web search for recent company news, leadership changes, layoffs.

CONVERSATION: do not execute yet. Confirm reference companies.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level + function]
- Reference companies (strong fits): [paste 2-3]
- Industry / sector: [paste]
- Geography: [paste]
- (Optional) Companies already approached: [paste]
- (Optional) Pass-list rule (NDA, competitor): [paste]
```

**Sample output:**

> **Target Companies — Senior Backend Engineer, London.**
>
> **Tier 1.**
> 1. **Monzo** — Platform Engineering team. Strong Go expertise, high-throughput experience. *Signal:* Series F in March; lock-up expiring.
> 2. **Wise** — Core Banking Platform. Direct rewrite experience. *Signal:* recent CTO change, attrition signals from Senior IC band.
> 3. **Form3** — Core Payments Platform. Kafka-native. *Signal:* tighter team, lower volume but high signal.
>
> **The pass list.**
> - *Google London:* Senior Backend earn ~£190k+. Outside comp band.
> - *Amazon (EU):* AWS engineers' rewrite experience is AWS-internal, less transferable.
> - *Goldman Sachs:* engineering culture is materially different.
> - *N26:* recent FCA regulatory issues distract the team.
> - *Revolut:* brand polarises; better to wait for inbound.

**Related prompts:** #19 Build a Boolean Search String — layer this company list into the Boolean · #22 Run a Sourcing Channel Map (non-LinkedIn) — channels beyond company-by-company

---

### 22. Run a Sourcing Channel Map (non-LinkedIn)
**For:** Sourcer / Recruiter · **Time:** 5 min · **Output:** Plan

**Inputs to have ready:** None needed — role and industry as parameters. Stronger with: web search for currently active communities; channels you have already tried.

**The prompt:**

```
GOAL: A non-LinkedIn sourcing channel map for the role — Slack, Discord, GitHub, newsletters, conferences, niche job boards — with specific entry points and how to approach each one without spamming.

TASK: Run a Sourcing Channel Map (non-LinkedIn) from the role parameters below.
Length: 600-900 words.
Format: 5 sections —
1. The 8-12 highest-leverage channels, grouped by type
2. For each: where it is, what kind of candidate is active, how to engage without being seen as a recruiter spammer
3. Frequency guidance
4. The "do not touch" list — channels where recruiter activity damages employer brand
5. Quick-win actions — 3 things to do in the next 7 days

BRIEF
- Sounds like: a sourcer who has lived in these communities and respects the etiquette.
- Success means: the sourcer can start participating in 3 channels this week with credibility.

RULES (every rule is a TO DO)
- Always group by channel type.
- Always include a "how to engage" note.
- Always include the "do not touch" list.
- Always quantify activity.
- Always cite a quick win for week one.

TOOLS: web search for currently active communities.

CONVERSATION: only ask if the role function is unusually broad.

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level + function]
- Geography: [paste]
- Domain / sector: [paste]
- (Optional) Channels already tried: [paste]
```

**Sample output:**

> **Channel Map — Senior Backend Engineer.**
>
> *Slack/Discord.* Gophers Slack (~70k Go engineers). *Engage:* answer technical questions for 4 weeks before posting a role. Recruiter spam ban enforced.
>
> *GitHub.* Kafka / Pulsar ecosystem repos — top contributors findable via Insights. *Engage:* reach out via commit email, not GitHub UI. Reference a specific commit.
>
> *Newsletters.* Pragmatic Engineer community job board. *Quick win:* post the role this week (£200-500).
>
> **The "do not touch" list.**
> - r/cscareerquestions — anti-recruiter; posting gets brigaded.
> - Rust Discord — explicit no-recruiter rule.
> - Tech Twitter — too noisy.
>
> **Quick wins (7 days).** Pragmatic Engineer job board post. Email top 5 Kafka contributors based in UK via their commit address. Register for KafkaSummit + coffee break sponsorship.

**Related prompts:** #19 Build a Boolean Search String — the LinkedIn-first equivalent · #21 Build a Target Company List — the company-by-company complement

---

### 23. Run a Slate Diversity Audit
**For:** Head of TA / Recruiter · **Time:** 30 min · **Output:** Audit

**Inputs to have ready:** Slate snapshot with demographic data by stage; sourcing channels + interview panel composition. Stronger with: same-role historical slate data; internal representation benchmarks.

**The prompt:**

```
GOAL: An assessment of a candidate slate against representation goals — naming where the funnel narrows, and three specific actions to correct slate imbalance.

TASK: Run a Slate Diversity Audit on the slate I'll paste below.
Length: 800-1,200 words.
Format: 5 sections —
1. Slate representation snapshot — current state by stage across the demographic dimensions tracked
2. Funnel narrowing analysis — where is diversity dropping off?
3. Pattern interpretation — likely structural causes
4. Three corrective actions — specific, in priority order, with expected impact
5. The "honest no" list — actions that look like fixes but won't move the needle

BRIEF
- Sounds like: a senior TA leader who treats slate diversity as a craft problem. Diagnostic, honest, never sanctimonious.
- Success means: by the time the next candidate hits the slate, corrective actions have shifted funnel composition measurably.

RULES (every rule is a TO DO)
- Always show numbers stage by stage.
- Always name a likely structural cause for each drop.
- Always rank corrective actions by impact, not effort.
- Always include the "honest no" list.
- Always treat data carefully — the audit is about the slate, not individuals.

CONVERSATION: do not execute yet. Confirm: what demographic dimensions are you tracking?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + level]
- Slate snapshot — candidates by stage with demographic data: [paste table if possible]
- Representation goal: [paste]
- Sourcing channels used: [paste]
- Interview panel composition: [paste]
```

**Sample output:**

> **Slate Diversity Audit — Senior Backend Engineer.**
>
> | Stage | Total | Women | URM | Over-40 |
> |---|---|---|---|---|
> | Sourced | 87 | 18% | 22% | 31% |
> | Screened | 32 | 25% | 19% | 28% |
> | Interviewed | 12 | 17% | 8% | 17% |
> | Final | 5 | 0% | 0% | 20% |
>
> Severe drop-off Interview → Final. Slate enters at 17% women / 8% URM; final is 0% on both.
>
> **Three corrective actions.**
> 1. *Reconstitute the interview panel before next 3 candidates.* Add one woman engineer + one URM engineer. Visible shift in final composition within 4 weeks.
> 2. *Diversify sourcing channels for 3 weeks.* Add BlackTechFest UK Slack, Women Who Code London, Code First Girls alumni.
> 3. *Anchor comp at Base, not Tight, for next 5 candidates.* Reduces offer-stage decline for URM candidates by 20-30%.
>
> **The "honest no" list.** "Diverse, inclusive workplace" LinkedIn posts. Diversity Statement in JD. Slate quotas ("must interview 1 woman per role") — counter-productive token interviews.

**Related prompts:** #16 Run a JD Bias Review — upstream of the slate · #35 Build a Debiased Screening + Panel Composition Framework — the framework fix

---

### 24. Build a Confidential / Executive Search Plan
**For:** Head of TA · **Time:** Workflow · **Output:** Plan

**Inputs to have ready:** Role band (without naming the company); confidentiality driver, internal disclosure list, timeline. Stronger with: existing investor relationships and executive network.

**The prompt:**

```
GOAL: A confidential sourcing strategy for a leadership search where the role cannot be advertised — target map, intermediary approach, NDA flow, stakeholder management, leak risk register.

TASK: Build a Confidential / Executive Search Plan from the inputs below.
Length: 1,500-2,000 words.
Format: 7 sections —
1. Confidentiality scope — what cannot be revealed at each stage
2. Target company map — 15-20 companies grouped by likelihood
3. Identification strategy — channels that signal a public search vs ones that don't
4. First-touch approach — intermediary vs direct outreach
5. NDA + process flow — when an NDA is signed, what's disclosed at each stage
6. Search committee handling — composition, terms of reference, decision rights
7. Communication risk register — the 5 likeliest leak scenarios and mitigations

BRIEF
- Sounds like: an executive search consultant who has actually run discreet searches.
- Success means: 8-12 weeks without leaks while engaging 15-25 sitting executives with appropriate discretion.

RULES (every rule is a TO DO)
- Always define confidentiality scope explicitly.
- Always identify intermediary paths first.
- Always include an NDA timing strategy.
- Always plan the search committee BEFORE sourcing.
- Always name leak scenarios.

TOOLS: web search for executive movements; do not search for candidates by name.

CONVERSATION: do not execute yet. Ask three sensitive questions: (1) why is this confidential? (2) Who internally knows? (3) Worst-case leak scenario?

PUSH: go beyond the basics. Think before answering (maximum reasoning).

INPUTS
- Role: [title + reporting line]
- Confidentiality driver: [paste]
- Internal disclosure list: [who knows]
- Target seniority + market: [paste]
- Comp / equity ceiling: [paste]
- Timeline: [paste]
```

**Sample output:**

> **Confidential Search — CPO.**
>
> *Stage 0:* search held within disclosure list (CEO + Chair + HoTA).
> *Stage 1 (initial outreach):* "Series C-D B2B SaaS in fintech, Series D ahead this year." Company name withheld until NDA.
> *Stage 2 (post-NDA):* company name disclosed; board composition and current CPO situation still held.
> *Stage 3 (final):* full disclosure.
>
> **First-touch approach.** Direct outreach from HoTA is counter-productive at this seniority. Use intermediaries: trusted investor introductions, single retained search firm, CEO personal network.
>
> **Do not.** Do not post a LinkedIn job ad. Do not engage more than one retained search firm. Do not direct-message via LinkedIn from HoTA's account. Do not name the current CPO situation before NDA.

**Related prompts:** #29 Write Discreet Outreach for a Confidential Role — the first-touch message · #41 Build a Search Committee Framework for Senior Roles — the governance layer
