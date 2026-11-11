# Writing Principles

Shared reference loaded by `writing-blog-post` and `reviewing-blog-post` skills.
This is **not** a skill itself — do not invoke it directly. Read this file when
running one of those skills.

The principles are distilled from established engineering writing — not
attributed to any single author. Most rules apply to writing in any language;
the Voice section pins the Korean register the blog actually publishes in,
and the `natural-korean` skill owns sentence-level Korean naturalness.
Treat the rules as craft, not personal style.

The aim of every rule:

1. The post must not feel AI-generated.
2. It must read as professional to software engineers.
3. It must be highly readable — ideally feel "just good".
4. Hard concepts must be carried by one everyday analogy.

Apply every rule unless a rule explicitly defers to another section.

Every rule also applies to the post's exported title and description. They
are the most-read sentences of the post — display copy, not configuration.

## Voice

Tone and posture. Apply to every paragraph.

### Korean posts use 합니다체

The blog's posts are written in Korean. The default register is **합니다체** —
the formal-polite declarative ending ("~합니다", "~입니다", "~습니다"). The
posture is courteous and professional, like talking to a colleague you respect
but don't joke around with.

- 해요체 ("~해요", "~이에요", "~거든요") drifts toward casual blog tone. Avoid.
- 반말 ("~한다", "~이다") reads like a textbook entry, not a post. Avoid.
- Do not mix registers within a post. Pick 합니다체 and hold it from hook to
  closing — including in lists and image captions.

Courteous does not mean stiff. If a sentence sounds like a lecture, the
problem is usually sentence structure (too long, too nested), not the register.
Fix the structure; keep the register.

### One first-person register

In 합니다체 prose the first person is 저/제 — everywhere outside direct
quotes. 나/내 may appear only inside quoted inner speech. Mixing the two
across paragraphs is a tell that sentences were drafted from English, where
the pronoun carries no register. Sweep the draft for plain-form first person
outside quotes and convert.

### Korean that reads as Korean

Whether a sentence reads as written in Korean or as translated — 직역 tells,
punctuation, loanwords — is the `natural-korean` skill's job, not this
file's. Invoke that skill on every Korean draft and every Korean review.

### Default to first-person observation

Open from a concrete moment, not an abstract category.

- Bad: "Concurrency is a hard topic in modern software."
- Good: "I spent two hours staring at a deadlock that only happened on Tuesdays."

### Claims at their own strength

A sentence asserts, allows, or recommends exactly as much as the author
means. Both directions miss:

- A hedge the author does not hold — "may be", "seems", "could be
  considered" in front of something they are sure of — hides the claim.
  State the claim.
- Certainty the author does not hold turns a recommendation or an
  observation into a law. State it as the recommendation or observation it
  is.
- If you genuinely don't know, say so and explain what would change your
  mind.

### No meta narration

Cut sentences that talk about the post instead of the topic.

- "In this post we'll cover…"
- "To summarize what we've discussed so far…"
- "Let's now look at…"

The reader can see the structure. Don't narrate it.

### No bothsidesing endings

A conclusion that says "there are pros and cons, depending on the situation"
is a refusal to think. Take a position. If the position is conditional, name
the condition precisely — "use X when the working set fits in memory; use Y
otherwise" — not "it depends".

### Restrain stock intensifiers

"Very", "really", "extremely", "essentially", "fundamentally" almost always
signal that the underlying word is too weak. Replace the weak word, then drop
the intensifier.

## Structure

How the post moves from first sentence to last.

### Open with a hook, not a definition

The first one or two sentences declare why the reader should care. They are
specific and concrete — a moment, a number, a contradiction.

A definition opening ("X is a technique for…") is the AI default. Avoid it.
If the reader needs the definition, deliver it after the hook has earned the
attention.

### Motivation → what → how

The body moves in this order:

1. Motivation — the problem the reader has, or the surprise that started the
   investigation.
2. What — the idea, named and defined.
3. How — the mechanism, with code or diagrams as evidence.

Definitions before motivation read like a textbook. Mechanism before "what"
reads like a manual page. Neither is a blog post.

### One idea per paragraph

A paragraph that introduces a concept, defends it, and qualifies it is doing
three jobs. Split it.

Short paragraphs are not a stylistic flourish. They are a signal to the reader
that they may stop and think.

### Code and diagrams come after the claim

State the claim in prose. Then show code or a diagram as evidence for the
claim. A code block thrown in before its argument forces the reader to infer
what they are looking at.

### Close with implication, not summary

The last paragraph answers "so what does this mean for the reader's work
tomorrow?" — not "here is what we covered". A summary closing is filler.

### A section closer hands off, not echoes

The last sentence of a section narrows toward the question the next section
answers. Closing by restating the section's opening claim — or re-running
the contrastive frame the section opened with — makes the section read
circular and manufactured. State a frame once; after that, go concrete.

## Analogy

Hard concepts require one everyday analogy. This is rule four of the four
goals — the one that decides whether a difficult post is readable.

### When an analogy is required

If the section explains any of the following, an analogy is required:

- Concurrency, locks, ordering guarantees, memory models.
- Type systems, variance, higher-kinded types.
- Compiler stages, IR, optimization passes.
- Distributed protocols, consensus, eventual consistency.
- Abstract data structures (B-trees, tries, skip lists).
- Performance phenomena (cache lines, branch prediction, GC pauses).

The test: if a competent engineer outside this subdomain would have to re-read
the paragraph, an analogy is required.

### Share mechanism, not appearance

A good analogy preserves the _behavior_ of the system, not its surface look.

- Good: "A mutex is the bathroom key on a hook by the door — only one person
  has it at a time, and you have to put it back."
