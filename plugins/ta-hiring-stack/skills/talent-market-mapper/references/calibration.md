# Calibration: anchoring estimates to a LinkedIn Recruiter count

A top-down funnel multiplies five or six percentages together, and each one has its own error. Small errors compound: a 20% overestimate at each of four steps doubles the final number. That's why a top-down estimate can land 2 to 3 times away from reality.

LinkedIn Recruiter searches real profiles. For the tight scenario, its result count is close to ground truth. Most in-house TA teams have Recruiter seats, so ask for the count whenever you can. It's the single biggest accuracy improvement available.

## How to ask for the count

"Run a LinkedIn Recruiter search with the brief exactly as written (same title variants, must-have skills, seniority, location and current company size) and tell me the number of results." If they have LinkedIn Talent Insights, its count works the same way.

## The maths

```
calibration_factor = recruiter_count / tight_estimate

tight_calibrated = recruiter_count
base_calibrated  = base_estimate  x calibration_factor
broad_calibrated = broad_estimate x calibration_factor
```

This assumes your relative spread between tight, base and broad is right even if the absolute level is off. That's reasonable because the three scenarios share one funnel and differ only in which filters are relaxed.

## Worked example

London, Senior Software Engineer, TypeScript + Node.js + Python, 11 to 1,000 person companies.

| Scenario | Top-down estimate | Recruiter count | Calibrated |
| --- | --- | --- | --- |
| Tight | 240 | 722 | 722 |
| Base | 420 | | 1,264 |
| Broad | 980 | | 2,949 |

Calibration factor: 722 / 240 = 3.0.

Explain the factor in the report's methodology in plain language, with the most likely cause. For this example: "The top-down estimate was about three times too low. The most likely reason is that Python is far more common among senior TypeScript and Node.js engineers in London than global surveys suggest, because of how many fintech and data-heavy teams use all three together."

## Reading the factor

- **0.9 to 1.1:** the funnel was well calibrated. Still use the Recruiter count as the tight figure, because it's more defensible, and say the two agreed within 10%.
- **Between 0.33 and 3:** normal. Apply the factor and explain the likely cause (see the known biases in `role-families.md`).
- **Above 3 or below 0.33:** a red flag. Don't apply it blindly. Usually one of three things has happened:
  - The Recruiter filters aren't doing what the person thinks (for example, company size applied to past roles rather than the current one, or an "open to work" filter left on).
  - The funnel is missing a whole group (for example, contractors are excluded from the funnel but included in Recruiter).
  - The role family is wrong (for example, an applied ML role sized with a general software funnel).

  Ask the person to check their filters, or proceed with the scaled numbers and a clear caveat. Let them choose.

## Without a count

Skip calibration cleanly and never invent a number. Put this in the pool section note: "No LinkedIn Recruiter count supplied. These are top-down estimates; the real pool is typically within about 40% either way. Run a Recruiter search with the tight brief to calibrate them."
