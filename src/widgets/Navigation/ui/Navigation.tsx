import { FC } from "react";

import { classNames } from "shared/lib";
import { AppLink, AppLinkThemes } from "shared/ui";
import cls from "./Navigation.module.scss";

type NavigationProps = {
  className?: string;
};

export const Navigation: FC<NavigationProps> = ({ className }) => {
  return (
    <div className={classNames(cls.container)}>
      <div></div>

      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkThemes.SECONDARY} to="/">
          Главная
        </AppLink>
        <AppLink theme={AppLinkThemes.SECONDARY} to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
