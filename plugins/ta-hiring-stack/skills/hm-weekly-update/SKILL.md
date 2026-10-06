---
name: hm-weekly-update
description: >-
  Writes a short, structured weekly hiring update for each hiring manager in
  minutes: where each role stands, what moved this week, interviews coming
  up, the decisions needed from the hiring manager, and risks. Works from an
  ATS export, a pipeline workbook, or the recruiter's rough notes, and
  formats the update for Slack, Teams or email. If a Slack connector is
  available, it can post the update where the manager already works, after
  the recruiter approves it. Use whenever a recruiter or TA leader wants to
  write or send a hiring update, weekly pipeline update, status update or
  recap for a hiring manager or leadership, keep hiring managers informed,
  chase feedback, or push hiring updates into Slack.
---

# Hiring Manager Weekly Update

Hiring managers go quiet when they don't know what's happening, and searches stall when decisions wait in someone's inbox. A short, predictable weekly update fixes both: the manager knows where things stand, and the decisions you need from them are impossible to miss.

The update should take the recruiter two minutes to check and the manager one minute to read.

## Step 1: Gather the inputs

Accept any of: an ATS export, the workbook from `pipeline-analyst`, last week's update, or rough notes ("DE role: 3 at final, Sam waiting on Priya's feedback since Tue, offer out to Jo"). Draft straight away from what you have, then ask about anything unclear at the review step (Step 3) rather than before drafting. Things worth confirming:

- Which hiring manager(s) and roles
- Where to send it: Slack, Teams, email or just the text (default: Slack-ready text)
- Anything off the record: a candidate's situation the recruiter doesn't want written down

If there are several hiring managers, write one update per manager, covering only their roles.

## Step 2: Write the update

Use this shape every week, so managers learn where to look. Keep it under about 150 words per role.

```
*Hiring update: {role}* · week of {Monday's date}

*Where we are:* {one line: e.g. "3 at final stage, 1 offer out. On track for a start in January."}

*Need from you:* {numbered decisions or actions, each with the candidate and a date, e.g. "1. Feedback on Sam R. (final, Tuesday). Please send by Thursday: she's in late stages elsewhere."}

*This week:* {2 or 3 bullets on what moved: screens done, interviews held, offers made or accepted, withdrawals}

*Pipeline:* {how many people are at each stage now, e.g. Interview 2 · Final 1 · Offer 1}

*Next week:* {interviews booked, with day; anything else scheduled}

*Risks:* {only if real: a stalled stage, a candidate at risk of a counter-offer, a thin top of funnel, with one line on what you're doing about it}
```

Rules:

- **Lead with the decisions.** If nothing is needed from the manager, write "Nothing needed this week." Never leave "Need from you" ambiguous.
- **Every ask has a date and a reason.** "Please send feedback by Thursday: she's in late stages elsewhere" gets a reply; "feedback when you can" doesn't. If the notes give no deadline, propose one (two working days by default); the recruiter can change it at review.
- **Pipeline counts are current, not activity.** "Screened 6 this week" goes under "This week"; the pipeline line shows only stages where you know how many people are there now. Leave out any stage you don't know.
- **Numbers over adjectives.** "3 at final" beats "pipeline looking healthy".
- **Use only what's in the inputs.** If you don't know a number, leave that item out rather than guessing.
- **Candidate details stay minimal:** first name and initial, stage, and what's needed. A competing process can be mentioned generically ("a final elsewhere on Monday"), never by company name. Never include salary, personal circumstances, or anything the recruiter marked off the record.
- **Flag bad news early and plainly,** with what you're doing about it. Managers forgive problems; they don't forgive surprises.
- **Format for the channel.** Slack: `*bold*` and short bullets. Teams and email: a clear subject line ("Hiring update: Senior Data Engineer, week of 6 October") and normal formatting.

For a leadership roll-up across several roles, use one line per role (role · stage counts · status · biggest risk), then the decisions needed from leadership.

## Step 3: Review, then send

Always show the update to the recruiter first and ask: "Happy to send, or want to change anything?" **Never post or send anything without the recruiter's explicit approval.**

**If a Slack connector is available** (check the available tools): once approved, ask where it should go (a hiring channel, or a direct message to the manager) and post it there. Prefer creating a draft if the connector supports drafts. Confirm afterwards with where it was posted.

**If no Slack connector is available:** give the update as copy-ready text and mention, in one line, that connecting Slack lets you post it directly next time.

Recruiters who want this every week can ask Claude to schedule it (for example, every Monday at 9am, from that week's notes or export) where their Claude app supports scheduled tasks.

## Writing rules

- Short, plain sentences. British English unless the user writes in American English.
- No em dashes anywhere. Use commas, colons, full stops or brackets.
- No filler ("Hope you're well", "Just a quick update"). The first line is the status.
