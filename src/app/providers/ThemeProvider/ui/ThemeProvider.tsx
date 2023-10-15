import { FC, ReactNode, useMemo, useState } from "react";
import {
  AppThemes,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppThemes) ||
  AppThemes.LIGHT;

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<AppThemes>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
