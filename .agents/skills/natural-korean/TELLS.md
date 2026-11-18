# Tells

Reference for step 2 of [`natural-korean`](SKILL.md). Each entry describes a
mechanism by which English shows through Korean, the conditions under which
it counts, and what a Korean writer does there. The surface forms named in
an entry are samples of its mechanism, not a list to match: judge every
sentence by the mechanism. The entries overlap; one sentence can fit
several. A match means the sentence was framed in English, so rewrite the
thought: patching the flagged word leaves the frame standing.

## Sentence frames

- **Nominalized claims.** English packs a verbal claim into a nominalized
  clause that a copula closes (~한다는 것은 ~입니다, 문제는 ~라는
  사실입니다), or closes a claim with a predicate of need, importance, or
  possibility (~하는 것이 필요하다, ~의 중요성은, ~이 가능하다). Pull the
  verb back out and let it, with a modal ending where needed, carry the
  sentence. A plain noun subject answered by a 것 clause (방법은 ~하는
  것입니다), a 일 with an ordinary verb (일이 남다, 일이 줄다), ~할 필요가
  없다, and a
  sentence-final ~ㄴ 것입니다 or ~ㄴ 셈입니다 that explains the preceding
  clause are ordinary Korean and stay.
- **Abstraction as actor.** English readily puts an abstract noun in the
  subject slot of a vivid or evaluative predicate: a concept is "right", an
  assumption "quietly collapses", reality "arrives". Prefer a concrete
  subject (the person, the tool, the code, the team) or recast so a verb
  carries the idea. This bites hardest in topic sentences.
  It bites in closings too, where earlier sections' names come back as a
  noun list that does something (그 빈자리는 보이지 않는 작업과 겹치는
  작업이 되어 돌아옵니다): give each one back as the scene it names (같은
  코드를 동시에 고치게 되고, PR이 올라온 뒤에야 방향이 틀렸다는 걸
  압니다). When the author asks to improve the ending's flow, keep any
  closing claim that already works. If the link to the opening is unclear,
  connect it to an action or question the article has already set up. One
  familiar task can connect several questions and show what their answers
  help the reader decide (우리 팀에 어떤 모습의 도구가 필요한지).
- **Passive calques.** An agent-marked passive (~에 의해), a double passive
  (~되어지다, ~보여지다), or ~게 되다 where the intended point is someone's
  choice ("came to" in English). When the point is what a known actor did,
  let that actor do it (GitHub에 의해 공지됐습니다 → GitHub가 공지했습니다).
  Keep ordinary event and result clauses when their timing, location, or
  outcome is the point (공지가 올라오면 링크를 공유합니다, 팀 채널에 대화와
  결정이 쌓입니다). For an issue status, distinguish a status the source
  shows (이 이슈의 종료 사유는 "계획 없음"입니다) from something a maintainer
  actually wrote or decided.
- **Verbless noun parallels.** Parallel noun phrases in running prose or
  captions with no verb to anchor them, or an English noun phrase carried
  over whole (an "A and B of C" chain, "the role of X"). Restore the verbs.
- **Source-order sentences.** Modifiers, time, cause, and condition sitting
  where the English sentence had them. Korean places them before what they
  bear on; reorder the thought rather than the phrases. An example
  can also arrive inside a preamble (Osmani가 든 예에서는 한 가지 일을
  …). When the preamble just delays the situation, start there (한 가지
  일을 에이전트 다섯 개로 동시에 진행했다고 해 보겠습니다). Keep the
  source with the point it supports. Lead with the source when who said it
  matters to what follows.
- **Overloaded relative clauses.** English "that/which" nesting rendered as
  stacked prenominal clauses before one noun, so the reader holds every
  modifier before learning what it modifies. Unpack into a sentence that
  names the thing first, then one that says what happened to it.
- **Trailing rationale.** A reason or meaning attached after the claim the
  way English attaches one: 왜냐하면 ~때문입니다, ~하는데 이는 ~때문입니다,
  이는 ~을 의미합니다. State the cause first, joined by a connective ending
  or as its own sentence, and the result after it.
