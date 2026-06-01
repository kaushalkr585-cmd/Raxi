import { useEffect, useState } from "react";

const storageKey = "raxi-theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "dark";
  }

  try {
    return window.localStorage.getItem(storageKey) || "dark";
  } catch {
    return "dark";
  }
};

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // Theme still works for this session if storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
