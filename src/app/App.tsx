import { FC } from "react";

import "./styles/main.scss";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { classNames } from "shared/lib";
import { Navigation } from "widgets/Navigation";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navigation />
      <AppRouter />
      <ThemeSwitcher />
    </div>
  );
};

export default App;
