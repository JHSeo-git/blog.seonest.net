# Blog Writing & Reviewing Skills Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship two complementary skills (`writing-blog-post`, `reviewing-blog-post`) backed by a single shared `writing-principles` reference set.

**Architecture:** Two thin process skills under `.agents/skills/`, surfaced through `.claude/skills/` symlinks. Both skills read the same five Markdown files under `.agents/references/writing-principles/` so the writing and reviewing loops always agree on what "good writing" means.

**Tech Stack:** Plain Markdown files, symlinks managed by `ln`, no runtime code.

**Commit policy:** No commits during this implementation — user requested. Run verification, leave changes in working tree.

---

## File Structure

**Reference (loaded at runtime by both skills):**

- `.agents/references/writing-principles/README.md` — entry point; explains the bundle and load order.
- `.agents/references/writing-principles/voice.md` — tone, declarative voice, anti-AI-smell rules.
- `.agents/references/writing-principles/structure.md` — hook, motivation-first ordering, paragraph rules.
- `.agents/references/writing-principles/analogy.md` — when/how to construct analogies.
- `.agents/references/writing-principles/readability.md` — sentence rhythm, list rules, term definition.
- `.agents/references/writing-principles/anti-patterns.md` — reject-on-sight patterns.

**Skills:**

- `.agents/skills/writing-blog-post/SKILL.md` — drafting process. Reads all five reference files. Chains the review skill at end of draft.
- `.agents/skills/reviewing-blog-post/SKILL.md` — review process. Reads all five reference files. Mode-aware (auto-fix default; review-only when explicitly requested).

**Symlinks (so Claude discovers the skills):**

- `.claude/skills/writing-blog-post` → `../../.agents/skills/writing-blog-post`
- `.claude/skills/reviewing-blog-post` → `../../.agents/skills/reviewing-blog-post`

**Note:** `writing-principles/` is _not_ symlinked into `.claude/skills/`. It must not be auto-discovered as a skill — it's a reference, loaded by the two real skills via `Read`.

---

### Task 1: Scaffold directories

**Files:**

- Create dir: `.agents/references/writing-principles/`
- Create dir: `.agents/skills/writing-blog-post/`
- Create dir: `.agents/skills/reviewing-blog-post/`

- [ ] **Step 1: Create the directories**

```bash
mkdir -p .agents/references/writing-principles \
         .agents/skills/writing-blog-post \
         .agents/skills/reviewing-blog-post
```

- [ ] **Step 2: Verify**

```bash
ls -d .agents/references/writing-principles .agents/skills/writing-blog-post .agents/skills/reviewing-blog-post
```

Expected: three matching directories listed, no errors.

---

### Task 2: Write `writing-principles/README.md`

**Files:**

- Create: `.agents/references/writing-principles/README.md`

- [ ] **Step 1: Write the file**

```markdown
# Writing Principles

Shared reference loaded by `writing-blog-post` and `reviewing-blog-post` skills.
This is **not** a skill itself — do not invoke it directly. Read its files when
running one of those skills.

## How to use

When invoked from a skill, Read all five files in this order:

1. `voice.md` — tone and declarative posture.
2. `structure.md` — hook, motivation-first ordering, paragraph rhythm.
3. `analogy.md` — when an analogy is required and how to build one.
4. `readability.md` — sentence-level rhythm and list rules.
5. `anti-patterns.md` — patterns to reject or rewrite on sight.

Each file is small and self-contained. Apply every rule unless a rule explicitly
defers to another file.

## Posture

The principles are language-agnostic. They are distilled from established
engineering writing — not attributed to any single author. Treat them as craft,
not personal style.

The aim of every rule:

1. The post must not feel AI-generated.
2. It must read as professional to software engineers.
3. It must be highly readable — ideally feel "just good".
4. Hard concepts must be carried by one everyday analogy.
```

- [ ] **Step 2: Verify**

```bash
test -s .agents/references/writing-principles/README.md && echo OK
```

Expected: `OK`.

---

### Task 3: Write `writing-principles/voice.md`

**Files:**

- Create: `.agents/references/writing-principles/voice.md`

- [ ] **Step 1: Write the file**

```markdown
# Voice

Tone and posture. Apply to every paragraph.

## Default to first-person observation

Open from a concrete moment, not an abstract category.

- Bad: "Concurrency is a hard topic in modern software."
- Good: "I spent two hours staring at a deadlock that only happened on Tuesdays."

## Declarative voice

Strip hedges. The reader is not asking for your uncertainty.

- Replace "may be", "seems", "could be considered", "might want to" with the
  underlying claim or remove the sentence.
- "It can be argued that X" → "X."
- If you genuinely don't know, say "I don't know" and explain what would change
  your mind. That is stronger than a hedge.

## No meta narration

Cut sentences that talk about the post instead of the topic.

- "In this post we'll cover…"
- "To summarize what we've discussed so far…"
- "Let's now look at…"

The reader can see the structure. Don't narrate it.

## No bothsidesing endings

A conclusion that says "there are pros and cons, depending on the situation"
is a refusal to think. Take a position. If the position is conditional, name
the condition precisely — "use X when the working set fits in memory; use Y
otherwise" — not "it depends".

## Restrain stock intensifiers

"Very", "really", "extremely", "essentially", "fundamentally" almost always
signal that the underlying word is too weak. Replace the weak word, then drop
the intensifier.
```

