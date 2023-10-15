import { useContext } from "react";

import {
  AppThemes,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from "./ThemeContext";

type UseThemeResult = {
  theme: AppThemes;
  setTheme: (theme: AppThemes) => void;
  toggleTheme: () => void;
};

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme =
      theme === AppThemes.LIGHT ? AppThemes.DARK : AppThemes.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    setTheme,
    toggleTheme,
  };
};
