# Blog Writing & Reviewing Skills — Design Spec

**Date:** 2026-05-07
**Status:** Approved (no commit)
**Owner:** jhseo

## Goal

Provide two complementary skills that share a single source of truth for what good blog writing looks like:

1. `writing-blog-post` — guides drafting a post (process + principles).
2. `reviewing-blog-post` — audits a finished or in-progress post against the same principles, defaulting to auto-fix.

The skills must produce posts that:

- Do not feel AI-generated.
- Read as professional to software engineers.
- Are highly readable — ideally feel "just good".
- Use a simple analogy whenever the content is hard.

The skills are language-agnostic in their rule content. Patterns are extracted from established engineering writing (Anthropic, OpenAI, React team blogs; engineers such as Kent C. Dodds, Addy Osmani, Josh Comeau, Lee Robinson, Martin Fowler, Andrej Karpathy) but generalized — no name attribution in the rule text. The principles are presented as universal craft, not personal style.

## Architecture

Two thin process skills share one reference set. The reference is plain Markdown, not a skill itself, so it is never auto-invoked.

```
.agents/
├── references/
│   └── writing-principles/
│       ├── README.md            ← entry point + how to consume
│       ├── voice.md             ← tone, AI-smell removal
│       ├── structure.md         ← hook, motion, paragraph
│       ├── analogy.md           ← analogy construction rules
│       ├── readability.md       ← rhythm, sentence length, lists
│       └── anti-patterns.md     ← reject-on-sight patterns
└── skills/
    ├── writing-blog-post/SKILL.md
    └── reviewing-blog-post/SKILL.md

.claude/skills/
├── writing-blog-post           → ../../.agents/skills/writing-blog-post (symlink)
└── reviewing-blog-post         → ../../.agents/skills/reviewing-blog-post (symlink)
```

**Why a shared reference instead of duplicating rules into each SKILL.md:**
The two skills enforce the _same_ rule set. Embedding the rules in both files invites drift — a fix in one is forgotten in the other, and the auto-fix loop ends up disagreeing with itself. A single source of truth keeps the writing/reviewing loop coherent.

**Why the reference is not a SKILL:**
Claude indexes `SKILL.md` files for auto-invocation. A reference that should only be loaded by other skills must not look like a skill, or it will be triggered out of context.

## `writing-principles` Reference Content

Categories (final phrasing produced during implementation):

### `voice.md`

- First-person observation as default opening (concrete entry, not abstract generality).
- Declarative voice — strip hedges like "may be", "seems", "could be considered".
- No meta narration ("In this post...", "To summarize...", "Let's now look at...").
- No bothsidesing conclusions ("there are pros and cons, depending on the situation").
- Restrain stock intensifiers ("very", "really", "extremely", "essentially").

### `structure.md`

- The first 1–2 sentences declare why the reader should care. Never open with a definition.
- Order: motivation → what it is → how it works (motivation first, definition second).
- One idea per paragraph. Short paragraphs.
- Code/diagrams come _after_ the claim they support, as evidence — not before it.
- The closing is implication, not summary — "so what does this mean".

### `analogy.md`

- Hard concepts (concurrency, type systems, compiler stages, abstract data structures, distributed protocols) require one everyday analogy.
- The analogy must share _mechanism_, not surface appearance.
- State the limit of the analogy explicitly: "this analogy holds up to X, then breaks".
- Two or three analogies in one post is too many — keep one load-bearing analogy.

### `readability.md`

- Vary sentence length deliberately — alternate short and medium for rhythm.
- A sentence with three or more commas is a split signal.
- Minimize passive voice and double negatives.
- Define a term the first time it appears, in one line.
- Use a list only when there are three or more parallel items; otherwise prose.

### `anti-patterns.md`

- Meta markers: "To put it simply", "In short", "To wrap up".
- Emoji or `**bold**` overuse.
- Table-of-contents declarations: "In this post we will cover...".
- Self-citation: "as we saw above".
- Hollow closings: "give it a try yourself".
- Balanced both-sides AI conclusions.
- Same sentence structure repeated three times in a row.
- Three-item parallel cliché ("fast, reliable, and powerful").

## `writing-blog-post` Skill

**Frontmatter description:**

> Use when drafting or writing a blog post — covers structure, voice, analogies, and readability. Always invoke when user explicitly asks to write/draft a post; chains reviewing-blog-post at the end.

**Process:**