- **Instrument-only introductions.** A thing the reader has not met enters
  only as the means of an action, the way English "you can also do this
  via the CLI and the gateway" does (CLI와 gateway로도 할 수 있습니다). The
  reader learns what it does before learning what it is. Say that it
  exists, then what it makes possible (Ace에는 CLI와 gateway가 있어서 ~할
  수 있습니다); give an unfamiliar one a short description of its kind
  (WebSocket API인 gateway).
- **Rhetorical contrast frames.** A claim delivered through an English
  scaffold: negating one thing to assert another (~가 아니라 ~), two
  abstract nouns opposed across a copula, a concession sentence set up only
  to be corrected, ranking one need above another. A contrast stays when it
  defines a term the document introduces, or answers a view the reader
  plausibly holds, or closes a section or the document as its rhetorical
  beat; that test decides first, and a contrast that stays counts toward
  nothing. Among the rest, mark the second and later uses of
  the same scaffold in the document, and any use that knocks down a view no
  reader holds. Say the asserted half directly,
  with the concrete thing observed. An ordinary -지만 joining two facts is
  not this frame. If a comparison between products is really about
  how people work, name the action each side takes. For shared records,
  describe teammates posting selected notes after working separately or
  leaving a record as they work together in a channel. Keep a product
  label when it names a distinction the reader needs.
- **Clause-as-fact wrappers.** A whole clause wrapped into a noun so that it
  can be shown, revealed, or known by a verb of appearing (~라는 것이
  드러납니다). English also uses a verb of perception for plain existence
  ("you can see two plans", when only stating how many there are). Name
  what the product offers (이 제품은 요금제를 두 가지 제공합니다). Keep
  perception verbs when seeing, accessing, or inferring from evidence
  matters (로그인한 팀원은 채널 목록을 볼 수 있습니다).
- **Universal generalizations.** A tendency in the source or author's
  intended claim can acquire an absolute ending (일은 결정 한 번으로
  끝나지 않습니다). State the tendency (한 번의 결정으로 끝나지 않는 경우가
  많습니다). Preserve rules meant to apply categorically.
- **Negated understatement.** An English denial can hide a plain positive
  claim. Rewrite only where the context supports the equivalent degree
  and scope (앞에서 읽은 대목을 다시 인용하며 처음 보는 내용은 아닙니다 →
  앞에서 본 내용입니다). Keep natural understatement (낯설지 않습니다)
  when it tempers how familiar the thing is.
- **Process-noun objects.** English "the process of ~ing", "how X evolved",
  or "the journey" rendered as a clause-headed process noun (~한 과정,
  ~해 온 흐름, ~의 여정) that the sentence then records, follows, or shows
  (방향을 바꾼 과정을 남기다). Name what was actually recorded or changed
  (어떤 선택을 했는지, 무엇이 바뀌었는지). Keep 과정 or 흐름 when the
  sequence itself is what the record shows.
