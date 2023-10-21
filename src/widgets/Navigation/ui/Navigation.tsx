import { FC } from "react";
import { Link } from "react-router-dom";

import { classNames } from "shared/lib";
import cls from "./Navigation.module.scss";

type NavigationProps = {
  className?: string;
};

export const Navigation: FC<NavigationProps> = ({ className }) => {
  return (
    <div className={classNames(cls.container)}>
      <div></div>

      <div className={classNames(cls.links)}>
        <Link to="/">Главная</Link>
        <Link to="/about">О сайте</Link>
      </div>
    </div>
  );
};