- Bad: "A mutex is like a traffic light." (A traffic light coordinates many
  parties on a schedule. A mutex is one-at-a-time mutual exclusion. The
  surface is similar; the mechanism is not.)

### State the limit

Every analogy breaks somewhere. Name the break.

- "This bathroom-key analogy holds for fairness and exclusion. It breaks when
  you need reentrancy — a person can't take the key while still holding it."

Naming the limit prevents the reader from over-extending the analogy and
arriving at a wrong conclusion.

Name the break directly, as a contrast — what the real thing does that the
analogy doesn't. Do not announce it with a preamble sentence ("this analogy
has its limits" or its equivalents in the post's language); the announcement
is meta narration, and the contrast alone carries it.

### One analogy per post

Two or three analogies in one post fragment the reader's mental model. Keep
one load-bearing analogy and let it carry the post.

If a second concept is hard enough to need its own analogy, the post is
covering too much — split it.

### Localize the vehicle

Pick the version of the analogy object the reader knows firsthand. If the
reader's world has a named, everyday equivalent — a system, service, or
custom every local reader recognizes — use it instead of describing the
generic or foreign version. Describing generically a thing the reader knows
by name is itself a translation tell.

Then run the analogy in that domain's native vocabulary: the verbs and
phrases people actually use when talking about the thing in daily life.
Abstract system vocabulary inside a concrete analogy breaks the picture the
analogy exists to paint.

## Readability

Sentence-level rhythm and presentation.

### Vary sentence length

Alternate short and medium sentences. A run of four medium sentences in a row
is a wall. A short sentence after a medium one is a beat.

This is not decoration. It is how the reader breathes through the post.

### Three commas is a split signal

A sentence with three or more commas is usually two sentences in disguise.
Split it. If it cannot be split, the underlying thought is probably tangled —
rewrite the thought first, then the sentence.

### Minimize passive voice and double negatives

- "The cache was invalidated by the worker" → "The worker invalidated the
  cache."
- "It is not unreasonable to assume X" → "X is reasonable."

Active voice and direct phrasing reduce the reader's working-set size.

### Define a term the first time it appears

One line, inline. No callout box, no glossary link unless the term has a
nontrivial history.

- "We rely on a write-ahead log (WAL) — every change is appended to a log
  before the in-memory state is updated."

Defining late is worse than defining early. Defining never is hostile.

### Lists only for three or more parallel items

Two-item lists are prose pretending to be a list. Convert them.

- Bad:
  - The cache is fast.
  - The cache is small.
- Good: "The cache is fast and small."

For three or more items, use a list — but only if the items are actually
parallel. Mixed types in a list ("the cache is fast, the disk is slow, and
we use Redis") signal that prose would have served better.

### Cut modifiers the context already carries

An adjective or adverb that only repeats what nearby sentences have already
established is decoration, not information. It reads as padding — and when the
modifier is carried over from a source language that front-loads description,
it reads translated. Once the surrounding text sets a quality, let the noun
stand on its own.

The test: delete the modifier and reread. If a careful reader loses nothing
they didn't already know, leave it deleted. This is distinct from stock
intensifiers — the word may be a perfectly good adjective, just redundant here.

### Repetition budgets

Identical sentence skeletons are covered in Anti-Patterns; these quieter
repetitions also accumulate into a tell:

- A distinctive sentence-ending pattern recurring across the post — once is
  a choice, twice reads like a habit.
- Verbless fragment beats — at most one per post. The second reads like a
  tic, not a beat.
- One content word echoing through adjacent paragraphs — vary the word or
  restructure the sentences.
- Mechanical enumeration scaffolding — ordinal openers announcing each item
  in turn. Let the content order carry the sequence.
- A particle attached hard against a closing quote trips the reading voice —
  restructure so the sentence does not hinge on quote-plus-particle.
- One abstract noun serving as the post's default word for many different
  referents — a path here, a stage there, an item, a location. Each mention
  should name its precise referent; the catch-all noun is how translation
  flattens a text's vocabulary.
- The same contrastive frame recurring at section boundaries — openers and
  closers of the same or adjacent sections built on one "A is the same, B
  differs" skeleton. The second occurrence reads manufactured.

## Anti-Patterns

Reject on sight. If the draft contains any of these, rewrite the surrounding
paragraph rather than patching the symptom.

### Meta markers

Phrases that announce a section instead of writing it.

- "To put it simply" / "한 마디로"
- "In short" / "정리하자면"
- "To wrap up" / "결론부터 말하자면"
- "Long story short"

If the next sentence is the simple version, just write the simple version.

### Emoji and bold overuse

- More than one emoji per section is decoration, not signal.
- More than two `**bold**` spans per paragraph degrades into shouting. Bold one
  thing — the load-bearing claim of the paragraph — or none.

### Table-of-contents declarations

- "In this post we will cover the following:"
- "Here is what we'll discuss:"

The headings already do this. Cut.

### Self-citation

- "As we saw above"
- "Recall from the previous section"

If the reader needs the recall, the previous section was unclear. Fix the
section, not the recall.

### Hollow closings

- "Give it a try yourself!"
- "Hope this helps!"
- "Let me know what you think in the comments."

Closings either deliver an implication or they are filler. Pick the
implication.

### Both-sides AI conclusions

- "There are pros and cons depending on the situation."
- "Ultimately, it depends on your use case."

If the position is conditional, name the condition. If you don't have a
position, the post is not finished.

### Repeated sentence structure

Three sentences in a row built on the same skeleton — "X is Y. A is B. M is
N." — is a tell. Vary the form.

### Three-item parallel cliché

"Fast, reliable, and powerful." "Simple, scalable, and secure." These triples
are advertising copy. Replace with one specific claim or cut.
