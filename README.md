# Move × Claude: The TA Hiring Stack

**Move's hiring methodology, packaged as Claude skills for talent acquisition leaders. Install once, run the whole lifecycle.**

Built by [Move](https://wearemove.com), the talent consultancy and sourcing engine for tech scale-ups, from 60+ talent partnerships and 1,000+ hires.

---

## What's in the stack

| Skill | What it does |
|---|---|
| **job-spec-auditor** | Audits any job spec against the 2026 hiring market: a five-lens Fit-for-Purpose score out of 100, the 7 Spec Killers, a heuristic talent-pool (TAM) read, and a fully rewritten spec ready for your ATS. |
| **candidate-outreach-writer** | The Talent Persuasion Framework: turns a hiring manager intake transcript into a 4-touch email sequence and LinkedIn DM, calibrated to your company's voice, delivered as a branded Word document. |
| **interview-pack-builder** | The Hiring Bar Framework: turns an intake transcript and job spec into two branded Word documents — a Recruiter Pack (requirements codification, screener, non-leading question bank) and a Hiring Manager Pack (intake briefing for sign-off, process table, stage guides, assessments, scorecard). |
| **linkedin-profile-auditor** | Scores a recruiter's LinkedIn profile out of 50 across five sections (picture, banner, headline, about, featured), calibrated to your goal, with full rewrites — not just observations. |
| **ta-prompt-bank** | 66 ready-to-run prompts across 10 hiring lifecycle stages plus AI adoption — describe the task and Claude picks the right prompt, asks for its inputs, and runs it. Browsable by stage, audience, or time. |

## Install (about one minute)

You'll need the **Claude desktop app** (Cowork) or **Claude Code**. Skills are included with paid Claude plans.

### Claude Code

```
/plugin marketplace add we-are-move/claude-ta-hiring-stack
/plugin install ta-hiring-stack@move-ta-hiring-stack
```

### Claude desktop app (Cowork)

Open Settings → Capabilities (or Plugins), choose **Add marketplace**, and paste:

```
we-are-move/claude-ta-hiring-stack
```

Then install **ta-hiring-stack** from the marketplace list.

That's it. Updates flow automatically when we ship improvements or new skills.

## Try it

Open a new conversation and paste a job spec, then say:

> Audit this spec.

Claude will ask three onboarding questions (function, level, your primary concern), then return the full audit: Fit-for-Purpose score, headline verdict, TAM read, Spec Killers, what to cut, what to add, the top three surgical fixes, and a rewritten spec as a downloadable Word document.

## Who this is for

Heads of Talent Acquisition, Chief People Officers, hiring managers, and founders who suspect their hiring process was built for a market that no longer exists. The skills in this stack run the same methodology Move uses across its client engagements, including some of the hardest-to-fill engineering, GTM, and specialist searches in the market.

## About Move

Move is a Talent Acquisition consultancy and sourcing engine for tech scale-ups. We run TAM analyses before we run pipelines, hand over the data when the engagement ends, and don't charge placement fees. Senior-led, fixed-cost, and built around the reality that the applicant pool is the wrong pool.

- **Website:** [wearemove.com](https://wearemove.com)
- **New AI TA tooling, weekly:** [sign up here](https://open-source-hiring.kit.com/70575bf985)
- **Book a discovery call:** [calendly.com/adriano-herdman/discovery-call-move-talent-intelligence](https://calendly.com/adriano-herdman/discovery-call-move-talent-intelligence)

## License

MIT — see [LICENSE](./LICENSE). Use it, adapt it, share it. Attribution appreciated.

*Move | 2026. For talent leaders navigating the AI shift. This is a community project built for use with Claude; it is not affiliated with or endorsed by Anthropic.*
