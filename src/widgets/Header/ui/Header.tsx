import { FC } from "react";

import { classNames } from "shared/lib";
import { AppLink, AppLinkThemes } from "shared/ui";
import cls from "./Header.module.scss";

type NavigationProps = {
  className?: string;
};

export const Header: FC<NavigationProps> = ({ className }) => {
  return (
    <div className={classNames(cls.container, {}, [className])}>
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
