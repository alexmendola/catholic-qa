// The rules every answer and topic file must follow. Astro checks each file's
// front matter against these schemas at build time. See src/content/README.md.
import { defineCollection, reference } from "astro:content"; // tools to define collections and link entries
import { glob } from "astro/loaders"; // finds your files on disk
import { z } from "astro/zod"; // Zod: describes what valid front matter looks like

// ---------------------------------------------------------------------------
// Topics: one Markdown file per topic in src/content/topics/.
// Powers the topic tiles on the home page and the topic pages.
// ---------------------------------------------------------------------------

const topics = defineCollection({
  loader: glob({ base: "./src/content/topics", pattern: "**/*.md" }),
  schema: (
    { image }, // a function, so Astro can give the image() helper
  ) =>
    z.object({
      name: z.string(), // every topic must have a name
      description: z.string(), // the one-line intro under the topic name
      image: z
        .object({
          src: image(),
          alt: z.string().min(1), // if there's an image, alt text can't be empty
          credit: z.string().optional(),
        })
        .optional(), // tiles without art still build
    }),
});

// ---------------------------------------------------------------------------
// Answers: one file per question in src/content/answers/.
// ---------------------------------------------------------------------------

const answers = defineCollection({
  loader: glob({ base: "./src/content/answers", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      topic: reference("topics"), // must match a topic's filename, or the build fails
      shortAnswer: z.string().max(400), // 2–4 sentences; reused under the H1, as the meta description and on cards

      scripture: z.array(z.string()).min(1), // at least one, e.g. [Luke 1:28, Romans 15:30]
      catechism: z.array(z.number()).min(1), // at least one paragraph number, e.g. [971]

      related: z.array(reference("answers")).max(5).optional(), // other answers' filenames

      goDeeper: z
        .array(
          z.object({
            type: z.enum(["free", "book", "video"]),
            title: z.string(),
            url: z.url(),
            author: z.string().optional(),
            youtubeId: z.string().optional(), // if set, shows an embedded player instead of just a link
          }),
        )
        .max(3) // three resources, no more
        .optional(),

      image: z
        .object({
          src: image(),
          alt: z.string().min(1), // required for accessibility
          credit: z.string(), // always credit the artwork
        })
        .optional(),
    }),
});

export const collections = { topics, answers }; // Astro only sees what is exported