- [ ] **Step 2: Verify**

```bash
test -s .agents/references/writing-principles/voice.md && echo OK
```

Expected: `OK`.

---

### Task 4: Write `writing-principles/structure.md`

**Files:**

- Create: `.agents/references/writing-principles/structure.md`

- [ ] **Step 1: Write the file**

```markdown
# Structure

How the post moves from first sentence to last.

## Open with a hook, not a definition

The first one or two sentences declare why the reader should care. They are
specific and concrete — a moment, a number, a contradiction.

A definition opening ("X is a technique for…") is the AI default. Avoid it.
If the reader needs the definition, deliver it after the hook has earned the
attention.

## Motivation → what → how

The body moves in this order:

1. Motivation — the problem the reader has, or the surprise that started the
   investigation.
2. What — the idea, named and defined.
3. How — the mechanism, with code or diagrams as evidence.

Definitions before motivation read like a textbook. Mechanism before "what"
reads like a manual page. Neither is a blog post.

## One idea per paragraph

A paragraph that introduces a concept, defends it, and qualifies it is doing
three jobs. Split it.

Short paragraphs are not a stylistic flourish. They are a signal to the reader
that they may stop and think.

## Code and diagrams come after the claim

State the claim in prose. Then show code or a diagram as evidence for the
claim. A code block thrown in before its argument forces the reader to infer
what they are looking at.

## Close with implication, not summary

The last paragraph answers "so what does this mean for the reader's work
tomorrow?" — not "here is what we covered". A summary closing is filler.
```

- [ ] **Step 2: Verify**

```bash
test -s .agents/references/writing-principles/structure.md && echo OK
```

Expected: `OK`.

---

### Task 5: Write `writing-principles/analogy.md`

**Files:**

- Create: `.agents/references/writing-principles/analogy.md`

- [ ] **Step 1: Write the file**

```markdown
# Analogy

Hard concepts require one everyday analogy. This is rule four of the four
goals — the one that decides whether a difficult post is readable.

## When an analogy is required

If the section explains any of the following, an analogy is required:

- Concurrency, locks, ordering guarantees, memory models.
- Type systems, variance, higher-kinded types.
- Compiler stages, IR, optimization passes.
- Distributed protocols, consensus, eventual consistency.
- Abstract data structures (B-trees, tries, skip lists).
- Performance phenomena (cache lines, branch prediction, GC pauses).

The test: if a competent engineer outside this subdomain would have to re-read
the paragraph, an analogy is required.

## Share mechanism, not appearance

A good analogy preserves the _behavior_ of the system, not its surface look.

- Good: "A mutex is the bathroom key on a hook by the door — only one person
  has it at a time, and you have to put it back."
- Bad: "A mutex is like a traffic light." (A traffic light coordinates many
  parties on a schedule. A mutex is one-at-a-time mutual exclusion. The
  surface is similar; the mechanism is not.)

## State the limit

Every analogy breaks somewhere. Name the break.

- "This bathroom-key analogy holds for fairness and exclusion. It breaks when
  you need reentrancy — a person can't take the key while still holding it."

Naming the limit prevents the reader from over-extending the analogy and
arriving at a wrong conclusion.

## One analogy per post

Two or three analogies in one post fragment the reader's mental model. Keep
one load-bearing analogy and let it carry the post.

If a second concept is hard enough to need its own analogy, the post is
covering too much — split it.
```

- [ ] **Step 2: Verify**

```bash
test -s .agents/references/writing-principles/analogy.md && echo OK
```

Expected: `OK`.

---

### Task 6: Write `writing-principles/readability.md`

**Files:**

- Create: `.agents/references/writing-principles/readability.md`

- [ ] **Step 1: Write the file**

