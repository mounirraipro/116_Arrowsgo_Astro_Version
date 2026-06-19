export const brandAccentClass = "accent-green";

export const getFocusAccentClass = (name: string) => {
  const key = name.toLowerCase();
  if (key.includes("direction")) return "accent-green";
  if (key.includes("timing")) return "accent-gold";
  if (key.includes("focus")) return "accent-sky";
  if (key.includes("touch") || key.includes("mobile")) return "accent-violet";
  return brandAccentClass;
};
