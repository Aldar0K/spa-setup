import { createContext } from "react";

export enum AppThemes {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemeContextProps = {
  theme?: AppThemes;
  setTheme?: (theme: AppThemes) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
