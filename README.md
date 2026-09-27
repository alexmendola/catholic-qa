# ✝️ Catholic Q&A

**Plain-language answers to the questions Catholics actually get asked, and the words to answer them.**

> Every Catholic is called not only to believe, but to understand what the Church teaches and why she teaches it.

_Working title. The site's name is still to be decided._

---

## 🎯 Why this exists

The questions people search for most are about the Trinity, the Eucharist, the Pope, salvation and the sacraments. Many of the people asking are Catholics who love their faith but were never taught _why_ it's true. When their questions get poor answers, or none at all, faith quietly fades.

**The gap:** most answers online are either buried in dense academic language or scattered across disorganised sites.

**The goal:** a clean, searchable, plain-language Catholic Q&A site. Every question gets one clear page. The answer comes first. And there's a script you can actually use in a real conversation.

## 👤 Who it's for

A Catholic in their 20s or 30s who still goes to Mass but **feels cornered when challenged**. Maybe it's a Protestant friend asking about Mary, a sceptical colleague laughing at the Eucharist, or their own teenager asking hard questions.

They know _what_ they believe; they just can't explain it. They need an answer **by Sunday dinner**.

## 🧭 What makes an answer here different

Every answer follows the same template, so readers always know where to look:

|     | Section               | What it does                                                               |
| :-: | --------------------- | -------------------------------------------------------------------------- |
|  ①  | **The question**      | Written exactly as someone would type it into Google                       |
|  ②  | **Short answer**      | 2–4 sentences. If you're mid-conversation, you can stop here               |
|  ③  | **Explanation**       | Scripture first, then Tradition, then the Catechism, all in plain language |
|  ④  | **💬 What to say**    | A script in everyday spoken words, with a copy button _(coming soon)_      |
|  ⑤  | **If they push back** | The single most common follow-up objection, answered                       |
|  ⑥  | **Sources**           | Scripture and Catechism references, shown openly                           |
|  ⑦  | **Go deeper**         | Up to three trusted resources: a free read, a book and a video             |
|  ⑧  | **Related questions** | The next thread to pull _(coming soon)_                                    |

It's written in **one human voice**, like a knowledgeable friend answering, not an institution.

## 🛠️ Tech stack

|     | Tool                                                         | Why                                                          |
| --- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 🚀  | [Astro](https://astro.build)                                 | Builds a fast static site from Markdown files                |
| ✅  | Astro content collections + [Zod](https://zod.dev)           | Checks every answer's front matter at build time             |
| 🧩  | A custom rehype plugin                                       | Wraps each answer section so "What to say" gets its own card |
| 🔍  | [Pagefind](https://pagefind.app) _(planned)_                 | Search that runs in the browser, with no server              |
| 🎨  | Plain CSS with variables                                     | Light and dark mode, accessible colour contrast              |
| ☁️  | [Cloudflare Pages](https://pages.cloudflare.com) _(planned)_ | Free hosting                                                 |
| 📮  | [Formspree](https://formspree.io) _(planned)_                | Receives "Ask a question" submissions                        |

## 🚀 Getting started

You'll need **Node.js 22.12 or newer**.

```sh
npm install      # install dependencies (first time only)
npm run dev      # start the dev server at http://localhost:4321
```

| Command           | What it does                                             |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Runs the site locally and updates as you save            |
| `npm run build`   | Builds the finished site into `dist/`                    |
| `npm run preview` | Serves the built `dist/` folder, exactly as a host would |

> [!IMPORTANT]
> **Edited the rehype plugin?** Astro caches rendered Markdown and won't notice plugin changes. Restart with `npm run dev -- --force` (or build with `npm run build -- --force`) to clear the cache.

## 🗂️ Project structure

```text
site/
├── astro.config.mjs          # Astro settings: Markdown engine + our plugin
├── public/                   # Files copied as they are (favicon)
└── src/
    ├── content.config.ts     # The rules every answer and topic must follow
    ├── content/
    │   ├── README.md         # ✍️ The writing guide: start here to add answers
    │   ├── LICENSE.md        # Content licence (CC BY-NC-ND 4.0)
    │   ├── answers/          # One Markdown file per question
    │   └── topics/           # One Markdown file per topic
    ├── components/
    │   └── LiteYouTube.astro # Lightweight video player (loads only on tap)
    ├── layouts/
    │   └── Layout.astro      # The HTML shell shared by every page
    ├── pages/
    │   ├── index.astro       # Home page
    │   └── answers/[id].astro  # One page per answer; also enforces the template
    ├── plugins/
    │   └── rehype-answer-sections.mjs  # Wraps each ## section in a <section>
    └── styles/
        └── global.css        # Colours, fonts, base styles, dark mode
```

## ✍️ Writing answers

See the **[writing guide](src/content/README.md)**. It covers the answer template, every front matter field, the sourcing rules and a checklist to go through before publishing.

## 🗺️ Roadmap

**Done**

- [x] Content schema that fails the build if an answer is incomplete
- [x] Answer pages with short-answer and "What to say" cards
- [x] Lightweight YouTube embeds
- [x] Light and dark colour scheme

**Up next**

- [x] "Jump to: What to say" link
- [ ] Copy / Share button on the "What to say" script
- [ ] Idea: write the script as a `>` blockquote so Copy grabs only the script (not the intro line), and it's styled in Georgia like other quotes
- [ ] "If they push back" in a they say / you say format
- [ ] Related questions
- [ ] Home page and topic pages
- [ ] Search with Pagefind
- [ ] "Ask a question" form
- [ ] Manual light/dark toggle
- [ ] Deploy to Cloudflare Pages

**Content**

- [ ] The first 15 answers across all six topics
- [ ] Review by a priest or deacon before launch

## 🙏 A note on accuracy

This is an independent, personal project, not an official publication of the Catholic Church. It sticks to settled questions, cites its sources openly, and aims to say "I don't know" rather than oversimplify. Where anything here seems to differ from the _Catechism of the Catholic Church_, the Catechism is right.

Spotted a mistake? Please [open an issue](https://github.com/alexmendola/catholic-qa/issues).

## 📄 Licence

| What                                           | Licence                                                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 💻 **Code** (everything except `src/content/`) | [MIT](LICENSE)                                                                                          |
| ✍️ **Written content** (`src/content/`)        | [CC BY-NC-ND 4.0](src/content/LICENSE.md): share freely with credit, non-commercial, no edited versions |

Scripture quotations (RSVCE), Catechism quotations and artwork remain the property of their respective copyright holders.
