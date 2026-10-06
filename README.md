# Move × Claude: The TA Hiring Stack

**Thirteen free Claude skills for Talent Acquisition teams. One install. About a minute to set up.**

Built by [Move](https://wearemove.com).

We're an embedded talent partner and on-demand sourcing consultancy for high-growth companies hiring at scale. We help teams add hiring capacity without agency fees, permanent headcount or long-term commitments, through embedded recruiters and AI-enabled sourcing on a fixed monthly cost.

These Claude skills are a small selection of the workflows our own talent partners use every day. We're open-sourcing them so any TA team can benefit, whether you work with us or not.

## Why install?

- Map the talent market for a role before the intake.
- Check what level a role is really pitched at.
- Calibrate with your hiring manager using realistic candidate archetypes.
- Build an evidence-based shortlist from a batch of CVs.
- Find out what would really make a candidate move, before they ghost you.
- Turn outreach rejections into market intel your hiring manager can act on.
- See where candidates drop out of your pipeline, and who needs action today.
- Send hiring managers a clear weekly update in minutes, straight into Slack.
- Improve job descriptions before they go live.
- Write candidate outreach that gets more replies.
- Turn an intake meeting into a complete interview pack.
- Audit and improve your LinkedIn profile.
- Complete 66+ other hiring workflows, from workforce planning to quality of hire.

If these save your team time, that's exactly why we built them.

## Set it up (3 steps, about a minute)

1. **Open the Claude desktop app** (any paid Claude plan). Don't have it? Download it at [claude.ai/download](https://claude.ai/download).
2. Go to **Settings → Capabilities** (or Plugins) → **Add marketplace**, and paste:

   ```
   we-are-move/claude-ta-hiring-stack
   ```

3. Install **ta-hiring-stack** from the marketplace list. Done. All thirteen skills are live in every conversation.

Using **Claude Code** instead? Run:

```
/plugin marketplace add we-are-move/claude-ta-hiring-stack
/plugin install ta-hiring-stack@move-ta-hiring-stack
```

**No desktop app?** Click the green **Code** button above → **Download ZIP**. Each folder inside `plugins/ta-hiring-stack/skills/` is a self-contained skill you can zip and upload individually at claude.ai → Settings → Capabilities → Skills.

## What happens next

Nothing to configure, no prompts to learn. Just talk to Claude the way you'd brief a colleague, and the right skill fires on its own. Try one of these as your first message:

> Audit this job spec — *paste any spec, get the scored audit and a rewritten version as a Word doc*

> Turn this intake call into outreach — *paste a transcript, get a 4-touch email sequence and LinkedIn DM in your company's voice*

> Build an interview pack for this role — *paste the transcript and spec, get a Recruiter Pack and Hiring Manager Pack*

> Map the market for this role before my intake: *share the role, location and your pay band, get pool size, competitors and talking points as a Word doc*

> What level is this role really? *paste a job spec, get the level read, any title or pay mismatch, and questions to settle it with the hiring manager*

> Build calibration archetypes for my intake: *share the role, get 3 to 4 candidate profiles for your hiring manager to react to, then a calibration record from their feedback*

> Shortlist these CVs for my hiring manager: *paste the CVs and your brief or calibration record, get a ranked, evidence-backed shortlist with screening questions*

> Build me a screen guide for this role: *share the spec, get a call guide that uncovers each candidate's real motivators alongside role-specific questions; paste your notes back for a motivation summary*

> Why are candidates saying no? *start with the outreach tracker, then upload your responses as a CSV for a report on decline reasons, pay intel and what to fix*

> Review my pipeline: *upload an ATS export, get a funnel report for leadership and a named action list for you*

> Write this week's update for my hiring manager: *paste notes or an export, get a Slack-ready update with the decisions you need from them*

> Audit my LinkedIn profile — *upload your profile PDF, get section-by-section scores and rewrites*

> What can you help with in hiring? — *browse all 66 prompts by lifecycle stage*

## What's in the stack

| Skill | What it does |
| --- | --- |
| **job-spec-auditor** | Audits any job spec against the 2026 hiring market: a five-lens Fit-for-Purpose score out of 100, the 7 Spec Killers, a heuristic talent-pool (TAM) read, and a fully rewritten spec ready for your ATS. |
| **candidate-outreach-writer** | The Talent Persuasion Framework: turns a hiring manager intake transcript into a 4-touch email sequence and LinkedIn DM, calibrated to your company's voice, delivered as a branded Word document. |
| **interview-pack-builder** | The Hiring Bar Framework: turns an intake transcript and job spec into two branded Word documents — a Recruiter Pack (requirements codification, screener, non-leading question bank) and a Hiring Manager Pack (intake briefing for sign-off, process table, stage guides, assessments, scorecard). |
| **talent-market-mapper** | Maps the market for a role before the intake: sizes the candidate pool in three scenarios, profiles the employers competing for the same people (including cross-sector poachers and local employers), and turns it into where you win and lose, priority talent pools and talking points for the hiring manager, as a Word report. |
| **role-calibrator** | Reads the real level of a role from its job spec, compares it with the title and pay band, flags mismatches, and gives the questions to settle the level with the hiring manager and test it in interviews. Fast, answered in chat. |
| **calibration-archetypes** | Builds 3 to 4 realistic candidate archetypes from research into where these people really come from, as a Word document your hiring manager marks up. Their reactions become a calibration record for the shortlist. |
| **shortlist-builder** | Turns a batch of CVs into an evidence-based shortlist: every must-have checked against quoted evidence, each candidate matched to a calibration archetype, Progress, Hold or Decline with reasons, and screening questions for the gaps. Optional blind mode. A Word document for the hiring manager. |
| **motivation-discovery** | A screening call guide built on seven sales discovery questions, woven with role-specific questions from the spec. After the call, your notes become a motivation summary: readiness, reasons to move and stay, counter-offer risk, and whether the role gives them what they need. |
| **outreach-intelligence** | Win/loss analysis for recruiting. A branded Excel tracker to log responses with reason codes, then upload a CSV for a Word report of tables: why people say no (fixable or not), pay and competitor intel from the replies, message performance and a re-engage list. |
| **pipeline-analyst** | Cleans an ATS export, triages who needs action now (open offers, feedback owed, stale candidates), and shows where the funnel leaks by stage, source and role. A Word report for leadership plus a workbook with the named action list. |
| **hm-weekly-update** | A short weekly hiring update per hiring manager: where each role stands, what moved, upcoming interviews, and the decisions needed from them. Formatted for Slack, Teams or email, and posted to Slack after your approval if it's connected. |
| **linkedin-profile-auditor** | Scores a recruiter's LinkedIn profile out of 50 across five sections (picture, banner, headline, about, featured), calibrated to your goal, with full rewrites — not just observations. |
| **ta-prompt-bank** | 66 ready-to-run prompts across 10 hiring lifecycle stages plus AI adoption — describe the task and Claude picks the right prompt, asks for its inputs, and runs it. Browsable by stage, audience, or time. |

## Skills guide map

**Came here from our *Complete Claude skills guide for talent acquisition 2026*?** Here's where each of the 24 skills lives today.

✅ Full skill: just describe the task and Claude runs it.
📘 In the prompt bank: ask Claude for it by name or number, e.g. *"run prompt #38"*.
🔜 Full skill coming soon (lighter version available now where noted).

### 01 Market intelligence

| Skill | Where it lives |
| --- | --- |
| Talent market mapping | ✅ talent-market-mapper |
| Job spec auditor | ✅ job-spec-auditor |
| Spec-based levelling | ✅ role-calibrator |
| Intake prep | 📘 #38 Intake Prep Brief, #39 Write 10 Probing Intake Questions |

### 02 Calibrate

| Skill | Where it lives |
| --- | --- |
| Intake codification | ✅ interview-pack-builder (requirements codification and HM sign-off briefing) |
| Calibration archetypes | ✅ calibration-archetypes |
| Role personas | 📘 #7 Persona Messaging Framework |
| Shortlist builder | ✅ shortlist-builder (or #31 CV-to-Brief Comparison for a single CV) |

### 03 Attract & engage

| Skill | Where it lives |
| --- | --- |
| Persona interviews | 📘 #10 Role-Level EVP from Incumbent Interviews, #8 Messaging Assets from Persona Interview Notes |
| Message crafting | 📘 #8, #10, #30 Outreach Copy from Persona Quotes |
| Sales-led outreach | ✅ candidate-outreach-writer, plus #25 to #27 for single messages and subject lines |
| Outreach intelligence | ✅ outreach-intelligence |

### 04 Screen & assess

| Skill | Where it lives |
| --- | --- |
| Screening structure | ✅ interview-pack-builder (structured screener), plus #32 Screening Question Bank |
| Motivation discovery | ✅ motivation-discovery |
| Question bank creator | ✅ interview-pack-builder |
| AI & skills testing | ✅ interview-pack-builder (AI-era audit and assessments) |

### 05 Hiring manager enablement

| Skill | Where it lives |
| --- | --- |
| Interview briefings | 📘 #37 HM Prep Brief for an Upcoming Interview |
| Interviewer coaching | 📘 #34 Debrief Facilitation Guide, #36 Structured-Interview Defensibility Check |
| Weekly updates | ✅ hm-weekly-update (or #57 for a monthly leadership update) |
| Slack integration | ✅ hm-weekly-update posts to Slack once connected |

### 06 Data & close

| Skill | Where it lives |
| --- | --- |
| ATS triage | ✅ pipeline-analyst |
| Funnel analytics | ✅ pipeline-analyst |
| Rejection & feedback | 📘 #49 Decline Message that Builds Advocacy |
| Candidate advocacy | 📘 #49, #50 Silver Medalist Re-engagement, #51 Talent Pool Nurture |

### Resources

| Resource | Where it lives |
| --- | --- |
| Prompts & templates | ✅ ta-prompt-bank (66 prompts) |
| Frameworks library | 🔜 Coming soon. Structured interviewing is already built into interview-pack-builder |
| Guardrails | 🔜 Coming soon. Today: #63 Write Your TA Team's AI Principles Document |

## Who this is for

Heads of Talent Acquisition, Chief People Officers, hiring managers, and founders who suspect their hiring process was built for a market that no longer exists. These skills are drawn from the workflows Move's talent partners run every day across client engagements, including some of the hardest-to-fill engineering, GTM, and specialist searches in the market.

## About Move

Move is an embedded talent partner and on-demand sourcing consultancy for high-growth companies hiring at scale. We help teams add hiring capacity without agency fees, permanent headcount or long-term commitments: embedded recruiters and AI-enabled sourcing, on a fixed monthly cost.

- **Website:** [wearemove.com](https://wearemove.com)
- **New AI TA tooling, weekly:** [sign up here](https://open-source-hiring.kit.com/70575bf985)
- **Book a discovery call:** [calendly.com/adriano-herdman/discovery-call-move-talent-intelligence](https://calendly.com/adriano-herdman/discovery-call-move-talent-intelligence)

## License

MIT — see [LICENSE](LICENSE). Use it, adapt it, share it. Attribution appreciated.

*Move | 2026. For talent leaders navigating the AI shift. This is a community project built for use with Claude; it is not affiliated with or endorsed by Anthropic.*
