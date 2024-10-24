import { useState } from "react";

const THEME_VARS = [
  "var(--theme-1)",
  "var(--theme-2)",
  "var(--theme-3)",
  "var(--theme-4)",
  "var(--theme-5)",
  "var(--theme-6)",
  "var(--theme-7)",
  "var(--theme-8)",
] as const;

export const useThemeColor = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const cycleColor = () => {
    setThemeIndex((prev) => (prev + 1) % THEME_VARS.length);
  };

  return {
    currentColor: THEME_VARS[themeIndex],
    cycleColor,
  };
};
