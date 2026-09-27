// Front matter schemas for answers and topics, validated at build time.
// See src/content/README.md for the writing guide.
import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const topics = defineCollection({
  loader: glob({ base: "./src/content/topics", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      image: z
        .object({
          src: image(),
          alt: z.string().min(1),
          credit: z.string().optional(),
        })
        .optional(),
    }),
});

const answers = defineCollection({
  loader: glob({ base: "./src/content/answers", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      topic: reference("topics"),
      shortAnswer: z.string().max(400), // also used as the meta description

      scripture: z.array(z.string()).min(1),
      catechism: z.array(z.number()).min(1),

      related: z.array(reference("answers")).max(5).optional(),

      goDeeper: z
        .array(
          z.object({
            type: z.enum(["free", "book", "video"]),
            title: z.string(),
            url: z.url(),
            author: z.string().optional(),
            youtubeId: z.string().optional(), // renders an embedded player
          }),
        )
        .max(3)
        .optional(),

      image: z
        .object({
          src: image(),
          alt: z.string().min(1),
          credit: z.string(),
        })
        .optional(),
    }),
});

export const collections = { topics, answers };
