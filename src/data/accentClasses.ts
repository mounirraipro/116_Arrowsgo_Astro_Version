export const brandAccentClass = "accent-blue";

export const getFocusAccentClass = (name: string) => {
  const key = name.toLowerCase();
  if (key.includes("clear")) return "accent-blue";
  if (key.includes("launch")) return "accent-gold";
  if (key.includes("collision")) return "accent-sky";
  if (key.includes("edge")) return "accent-violet";
  return brandAccentClass;
};
