import { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "./MainPage.module.scss";

const MainPage: FC = () => {
  const { t } = useTranslation("main");

  return (
    <div className={styles.container} data-testid="MainPage">
      {t("Main")}
    </div>
  );
};

export default MainPage;
