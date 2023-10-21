import { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

import styles from "./AppLink.module.scss";

type AppLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

const AppLink: FC<AppLinkProps> = (props) => {
  const { to, children, className, ...otherProps } = props;

  return (
    <Link
      to={to}
      className={styles.container}
      data-testid="AppLink"
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
