# Role-family funnels

Different role families need different funnels. Pick the right one before you research anything: the wrong funnel produces numbers that look plausible and are wrong.

The ranges below are starting points drawn from Move's sizing work across Europe, the UK and the US. Treat them as priors. Search for a sourced figure for each step, use the sourced figure when you find one, and note in the methodology whenever a step falls back to a range given here.

## Contents

1. Rules that apply to every funnel
2. Software engineering roles
3. Data and analytics roles
4. Go-to-market roles
5. All other roles (general funnel)
6. Where to find the numbers

---

## 1. Rules that apply to every funnel

**Start from the broadest defensible population.** People doing the same work hold many titles. Begin with everyone doing this kind of work in the location, then filter by skills. Exact-title counts typically undercount by 2 to 3 times. If an exact-title count is the only starting figure you can find, use it, say so, and widen the range.

**Cities not listed here.** Take the national total for the function and multiply by the city's share of the national tech or professional workforce, using regional data (Tech Nation and ONS regional figures in the UK, Eurostat regional data in Europe, BLS metro data in the US). Say in the methodology that the city figure was derived this way.

**Seniority: titles and years are different filters.**

- If the brief asks for a **title** ("Senior", "Staff", "Lead"), use title shares: Senior is usually 18 to 22% of all practitioners, Staff and above 3 to 6%.
- If the brief asks for **years of experience** ("5+ years"), use an experience distribution instead. Search for the latest Stack Overflow Developer Survey "years coding professionally" breakdown (or the equivalent survey for the function). The share with 5+ years is far larger than the share holding a Senior title, often around half or more.
- When the base or broad scenario relaxes seniority, take the added share for the level below (or above) from the same distribution. Never invent it.

**Company size bands.** The shares below use standard bands. If the brief's band is different (say 50 to 1,000 instead of 11 to 1,000), adjust proportionally and say how in the methodology.

**Correlated skills.** Skills used together in the same teams are not independent. When a brief requires two or three skills, use pairing shares (the share of people with skill A who also have skill B), not two separate population shares multiplied together.

---

## 2. Software engineering roles

Typical titles: Software Engineer (backend, frontend, full-stack, mobile), Staff or Principal Engineer, Platform Engineer, DevOps or SRE, Security Engineer.

The funnel is **stack-driven**.

1. **Total software engineers in the location.** Reference ranges:
   - Greater London: 85,000 to 95,000
   - Berlin: 70,000 to 80,000
   - Amsterdam: 30,000 to 40,000
   - Dublin: 35,000 to 40,000
   - New York metro: 250,000 to 300,000
   - San Francisco Bay Area: 350,000 to 400,000
2. **Seniority share.** See section 1.
3. **Primary skill share.** Typical shares of all engineers:
   - JavaScript or TypeScript: 40 to 50%
   - Python: 35 to 45%
   - Java: 25 to 35%
   - Kotlin or Swift: 10 to 15% each (mobile)
   - Go: 8 to 12%
   - Rust: 3 to 7%
4. **Secondary skill share** (of those with the primary skill). Strong pairings: TypeScript and Node.js 70 to 80%; Go and Kubernetes 55 to 65%; Python and Django 40 to 50%. Weak pairings: Python and Rust 10 to 15%.
5. **Tertiary skill or trait** (optional, tighter). Example: Python among TypeScript and Node.js engineers in London's fintech scene is usually 45 to 55%.
6. **Company size share.** Freelance or contractor 10 to 15%; micro (under 11) 5 to 10%; scale-up and SME (11 to 1,000) 60 to 75%; enterprise (1,000+) 15 to 25%.

**Known bias:** top-down software funnels usually **underestimate**, because the skill steps treat skills as more independent than they are. If a calibration count comes in well above your estimate, the fix is almost always the skill-overlap steps (4 and 5), not location or seniority.

---

## 3. Data and analytics roles

Typical titles: Data Engineer, Analytics Engineer, Data Platform Engineer, Data Scientist, ML Engineer, AI Engineer, BI Engineer, Senior Data Analyst.

The funnel is **tool-driven**, and the starting population needs the most care of any family.

