# Writing Principles

Shared reference loaded by `writing-blog-post` and `reviewing-blog-post` skills.
This is **not** a skill itself — do not invoke it directly. Read this file when
running one of those skills.

The principles are distilled from established engineering writing — not
attributed to any single author. Most rules apply to writing in any language;
the Voice section pins the Korean register the blog actually publishes in.
Treat the rules as craft, not personal style.

The aim of every rule:

1. The post must not feel AI-generated.
2. It must read as professional to software engineers.
3. It must be highly readable — ideally feel "just good".
4. Hard concepts must be carried by one everyday analogy.

Apply every rule unless a rule explicitly defers to another section.

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

### Prefer sense-for-sense over word-for-word

When the source — a quoted sentence, a referenced article, the writer's own
thinking shaped in English — is in English, **translate the meaning, not the
surface structure**. Word-for-word renderings produce sentences that pass
grammar but read translated.

How to apply:

1. **Carry intent, not syntax.** Understand the source sentence, close the
   English version mentally, and write what a Korean speaker would say _about
   that idea_ — not a Korean rendering of the English sentence.
2. **Idioms are non-portable.** Replace English idioms with their Korean
   counterparts, not literal renderings. "Stops you in your tracks" is
   `눈에 걸린다` / `발길을 잡는다`, not `멈춰 세운다`.
3. **Elide subjects and objects Korean would elide.** English needs
   "we / he / it" in every clause; Korean drops them once context is set.
   Forcing `우리는 / 그들이 / 그것이` into every clause is a calque tell.
4. **Prefer verbs over noun phrases.** English packs claims into nouns
   ("the accumulation makes…", "the surface signals are…"); Korean usually
   carries the same claim with verbs and clauses
   (`그렇게 쌓인 경험이 …로 이어집니다`, `겉으로 보이는 신호만으로는…`).
5. **Reorder for Korean syntax.** SVO → SOV. Modifiers, time, and cause
   often want to sit in different positions than the English original.
6. **Read aloud.** If a Korean speaker would naturally rephrase it, the
   calque is the problem.

When you cannot smooth a sentence by tweaking words, **rewrite the thought
from scratch in Korean**. Surrendering the English structure is faster than
patching it.

Special caution when paraphrasing English sources — that is where calques
sneak in unnoticed.

### Default to first-person observation

Open from a concrete moment, not an abstract category.

- Bad: "Concurrency is a hard topic in modern software."
- Good: "I spent two hours staring at a deadlock that only happened on Tuesdays."

### Declarative voice

Strip hedges. The reader is not asking for your uncertainty.

- Replace "may be", "seems", "could be considered", "might want to" with the
  underlying claim or remove the sentence.
- "It can be argued that X" → "X."
- If you genuinely don't know, say "I don't know" and explain what would change
  your mind. That is stronger than a hedge.

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

### Loanwords: standard spelling, one strategy

- Use the standard Korean transliteration for each loanword and hold one
  spelling per word across the post.
- Pick one treatment per term — transliterate into Hangul or keep the
  original script — and apply it consistently; the same term flipping
  between treatments reads unedited.
- Read headings and load-bearing nouns aloud for homonym collisions: if a
  word's more common homonym arrives first in the reader's ear, replace the
  word or recast the sentence.

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

### Calque traps

Sentences that pass Korean grammar but read translated. Most preserve
English structure or vocabulary surface-first. Each bullet is a pattern to
reject on sight, not a hard ban — but default to rewriting, because patches
usually fail. The categories overlap; one sentence can hit several at once.

- **Verb-elided parallels.** Parallel noun phrases with no verb to anchor
  them — in titles, section headings, captions, or body sentences — almost
  always signal direct translation from English. Restore the elided verbs
  mentally; if the restored form is awkward, rewrite with the verbs in
  place. Korean carries claims through verbs more naturally than through
  fronted noun pairs.
- **Placeholder verbs.** A sentence anchored by a verb that names no
  specific action is usually a direct rendering of an equally generic
  English verb. Ask what the action actually is, then replace the
  placeholder with the concrete verb. If no concrete verb fits, the
  sentence itself — not the verb — is the problem.
- **Spatial preposition calques.** English uses spatial prepositions
  metaphorically (_on_, _upon_, _within_, _above_); Korean usually expresses
  the same idea without spatial language, or with a different particle and
  a different verb. When a Korean sentence keeps the English spatial
  structure, the whole verb-particle pair usually needs replacing, not
  just the particle.
- **Nominalized claims.** English packs verbal claims into noun phrases
  ending in copulas. Korean prefers the underlying verb. When the main
  claim of a sentence has been compressed into a noun phrase, restore the
  verb — pull it back out and let it carry the sentence.
- **Surface idiom translation.** English idioms rendered word-for-word pass
  grammar but read translated. Replace with a Korean idiom that shares the
  _mechanism_, not the surface — or rewrite without an idiom. If no Korean
  idiom shares the mechanism cleanly, prefer plain prose to a forced
  rendering.
- **Register mismatch with narrative.** Formal or literary verb forms used
  inside narrative passages read stiff and pull the reader out. Narrative
  wants the everyday form of a verb, not its literary cousin. If a sentence
  starts to feel like translated literary prose, the register is the
  problem, not the words.
- **Redundant demonstratives.** English requires demonstratives on
  references that Korean elides. When a Korean sentence carries a
  demonstrative on every reference, drop the ones context already supplies.
- **Abstraction as actor.** English readily puts an abstract noun in the
  subject slot of a vivid or evaluative predicate — a concept is "right", an
  assumption "quietly collapses", reality "arrives". Rendered straight, a
  Korean sentence that makes an abstraction act or get judged like an agent
  reads translated and stiff. Prefer a concrete subject — the person, the
  tool, the code, the team — or recast so a verb carries the idea. This bites
  hardest in headings and topic sentences, where an abstract concept in the
  subject slot sounds like a dictionary entry instead of a claim.
- **Collocation violations.** A verb paired with a subject or object it
  never takes in native Korean — usually the English pairing imported
  wholesale. Test: would a Korean text put exactly this verb with this noun?
  If not, swap in the verb Korean actually pairs with that noun rather than
  patching the particle.
- **Indefinite-article counting.** "하나의 X" and its kin render English
  "a/one X"; Korean counts with a native counter construction or drops the
  count entirely.
- **Gratuitous plural marking.** English marks number everywhere; Korean
  leaves it unmarked unless the plurality itself is the point. Strip the
  plural suffix wherever context already carries the number.
- **Comma-apposition headings.** A heading built as a fronted noun, a comma,
  then a claim about it is English headline grammar. Recast the heading as
  one Korean sentence with the verb in place.

Read each sentence aloud. If a Korean speaker would naturally rephrase it,
the calque is the problem — patches usually fail, so rewrite the thought.
