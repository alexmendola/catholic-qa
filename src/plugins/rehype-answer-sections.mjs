const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Wraps each h2 and the content that follows it (up to the next h2) in a
 * <section>, so each part of an answer can be styled separately:
 *
 *   <section class="answer-section what-to-say" aria-labelledby="what-to-say">
 *     <h2 id="what-to-say">What to say</h2>
 *     <p>…</p>
 *   </section>
 *
 * Astro caches rendered Markdown, so changes here need `--force` to show up.
 * Required sections are checked in src/pages/answers/[id].astro instead, as
 * errors thrown by Markdown plugins don't fail the build.
 */
export default function rehypeAnswerSections() {
  return (tree) => {
    const before = [];
    const groups = [];
    let current = null;

    for (const node of tree.children) {
      if (node.type === "element" && node.tagName === "h2") {
        current = { title: node.children[0]?.value ?? "", heading: node, nodes: [] };
        groups.push(current);
      } else if (current) {
        current.nodes.push(node);
      } else {
        before.push(node);
      }
    }

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
