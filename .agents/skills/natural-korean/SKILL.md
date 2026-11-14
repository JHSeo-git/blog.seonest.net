---
name: natural-korean
description: "Rewrites Korean prose so it reads as written in Korean, not translated: 의역, not 직역. Use when writing or revising Korean prose for readers, when rendering an English source into Korean, or when the user calls Korean text 번역투, 직역체, or 어색하다."
---

# Natural Korean

Korean drafted by an agent is usually thought in English first. Grammar and
spelling pass, yet a Korean reader hears the English underneath: that is
직역. Surface polish leaves it in place, because the fault sits in how the
thought was framed, not in the words. The cure is 의역: understand the
thought, let go of the sentence it arrived in, and say it the way a Korean
writer would say it in the document's own register.

This skill governs how a sentence is said, in any kind of Korean document.
What the document claims, which register it uses, how it is structured, and
the shape of its headings (a sentence or a noun label) belong to the author
and the document's own style guide; hold them fixed. In scope is the
wording of every piece of prose a reader sees: body, headings, captions,
list items, table cells, title, and description. Code, quotations of other
people's words, and identifiers stay as written.

Other Korean writing skills may run alongside this one, in any order. Where
their rewrites disagree on a sentence, keep the meaning pinned in step 1 and
the document's register; neither skill's preference overrides those.

## Steps

1. **Pin the meaning.** Write a note for each passage in scope: every
   claim, who makes or does it (or that no one is named), and its strength
   (asserts, allows, recommends, warns), numbers,
   names, established terms, and every mark of where a claim or example
   comes from. Note which passages paraphrase an English source; 직역
   concentrates there, so step 2 reads them first. Done when every passage
   in scope has its note.
2. **Mark.** Take [`TELLS.md`](TELLS.md) entry by entry and check the whole
   document against each. Mark a sentence only when it fits an entry's
   mechanism, conditions included, and a Korean writer drafting the same
   thought from scratch would not have framed it that way; a sentence that
   shares an entry's surface form yet reads as native Korean stays
   unmarked. Name the entry on each mark. A sentence with no mark is final
   as written. Done when every entry has been checked against the whole
   document.
3. **의역 each mark.** Set the marked sentence aside, take its thought from
   the note, and write it as a Korean writer would, following
   [How Korean carries a thought](#how-korean-carries-a-thought). The rewrite reaches as
   far as the English frame reaches: usually one sentence, sometimes its
   neighbour. A rewrite that fits an entry again gets one more attempt;
   after that the original sentence stays as a keep, reported with its
   reason. Done when every mark is rewritten or recorded as a keep.
4. **Sweep.** For each fix whose form a search can find (a word, an ending,
   a particle, a punctuation mark), search the whole document and apply the
   same fix wherever the form plays the same role. List the fixed frames a
   search cannot find, and reread each paragraph once against that list.
   Done when every search and every listed frame is accounted for.
5. **Check the meaning.** Compare the result with the notes from step 1.
   Restore whatever was lost, weakened, or strengthened, and remove
   whatever was not there before. When the marked frame itself carried the
   claim, restore the original sentence and record it as a keep; a restored
   sentence is not marked again. Done when every noted item is present at
   its original strength and nothing new has appeared.

When the user flags a sentence you have already revised, its frame is still
English. Rewrite it from the note, starting from what actually happens; a
second word swap fails the same way the first did.

## How Korean carries a thought

The shape a rewrite in step 3 aims for. These describe the target, not
marks to hunt for.

- **Someone does something.** The subject is the person, team, tool, or
  code that acts, and a verb carries the claim.
- **Cause before result.** Time, condition, and cause come before what they
  bear on, joined by a connective ending (-아서, -니까, -면, -느라) or as a
  sentence of their own placed first.
- **Words that show the action.** Choose the word that lets the reader see
  what is done. A label that only names a role or a category gives way to
  what the thing does; a term practitioners actually say aloud stays.
- **The reader's word, held.** Call a thing by the everyday word the reader
  already uses for it. Once a term names a thing, that term names it across
  the document.
- **One job per sentence.** A sentence that defines, qualifies, and
  concludes at once becomes several. A cause joined to its result by a
  connective ending is one job.
- **Each sentence ends on its own claim.** The closing predicate says
  something new, rather than naming the sentence's own purpose or reason.
- **One register.** Every sentence holds the document's register. A word
  more casual or more bookish than its neighbours breaks it as surely as a
  wrong ending.