1. **Preconditions.** Confirm the user has explicitly asked to write a post (CLAUDE.md forbids creation without consent). Confirm topic, central claim, and target reader — ask one missing piece at a time.
2. **Load principles.** Read all five files under `.agents/references/writing-principles/`.
3. **Skeleton agreement.** Propose a skeleton: hook (1 sentence), 3–5 sections, closing implication (1 sentence). Reject any opening that starts from a definition. Do not draft the body until the user approves the skeleton.
4. **Drafting.** Write one section at a time. After each section, self-check against `anti-patterns.md`. For sections with hard concepts, apply `analogy.md` and add one analogy. Place code/diagrams _after_ the claim they support.
5. **MDX scaffolding.** Follow the existing CLAUDE.md "New Blog Post Workflow": `content/blog/<slug>.mdx`, frontmatter (`title`, `description`, `author: seonest`, `date`). Use `pnpm tz` for the date. Image path: `public/post/<category>/<slug>/`.
6. **Review chain.** At the end of the draft, automatically invoke `reviewing-blog-post` in auto-fix mode. If the user previously asked for review-only, chain in review-only mode instead.

**Out of scope:**

- Auto-deciding category — user must specify.
- Image generation/insertion.
- Git commits.

## `reviewing-blog-post` Skill

**Frontmatter description:**

> Use to review or critique a blog post draft against writing principles. Default mode auto-edits the file with a diff; switches to review-only mode when user explicitly asks for feedback without edits ("review only", "리뷰만", "자동수정 말고", etc.).

**Mode selection (first step in the skill body):**

1. If the invocation context contains any of the explicit review-only signals (e.g. "review only", "리뷰만", "검토만", "자동수정 말고", "수정하지 말고", "feedback only"), select **review-only** mode.
2. Otherwise default to **auto-fix** mode.
3. Announce the chosen mode to the user in one line before starting.

**Process:**

1. **Identify target.** Use the file path argument if given. Otherwise, surface candidates from `git status` or recent `content/blog/*.mdx` changes and ask the user to confirm.
2. **Load principles.** Read all five files under `.agents/references/writing-principles/`.
3. **Apply the rule set.** Run a comprehensive pass over the post against each of the five rule files.
4. **Output by mode:**
   - **auto-fix (default):** Use the Edit tool to apply each fix in place. At the end, emit a _change summary_: `<file:line> — [rule] before → after / one-line reason`. If more than five entries, group by category. Append a "review recommended" section listing items where automatic judgment was unsafe (e.g. analogy fitness, claims that depend on the user's first-person experience).
   - **review-only:** Do not call Edit. Output `<file:line> — [rule] excerpt / one-line why / one-line suggested fix`. End with a 2–3 sentence overall assessment (strengths, weaknesses, top remediation).
5. **No further chaining.** Review is the terminal step regardless of how it was invoked.

**Safeguards:**

- **Auto-fix exclusion zones.** Do not edit content inside fenced code blocks, blockquotes, or frontmatter authored by the user.
- **Auto-fix cap.** Limit auto-applied fixes per run (default 30). When exceeded, apply the highest-impact fixes first and report the remainder in review-only format with a "further review needed" notice.
- **Preserve authorial voice.** A user's intentional repetition or personal phrasing can read like an "AI smell" by accident. Auto-fix only when the rule violation is unambiguous; downgrade ambiguous cases to the review-only list.

## Integration Flows

**Scenario A — User asks to write a post.**
User → `writing-blog-post` invoked → skeleton agreement → drafting → chain `reviewing-blog-post` (auto-fix) → change summary.

**Scenario B — User asks to review a draft.**
User → `reviewing-blog-post` invoked (auto-fix) → fixes applied → change summary.

**Scenario C — User asks for review only.**
User → `reviewing-blog-post` invoked (review-only) → file:line findings + suggestions + overall assessment. No edits.

## Compatibility

- Independent of existing skills (`web-design-guidelines`, `vercel-react-best-practices`, `remotion-best-practices`).
- The two new skill descriptions are non-overlapping (write vs review).
- Absorbs the existing CLAUDE.md "New Blog Post Workflow" — does not replace or contradict it.

## Explicitly Out of Scope

- Slash commands (`/write-post`, `/review-post`) — may be added later if friction shows up.
- A `_shared` directory — not used; references live in `.agents/references/`.
- Marking the principles bundle as a SKILL — would cause unintended auto-invocation.
- Automatic git commits.
- Automatic category selection.
