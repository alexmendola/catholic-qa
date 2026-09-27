// "What to say" -> "what-to-say"
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Rehype plugin: wraps each `## Heading` and everything after it (up to the
 * next h2) in a `<section>`, so the page can style each part of an answer.
 *
 *   <section class="answer-section what-to-say" aria-labelledby="what-to-say">
 *     <h2 id="what-to-say">What to say</h2>
 *     <p>…</p>
 *   </section>
 *
 * Registered in astro.config.mjs. After editing this file, restart with
 * `npm run dev -- --force`, because Astro caches rendered Markdown.
 *
 * The check that required sections exist lives in src/pages/answers/[id].astro,
 * not here, because errors thrown inside Markdown plugins don't stop the build.
 */
export default function rehypeAnswerSections() {
  return (tree) => {
    const before = []; // anything before the first h2 (kept as-is)
    const groups = []; // one entry per h2: { title, heading, nodes }
    let current = null; // the group we're currently filling

    for (const node of tree.children) {
      if (node.type === "element" && node.tagName === "h2") {
        // A new heading: start a new group.
        current = { title: node.children[0]?.value ?? "", heading: node, nodes: [] };
        groups.push(current);
      } else if (current) {
        // Anything else belongs to the most recent heading.
        current.nodes.push(node);
      } else {
        before.push(node);
      }
    }

    // Build a <section> for each group and swap them in.
    tree.children = [
      ...before,
      ...groups.map((group) => {
        const slug = slugify(group.title);
        group.heading.properties.id = slug;
        return {
          type: "element",
          tagName: "section",
          properties: { className: ["answer-section", slug], ariaLabelledBy: slug },
          children: [group.heading, ...group.nodes],
        };
      }),
    ];
  };
}
