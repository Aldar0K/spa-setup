import { FC } from "react";

import "./styles/main.scss";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { classNames } from "shared/lib";
import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar";

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Header />
      <div className="app__content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