```markdown
# Readability

Sentence-level rhythm and presentation.

## Vary sentence length

Alternate short and medium sentences. A run of four medium sentences in a row
is a wall. A short sentence after a medium one is a beat.

This is not decoration. It is how the reader breathes through the post.

## Three commas is a split signal

A sentence with three or more commas is usually two sentences in disguise.
Split it. If it cannot be split, the underlying thought is probably tangled —
rewrite the thought first, then the sentence.

## Minimize passive voice and double negatives

- "The cache was invalidated by the worker" → "The worker invalidated the
  cache."
- "It is not unreasonable to assume X" → "X is reasonable."

Active voice and direct phrasing reduce the reader's working-set size.

## Define a term the first time it appears

One line, inline. No callout box, no glossary link unless the term has a
nontrivial history.

- "We rely on a write-ahead log (WAL) — every change is appended to a log
  before the in-memory state is updated."

Defining late is worse than defining early. Defining never is hostile.

## Lists only for three or more parallel items

Two-item lists are prose pretending to be a list. Convert them.

- Bad:
  - The cache is fast.
  - The cache is small.
- Good: "The cache is fast and small."

For three or more items, use a list — but only if the items are actually
parallel. Mixed types in a list ("the cache is fast, the disk is slow, and
we use Redis") signal that prose would have served better.
```

- [ ] **Step 2: Verify**

```bash
test -s .agents/references/writing-principles/readability.md && echo OK
```

Expected: `OK`.

---

### Task 7: Write `writing-principles/anti-patterns.md`

**Files:**

- Create: `.agents/references/writing-principles/anti-patterns.md`

- [ ] **Step 1: Write the file**

```markdown
# Anti-Patterns

Reject on sight. If the draft contains any of these, rewrite the surrounding
paragraph rather than patching the symptom.

## Meta markers

Phrases that announce a section instead of writing it.

- "To put it simply" / "한 마디로"
- "In short" / "정리하자면"
- "To wrap up" / "결론부터 말하자면"
- "Long story short"

If the next sentence is the simple version, just write the simple version.

## Emoji and bold overuse

- More than one emoji per section is decoration, not signal.
- More than two `**bold**` spans per paragraph degrades into shouting. Bold one
  thing — the load-bearing claim of the paragraph — or none.

## Table-of-contents declarations

- "In this post we will cover the following:"
- "Here is what we'll discuss:"

The headings already do this. Cut.

## Self-citation

- "As we saw above"
- "Recall from the previous section"

If the reader needs the recall, the previous section was unclear. Fix the
section, not the recall.

## Hollow closings

- "Give it a try yourself!"
- "Hope this helps!"
- "Let me know what you think in the comments."

Closings either deliver an implication or they are filler. Pick the
implication.

## Both-sides AI conclusions

- "There are pros and cons depending on the situation."
- "Ultimately, it depends on your use case."

If the position is conditional, name the condition. If you don't have a
position, the post is not finished.

## Repeated sentence structure

Three sentences in a row built on the same skeleton — "X is Y. A is B. M is
N." — is a tell. Vary the form.

## Three-item parallel cliché

"Fast, reliable, and powerful." "Simple, scalable, and secure." These triples
are advertising copy. Replace with one specific claim or cut.
```

- [ ] **Step 2: Verify**

```bash
test -s .agents/references/writing-principles/anti-patterns.md && echo OK
```

Expected: `OK`.

---

### Task 8: Write `writing-blog-post/SKILL.md`

**Files:**

- Create: `.agents/skills/writing-blog-post/SKILL.md`

- [ ] **Step 1: Write the file**

```markdown
---
name: writing-blog-post
description: Use when drafting or writing a blog post — covers structure, voice, analogies, and readability. Always invoke when the user explicitly asks to write or draft a post; chains reviewing-blog-post at the end of the draft.
---

# Writing a Blog Post

Drafts blog posts that read as professional engineering writing. Shares its
rule set with `reviewing-blog-post` via the `writing-principles` reference,
so what you write here is what the reviewer will accept.

## Preconditions

1. The user has explicitly asked to write or draft a post. If unclear, stop and
   confirm — `CLAUDE.md` forbids creating posts without consent.
2. Topic, central claim, and target reader are known. If any is missing, ask
   one question at a time. Do not guess.

## Process

### 1. Load the principles

Read all five files, in order:

- `.agents/references/writing-principles/voice.md`
- `.agents/references/writing-principles/structure.md`
- `.agents/references/writing-principles/analogy.md`
- `.agents/references/writing-principles/readability.md`
- `.agents/references/writing-principles/anti-patterns.md`

Treat them as the operating manual for the rest of this skill.

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
2. Self-check against `anti-patterns.md`. Rewrite the offending paragraph
   rather than patching the surface.
3. If the section explains a concept on the analogy-required list in
   `analogy.md`, add one analogy. Share mechanism, not appearance. State the
   limit.
4. Place code or diagrams _after_ the claim they support, never before.

### 4. Scaffold the MDX file

Follow the existing `CLAUDE.md` "New Blog Post Workflow":

- Path: `content/blog/<slug>.mdx`. Slug is kebab-case from the title.
- Frontmatter: `title`, `description`, `author: seonest`, `date` (ISO 8601 UTC,
  obtain via `pnpm tz`).
- Image path, if any: `public/post/<category>/<slug>/`.

### 5. Chain the review

After the draft is complete, invoke `reviewing-blog-post` automatically.

- Default: auto-fix mode.
- If the user previously asked for review-only, chain in review-only mode.

## Out of Scope

- Choosing the post category — the user must specify.
- Generating or inserting images.
- Running `git commit` — leave the file in the working tree for the user.
```

