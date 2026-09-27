# ✍️ Writing Guide

Everything you need to add an answer to the site.

Every answer follows the **same fixed template**. Consistency is what turns a collection of articles into a site people trust and come back to, because the reader should never have to hunt for the answer. You don't have to remember the rules: **the build checks them for you** and stops with an error if anything is missing.

---

## ⚡ Quick start

1. Create a new file in `answers/`, named after the question in lowercase with hyphens:
   `answers/why-do-catholics-pray-to-saints.md`
2. Paste in the [answer template](#-the-answer-template) below and fill it in.
3. Run `npm run dev` and open `http://localhost:4321/answers/why-do-catholics-pray-to-saints/`

> [!TIP]
> **The filename becomes the URL**, and it's how other answers link to this one in `related:`. Choose it carefully, because changing it later breaks existing links.

## 📄 The answer template

**Target length: 700–900 words.**

```markdown
---
title: Why do Catholics pray to saints?
topic: mary-and-the-saints
shortAnswer: 2–4 sentences. The answer first, with no preamble.
scripture: [James 5:16, Revelation 5:8]
catechism: [956, 2683]
goDeeper:
  - type: free
    title: Praying to the Saints
    author: Catholic Answers
    url: https://www.catholic.com/tract/praying-to-the-saints
---

## Explanation

300–400 words. Scripture first, then Tradition, then the Catechism.

## What to say

100–150 words. A script in everyday spoken language.

## If they push back

100–150 words. One objection only, answered.
```

## 🏷️ Front matter reference

The section between the `---` lines at the top of the file. These rules come from [`src/content.config.ts`](../content.config.ts).

| Field         | Required? | What it is                                                                  | Example                             |
| ------------- | :-------: | --------------------------------------------------------------------------- | ----------------------------------- |
| `title`       |    ✅     | The question, written as someone would **type it into Google**              | `Do Catholics worship Mary?`        |
| `topic`       |    ✅     | The **filename** of a topic in `topics/` (not its display name)             | `mary-and-the-saints`               |
| `shortAnswer` |    ✅     | 2–4 sentences, max 400 characters. Also used as the Google description      | `No. Catholics honour Mary…`        |
| `scripture`   |    ✅     | At least one reference                                                      | `[Luke 1:28, Romans 15:30]`         |
| `catechism`   |    ✅     | At least one paragraph **number**. These are automatically linked           | `[971]`                             |
| `goDeeper`    |     –     | Up to **3** resources (see below)                                           |                                     |
| `related`     |     –     | Up to **5** other answers, by filename. _Not shown on the page yet_         | `[why-do-catholics-pray-to-saints]` |
| `image`       |     –     | Header artwork, with `src`, `alt` and `credit`. _Not shown on the page yet_ |                                     |

### 📚 Go deeper items

Aim for one of each type:

| Field       | Required? | Notes                                                                                  |
| ----------- | :-------: | -------------------------------------------------------------------------------------- |
| `type`      |    ✅     | `free`, `book` or `video`                                                              |
| `title`     |    ✅     | The resource's title                                                                   |
| `url`       |    ✅     | Must be a full, valid URL                                                              |
| `author`    |     –     | Author or channel                                                                      |
| `youtubeId` |     –     | For videos: the part after `watch?v=`. Shows an embedded player instead of just a link |

> [!NOTE]
> YAML treats `: ` (a colon followed by a space) as the start of a new field. If a title contains one, wrap it in quotes: `title: "Mary: A Biblical Walk"`.

## 🧱 The three required sections

Use these headings **exactly** as written, including capitalisation:

| Heading                | Length        | What goes in it                                                                                                                                                                                                      |
| ---------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `## Explanation`       | 300–400 words | The theological grounding in plain language: 1–2 key Scripture passages, a Catechism reference, one insight from a Church Father or trusted apologist, and a concrete analogy. _The reader is 28, not a seminarian._ |
| `## What to say`       | 100–150 words | ✨ **The secret weapon.** What the reader can actually say at Sunday dinner. Conversational, with no jargon.                                                                                                         |
| `## If they push back` | 100–150 words | The **single** most common follow-up objection, and how to respond. One only, to keep the page clean.                                                                                                                |

If a heading is missing or misspelt, the build fails with:

```text
do-catholics-worship-mary.md is missing the "## What to say" section
```

Use `###` for subheadings inside a section if a longer answer needs them.

## 📖 Sourcing rules

An apologetics site stands or falls on being right, and objectors **will** check.

- **📜 Bible:** use the **RSVCE** (Revised Standard Version, Catholic Edition). Its literal wording holds up in conversations with Protestants.
- **❝ ❞ Quotation marks mean exact words.** Never paraphrase inside quotation marks, whether it's Scripture, the Catechism or an apologist. If you don't have the exact wording to hand, look it up or rephrase without quotation marks.
- **🔢 Catechism:** always cite the paragraph number. **Read the whole paragraph** before choosing a line to quote. The most quotable sentence isn't always the one that answers the objection.
- **✅ Check every resource:** confirm the author, publisher and edition before linking. A wrong attribution hands the objector a free point.
- **⚖️ Test every analogy:** does the comparison hold on both sides? A broken analogy is worse than none.
- **🚫 Don't cite** Wikipedia, popular theology blogs, or anything without magisterial approval or clear scholarly grounding. Never recommend non-Catholic resources.

### Trusted sources

| Source                           | Best for                                           |
| -------------------------------- | -------------------------------------------------- |
| Trent Horn                       | Calm, rigorous, conversational modern apologetics  |
| Scott Hahn                       | Biblical depth, covenant theology, Marian doctrine |
| Patrick Madrid                   | Practical apologetics, especially with Protestants |
| Peter Kreeft                     | God's existence, natural law, moral questions      |
| Jimmy Akin                       | The canon, Scripture, technical objections         |
| Catholic Answers tracts          | Free, citable, trustworthy                         |
| EWTN Library                     | History and the Church Fathers                     |
| Ignatius Press / Ascension Press | Book recommendations                               |

## 🎬 Video

Add a `youtubeId` to a `video` item in `goDeeper`, and the page shows a lightweight player. It displays just the thumbnail until someone presses play, then loads the video from `youtube-nocookie.com`.

Only embed videos uploaded by the **rights holder**, such as Catholic Answers' official channel.

## 🗂️ Topics

Each topic is a file in `topics/`. Its filename is the ID that answers use in `topic:`.

```markdown
---
name: Mary & the Saints
description: Why Catholics honour Mary and ask the saints to pray for them.
---
```

The six planned topics, with **no more** in year one:

| Topic                     | Suggested filename            |
| ------------------------- | ----------------------------- |
| The Sacraments            | `the-sacraments`              |
| Mary & the Saints         | `mary-and-the-saints` ✅      |
| The Church & the Pope     | `the-church-and-the-pope`     |
| Scripture & Tradition     | `scripture-and-tradition`     |
| Salvation & the Afterlife | `salvation-and-the-afterlife` |
| God, Faith & Reason       | `god-faith-and-reason`        |

## ✅ Before publishing an answer

- [ ] The title is phrased the way people actually search
- [ ] The short answer gives the answer in the first sentence
- [ ] Every quotation is word for word, from the RSVCE or the Catechism
- [ ] Every Catechism paragraph has been read in full, not just the quoted line
- [ ] Every author, book and link has been checked, and every link opens
- [ ] Every analogy holds up on both sides
- [ ] The "What to say" section sounds natural when read aloud
- [ ] `npm run build` passes
- [ ] 🙏 **Review!!!**

## 🧯 Troubleshooting

| Problem                                   | Likely cause                                                                                       |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `is missing the "## What to say" section` | The heading is missing or misspelt. Check the capitalisation                                       |
| An error mentioning `topic`               | `topic:` doesn't match a filename in `topics/`. Use `mary-and-the-saints`, not `Mary & the Saints` |
| An error mentioning `url`                 | A Go Deeper link is missing `https://` or isn't a valid URL                                        |
| `data does not match collection schema`   | A required field is missing, or has the wrong type (for example, a list written as plain text)     |
| Page not updating after a plugin change   | The Markdown cache. Restart with `npm run dev -- --force`                                          |

---

_Content in this folder is licensed under [CC BY-NC-ND 4.0](LICENSE.md)._
