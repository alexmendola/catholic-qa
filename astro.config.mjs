// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import rehypeAnswerSections from "./src/plugins/rehype-answer-sections.mjs";

export default defineConfig({
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeAnswerSections],
    }),
  },
});
