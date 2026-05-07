---
name: reviewing-blog-post
description: Use to review or critique a blog post draft against writing principles. Default mode auto-edits the file with a diff. Switches to review-only mode when the user explicitly asks for feedback without edits ("review only", "리뷰만", "자동수정 말고", "feedback only", etc.).
---

# Reviewing a Blog Post

Audits a draft against the same principles used by `writing-blog-post`. The
default behavior edits the file in place. Review-only mode reports findings
without editing.

## 1. Choose the mode

Auto-fix is the default. Switch to **review-only** if the invocation contains
any of these explicit signals:

- English: "review only", "feedback only", "don't edit", "no auto-fix",
  "just review".
- Korean: "리뷰만", "검토만", "자동수정 말고", "수정하지 말고",
  "고치지 말고".

Announce the chosen mode in one line before doing any work:

> "auto-fix mode — I will edit the file in place. Ask for review-only if you
> just want feedback."

## 2. Identify the target

- If a file path was passed, use it.
- Otherwise, list candidates from `git status` and recent edits to
  `content/blog/*.mdx`. Ask the user to pick one.

## 3. Load the principles

Read `.agents/references/writing-principles.md` — it covers voice, structure,
analogy, readability, and anti-patterns in one file.

## 4. Apply the rule set

Run a comprehensive pass and collect every violation. For each, record:

- File path and line.
- Which rule it violates (section name + a one-line restatement).
- The original excerpt.
- The proposed fix.

### Auto-fix exclusion zones (always skip)

Do not edit content inside any of these:

- Fenced code blocks (` ``` `).
- Blockquotes (lines starting with `>`).
- Frontmatter (`---` … `---`) authored by the user.
- URLs, file paths, and identifiers.

### Auto-fix safety rules

- Apply a fix automatically only when the rule violation is unambiguous.
- Downgrade ambiguous cases (analogy fitness, claims rooted in the user's
  first-person experience, intentional repetition) to the review-only list.
- Cap auto-applied fixes at 30 per run. If exceeded, apply the highest-impact
  fixes first and report the rest in review-only format with a "further
  review needed" notice.

## 5. Output

### Auto-fix mode (default)

1. Apply each fix via `Edit`.
2. Print a change summary in the form
   `<file:line> — [rule] before → after / one-line reason`.
3. If more than five entries, group by section and show counts.
4. Append a "review recommended" section listing items where automatic
   judgment was unsafe (ambiguous cases, items beyond the cap).

### Review-only mode

1. Do not call `Edit`.
2. Print findings in the form
   `<file:line> — [rule] excerpt / one-line why / one-line suggested fix`.
3. End with a 2–3 sentence overall assessment: strengths, weaknesses, the
   single highest-impact fix.

## 6. No further chaining

Review is the terminal step. Whether invoked directly or chained from
`writing-blog-post`, do not chain anything after this skill.
