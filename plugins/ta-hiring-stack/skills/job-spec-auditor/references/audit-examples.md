# Job Spec Audit Examples — Move

A reference set of worked examples for the Move Job Spec Auditor. Use alongside the System Prompt and the Hiring in the Age of AI Field Guide.

Eight archetypal audits across all five functions (Engineering, GTM & Sales, Design, Product, Data & Analytics), all four weighting modes (Default, Junior, Regulated, Executive), and a range of geographies and company stages.

Company names in these examples are fictional. Any resemblance to real organisations is coincidental.

## Table of contents

1. [Example 1 — Senior Backend Engineer (Default weighting)](#example-1--senior-backend-engineer-default-weighting)
2. [Example 2 — AI / ML Engineer (Default weighting)](#example-2--ai--ml-engineer-default-weighting)
3. [Example 3 — Enterprise Account Executive, DACH (Default weighting)](#example-3--enterprise-account-executive-default-weighting)
4. [Example 4 — Senior Product Manager (Default weighting)](#example-4--senior-product-manager-default-weighting)
5. [Example 5 — Senior Product Designer (Default weighting)](#example-5--senior-product-designer-default-weighting)
6. [Example 6 — Senior Data Engineer in Health AI (Regulated weighting)](#example-6--senior-data-engineer-in-health-ai-regulated-weighting)
7. [Example 7 — Junior Software Engineer (Junior weighting)](#example-7--junior-software-engineer-junior-weighting)
8. [Example 8 — VP Engineering (Executive weighting)](#example-8--vp-engineering-executive-weighting)

## How Claude should use this document

When a user pastes a spec, you match it to the closest archetype below and mirror the structure, tone, density, and depth of the audit shown here. The examples are your quality bar. Don't fall below this level of specificity, and don't pad past it.

The examples are not templates to copy verbatim. They are illustrations of what "good" looks like across function and level combinations. Adapt the lens findings, the headline, and the rewritten spec to the specific role you're auditing.

---

## Example 1 — Senior Backend Engineer (Default weighting)

**Archetype:** Series B fintech scale-up. Company has ~150 employees, hiring against a hot product roadmap. Spec is a typical "we copied last year's spec and added Kubernetes" pattern.

**User's onboarding answers:**

- Function: Engineering
- Level: Senior IC
- Primary concern: AI readiness — "I'm worried the spec is built for a 2022 role"

### The original spec (excerpt)

**Senior Backend Engineer — Bridgepay**
London (5 days in office)

We're looking for an experienced Senior Backend Engineer to join our growing engineering team. The successful candidate will have at least 7 years of professional software engineering experience, with deep expertise in Python and Django.

Must-haves:

- 7+ years building production Python services
- Expert-level proficiency in Django ORM and database optimisation
- Strong experience with Kubernetes and AWS
- Computer Science degree or equivalent
- Experience in regulated financial services environments
- Strong algorithms and data structures knowledge
- Comfortable with on-call rotation, including weekends

You'll be responsible for:

- Writing clean, well-tested Python code
- Reviewing pull requests from junior engineers
- Designing scalable microservices
- Participating in architecture discussions
- Mentoring more junior team members
- [+ 19 further bullets…]

We are a fast-paced, ambitious team looking for a passionate self-starter who thrives under pressure.

### The audit

**Your Job Spec Audit — by Move**

- Role: Senior Backend Engineer
- Function | Level: Engineering | Senior IC
- Geo | Work pattern: London | 5 days in office
- Audit weighting: Default (Senior IC in Engineering, non-regulated for this role)

**Fit-for-Purpose Score: 38 / 100**

- AI-Native Signal Audit: 7 / 40
- Seniority Calibration: 9 / 15
- Pool Realism (TAM): 8 / 20
- Self-Select Clarity: 9 / 15
- Sourcing Suitability: 5 / 10

### The headline

This spec was written for a 2022 specialist in a 2026 market. About 1 in 200 of the people you actually want would see themselves in it — and most of the ones who do will keep scrolling, because the in-office policy has halved the realistic pool and there's no signal anywhere that this team has noticed AI exists.

### The AI-Native lens

The spec asks for a Senior Backend Engineer in 2026 without mentioning AI tools, leverage, agent-assisted workflows, or anything that would tell a candidate this team works the way the best engineering teams now work. The function has moved. The spec hasn't.

Three of the seven must-haves are old signals losing predictive value — 7+ years in Python specifically, expert Django ORM, strong algorithms and data structures knowledge. The first measures duration over output. The second rewards specialism in a single framework when the function now rewards generalist range. The third is a 2018 hiring bar that screens out people who ship.

None of the new signals are surfaced. There's no expectation of AI-native workflow, no mention of production ownership beyond "writing clean code", no problem-framing language, and no acknowledgement that the senior bar in 2026 is about leverage, not output. Of Move's three AI-era must-have traits for engineers — AGI-pilled mindset, demonstrated excellence, generalist curiosity — zero are present.

Worth noting: Boris Cherny at Anthropic, who leads the Claude Code team, is currently shipping 22 PRs a day, 100% Claude-written. Your spec asks for someone who codes faster by hand.

### The TAM read

At these requirements, your realistic candidate pool is approximately:

- Global pool at the spec: ~18,000 senior backend engineers with the listed stack
- In London: ~2,400
- In London, 5-day in-office: ~700
- After must-have stacking (Django + Kubernetes + AWS + 7+ years + financial services background + CS degree): ~80–120 humans

What this means: this is a 9–14 month search at this spec in this market, not a 12-week one. The business should know that before the hiring manager signs off.

These are heuristic ranges. For the real numbers — global pool size, geo breakdown, comp distribution, and response-rate forecasts — Move runs full TAM analyses for hiring teams.

### The 7 Spec Killers — detected

- **The Old-Signal Stack (AI-Native)** — "7+ years building production Python services", "Expert-level proficiency in Django ORM", "Strong algorithms and data structures knowledge", "Computer Science degree or equivalent". Four signals from the losing-predictive-value list, stacked. Each one alone is recoverable. All four together set the bar against a 2022 candidate.
- **The 2022 Process Spec (AI-Native)** — Zero acknowledgement that AI tooling exists or that engineering work has changed. The candidate cannot tell from this spec whether this is a team using Claude Code daily or one that still treats AI as a curiosity.
- **The Specialist Trap (AI-Native)** — "Expert-level proficiency in Django ORM and database optimisation". Demands narrow framework depth where the function now rewards range. Strong generalists who've worked across Python frameworks will read this and self-select out.
- **The Unicorn Stack (TAM)** — Django + Kubernetes + AWS + financial services background + 7+ years + on-call + CS degree. Five must-haves stacked is roughly 1 in 100,000 humans before geo or work-pattern filters.
- **The Location Tax (TAM)** — "London (5 days in office)". In London engineering hiring, 5-day in-office roughly halves the realistic pool. The candidates who'd still consider it are heavily weighted toward people who need a job, not the ones you want.
- **The Self-Select Mush (Clarity)** — "We are a fast-paced, ambitious team looking for a passionate self-starter who thrives under pressure". Filters nobody. The Comp Black Box is also present — no band, no OTE, no signal — and the responsibilities are a 24-bullet laundry list with no clear 12-month outcome.

### Seniority calibration

The spec describes activities, not the senior bar. Move's skills matrix for Senior Engineering specifies system-level architectural ownership, complete product-area accountability, and the ability to review and improve AI-generated output critically. None of those signals are surfaced. Most of the listed responsibilities — writing tests, reviewing PRs, mentoring juniors — describe a mid-level engineer.

### What to cut

- "7+ years of professional software engineering experience" — replace with an outcome-led signal ("you've owned production systems at scale"). Years of experience is a noisy proxy.
- "Expert-level proficiency in Django ORM" — too narrow. Replace with "experienced building and scaling Python services in production".
- "Strong algorithms and data structures knowledge" — 2018 bar. Cut entirely.
- "Computer Science degree or equivalent" — 45% of companies have dropped degree requirements for engineering roles in the last 12 months. The signal has decayed.
- "Experience in regulated financial services environments" — cuts the pool by 50–70% and rarely correlates with hire quality. Make it a "useful but not required".

### What to add

- "You're AI-native. You use Claude, Cursor, or equivalent tools as part of your daily flow. You can describe specifically how your work has changed in the last 12 months because of AI."
- "You ship end-to-end. You own a feature from problem definition to production and stay accountable post-merge."
- "You're a generalist by instinct. You've worked across the stack and you don't get defensive when working outside your comfort zone."

### The top 3 surgical fixes

1. **Move from 5 days to 3 days in office (or remote-first with monthly onsites).** This single change roughly doubles your realistic London pool. If the policy is non-negotiable, name it as a trade-off in the spec so candidates can self-select.
2. **Rewrite the responsibilities section as 4 outcomes, not 24 activities.** "In 12 months you'll have…" not "you'll be responsible for…". This is the single biggest self-select clarity win.
3. **Add an AI-native expectation and cut the algorithm/CS-degree language.** This shifts the spec from screening out the people you want to screening them in.

### Rewritten spec

**Senior Backend Engineer — Payments Platform**
London / 3 days in office, 2 remote
Comp: £110–140K + meaningful equity (or "TBD pending alignment" — but say something)

**About the role.** We're rebuilding the platform that moves money for our customers. You'll own design and delivery of the backend services behind payments, ledger, reconciliation, and fraud. You'll work directly with the Head of Engineering and product team. You'll ship things that matter.

**What you'll have done in 12 months.**

- Designed and shipped the next-gen payments service handling X× our current volume.
- Reduced ledger reconciliation latency from minutes to seconds.
- Hired and onboarded one mid-level engineer onto the team.

**Who this is for.** Senior engineers who think in systems. You've spent 3+ years building production Python services at scale. You're comfortable in the backend, infra-aware, and you've shipped to production weekly for years. You're AI-native — you use Claude, Cursor, or equivalent tools as part of your daily flow, and you treat AI as leverage. You're a generalist who can go deep when needed.

**Who this isn't for.** Engineers who want to specialise narrowly in one framework or one part of the stack. We move across the boundary between backend, infra, and sometimes into the product surface. If that sounds frustrating, this isn't the right team.

**The stack.** Python (primarily Django, but we don't worship it), Postgres, Kubernetes on AWS, Terraform. Claude and Cursor across the team.

**The way we work.** 3 days in office in our office, 2 days remote. Heads-down Tuesdays and Wednesdays — no meetings if we can avoid it. We ship weekly.

### Want the real numbers?

This audit used Move's TAM and sourcing frameworks but the pool estimates are heuristic ranges. For the actual numbers — global pool size, geo breakdown, comp distribution, response-rate forecasts, and a sourcing strategy — Move runs full TAM analyses for hiring teams.

→ Book a 30-minute discovery call: calendly.com/adriano-herdman/discovery-call-move-talent-intelligence

Move — wearemove.com
Adriano Herdman, Co-Founder — linkedin.com/in/adrianoherdman1

---

## Example 2 — AI / ML Engineer (Default weighting)

**Archetype:** Series A AI-native infrastructure company. ~40 people, San Francisco. The spec is "better than most" — AI is mentioned, generalism is welcome — but it has its own failure pattern: an unrealistic credential stack and a US-only geo.

**User's onboarding answers:**

- Function: Engineering
- Level: Senior IC
- Primary concern: Pool size — "we're not getting enough applies"

### The original spec (excerpt)

**AI Engineer — Cortex Labs**
San Francisco (hybrid, 3 days in office)

Cortex Labs is building the developer infrastructure for the next generation of AI-native applications. We're looking for an AI Engineer to join our research-product team.

Must-haves:

- PhD in Computer Science, ML, or related field (or equivalent industry experience)
- 5+ years of production ML experience at a frontier AI lab or comparable
- Significant open-source contributions to AI / ML projects
- Published research in top-tier venues (NeurIPS, ICML, ICLR)
- Deep expertise in PyTorch and distributed training
- US-based, willing to be in SF 3 days a week

Comp: $250K–$320K base + significant equity.

### The audit

**Your Job Spec Audit — by Move**

- Role: AI Engineer
- Function | Level: Engineering | Senior IC
- Geo | Work pattern: San Francisco | 3 days in office
- Audit weighting: Default

**Fit-for-Purpose Score: 52 / 100**

- AI-Native Signal Audit: 28 / 40
- Seniority Calibration: 10 / 15
- Pool Realism (TAM): 4 / 20
- Self-Select Clarity: 7 / 15
- Sourcing Suitability: 3 / 10

### The headline

The spec gets the AI-native framing right but stacks credentials in a way that makes the realistic pool perhaps 200 people on earth — most of whom already work at OpenAI, Anthropic, or DeepMind on better packages than yours. You don't have a JD problem here. You have a pool problem masquerading as a JD.

### The AI-Native lens

The good news first: the spec is AI-native by default, signals openness to generalist range ("research-product team"), and is honest about what you're building. This puts it ahead of 90% of engineering specs in the market.

The problem is the credential stack. You've turned an AI Engineer role into a Research Scientist role by listing PhD + frontier AI lab experience + published research as must-haves. Each one is a respectable filter individually. Stacked, they describe ~200 humans, ~80% of whom are already employed and not actively looking, and the rest of whom you'll be competing for against five labs with bigger budgets. "As the months go by, companies are going to be desperate for these sorts of people, so it's going to be ridiculously competitive for a very small number of candidates" — and you've written your spec for the centre of the most competitive part of the market.

### The TAM read

At these requirements, your realistic candidate pool is approximately:

- Global pool at the spec (PhD + frontier lab + published): ~200
- US-based: ~120
- Currently open to a move at your stage/comp: ~15–25
- After you compete against OpenAI / Anthropic / DeepMind on package: ~3–6

What this means: this isn't a TA problem. It's a strategy problem. Either widen the spec (drop the PhD and the published-research must-haves), accept a 12–18 month timeline, or rethink whether you need a Research Scientist at all when an AI Engineer who ships would do.

These are heuristic ranges. For the real numbers, Move runs full TAM analyses for hiring teams.

### The 7 Spec Killers — detected

- **The Unicorn Stack (TAM)** — PhD + frontier lab experience + published research + 5+ years PyTorch. Four credentials stacked is ~1 in 50 million humans. You don't need an AI Engineer at this bar. You need a Research Scientist, and you should write that spec instead.
- **The Specialist Trap (AI-Native)** — "Deep expertise in PyTorch and distributed training". Demands depth where the function now rewards range. Strong AI engineers who've worked across JAX, PyTorch, and inference engineering will read "deep PyTorch expertise" as 2023-coded.
- **The Wrong Title (Sourcing)** — The role is titled "AI Engineer" but the must-haves describe a Research Scientist. The people the spec actually describes don't search for "AI Engineer" — they search for "Research Scientist" or "Member of Technical Staff". You're invisible to your own target market.

### Seniority calibration

The spec doesn't describe what "senior great" looks like at this level. It describes credentials. Move's skills matrix for Senior Engineering specifies system-level architectural decisions, production ownership of a complete product area, and the ability to direct AI tools as engineering instruments. The spec doesn't surface any of those — it leans entirely on academic and research signal.

### What to cut

- "PhD in Computer Science, ML, or related field" — keep as "useful but not required" if at all. PhD requirements cut the pool by ~90% and don't predict shipping ability.
- "Significant open-source contributions to AI / ML projects" — keep as "nice to have".
- "Published research in top-tier venues" — cut entirely unless you're hiring a Research Scientist (in which case retitle the role).

### What to add

- "You've built AI systems that have made it to production and stayed there. You can talk specifically about a system you shipped and what you've learned operating it."
- "You think across the stack — model, inference, infra, product surface. You've worked outside pure ML when the problem required it."

### The top 3 surgical fixes

1. **Drop the PhD and published-research must-haves.** This single change opens the pool from ~200 to ~3,500 globally. If you genuinely need a Research Scientist, retitle the role and accept the timeline.
2. **Open to remote (US-based) instead of SF 3-day hybrid.** Another ~2× on the addressable pool.
3. **Replace credential filters with shipping evidence.** "Shipped an AI system to production at scale" beats "PhD" as a predictor of performance for an AI Engineer role.

### Rewritten spec

**AI Engineer — Developer Infrastructure**
US remote, with optional SF onsites
Comp: $250K–$320K base + significant equity

**About the role.** We're building the developer infrastructure for AI-native applications. You'll own a piece of the stack end-to-end — model, inference layer, developer surface — and you'll work alongside our research and product teams.

**What you'll have shipped in 12 months.**

- A new inference primitive serving production traffic at our scale.
- Three external developer integrations using the system you built.
- A measurable improvement to our latency or cost profile, with the analysis to back it.

**Who this is for.** AI engineers who ship. You've spent 3+ years building AI systems that made it to production and stayed there. You're comfortable across model, inference, infra, and developer surface. You direct AI tools (including the ones we're building) as engineering instruments — you don't write everything by hand.

**Useful but not required.** Frontier lab experience, published research, deep PyTorch internals knowledge — all valued but not screened on.

### Want the real numbers?

For the actual pool size and a sourcing strategy, Move runs full TAM analyses for hiring teams.

→ Book a 30-minute discovery call: calendly.com/adriano-herdman/discovery-call-move-talent-intelligence

---

## Example 3 — Enterprise Account Executive (Default weighting)

**Archetype:** Series B vertical B2B SaaS, $20M ARR, hiring its first AE in DACH. The spec is the textbook 2022 enterprise sales spec — Rolodex requirement, vertical experience must, tool certifications, no AI signals.

**User's onboarding answers:**

- Function: GTM & Sales
- Level: Senior IC
- Primary concern: Quality — "the people we're seeing aren't right"

### The original spec (excerpt)

**Enterprise AE, DACH — Forge GTM**
Berlin or Munich, 4 days a week in office

We're hiring a senior Enterprise Account Executive to own the DACH market. You'll be our first feet on the ground in the region.

Must-haves:

- 10+ years in B2B SaaS sales, with at least 5 in DACH enterprise
- Closed $5M+ in ARR over your career
- Existing relationships and Rolodex in the DACH manufacturing / industrial space
- Salesforce certified or HubSpot specialist
- MBA or Business degree preferred
- Fluent German + business-fluent English
- Strong track record of following a structured outbound playbook

Compensation: competitive base + uncapped commission.

### The audit

**Your Job Spec Audit — by Move**

- Role: Enterprise AE, DACH
- Function | Level: GTM & Sales | Senior IC
- Geo | Work pattern: Berlin or Munich | 4 days a week in office
- Audit weighting: Default

**Fit-for-Purpose Score: 36 / 100**

- AI-Native Signal Audit: 6 / 40
- Seniority Calibration: 10 / 15
- Pool Realism (TAM): 9 / 20
- Self-Select Clarity: 7 / 15
- Sourcing Suitability: 4 / 10

### The headline

This spec hires the AE who would have hit quota in 2019. In 2026 GTM, what predicts performance has changed — system-builders beat playbook-followers, and AI-native execution multiplies output by orders of magnitude. The spec asks for neither.

### The AI-Native lens

The spec leans on five old signals that no longer predict GTM performance: years in sector (10+ years DACH), existing Rolodex, tool certifications (Salesforce / HubSpot), playbook adherence ("structured outbound playbook"), and credentials (MBA preferred). The function has moved past all of these.

The best GTM hires in 2026 don't follow playbooks — they design them. They don't rely on Rolodex — they use AI to research, prospect, and personalise at a scale that makes a Rolodex feel small. They're data-literate without needing an analyst. None of that is in this spec.

Of Move's three AI-era must-have traits for GTM hires — system builder, cross-functional connector, adaptive by default — zero are surfaced.

The candidates who would actually be exceptional in this role will read it and self-select out, because the spec signals "we want a heads-down quota-hitter who follows the script", not "we want someone to build our DACH motion".

### The TAM read

At these requirements, your realistic candidate pool is approximately:

- Global pool at the spec: ~3,500 senior DACH B2B SaaS AEs with the listed background
- Currently in DACH: ~2,200
- Compliant with industrial-vertical Rolodex must: ~280
- After 4-day in-office and willingness to move from current role: ~40–80

What this means: this is a 6–9 month search at this spec. The Rolodex requirement is doing most of the damage and is the requirement least correlated with actual performance.

### The 7 Spec Killers — detected

- **The Old-Signal Stack (AI-Native)** — "10+ years in B2B SaaS sales", "Closed $5M+ in ARR over your career", "Salesforce certified or HubSpot specialist", "MBA or Business degree preferred", "Strong track record of following a structured outbound playbook". Five old signals stacked. The bar is set against a 2019 AE, not a 2026 one.
- **The Specialist Trap (AI-Native)** — "Existing relationships and Rolodex in the DACH manufacturing / industrial space". Rolodex is the original specialism. It's also the least transferable predictor of new-territory success, because the best AEs build a new Rolodex with AI in 6 months.
- **The 2022 Process Spec (AI-Native)** — Zero mention of AI in research, prospecting, outreach, or workflow. "Structured outbound playbook" is presented as a positive — in 2026 it reads as "we want someone who won't redesign our broken motion".

### Seniority calibration

For a Senior AE owning a new region, Move's matrix specifies playbook building, AI-native execution, data literacy, and systems thinking. The spec describes the opposite — playbook adherence, tool certification, and Rolodex utilisation. The reader can't tell whether this is a "build the DACH motion from scratch" role or a "execute the existing motion in DACH" role.

### What to cut

- "10+ years in B2B SaaS sales, with at least 5 in DACH enterprise" — years are a noisy proxy. Replace with "you've built and run a new-region GTM motion before".
- "Existing relationships and Rolodex in the DACH manufacturing / industrial space" — cut entirely. Replace with "you know how to build a Rolodex from scratch using modern tools".
- "Salesforce certified or HubSpot specialist" — irrelevant.
- "Strong track record of following a structured outbound playbook" — replace with "track record of building or significantly evolving outbound playbooks".

### What to add

- "You build the system, you don't just run it. You see gaps in the revenue motion and redesign around them."
- "You're AI-native. You use AI for research, prospecting, outreach drafting, and workflow automation — not occasionally, as a standard part of how you operate."
- "You're data literate. You read your own pipeline, you spot your own problems, and you don't wait for an analyst to tell you what the numbers mean."

### The top 3 surgical fixes

1. **Replace the Rolodex must-have with a "build-the-motion" signal.** This single change opens the pool ~8× and screens for the trait that actually predicts performance.
2. **Add the AI-native execution expectation explicitly.** This is the single biggest filter in 2026 GTM hiring — and you currently have it inverted.
3. **Cut the 4-day in-office to hybrid or remote-with-onsites.** DACH enterprise AEs spend most of their time at customer sites anyway; the in-office requirement is filtering for the wrong trait.

### Rewritten spec

**Enterprise AE, DACH — Forge GTM**
DACH-based, remote with monthly team onsites
Comp: €120K base / €240K OTE + equity

**About the role.** You'll be our first AE in DACH. You're not inheriting a playbook — you're designing one.

**What you'll have built in 12 months.**

- A repeatable outbound motion that's generating €X in pipeline.
- A playbook the next AE we hire can pick up and run.
- Five reference customers in the DACH industrial space.

**Who this is for.** Senior AEs who build the system, not just run it. You've owned a new region or new motion before. You use AI as a core part of how you research, prospect, and personalise. You read your own data without waiting for an analyst. You're fluent in German and business-fluent in English.

**Useful but not required.** Existing DACH manufacturing / industrial Rolodex, prior experience in vertical SaaS, Salesforce or HubSpot fluency.

### Want the real numbers?

For the actual pool size and a sourcing strategy, Move runs full TAM analyses for hiring teams.

---

## Example 4 — Senior Product Manager (Default weighting)

**Archetype:** Healthtech scale-up, ~200 people, building B2B clinical tools for NHS trusts and private providers. Not strictly regulated for this role (the product team isn't handling PHI directly), but the broader environment is healthcare. Spec defaults to PRD-craft and framework signals.

**User's onboarding answers:**

- Function: Product
- Level: Senior IC
- Primary concern: General audit

### The original spec (excerpt)

**Senior Product Manager — Stratum Health**
London, hybrid (2 days in office)

Stratum Health is hiring a Senior Product Manager to own our clinical workflow product area.

Must-haves:

- 6+ years of product management experience in B2B SaaS
- MBA or equivalent business education preferred
- Deep fluency in product prioritisation frameworks (RICE, ICE, RICE 2.0, MoSCoW)
- Strong PRD-writing and requirements documentation skills
- Experience leading cross-functional teams of 8+ engineers and designers
- Pragmatic Marketing or CSPO certification preferred
- Healthcare or clinical workflow experience preferred

You'll be responsible for: prioritising the roadmap, writing detailed PRDs, facilitating sprint planning, gathering customer feedback, presenting to leadership.

### The audit

**Your Job Spec Audit — by Move**

- Role: Senior Product Manager
- Function | Level: Product | Senior IC
- Geo | Work pattern: London | 2 days in office
- Audit weighting: Default

**Fit-for-Purpose Score: 47 / 100**

- AI-Native Signal Audit: 12 / 40
- Seniority Calibration: 11 / 15
- Pool Realism (TAM): 13 / 20
- Self-Select Clarity: 7 / 15
- Sourcing Suitability: 4 / 10

### The headline

The spec describes a PRD writer in a world where engineers can ship features in hours. What you need is a decision-maker — someone who knows what's worth building, what's good enough, and when to ship. The spec doesn't ask for that.

### The AI-Native lens

The spec leans heavily on framework fluency and certification signals — both of which have decayed sharply as predictors of product success. PRD-writing was a defensible craft when engineering took weeks to deliver against a spec. In 2026, engineers ship in hours, and the binding constraint on product velocity is deciding what gets built, not documenting it. Specs that lead with "deep fluency in RICE" are 2022-coded.

There's no mention of AI in research, synthesis, prototyping, or product analytics. The best PMs in 2026 use AI to compress customer-discovery cycles, generate competitive analysis, and prototype concepts at engineering pace. Your spec asks for none of that.

Of Move's three must-have traits for AI-era product hires — decision-maker, customer-discovery rigour, engineering-pace shipping — only one (cross-functional leadership) is partially surfaced.

### The TAM read

At these requirements, your realistic candidate pool is approximately:

- Global pool at the spec (Senior B2B SaaS PM with healthcare adjacency): ~4,800
- In the UK: ~700
- With hybrid 2-day in-office compatibility: ~500
- After must-haves (MBA preferred, framework certifications, PRD depth): ~120–180

What this means: the pool is workable but tilted toward candidates who optimise for documentation craft over decision velocity. You'll get applies but you'll spend cycles screening out PMs who'll slow your engineering team down.

### The 7 Spec Killers — detected

- **The Old-Signal Stack (AI-Native)** — "MBA or equivalent business education preferred", "Pragmatic Marketing or CSPO certification preferred", "Deep fluency in product prioritisation frameworks (RICE, ICE…)", "Strong PRD-writing and requirements documentation skills". Four credentials and process signals losing predictive value. None of them measure decision-making ability under uncertainty.
- **The 2022 Process Spec (AI-Native)** — "Writing detailed PRDs" and "facilitating sprint planning" are presented as core responsibilities. In a world where engineering is shipping at AI-pace, this is process work that should compress to ~10% of the role.
- **The Specialist Trap (AI-Native)** — "Healthcare or clinical workflow experience preferred". Useful, but in product specifically, deep domain expertise rarely beats decision-making and customer-discovery instincts. Filtering on it cuts the pool by ~60% with marginal hire-quality lift.

### Seniority calibration

For Senior Product, Move's matrix specifies decision-maker on what gets built, customer-discovery rigour over framework fluency, AI-native synthesis and prototyping, and engineering-pace shipping. The spec describes process facilitation and stakeholder management — important but mid-level. The reader can't tell if this is a role for someone who'll change what the product looks like or someone who'll keep the existing roadmap moving.

### What to cut

- "MBA or equivalent business education preferred" — cut entirely. Doesn't predict product outcomes.
- "Pragmatic Marketing or CSPO certification preferred" — cut entirely.
- "Deep fluency in product prioritisation frameworks (RICE, ICE, RICE 2.0, MoSCoW)" — cut entirely. Replace with "you make sharp prioritisation calls and can defend them".
- "Strong PRD-writing and requirements documentation skills" — soften. Documentation matters but it's not the role.

### What to add

- "You make the call on what gets built. You don't present three options and wait for the room. You have a view and you defend it."
- "You do customer discovery in days, not quarters. You use AI to compress synthesis cycles and you bring back specific insights, not summaries."
- "You ship at engineering pace. You don't slow them down with process they don't need."

### The top 3 surgical fixes

1. **Replace framework fluency with decision-making evidence.** The best signal for senior product is "tell me about a call you made that the rest of the room disagreed with, and what happened". Build that into your assessment.
2. **Add AI-native expectations explicitly.** Customer discovery, prototyping, competitive analysis — all should now be AI-leveraged. Specs that don't acknowledge this filter out the best PMs.
3. **Demote healthcare experience from "preferred" to "useful but not required".** Opens the pool ~2.5× and rarely costs you on hire quality.

### Rewritten spec

**Senior Product Manager — Clinical Workflow**
London, hybrid (2 days in office)
Comp: £100–125K + equity

**About the role.** You'll own our clinical workflow product area — the part of our product where clinicians spend most of their day. You'll work directly with our Head of Product, our engineering leads, and our customers.

**What you'll have shipped in 12 months.**

- A reimagined clinical workflow that's measurably reducing time-per-consultation across our deployed sites.
- A customer discovery practice the rest of the product team can model on.
- Two product calls that your team initially disagreed with, that turned out right.

**Who this is for.** Product managers who decide. You've owned a product area at scale. You make sharp prioritisation calls and defend them. You do customer discovery in days, not quarters — using AI to compress synthesis and bring back specific insights, not summaries. You ship at engineering pace.

**Useful but not required.** Healthcare or clinical workflow experience, prior B2B SaaS in regulated environments, NHS familiarity.

### Want the real numbers?

For the actual pool size and a sourcing strategy, Move runs full TAM analyses for hiring teams.

---

## Example 5 — Senior Product Designer (Default weighting)

**Archetype:** Consumer SaaS, ~80 people, US remote-first. Spec is a classic "Figma + portfolio" Senior Designer role with no acknowledgement that the design function has changed.

**User's onboarding answers:**

- Function: Design
- Level: Senior IC
- Primary concern: AI readiness

### The original spec (excerpt)

**Senior Product Designer — Penumbra**
US remote

Penumbra is hiring a Senior Product Designer to join our small but mighty design team.

Must-haves:

- 5+ years of product design experience at consumer-facing SaaS companies
- Expert in Figma — must demonstrate deep proficiency in our portfolio review
- Portfolio showing high-fidelity polished work across multiple shipped products
- Strong UX research background; comfortable leading full discovery sprints
- Adherence to a "trust the process" design methodology
- Strong experience with design system governance

You'll be responsible for: leading design exploration, conducting user research, creating high-fidelity mocks, maintaining the design system, and ensuring no feature ships without design review.

### The audit

**Your Job Spec Audit — by Move**

- Role: Senior Product Designer
- Function | Level: Design | Senior IC
- Geo | Work pattern: US remote
- Audit weighting: Default

**Fit-for-Purpose Score: 32 / 100**

- AI-Native Signal Audit: 6 / 40
- Seniority Calibration: 8 / 15
- Pool Realism (TAM): 11 / 20
- Self-Select Clarity: 4 / 15
- Sourcing Suitability: 3 / 10

### The headline

The design process this spec describes is, in Jenny Wen's words (Head of Design at Anthropic, formerly Figma), basically dead. The role asks for a gatekeeper who slows engineering down at the exact moment when the function has shifted to enabling engineering to ship.

### The AI-Native lens

Every single must-have on this spec is a signal that's losing predictive value: Figma expertise, polished portfolio, UX research depth, "trust the process" methodology, design system governance. None of these predict performance in 2026. Several actively predict the opposite.

The spec describes design as a quality gate — "ensuring no feature ships without design review". This is the exact opposite of how the best design functions now operate. Jenny Wen, who leads design for Claude Cowork at Anthropic, has been explicit: the diverge-converge-diverge design process taught for the last decade is dead. What replaces it is taste, judgment, and execution at engineering pace.

Of Move's three must-have traits for AI-era designers — taste over process, execution at pace, decision accountability — zero are surfaced. All three are actively inverted.

The candidates you actually want will read this and self-select out within the first 100 words.

### The TAM read

At these requirements, your realistic candidate pool is approximately:

- Global pool at the spec: ~12,000 senior product designers with the listed signal stack
- US-based: ~5,500
- Available and at-stage compatible: ~1,800
- After "polished portfolio + UX research depth + design system governance" stacking: ~600

The pool isn't tiny. The problem is that the pool is concentrated in candidates who optimise for the wrong signals — polish, process rigour, gatekeeping. The candidates you'd most want are the ones who would never apply because the spec signals "we slow engineering down".

### The 7 Spec Killers — detected

- **The Old-Signal Stack (AI-Native)** — "Expert in Figma", "Portfolio showing high-fidelity polished work", "Strong UX research background; comfortable leading full discovery sprints", "Adherence to a 'trust the process' design methodology". Four signals from the losing-predictive-value list, stacked.
- **The 2022 Process Spec (AI-Native)** — "Ensuring no feature ships without design review" is design-as-gate, which the function has explicitly moved past. The best designers in 2026 are embedded in engineering sprints, giving directional feedback in real-time, not gating quality at the end.
- **The Specialist Trap (AI-Native)** — "Strong experience with design system governance". In a world where engineering teams can spin up components in hours, deep design-system specialism is decreasingly the senior bar. Taste and judgment about what to build is.

### Seniority calibration

For Senior Design, Move's matrix specifies taste and judgment over process, execution at engineering pace, decision accountability, and AI collaboration in design. The spec describes process leadership and quality control — neither of which is the senior bar in 2026. The spec asks for a senior version of a mid-level role.

### What to cut

- "Expert in Figma — must demonstrate deep proficiency" — Figma is a tool, not a craft. Replace with "you ship directional design fast, in whatever tool serves".
- "Portfolio showing high-fidelity polished work across multiple shipped products" — polish optimises for the wrong signal. Replace with "examples of decisions you made and what shipped".
- "Strong UX research background; comfortable leading full discovery sprints" — replace with "you do customer discovery in days, not weeks, with AI compressing synthesis".
- "Adherence to a 'trust the process' design methodology" — cut entirely. Inverted signal in 2026.
- "Ensuring no feature ships without design review" — cut entirely. This is the single most damaging line in the spec.

### What to add

- "You have taste, and judgment, and you defend your calls. You don't present three options and wait for the room to decide."
- "You work at engineering pace. You give directional feedback in real-time. You don't gate engineering — you enable it."
- "You use AI as a design instrument. You direct it to test directions quickly and cheaply before investing in refinement."

### The top 3 surgical fixes

1. **Remove all design-as-gate language.** This single change inverts what the spec signals to senior designers in the market.
2. **Replace polish requirements with decision evidence.** Ask candidates to walk you through a call they made, not a deck they made.
3. **Add the AI-native expectation.** Designers who direct AI tools as instruments are now the senior bar. Specs that don't acknowledge this filter the function out.

### Rewritten spec

**Senior Product Designer**
US remote
Comp: $160–200K + equity

**About the role.** You'll be embedded in our product team, working alongside engineers who are shipping fast. Your job is to give direction — not to gate it.

**What you'll have shipped in 12 months.**

- A new product surface that meaningfully changed how our customers use us.
- A design practice the rest of the team can model on — fast, opinionated, AI-leveraged.
- Three calls you made that the team initially disagreed with, that turned out right.

**Who this is for.** Designers with taste, judgment, and pace. You make the call on what gets built and why. You give directional feedback in real-time as engineers build — you don't slow them down with two weeks of high-fidelity work when a rough prototype in a day would serve better. You direct AI tools as design instruments.

**Useful but not required.** Deep design-system experience, prior consumer SaaS, formal UX research background.

### Want the real numbers?

For the actual pool size and a sourcing strategy, Move runs full TAM analyses for hiring teams.

---

## Example 6 — Senior Data Engineer in Health AI (Regulated weighting)

**Archetype:** Health AI scale-up, ~120 people, Boston-based, handling clinical data subject to HIPAA. The Regulated weighting kicks in because the role involves PHI-handling decisions. Spec is the typical regulated-environment "we want experience in our specific stack and our specific regulators" pattern.

**User's onboarding answers:**

- Function: Data & Analytics
- Level: Senior IC
- Primary concern: Pool size

### The original spec (excerpt)

**Senior Data Engineer — Bedrock Bio**
Boston, 5 days in office

Bedrock is building AI models that operate on clinical data.

Must-haves:

- 7+ years of data engineering experience
- Expert in dbt, Snowflake, Airflow, and Looker
- Hands-on experience with HIPAA-compliant data architectures
- Direct experience with healthcare data (HL7, FHIR, claims data)
- PhD or Master's preferred
- Boston-based, 5 days a week in office (no exceptions for senior hires)

Comp: $190–230K base.

### The audit

**Your Job Spec Audit — by Move**

- Role: Senior Data Engineer
- Function | Level: Data & Analytics | Senior IC
- Geo | Work pattern: Boston | 5 days in office
- Audit weighting: Regulated (clinical data / HIPAA environment)

**Fit-for-Purpose Score: 41 / 100**

- AI-Native Signal Audit: 11 / 30
- Governance & Data Handling: 11 / 15
- Pool Realism (TAM): 7 / 20
- Self-Select Clarity: 8 / 15
- Sourcing Suitability: 4 / 10

### The headline

The spec hires the data engineer who'd have built your stack in 2022 — when "expert in dbt" was a competitive signal and HIPAA-compliant architectures were rare. In 2026, both are commoditised, and your spec is filtering for the wrong things at the cost of pool size you can't afford.

### The AI-Native lens (Regulated context)

In regulated data engineering, the AI-native lens applies, but is moderated by governance reality. We're not asking whether your data engineers can use LLMs to write production pipelines unsupervised — they can't, and shouldn't. We're asking whether they're operating with AI-leveraged tooling for the parts of the work where governance allows: schema design, query optimisation, documentation, lineage analysis, anomaly detection.

The spec acknowledges none of this. It reads as if the function has stayed still since 2022. The candidates worth hiring at this seniority — who think systemically about how AI can augment regulated data work without breaching governance — will read it and not see themselves.

The tool-specific stacking is the second problem. "Expert in dbt, Snowflake, Airflow, and Looker" describes 2022's senior data engineer. The 2026 version has worked across at least two of those stacks, is fluent in the tradeoffs, and isn't precious about which tool they use.

### Governance & data handling

The spec does handle this lens reasonably — it surfaces HIPAA, healthcare data formats, and the regulated environment. What's missing is signal about judgement in regulated work: how the candidate thinks about data minimisation, audit trails, model-output validation in clinical contexts, and the trade-offs between AI leverage and regulatory exposure. These are the things that separate a senior regulated data engineer from a senior generic one.

### The TAM read

At these requirements, your realistic candidate pool is approximately:

- Global pool at the spec: ~4,200 senior data engineers with healthcare-data experience and the listed tool stack
- US-based: ~2,400
- Boston-based: ~180
- Boston, 5 days in office, willing to move: ~25–45

What this means: this is the spec doing most of the damage to itself. The "no exceptions" 5-day in office in Boston for a senior data engineer in 2026 is the single most pool-restricting line in the spec.

### The 7 Spec Killers — detected

- **The Location Tax (TAM)** — "Boston, 5 days a week in office (no exceptions for senior hires)". In Boston senior data engineering, 5-day in-office cuts the pool by ~80%. The candidates who'd still consider it are not the candidates you want.
- **The Old-Signal Stack (AI-Native)** — "Expert in dbt, Snowflake, Airflow, and Looker", "PhD or Master's preferred", "7+ years of data engineering experience". Tool stacking and credential stacking, both decayed signals.
- **The Specialist Trap (AI-Native)** — "Direct experience with healthcare data (HL7, FHIR, claims data)" as a must-have. The data engineers who'd learn HL7 in their first month are screened out by this.

### What to cut

- "7+ years of data engineering experience" — years are a proxy. Replace with outcome signal.
- "Expert in dbt, Snowflake, Airflow, and Looker" — stack-specific must-have. Replace with "you've shipped at scale on a comparable cloud data stack".
- "PhD or Master's preferred" — irrelevant. Cut entirely.
- "5 days a week in office (no exceptions for senior hires)" — soften to hybrid 2–3 day if at all possible.

### What to add

- "You've worked in regulated environments and you understand what governance demands. You think about data minimisation, audit trails, and model-output validation as core engineering concerns, not afterthoughts."
- "You use AI as leverage in the parts of the work where governance allows — schema design, query optimisation, lineage analysis, anomaly detection."
- "You're a generalist by instinct across the modern data stack. You've made the trade-off calls between Snowflake and Databricks, between Airflow and Dagster, between dbt and SQLMesh."

### The top 3 surgical fixes

1. **Move from 5-day in-office to hybrid 2–3 days.** This is the single highest-leverage change you can make. Roughly 4× the realistic pool.
2. **Replace tool-specific musts with stack-agnostic outcomes.** Opens the pool ~3× without compromising hire quality.
3. **Add governance-aware AI-native expectations explicitly.** This is the differentiating signal in 2026 regulated data engineering hiring.

### Rewritten spec

**Senior Data Engineer — Clinical AI**
Boston / hybrid (2 days in office)
Comp: $190–230K + meaningful equity

**About the role.** We're building AI models that operate on clinical data. You'll own the data infrastructure they run on — pipelines, modelling, lineage, governance.

**What you'll have shipped in 12 months.**

- A reimagined clinical data layer that meaningfully reduces our model-training latency.
- A governance and audit-trail system the FDA team can defend.
- Documentation and lineage practices the rest of the data team can model on.

**Who this is for.** Senior data engineers who've worked in regulated environments and understand what governance demands. You've shipped at scale on a modern cloud data stack and you're fluent in the trade-offs between the major options. You use AI as leverage where governance allows — schema design, lineage analysis, anomaly detection — and you know where it doesn't belong.

**Useful but not required.** Direct healthcare data experience (HL7, FHIR, claims), specific stack expertise in dbt or Snowflake, advanced degrees.

### Want the real numbers?

For the actual pool size and a sourcing strategy, Move runs full TAM analyses for hiring teams.

---

## Example 7 — Junior Software Engineer (Junior weighting)

**Archetype:** B2B SaaS scale-up, ~250 people, Manchester. Hiring a Junior Engineer with the standard "we want a junior but we're describing a mid-level" problem.

**User's onboarding answers:**

- Function: Engineering
- Level: Junior / Mid (0–4 years)
- Primary concern: Quality

### The original spec (excerpt)

**Junior Software Engineer — Roundhouse Logistics**
Manchester, 3 days in office

Roundhouse is hiring a Junior Software Engineer to join our growing engineering team.

Must-haves:

- 3+ years of professional software engineering experience preferred
- Strong knowledge of TypeScript, React, and Node.js
- Experience with cloud infrastructure (AWS or GCP)
- Computer Science degree
- Strong problem-solving skills and attention to detail
- Familiarity with agile methodologies

Comp: £45–55K.

### The audit

**Your Job Spec Audit — by Move**

- Role: Junior Software Engineer
- Function | Level: Engineering | Junior / Mid
- Geo | Work pattern: Manchester | 3 days in office
- Audit weighting: Junior (fundamentals and learning velocity weight more than at senior level)

**Fit-for-Purpose Score: 44 / 100**

- AI-Native Signal Audit: 9 / 30
- Fundamentals & Learning Velocity: 8 / 15
- Pool Realism (TAM): 11 / 20
- Self-Select Clarity: 12 / 20
- Sourcing Suitability: 4 / 15

### The headline

The spec describes a mid-level engineer with a junior salary. The pool that fits this exactly is small, underpaid, and likely to leave within 18 months. What you actually want is a strong junior who'll grow into a mid-level in 12 months — and the spec doesn't describe that person.

### The AI-Native lens

For junior hires, AI-native expectations look different from senior. We're not asking whether the candidate has changed their workflow because of AI — they're at the start of their workflow. We're asking whether they're AI-fluent by default. Whether they treat AI tools as a normal part of how they work, or whether they're suspicious of them.

The spec mentions none of this. There's no signal about whether the candidate should be comfortable using Claude, Cursor, or equivalent tools in their daily work. The CS-degree must-have actively filters out a chunk of the strongest junior engineers in 2026 — many of whom are self-taught, AI-native, and shipping at faster pace than CS graduates.

### Fundamentals & learning velocity

For a junior role, the binding signal is learning velocity — how fast does the person get good. The spec doesn't measure for this at all. "Strong problem-solving skills and attention to detail" is the kind of generic language that filters nobody. There's no concrete signal about how the candidate has improved over the last 12 months, what they've shipped, or what they're trying to learn next.

### The TAM read

At these requirements, your realistic candidate pool is approximately:

- Global pool at the spec: ~28,000 junior engineers with TypeScript + React + Node + cloud exposure
- In the UK: ~4,500
- In Manchester (or willing to commute): ~600
- After "3+ years preferred" + CS degree + £45–55K: ~150–250

What this means: the comp is below market for someone with 3 years' experience in this stack in the UK. You'll either pay more, find a true junior who'll grow fast, or wait.

### The 7 Spec Killers — detected

- **The Old-Signal Stack (AI-Native)** — "Computer Science degree", "3+ years of professional software engineering experience preferred", "Familiarity with agile methodologies". Three signals from the losing-predictive-value list. At a junior level, CS degree filters out exactly the candidates with the highest learning velocity.
- **The Self-Select Mush (Clarity)** — "Strong problem-solving skills and attention to detail", "familiarity with agile methodologies" — vague phrasing that filters nobody. There's no clear outcome, no clear bar.

### Seniority calibration

This is the central issue. The spec asks for 3+ years of experience and a CS degree at a junior salary. The skills described are mid-level. The expectations are mid-level. Move's skills matrix at junior level specifies AI-fluency by default, can describe one workflow they've changed because of AI, and can name something they've changed their mind about in the last year. The spec asks for none of that.

### What to cut

- "3+ years of professional software engineering experience preferred" — pick a level. Either this is junior (0–2 years) or it's mid (2–4 years). The spec straddles.
- "Computer Science degree" — at junior level in 2026, this filter is actively counterproductive. Cut entirely.
- "Familiarity with agile methodologies" — irrelevant.
- "Strong problem-solving skills and attention to detail" — filters nobody. Cut.

### What to add

- "You use AI tools — Claude, Cursor, ChatGPT — as a normal part of how you work. You can describe specifically what you've used them for in the last month."
- "You can name something you've shipped — a project, a feature, a contribution — and walk us through the decisions you made."
- "You can describe something you got wrong in the last 12 months and what you've changed because of it."

### The top 3 surgical fixes

1. **Pick a level and commit to it.** If it's junior, drop the "3+ years preferred" and lower the bar; if it's mid, raise the comp. The spec currently sits in a dead zone.
2. **Cut the CS degree requirement.** At junior level in 2026, this is a counterproductive filter.
3. **Replace "strong problem-solving skills" with concrete learning-velocity signal.** "Tell me something you've shipped and what you'd do differently" beats every generic must-have on the current spec.

### Rewritten spec

**Junior Software Engineer**
Manchester, 3 days in office
Comp: £45–55K (or £55–70K if you'd like to attract mid-level — pick a lane)

**About the role.** We're hiring a Junior Engineer to grow with our team. You'll work alongside our senior engineers on production code, and you'll be expected to ship something real in your first 90 days.

**What you'll have done in 12 months.**

- Owned and shipped 2–3 features end-to-end.
- Levelled up from junior to mid-level on our internal ladder.
- Built one thing you didn't think you could when you started.

**Who this is for.** Engineers at the start of their career who learn fast. You use AI tools — Claude, Cursor, ChatGPT — as a normal part of how you work. You can show us something you've shipped. You can tell us something you got wrong in the last 12 months and what you've changed because of it. You're a generalist by instinct — you're curious about more than the part of the stack you've worked in.

**Useful but not required.** Computer Science degree, prior commercial experience, specific stack exposure.

### Want the real numbers?

For the actual pool size and a sourcing strategy, Move runs full TAM analyses for hiring teams.

---

## Example 8 — VP Engineering (Executive weighting)

**Archetype:** Series C B2B SaaS, ~400 people, remote-first with quarterly onsites. Hiring its first dedicated VP Engineering. Spec is the textbook "ICs grew up into management" spec — execution-focused, not leadership-focused.

**User's onboarding answers:**

- Function: Engineering
- Level: Director / VP
- Primary concern: Misalignment — "the CEO and I aren't on the same page about who we're hiring"

### The original spec (excerpt)

**VP Engineering — Spire Cloud**
Remote-first, quarterly team onsites

Spire is hiring its first VP Engineering to lead our engineering function.

Must-haves:

- 15+ years of software engineering experience
- 5+ years managing managers
- Deep technical expertise in distributed systems and cloud infrastructure
- Experience scaling engineering teams from 30 to 150+
- Strong technical interviewer
- Hands-on coding ability
- PhD or equivalent technical depth preferred

You'll be responsible for: setting the engineering vision, hiring and managing engineering managers, owning the architectural roadmap, partnering with product, and ensuring engineering velocity.

### The audit

**Your Job Spec Audit — by Move**

- Role: VP Engineering
- Function | Level: Engineering | Director / VP
- Geo | Work pattern: Remote-first
- Audit weighting: Executive (Director / VP — judgment, systems thinking, and exec pool dynamics weight more than IC AI-native signals)

**Fit-for-Purpose Score: 49 / 100**

- AI-Native Signal Audit: 13 / 25
- Judgment & Systems Thinking: 9 / 20
- Pool Realism (TAM): 14 / 25
- Self-Select Clarity: 8 / 15
- Sourcing Suitability: 5 / 15

### The headline

This spec hires a senior engineer who got promoted, not a VP who'll change how your engineering function operates. The misalignment you're seeing with your CEO is encoded in the spec itself — half of it describes an exceptional IC, half describes an executive. The candidates the spec actually attracts will be the former, and your CEO is looking for the latter.

### The AI-Native lens (Executive weighting)

At VP level, AI-native expectations look different. We're not asking whether the VP codes alongside Claude — they're not coding. We're asking whether they think strategically about how AI changes the function they lead. Whether they can articulate a 12-month thesis on how AI-native engineering changes hiring, team structure, and capital efficiency. Whether they're "AGI-pilled" at the strategic level, not the tactical one.

The spec asks for "hands-on coding ability" and "deep technical expertise in distributed systems". Both might be useful in the right context, but neither is what differentiates a VP who'll lead well in 2026 from one who won't. The differentiating signal is strategic AI fluency, and it's absent.

The CEO misalignment you're describing is almost certainly this. The CEO wants someone who can answer "how does our engineering function look in 18 months given AI?" and the spec describes someone who can answer "how do we scale our microservices?"

### Judgment & systems thinking

For a VP Engineering at Series C scale, the binding signal is judgment under uncertainty — strategic calls about hiring profile, build-vs-buy, capital allocation, and the AI-native transformation of the function. The spec surfaces none of this. There's no signal about strategic decision-making, board-facing communication, or the political and organisational craft that VP-level roles actually demand. The executive-search reality at this level: the human and judgment elements weight more than the technical ones.

### The TAM read

At these requirements, your realistic candidate pool is approximately:

- Global pool of VP Engineering candidates at Series B–D scale: ~3,500
- With 5+ years managing managers AND scaled 30→150: ~600
- With hands-on coding ability AND PhD-level depth: ~150
- Currently open to a move at your stage / comp expectations: ~30–60

What this means: this is the spec doing most of the damage. The combination of "VP-level leadership" and "hands-on coding" and "PhD-level technical depth" is a Venn diagram of three small circles. Each individually is reasonable. Together, they describe ~150 humans.

### The 7 Spec Killers — detected

- **The Unicorn Stack (TAM)** — "15+ years", "5+ years managing managers", "deep technical expertise in distributed systems", "hands-on coding ability", "PhD or equivalent technical depth preferred". Five stacked requirements for a role that should be selecting for judgment, not credentials.
- **The Old-Signal Stack (AI-Native)** — "15+ years of software engineering experience", "PhD or equivalent technical depth preferred". At VP level, years and PhDs are particularly noisy signals.
- **The Wrong Title (Sourcing)** — The spec describes responsibilities (vision-setting, hiring managers, partnering with product) that match VP Engineering. The must-haves (hands-on coding, PhD-level depth) describe Principal Engineer or Distinguished Engineer. The two populations don't overlap much. Your title isn't aligned with your must-haves.

### What to cut

- "15+ years of software engineering experience" — at VP level, years are a noisy proxy for judgment. Replace with outcome signal.
- "Deep technical expertise in distributed systems and cloud infrastructure" — soften from "deep expertise" to "technically credible". VP roles don't need depth, they need judgment.
- "Hands-on coding ability" — cut entirely if this is genuinely a VP role. Keep if it's a tech-lead role and rename.
- "PhD or equivalent technical depth preferred" — cut entirely.

### What to add

- "You can articulate a thesis on how AI changes engineering in the next 12 months — hiring, team structure, capital efficiency."
- "You've made strategic calls that the rest of the room initially disagreed with, and you can walk us through the reasoning and the outcome."
- "You've owned a board-facing engineering narrative — what we're building, what we're not, and why."

### The top 3 surgical fixes

1. **Align with the CEO on what this role actually is.** If it's a VP, drop the hands-on coding and PhD requirements. If it's a Principal / Tech Lead, retitle and keep them. The current spec is two roles fused into one.
2. **Replace credential filters with judgment evidence.** "Tell me about a strategic call you made that turned out right despite the room disagreeing" beats every must-have on the current spec.
3. **Add the AI-native strategic-thinking expectation explicitly.** This is the single biggest differentiator for VP Engineering hires in 2026.

### Rewritten spec

**VP Engineering**
Remote-first, quarterly team onsites
Comp: $290–360K base + equity (or local-equivalent — but say something)

**About the role.** You'll lead our engineering function as we scale from 60 to 150 over the next 18 months. You'll be the most senior engineering voice on the leadership team, owning hiring, structure, and the strategic engineering narrative our board sees.

**What you'll have built in 18 months.**

- An engineering function that's shipping at AI-native pace — fewer people, more output, measurable per-engineer leverage.
- A leadership bench of 3–4 engineering managers you've hired or grown into the role.
- A board-level engineering narrative that's earned the trust of our investors and our CEO.

**Who this is for.** Engineering leaders with strategic judgment. You can articulate a thesis on how AI changes engineering in the next 12 months. You've made calls the rest of the room initially disagreed with. You've owned a board-facing engineering narrative. You've scaled an engineering function through a similar stage — what worked, what didn't, and what you'd do differently. You're technically credible without being the strongest engineer in the room.

**Useful but not required.** Hands-on coding ability, advanced technical degrees, distributed-systems depth.

### Want the real numbers?

For the actual pool size and a sourcing strategy, Move runs full TAM analyses for hiring teams.

---

Move — wearemove.com
Adriano Herdman, Co-Founder — linkedin.com/in/adrianoherdman1
