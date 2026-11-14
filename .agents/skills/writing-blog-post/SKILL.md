---
name: writing-blog-post
description: "Use when drafting or writing a blog post — covers structure, voice, analogies, and readability. Always invoke when the user explicitly asks to write or draft a post; chains reviewing-blog-post at the end of the draft."
---

# Writing a Blog Post

Drafts blog posts that read as professional engineering writing. Shares its
rule set with `reviewing-blog-post` via the `writing-principles` reference,
so what you write here is what the reviewer will accept.

## Preconditions

1. The user has explicitly asked to write or draft a post. If unclear, stop and
   confirm — `AGENTS.md` forbids creating posts without consent. A request to
   create a post scaffold follows its metadata-only workflow; draft body content
   only when the user explicitly requests it.
2. Topic, central claim, and target reader are known. If any is missing, ask
   one question at a time. Do not guess.
3. Language and register are settled. Default: Korean in 합니다체 (see the
   Voice section of `writing-principles.md`). If the user has asked for any
   other language, confirm it before drafting and skip the Korean-specific
   register rule — the rest of Voice still applies.

## Process

### 1. Load the principles

Read `.agents/references/writing-principles.md` — it covers voice, structure,
analogy, readability, and anti-patterns in one file.

Treat it as the operating manual for the rest of this skill.

For Korean prose, also read the `natural-korean` skill: it owns whether a
sentence reads as written in Korean or as translated.

### 2. Agree on a skeleton

Propose a skeleton before drafting. Format:

- Hook — one sentence. Concrete. Not a definition.
- 3–5 sections, each with a one-line claim.
- Closing implication — one sentence. Not a summary.

Reject any skeleton that opens with a definition or a table-of-contents
sentence. Show the proposed skeleton to the user and wait for approval before
writing the body.

### 3. Draft one section at a time

For each section:

1. Write the section.
2. Self-check against the Anti-Patterns section. Rewrite the offending
   paragraph rather than patching the surface.
3. If the section explains a concept on the Analogy section's required list,
   add one analogy. Share mechanism, not appearance. State the limit.
4. Place code or diagrams _after_ the claim they support, never before.
5. For Korean prose, run steps 1–3 and 5 of `natural-korean` on the section
   before moving on. Its step 4 sweep runs once, over the whole draft, after
   the last section.

### 4. Scaffold the MDX file

Read `AGENTS.md` and follow its "New Blog Post Workflow", "Post Conventions",
and media rules. Use the requested blog or note route group, the `metadata`
export, and the global `PostMeta` component defined there. Populate the body
only within the user's explicit drafting request.

### 5. Chain the review

After the draft is complete, invoke `reviewing-blog-post` automatically.

- Default: auto-fix mode.
- If the user previously asked for review-only, chain in review-only mode.

## Out of Scope

- Choosing the post category — the user must specify.
- Generating or inserting images.
- Running `git commit` — leave the file in the working tree for the user.
