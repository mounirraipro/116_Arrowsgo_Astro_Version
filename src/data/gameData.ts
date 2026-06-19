export type PlayFocus = {
  slug: string;
  name: string;
  color: string;
  description: string;
  details: string;
};

export const playFocusAreas = [
  {
    slug: "direction",
    name: "Direction control",
    color: "#12b886",
    description: "Watch the arrow path and change direction before the next hazard closes in.",
    details: "Direction control is the core Arrows Go skill: read the lane, act early, and avoid overcorrecting.",
  },
  {
    slug: "timing",
    name: "Timing windows",
    color: "#f59f00",
    description: "Wait long enough to line up the move, but not so long that the arrow runs out of space.",
    details: "Good timing turns a risky corner into a clean escape and keeps short runs from ending too early.",
  },
  {
    slug: "focus",
    name: "Focus streaks",
    color: "#339af0",
    description: "Short restarts make every attempt useful, especially when you learn from the last mistake.",
    details: "Arrows Go rewards players who stay calm, scan ahead, and improve one decision at a time.",
  },
  {
    slug: "mobile",
    name: "Touch play",
    color: "#845ef7",
    description: "Mouse and touch controls keep the game easy to start on desktop, tablet, or phone.",
    details: "The browser player is built for quick sessions without downloads, installs, or account setup.",
  },
] satisfies PlayFocus[];
