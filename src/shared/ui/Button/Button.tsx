import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ButtonThemes {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ButtonThemes;
  className?: string;
};

export const Button: FC<ButtonProps> = (props) => {
  const {
    type = 'button',
    children,
    theme,
    className,
    ...otherProps
  } = props;

  return (
    <button
      type={type}
      className={classNames(cls.container, {}, [cls[theme], className])}
      data-testid="Button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
