import { FC, Suspense } from "react";
import { useTranslation } from "react-i18next";

import "./styles/main.scss";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { classNames } from "shared/lib";
import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar";

const Component = () => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div>
      <button type="button" onClick={toggle}>
        {t("Перевести")}
      </button>
      {t("Привет")}
    </div>
  );
};

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="">
      <div className={classNames("app", {}, [theme])}>
        <Header />
        <Component />
        <div className="app__content">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
