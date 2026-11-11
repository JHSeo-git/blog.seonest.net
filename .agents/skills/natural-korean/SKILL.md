---
name: natural-korean
description: "Rewrites Korean prose so it reads as written in Korean, not translated: 의역, not 직역. Use when writing or revising Korean prose, or when the user calls Korean text 번역투, 직역체, or 어색하다."
---

# Natural Korean

Korean drafted by an agent is usually thought in English first. Grammar and
spelling pass, yet a Korean reader hears the English underneath: that is
직역. Surface polish leaves it in place, because the fault sits in how the
thought was framed, not in the words. The cure is 의역: understand the
thought, let go of the sentence it arrived in, and say it the way a Korean
practitioner would say it aloud to a colleague.

This skill governs how a sentence is said. What the document claims, its
register, and its structure belong to the author and the document's own
style guide; hold them fixed.

## Steps

1. **Pin the meaning.** Before touching a passage, note what must survive:
   each claim and how strongly it is made, numbers, names, established
   terms, and every mark of where a claim or example comes from. Done when
   you could restate each sentence's claim with the text closed.
2. **의역 each passage.** Close the existing sentence, say the thought aloud
   in Korean, and write what you said, following
   [How Korean carries a thought](#how-korean-carries-a-thought). The scope
   is every piece of prose a reader sees: body, headings, captions, list
   items, table cells, code comments, title and description. Done when
   every sentence in scope survives being read aloud: a Korean speaker
   would say it as written.
3. **Hunt the tells.** Read [`TELLS.md`](TELLS.md) and check every sentence
   in scope against every entry. A hit sends that sentence back to step 2;
   swapping the flagged word leaves the frame in place. Done when no entry
   matches.
4. **Sweep.** Whatever you fix once — a word, a frame, an ending — search
   for across the whole document and fix at every site. Done when the
   search comes back clean, or each remaining site is a deliberate keep you
   can name.
5. **Check the meaning.** Compare the result with the notes from step 1.
   Restore whatever was lost, weakened, or strengthened, and remove
   whatever was not there before.

When the user flags a sentence you have already revised, its frame is still
English. Rewrite the whole paragraph from what actually happens; a second
word swap fails the same way the first did.

## How Korean carries a thought

- **Someone does something.** The subject is the person, team, tool, or
  code that acts, and a verb carries the claim.
- **Events in the order they happen.** Start from the concrete situation
  and let the sentences follow the real sequence. The general point comes
  after the reader has seen the case, or goes unsaid.
- **Words that show the action.** Choose the word that lets the reader see
  what is done. A label that only names a role or a category gives way to
  what the thing does; a term practitioners actually say aloud stays.
- **The reader's word.** Call a thing by the everyday word the reader
  already uses for it, and hold that one word for it across the document.
- **One job per sentence.** A sentence that defines, qualifies, and
  concludes at once becomes several. Conditions that run in parallel
  become a list.
- **About the subject.** Explain the thing itself, as fact. A sentence
  about the source, the author, or the text's own plan earns its place only
  where the reader would otherwise misattribute something; state that
  plainly, once.
- **Each sentence ends on its own claim.** The closing predicate says
  something new. Reasons, purposes, and consequences get their own plain
  sentences, in causal order.
- **The positive claim.** Say what is the case. A contrast earns its place
  only when the reader actually holds the other view.
- **The claim at its own strength.** A sentence asserts, allows, or
  recommends exactly as much as the author means.
- **One register.** Every sentence holds the document's register. A word
  more casual or more bookish than its neighbours breaks it as surely as a
  wrong ending.