- **Unnamed previews.** A sentence that promises what the reader will learn
  without saying it, the way an English lead teases ahead ("what problems
  arise", "what to consider first", "a few things to note"). The reader
  cannot connect it to the claims it introduces. Name the things themselves
  in the sentence, or cut the preview and let the next sentence state them.
  A sentence that announces a count or a list the very next sentence names
  (정해야 할 게 두 가지 있습니다. A와 B입니다.) is ordinary Korean and stays.
- **Nominalized attribution.** A source's written claim recast as an
  abstract noun (an observation, a diagnosis, a point) that then acts or
  "comes from" somewhere. Let the person or the document write, ask, or
  point with a plain speech verb. The same goes for a speaker's claim
  framed as the place a talk starts from, as English "began by noting
  that" does (~라는 점에서 이야기를 시작했다): report the claim itself with
  the speech verb (~라고 말하며 발표를 시작했다).
- **Hedging endings.** A plain fact stated in a can-do or can-be-said form
  out of habit (~라고 할 수 있습니다, ~로 볼 수 있습니다), often at paragraph
  ends. State the fact. A can-do ending that states permission, ability, or
  a real risk is the claim itself; it stays, and the sweep in step 4 leaves
  it alone. The inverse slips in too: a claim about a limit written as a
  plain habitual action, so the constraint disappears (팀은 PR이 올라와야
  내용을 확인합니다, where the point is that the team has no earlier way to
  see it). Preserve the condition and the ability it controls (팀은 PR이
  올라온 뒤에야 내용을 확인할 수 있습니다). A list of considerations can
  pick up a requirement or a deadline from its lead-in (몇 가지를 미리
  정해 둬야 합니다). If the author is introducing questions that may
  arise during design, say so
  (설계하다 보면 다음과 같은 고민이 생길 수 있습니다). Keep the
  requirement form when the author is setting a requirement.

## Particles and endings

- **Compound-particle calques.** An English preposition rendered as a
  compound particle where a plain case particle or a verb carries the
  relation (~에 대해, ~에 대한, ~를 통해, ~로부터, ~에 있어서). It counts
  only when the plain particle or verb says the same with nothing lost; a
  compound particle that is the ordinary Korean way to state the relation
  (~에 따라 갈리다) stays. Use the case particle, or a verb that names how
  the two things meet.
- **Case-frame topics.** English "in the case of X" or "as for X" rendered
  as X 같은 경우(에)는 or X의 경우(에는) where X is simply the topic (Ace
  같은 경우는 기록이 남습니다). Use the topic or locative particle (Ace에서는).
  Keep the frame where a case is set against other cases of one rule.
- **Spatial preposition calques.** English uses spatial prepositions
  metaphorically (_on_, _upon_, _within_, _under_), rendered as ~상에서,
  ~하에서, ~위에서. Korean usually expresses the same idea without spatial
  language; replace the whole verb-particle pair, not just the particle.
  Literal containment (VM 안에서) and spatial metaphors Korean itself uses
  (PR 앞에서) stay.
- **Genitive chains.** 의 linking three or more nouns in a row the way
  English stacks "of", 의 fused onto another particle (~에서의, ~로의,
  ~와의), or -적, -화, -성 suffixes stacked into an English abstract noun.
  A single 의 between two nouns is ordinary Korean, and in an author's
  parallel phrasing it is the device. Drop the 의 where the nouns compound
  naturally, or turn the relation into a verb phrase. A product name can
  be part of a label (Ace 에이전트). Keep 의 when the ownership or relation
  is meaningful (채널 소유자의 권한). For stacked ~을 위한 modifiers,
  identify who each thing serves before shortening or splitting the
  sentence.
- **Progressive overuse.** ~하고 있다 on a habit, a general state, or a
  fact, because English used "-ing". Use the plain present; keep the
  progressive for something in progress now.
- **Aspect auxiliary calques.** Mark an auxiliary that adds a shade the
  source or author does not mean. If 써 볼 수 있습니다 merely states access
  to a feature, 쓸 수 있습니다 gives that fact. Keep -어 보다 for trying
  something out, -어 오다 for change up to the present, and -어 두다 or
  -어 버리다 when the resulting state or finality matters.
- **Sentence-initial connectives.** 또한, 게다가, 따라서, 즉 opening sentence
  after sentence where English had "Also", "Moreover", "Therefore", "That
  is". Join the sentences with a connective ending, or let the order of the
  thoughts carry the link. Use a connective that fits the actual relation.
  그 결과 can describe an unintended effect (캐시가 만료됐습니다. 그 결과
  응답이 늦어졌습니다). 그러다 보니 fits a change that accumulates through
  ordinary actions. If the discussion jumps from private work to a late
  review, say what was invisible and when people can first act on it
  (작업 중에 서로의 계획을 모르니, 방향을 바꿀 얘기도 PR이 올라온 뒤에야
  나옵니다). When an uncertain forecast is followed by an abrupt
  requirement, keep the uncertainty and name when the text says the
  requirement matters (얼마나 널리 쓰일지는 아직 알 수 없습니다. 팀에서
  이 도구를 쓸 때는 …할 수 있어야 합니다).
- **Gratuitous plural marking.** English marks number everywhere; Korean
  leaves it unmarked unless the plurality itself is the point. Drop the
  plural suffix wherever context already carries the number.
- **Indefinite-article counting.** A numeral-one determiner (하나의, 한 개의,
  어떤 하나의) placed before a noun only because English needed an article.
  Korean counts with a native counter construction or drops the count.

## Words

- **Placeholder verbs.** A sentence anchored by a verb that names no
  specific action, usually a direct rendering of an equally generic English
  verb. Ask what the action actually is and use that verb. If no concrete
  verb fits, the sentence itself is the problem.
- **Light-verb calques.** English "have", "make", "take", "give" carried
  over as 가지다, 만들다, 취하다, 주다 where Korean has its own verb or
  construction (회의를 가지다, ~하게 만들다, 조치를 취하다). Use the verb
  the noun takes, or name the object and action. If someone is revising
  finished code, name what they change (이미 끝난 구현을 다시 하다 → 다
  짜 놓은 코드를 다시 고치다). Keep ordinary 맡기다 where the
  point is entrusting responsibility (수정은 에이전트에게 맡깁니다).
- **Collocation violations.** Test whether a Korean writer would pair this
  verb and noun for the action intended. For runtime location, say where
  the agent runs (실행되는 환경). 에이전트가 일하다 stays when it is about
  work on a task. Use 의견을 보태다 for contributing a view and 끼어들다
  where an interruption is meant. If the point is development cost, name
  the cost (구현이 싸지다 → 구현에 드는 비용이 줄다). Use 세우다 for making
  a plan and 실행하다 for carrying it out. Use ordinary
  motion verbs when there is a real switch of location, branch, or context.
- **Boundary verbs.** English "gets only as far as" can make a supported
  operation sound like an achievement with an unexplained ceiling (이
  토큰의 기능은 파일 읽기에 머무릅니다). State what it allows and keep the
  limit (이 토큰으로는 파일 읽기만 할 수 있습니다). Keep an ordinary
  evaluation whose endpoint matters (회의는 의견 교환에 그쳤습니다).
- **Metaphor over mechanism.** A human-relations word (trust, relationship,
  understanding) summarizing a problem whose substance in the document is a
  concrete mechanism (permissions, access, configuration). A reader who
  meets "어디까지 믿고 맡길지" cannot map it to the access settings the
  body describes. Use the word the mechanism is called by (권한을 어떻게
  나눌지). Keep trust where the claim really is about reliance on other
  people. When the point is less time for discussion, name that resource
  (의견을 나눌 시간이 줄다). Keep 기회 if an occasion to join the discussion
  matters.
- **Surface idiom translation.** English idioms rendered word-for-word pass
  grammar but read translated. Replace with a Korean idiom that shares the
  _mechanism_, not the surface, or rewrite without an idiom. Spatial
  images of where work happens count too: "retreat into private tabs" as
  브라우저 탭으로 넘어가다, or an agent that "works beside one person" as 한
  사람 곁에서 일하다. Say what people do (각자 브라우저 탭을 열어 에이전트와
  따로 일하다, 개발자 혼자 쓰다).
- **Imported compounds.** An English business or engineering noun phrase,
  agent noun, or camp label rendered morpheme-for-morpheme into a
  Sino-Korean compound no practitioner says aloud. Describe what the thing
  or the side does, unless the loanword is the community's established
  term, in which case use it. Keep the precision of an established term
  such as 보안 경계. Where the reader needs to understand its effect, say
  what action the boundary allows or blocks. In reader-facing labels,
  name the action if the code metaphor hides it (에이전트를 부르는 곳 for
  진입점).
- **English set phrases.** Fixed English phrasings carried over whole:
  "one of the most ~" (가장 ~한 것 중 하나), "called X" (X라고 불리는),
  "today's X" (지금의 X). Name the thing or time directly where the
  context supplies it. Preserve a relative ranking when the source gives
  only that. If the point of "be owned by" is who can access a work
  record, say who can see it (팀원이 채널에서 기록을 볼 수 있습니다).
  Keep ownership where it matters for control or responsibility.
- **Drifting terms.** One thing called by two or more names across the
  document (리뷰어 and 검토자, 사용자 and 팀원 for the same people), the
  English habit of varying a word for elegance. It counts when a reader
  could take the names for two different things; pick the reader's word
  and hold it. A native word and a loanword both in everyday use for the
  same action (검토하다 and 리뷰하다), and a word inside an analogy, stay.
- **Catch-all nouns.** One abstract noun serving as the document's default
  word for many referents: a path here, a stage there, an item, a location.
  Name each referent precisely (리뷰 for a review). A heading like PR을
  올린 뒤의 일 names a time but can hide the work itself. If the section
  covers review and CI failures, say so (PR 리뷰와 CI 실패 대응). Read
  headings by themselves. 보안을 위해 can leave the subject unnamed (API
  키와 접근 권한), and 그 대신 can leave the reader looking back (Ace를
  함께 쓰려면 서로 믿을 수 있어야 합니다).
- **Redundant specifiers.** A place, owner, or target English needs on
  every mention, restated where context already gives it (그 결과가 대화에
  표시되고, right after the sentence names the conversation). Drop it.
- **Register slips.** Formal or literary verb forms inside narrative read
  like translated literary prose. Use the everyday form of the verb in the
  document's register. A heading with an abstract pair can use a more
  familiar word when the same scope survives (환경과 제약에 맞춰 실행할 수
  있어야 합니다 → 팀 상황에 맞게 실행할 곳을 고를 수 있어야 합니다).

## Reference

- **Reference across distance.** Within the next sentence, a demonstrative
  or an elided subject is ordinary Korean: keep it, or drop it where the
  sentence reads as well without it. The tell is a demonstrative or a
  pronoun on every reference, because English requires one in every
  clause. Third-person pronouns for people and things (그, 그녀, 그것)
  give way to the name or to elision. A pointer the reader has to look
  back for names the thing again: one that crosses a section boundary (그
  대가로 at a section's start), or reaches past the previous paragraph
  (앞서 말한, 위의). A pointer to the paragraph or quotation just before
  it stays. An elided subject carries the last named actor;
  when one named actor gives way to another mid-sentence or between
  sentences, name the new one. A general or obvious subject (the reader,
  people at large) stays elided, and so does an actor the original never
  names: naming one invents an attribution. A demonstrative pointing at a
  figure, screen, or example the document does not show (이 화면, 위
  그림, with no image there) names the thing instead (Diff 탭에서 확인한
  변경). Where understanding an attribution requires a role established
  by the source, add it briefly. Give a long identity its own sentence.

## Punctuation and loanwords

### Punctuation keeps Korean register

- The em dash is English punctuation. Korean prose does not pause
  dramatically on a dash, bracket an aside between a dash pair, or introduce
  a quotation with one. A dash-wrapped insertion that strands a particle or
  copula after the closing dash cannot be read aloud: restructure into
  separate sentences. Structural uses (a title separator, the dash between a
  list term and its definition) are the only places it earns its keep, and
  even those count toward a small budget.
- Introduce a quotation with a plain speech verb and a period, not a dash
  or other colon substitute. The quotative particles (-라고, -하고) and a
  quoted word or short phrase taking its particle as any noun would (a UI
  label, a coined term) are ordinary Korean. The tell is a case particle
  (-가, -를, -는) pressed against the closing quote of a whole quoted
  sentence, so the sentence hinges on it; restructure there.
- An interrogative sentence ends with a question mark, including bolded
  checklist questions. A run of checklist items built on one interrogative
  skeleton reads mechanical; vary the form.

### Loanwords: standard spelling, one strategy

- Use the standard Korean transliteration for each loanword and hold one
  spelling per word across the document.
- An English adjective or participle borrowed as a Korean verb with 되다 or
  하다 (빌트인되다, 인테그레이션되다) where a native verb says it (기본으로
  들어가 있다, 연결하다) reads as untranslated. Use the native verb; keep
  the loanword as a noun when it is the field's term.
- Pick one treatment per term (transliterate into Hangul or keep the
  original script) and apply it consistently; the same term flipping
  between treatments reads unedited.
- Render a quoted English sentence in Korean. An original in parentheses
  after the rendering marks the source and stays. Give an established
  term's original once, at first mention. When a product's term is
  rendered as an everyday word (chat as 대화), the reader cannot tell the
  term from the word: give the original once and say how it relates to the
  terms around it (채널 하나에는 보통 대화(chat)가 하나 있고).
- Read headings and load-bearing nouns aloud for homonym collisions: if a
  word's more common homonym arrives first in the reader's ear, replace the
  word or recast the sentence.
