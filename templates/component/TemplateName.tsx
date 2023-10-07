import { FC } from "react";

import styles from "./TemplateName.module.scss";

type TemplateNameProps = {};

const TemplateName: FC<TemplateNameProps> = () => (
  <div className={styles.container} data-testid="TemplateName">
    TemplateName
  </div>
);

export default TemplateName;