- [ ] **Step 2: Verify**

```bash
test -s .agents/skills/writing-blog-post/SKILL.md && head -5 .agents/skills/writing-blog-post/SKILL.md
```

Expected: file present; first lines show `---` and `name: writing-blog-post`.

---

### Task 9: Write `reviewing-blog-post/SKILL.md`

**Files:**

- Create: `.agents/skills/reviewing-blog-post/SKILL.md`

- [ ] **Step 1: Write the file**

````markdown
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

Read all five files, in order:

- `.agents/references/writing-principles/voice.md`
- `.agents/references/writing-principles/structure.md`
- `.agents/references/writing-principles/analogy.md`
- `.agents/references/writing-principles/readability.md`
- `.agents/references/writing-principles/anti-patterns.md`

## 4. Apply the rule set

Run a comprehensive pass and collect every violation. For each, record:

- File path and line.
- Which rule it violates (file name + a one-line restatement).
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
3. If more than five entries, group by rule file and show counts.
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
````

- [ ] **Step 2: Verify**

```bash
test -s .agents/skills/reviewing-blog-post/SKILL.md && head -5 .agents/skills/reviewing-blog-post/SKILL.md
```

Expected: file present; first lines show `---` and `name: reviewing-blog-post`.

---

### Task 10: Create symlinks under `.claude/skills/`

**Files:**

- Create symlink: `.claude/skills/writing-blog-post`
- Create symlink: `.claude/skills/reviewing-blog-post`

- [ ] **Step 1: Create the symlinks**

```bash
ln -s ../../.agents/skills/writing-blog-post   .claude/skills/writing-blog-post
ln -s ../../.agents/skills/reviewing-blog-post .claude/skills/reviewing-blog-post
```

- [ ] **Step 2: Verify symlinks resolve**

```bash
ls -l .claude/skills/writing-blog-post .claude/skills/reviewing-blog-post
test -f .claude/skills/writing-blog-post/SKILL.md && echo writing-OK
test -f .claude/skills/reviewing-blog-post/SKILL.md && echo reviewing-OK
```

Expected: both symlinks listed, both prints `writing-OK` and `reviewing-OK`.

---

### Task 11: Final verification

- [ ] **Step 1: Confirm all eight content files exist and are non-empty**

```bash
for f in \
  .agents/references/writing-principles/README.md \
  .agents/references/writing-principles/voice.md \
  .agents/references/writing-principles/structure.md \
  .agents/references/writing-principles/analogy.md \
  .agents/references/writing-principles/readability.md \
  .agents/references/writing-principles/anti-patterns.md \
  .agents/skills/writing-blog-post/SKILL.md \
  .agents/skills/reviewing-blog-post/SKILL.md; do
  test -s "$f" && echo "OK $f" || echo "MISSING $f"
done
```

Expected: eight `OK` lines.

- [ ] **Step 2: Confirm SKILL.md frontmatter is well-formed**

```bash
for f in .agents/skills/writing-blog-post/SKILL.md .agents/skills/reviewing-blog-post/SKILL.md; do
  awk 'NR==1 && $0=="---"{ok=1} /^name:/{n=1} /^description:/{d=1} END{if(ok&&n&&d) print "FM-OK '$f'"; else print "FM-BAD '$f'"}' "$f"
done
```

Expected: two `FM-OK …` lines.

- [ ] **Step 3: Confirm reference dir is NOT exposed under `.claude/skills/`**

```bash
test ! -e .claude/skills/writing-principles && echo "shielded-OK" || echo "shielded-FAIL"
```

Expected: `shielded-OK`.

- [ ] **Step 4: Leave changes uncommitted**

Per user instruction, do not run `git add` or `git commit`. Print a closing
summary that lists the new paths and the two symlinks so the user can review
and commit at their discretion.

---

## Self-Review

- **Spec coverage:** every section of the spec maps to a task — references → tasks 2–7, writing skill → task 8, reviewing skill → task 9, symlinks → task 10, verification → task 11.
- **Placeholder scan:** no TBDs, no "fill in later". Every code block is final content.
- **Type consistency:** rule file names are stable across the README, the writing skill, and the reviewing skill (`voice.md`, `structure.md`, `analogy.md`, `readability.md`, `anti-patterns.md`). Skill names match between SKILL.md frontmatter and symlink targets.
- **Commit policy:** explicit no-commit instruction is honored — task 11 step 4 closes the loop.
