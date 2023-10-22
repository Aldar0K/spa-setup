import { FC } from "react";

import { classNames } from "shared/lib";
import cls from "./TemplateName.module.scss";

type TemplateNameProps = {
  className?: string;
};

export const TemplateName: FC<TemplateNameProps> = ({ className }) => (
  <div
    className={classNames(cls.container, {}, [className])}
    data-testid="TemplateName"
  >
    TemplateName
  </div>
);