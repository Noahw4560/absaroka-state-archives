# Absaroka Content and Evidence Guide

## How to enter a new political publication

1. Open Pages CMS and select **Statements & newspapers**.
2. Name the entry using the document's actual title. The filename becomes the permanent record ID.
3. Record the in-character date to the precision shown in the source. Use “Undated” if none is provided.
4. Identify issuer and provenance (e.g. “Zapatista League poster; player-provided image”).
5. Upload the original image, or its optimized copy, through the media picker.
6. Summarize *what the publisher claims*, without affirming unverified allegations.
7. Link involved people, organizations, and preceding/reply documents by record slug.
8. Save. The site refreshes after the GitHub Actions deployment finishes.

## Source classifications

| Value | Meaning |
|---|---|
| `official` | Confirmed office/roster/procedural record or player-confirmed character fact. Does not guarantee all claims in a record are true. |
| `documented` | A real in-world publication, image, letter or newspaper supplied by the player. Its *existence* is supported. |
| `attributed` | Claim made in a particular source, without the full corroborating original or final legal records. |
| `unverified` | Disputed, contradictory or unsubstantiated information. |
| `proposed` | A hypothetical idea, draft or AI-generated story element that is not server canon. |

## Example — responsibly describing a controversy

**Incorrect:** “Whitcombe illegally oppressed the Mexican people.”

**Better:** “A 1923 Zapatista League poster accused Senator Whitcombe of discriminating against Mexican communities. The poster did not provide a court ruling or independently confirmed incident.”

## Links and dates

- Keep `related` IDs unique across collections; they correspond to Markdown filenames.
- Retain original poster wording, even when it includes a typo, and explain the typo in a note instead of silently altering a scan.
- One `sortDate` can be used for ordering when a document gives only a month, but do not use it as evidence for an exact day.
- To preserve history, add a **new dated roster snapshot** before replacing the old file if the government has changed. You can copy `src/data/roster.json` into versioned source control or create a historical event documenting the transition.

## Roles and security

The public Pages link is not a built-in login. Editors authorize with GitHub through the separate Pages CMS site. Never commit passwords, players' personal information, secret Discord channels, or unpublished private allegations to a public GitHub repository. A `published: false` field only hides website output—not the public Git history.
