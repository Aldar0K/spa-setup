import { FC } from "react";
import { Link } from "react-router-dom";

import "./styles/main.scss";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { classNames } from "shared/lib";

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>

      <AppRouter />
    </div>
  );
};

export default App;
