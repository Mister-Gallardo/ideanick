export const ideas = Array.from({ length: 100 }).map((_, i) => ({
  nick: `nice-idea-nice-${i + 1}`,
  name: `Idea ${i + 1}`,
  description: `Description for Idea ${i + 1}...`,
  text: Array.from(
    { length: 50 },
    (_, j) => `<p>Text paragrph ${j + 1} of idea ${i + 1}...</p>`
  ).join(''),
}))
