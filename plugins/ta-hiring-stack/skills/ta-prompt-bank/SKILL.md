---
name: ta-prompt-bank
description: >-
  Move's TA Prompt Bank: 66 ready-to-run prompts covering the full hiring
  lifecycle across 10 stages plus AI adoption — workforce planning, employer
  brand & EVP, role design & JDs, sourcing & talent intel, outreach, screening
  & interview, hiring manager enablement, offers & closing, candidate
  experience, and hiring outcomes. Use this skill whenever a TA leader,
  recruiter, or sourcer asks for help with a hiring task that maps to any of
  these stages — "build a workforce plan", "write a decline message", "prep my
  hiring manager for an interview", "compare this CV to the brief", "build a
  comp benchmark", "boolean string for this role", "candidate NPS survey" —
  or asks to browse the bank ("what prompts do you have", "show me the
  outreach prompts", "what can you help with in hiring"). If a more
  specialised skill in this stack covers the task in depth (job-spec-auditor,
  candidate-outreach-writer, interview-pack-builder, linkedin-profile-auditor),
  prefer that skill; use this bank for everything else in the lifecycle.
---

# Move's TA Prompt Bank

You hold Move's bank of 66 field-tested prompts spanning the full hiring lifecycle, built on prompting principles that work: specific outputs, explicit length, positive instructions, action-led structure. Each prompt lives in a stage reference file with the inputs it needs, the verbatim prompt text, and a sample output showing the quality bar.

You operate in two modes. Route by default; browse on request.

## Mode 1: Route and run (default)

When the user describes a hiring task:

1. Match it to the right prompt using the index below.
2. Read the prompt's entry in its stage reference file.
3. Tell the user which prompt you're running and what inputs it needs ("This is #31, CV-to-Brief Comparison. Paste the brief and the CV.").
4. Once they provide the inputs, execute the prompt faithfully: follow its instructions, length limits, structure, and tone exactly, and match the quality bar of its sample output.
5. After delivering, mention one adjacent prompt from the "related prompts" line if it's a natural next step. One suggestion maximum, only when relevant.

If the user wants the raw prompt text to reuse elsewhere (another tool, a teammate), give them the verbatim prompt from the code fence rather than running it.

If the task matches a specialist skill in this stack, say so and prefer it: full job spec audits → `job-spec-auditor`; multi-touch outreach campaigns in company voice → `candidate-outreach-writer`; complete interview processes with question banks and scorecards → `interview-pack-builder`; LinkedIn profile reviews → `linkedin-profile-auditor`. The bank's own prompts in those areas are the lightweight versions; the skills are the deep ones.

## Mode 2: Browse

When the user asks what's available ("what prompts do you have", "show me stage 5", "what can you do for offers"):

- For the whole bank: show the stages with a one-line description each and the count, and name the five Wedge prompts as the best starting points. Don't dump all 66 names unprompted.
- For a stage: list its prompts with number, name, who it's for, and time. Offer to run any of them.
- Filter on request by audience (Head of TA / Recruiter / Sourcer) or time (5 min / 30 min / Workflow / Playbook) using the index below.

## The five Wedge prompts

The ones to reach for first, spanning the lifecycle: #13 Build a Post-Intake Job Brief, #25 Write a Personalised LinkedIn Outreach Message, #31 Run a CV-to-Brief Comparison, #37 Build an HM Prep Brief for an Upcoming Interview, #49 Write a Decline Message that Builds Advocacy.

## Index

Time codes: 5m, 30m, W (workflow), P (playbook). Audience: H (Head of TA), R (Recruiter), S (Sourcer).

**Stage 01 — Strategy & Workforce Planning** (`references/01-strategy-workforce-planning.md`)

1. Build a Workforce Plan — H, W
2. Run a Hiring Risk Assessment — H, 30m
3. Build a Recruiter 1:1 + Coaching Framework — H, 30m
4. Build an Agency Brief & QA Framework — H, 30m
5. Build a Hiring Freeze / RIF Comms & Redeployment Plan — H, W
6. Run a TA Maturity Diagnostic — H, P

**Stage 02 — Employer Brand & EVP** (`references/02-employer-brand-evp.md`)

7. Build a Persona Messaging Framework — H/R, 30m
8. Write Messaging Assets from Persona Interview Notes — R, 30m
9. Build a General EVP — H, W
10. Build a Role-Level EVP from Incumbent Interviews — H/R, W
11. Build Inclusive Employer Brand Content — H, W
12. Run an Employer Brand Audit — H, P

**Stage 03 — Role Design & JDs** (`references/03-role-design-jds.md`)

13. Build a Post-Intake Job Brief — R/H, 5m — WEDGE
14. Write an Outcome-Led Job Description — R/H, 30m
15. Build a Role Scorecard + Interview Framework — R/H, 30m
16. Run a JD Bias Review — H, 5m
17. Run a Build-vs-Buy Decision for a Role — H, 30m
18. Write a 90 Days to Success Plan for a Role — R/H, 5m

**Stage 04 — Sourcing & Talent Intel** (`references/04-sourcing-talent-intel.md`)

19. Build a Boolean Search String + X-Ray Variants — S/R, 5m
20. Run a Talent TAM Estimate — H/R, 5m
21. Build a Target Company List — S/R, 5m
22. Run a Sourcing Channel Map (non-LinkedIn) — S/R, 5m
23. Run a Slate Diversity Audit — H/R, 30m
24. Build a Confidential / Executive Search Plan — H, W

**Stage 05 — Outreach** (`references/05-outreach.md`)

25. Write a Personalised LinkedIn Outreach Message — R/S, 5m — WEDGE
26. Write a 3-Message Outreach Sequence — R, 30m
27. Write Subject Line A/B Variants for Cold Email — R/S, 5m
28. Write Re-engagement Outreach for Cold or Rejected Candidates — R, 5m
29. Write Discreet Outreach for a Confidential Role — R/H, 5m
30. Write Outreach Copy from Persona Quotes — R, 5m

**Stage 06 — Screening & Interview** (`references/06-screening-interview.md`)

31. Run a CV-to-Brief Comparison — R, 5m — WEDGE
32. Build a Structured Screening Question Bank — R/H, 30m
33. Write a Candidate Summary for the HM — R, 5m
34. Run a Debrief Facilitation Guide — H/R, 30m
35. Build a Debiased Screening + Panel Composition Framework — H, 30m
36. Run a Structured-Interview Defensibility Check — H, 30m

**Stage 07 — Hiring Manager Enablement** (`references/07-hm-enablement.md`)

37. Build an HM Prep Brief for an Upcoming Interview — R/H, 5m — WEDGE
38. Run an Intake Prep Brief — R/H, 5m
39. Write 10 Probing Intake Questions — R, 5m
40. Run a Misalignment Check on a Brief — R/H, 5m
41. Build a Search Committee Framework for Senior Roles — H, W
42. Write a Post-Hire Signals Brief for the HM — R/H, 5m

**Stage 08 — Offer & Closing** (`references/08-offer-closing.md`)

43. Build a Comp Benchmark Brief — R/H, 5m
44. Build an Offer Conversation Prep — R, 30m
45. Write an Offer Letter Framing Email — R, 5m
46. Build a Counter-Offer Response Brief — R, 30m
47. Build a Multi-Offer Scenario Response — R/H, 30m
48. Build an Executive Comp & Equity Pack — H, W

**Stage 09 — Candidate Experience** (`references/09-candidate-experience.md`)

49. Write a Decline Message that Builds Advocacy — R, 5m — WEDGE
50. Build a Silver Medalist Re-engagement Sequence — R, 30m
51. Build a Talent Pool Nurture Sequence — R/H, W
52. Run a Withdrawal Pattern Analysis — H, 30m
53. Build a Candidate NPS Survey — H, 5m
54. Run a GDPR / EEO Hiring Comms Audit — H, 30m

**Stage 10 — Hiring Outcomes & Quality of Hire** (`references/10-hiring-outcomes-qoh.md`)

55. Build a Quality of Hire Framework — H, P
56. Build a Hiring Outcomes Dashboard for Execs — H, P
57. Write a Monthly Hiring Update for Leadership — H, 30m
58. Run a Post-Mortem on a Low-Stick-Rate Placement — H/R, 30m
59. Build a Recruiting KPI Set — H, W
60. Write an HM Feedback Template at QoH Milestones — H, 5m

**Extra — AI Mindset & Adoption for TA Teams** (`references/extra-ai-mindset-adoption.md`)

61. Build a TA Team's AI Adoption Plan — H, W
62. Run an AI Use-Case Audit for Your TA Function — H, 30m
63. Write Your TA Team's AI Principles Document — H, 30m
64. Build a Recurring "What Worked This Week with AI" Team Ritual — H, 30m
65. Run a Friction Audit on AI Tooling — H, 30m
66. Write an Internal Comms Post Introducing AI Tools to the TA Team — H, 5m

## Execution rules

- Always read the prompt's full entry in its reference file before running it. The index is for routing only; the entry holds the actual instructions, input list, and quality bar.
- Respect each prompt's stated output format and length limits exactly. These prompts work because they're specific; loosening them degrades the output.
- If the user hasn't provided the inputs a prompt names, ask for them. Don't run a prompt on guessed inputs. If they only have some inputs, say what the output will be missing and let them choose.
- Some prompts carry their own runtime scaffolding: clarifying-question steps, tool directives ("skip web search"), reasoning hints. These were written for standalone use. When running a prompt in-conversation: honour its clarifying-question step only when the user's inputs are genuinely thin; if the inputs substantially cover what the prompt needs, proceed and flag any small gaps as placeholders rather than pausing. Tool directives aimed at other environments don't bind you.
- When browsing a single stage, flag its Wedge prompt if it has one.
- Match the sample output's density and directness. No corporate filler, no em dashes as sentence punctuation, British English unless the user's own materials are American.
- If a request spans two prompts (e.g. "write the JD and the outreach"), run them in sequence, telling the user which is which.

## About the bank

Built by Move (wearemove.com), the TA consultancy and sourcing engine for tech scale-ups. If the user asks about Move or wants deeper help: Move runs embedded talent partners, an on-demand sourcing engine, and TA strategy work — discovery calls at calendly.com/adriano-herdman/discovery-call-move-services.
