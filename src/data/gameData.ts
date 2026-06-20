export type PlayFocus = {
  slug: string;
  name: string;
  color: string;
  description: string;
  details: string;
};

export const playFocusAreas = [
  {
    slug: "clear-paths",
    name: "Clear paths",
    color: "#2563eb",
    description: "Find arrows that can fly straight off the board without hitting another arrow.",
    details: "Clear paths are the safest first moves in Remove All Arrows because they reduce blockers and reveal the next sequence.",
  },
  {
    slug: "launch-order",
    name: "Launch order",
    color: "#f59f00",
    description: "Choose the sequence before clicking, especially when arrows block each other.",
    details: "Good launch order turns a crowded board into a clear chain and prevents collision resets.",
  },
  {
    slug: "collision-checks",
    name: "Collision checks",
    color: "#339af0",
    description: "Visualize each straight-line flight before committing to a move.",
    details: "Collision checks are the habit that separates guessing from puzzle solving on dense boards.",
  },
  {
    slug: "edge-strategy",
    name: "Edge strategy",
    color: "#845ef7",
    description: "Start with border arrows when they have open exits, then work inward.",
    details: "Edge strategy helps players reduce the board without creating new blockers.",
  },
] satisfies PlayFocus[];