1. **Total data practitioners in the location.** Search for a count of data professionals (data engineers, analytics engineers, data scientists, ML engineers, data analysts) for the country, then derive the city figure using section 1. Exact "Data Engineer" title counts miss most of the analytics engineers, software engineers and platform engineers who do the same work. Either start from all data practitioners and filter for the specialism, or use a title count and widen the range by 2 to 3 times.
2. **Specialism share** (if you started from all data practitioners). As a rough prior, engineering-focused roles (data, analytics and platform engineering) make up about a third of data practitioners in tech-heavy cities. Search for a sourced split first.
3. **Seniority share.** See section 1.
4. **Primary language.** Python is near-universal for data engineers (typically 80 to 90%) and very common for data scientists. SQL is effectively universal and is rarely a useful filter.
5. **Tool and platform shares** (of the specialism). These change fast, so search for current figures every time. Useful sources: dbt Labs' State of Analytics Engineering report, the DataTalks.Club data engineering survey, the Stack Overflow survey's database and cloud sections. Pair tools that are used together (dbt with a cloud warehouse, Spark with Databricks) rather than multiplying them independently.
6. **Company size share.** Use the software engineering shares in section 2 unless you find a data-specific source.

**Known bias:** data funnels **undercount** whenever they start from exact titles, and tool-share surveys skew towards enthusiasts (people who answer a dbt survey use dbt). Balance the two in the methodology, and lean on the reality check in SKILL.md.

---

## 4. Go-to-market roles

Typical titles: SDR, BDR, Account Executive (SMB, mid-market, enterprise), Account Manager, Customer Success Manager, Sales Engineer, Sales Manager, Head of Sales, VP Sales, CRO, Partnerships.

The funnel is **profile-driven**.

1. **Total sales and GTM professionals in the location.** Usually 3 to 5% of the working population in tech-heavy cities.
2. **Function share** (in tech GTM teams): SDR or BDR 25 to 35%; Account Executive 30 to 40%; Customer Success 15 to 20%; sales leadership 10 to 15%.
3. **Seniority or segment share.** Enterprise AEs are usually 20 to 30% of all AEs; SMB AEs are 40 to 55%.
4. **Sector experience share** (of tech sales talent in major cities): horizontal SaaS 20 to 30%; fintech and payments 8 to 15%; cybersecurity 5 to 10%; HR tech 3 to 7%.
5. **Performance or deal-size filter.** Roughly 35 to 45% of AEs hit full quota in a given year; consistent multi-year attainment is more like 15 to 25%. Use this step only if the brief really requires it.
6. **Company size share.** GTM talent skews slightly more towards enterprise than tech talent: 25 to 35% at 1,000+.

**Known bias:** top-down GTM funnels usually **overestimate** at the sector step, because people tag sector experience loosely on their profiles (one fintech logo makes someone "fintech"). If a calibration count comes in well below your estimate, tighten steps 4 and 5 before touching location. Recruiter counts for GTM are also less precise than for engineering, because sales skills data on profiles is thinner. Treat them as one strong data point, not ground truth.

---

## 5. All other roles (general funnel)

Product, Design, Finance, People and TA, Operations, Legal, Marketing and others:

1. Total professionals in the function, in the location
2. Share at the specified seniority (see section 1)
3. Share with the specified domain or industry experience
4. Share with the specified specialism, tool or credential
5. Share at the specified company size band

Say in the methodology that this family uses the general funnel, so the range is wider than for engineering or GTM. Widen the range accordingly.

---

## 6. Where to find the numbers

Search for the most recent edition of each source and cite the year.

- **Workforce totals:** UK ONS Labour Force Survey and Tech Nation reports; Eurostat and national statistics offices; US Bureau of Labor Statistics and CompTIA's state of the tech workforce; LinkedIn Economic Graph publications.
- **Skill and tool shares:** Stack Overflow Developer Survey, JetBrains State of Developer Ecosystem, GitHub Octoverse, dbt Labs State of Analytics Engineering, DataTalks.Club surveys.
- **Demand signals:** IT Jobs Watch (UK) and job-board counts. These measure **demand** (job ads), not **supply** (people). Use them for the reality check and market dynamics, never as a funnel step.
- **GTM benchmarks:** The Bridge Group SDR and AE reports, RepVue, Pavilion compensation reports.
- **Pay:** salary guides from recruiters such as Hays, Robert Half, Michael Page, Harvey Nash, Morgan McKinley; Levels.fyi and Glassdoor for crowd-reported pay.

Never quote a figure from a source you haven't opened in this session.
