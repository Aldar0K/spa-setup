import { ButtonHTMLAttributes, FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ButtonThemes {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSizes {
  S = 'size_small',
  M = 'size_medium',
  L = 'size_large',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ButtonThemes;
  square?: boolean;
  size?: ButtonSizes;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
};

export const Button: FC<ButtonProps> = (props) => {
  const {
    type = 'button',
    children,
    theme,
    square = false,
    size = ButtonSizes.M,
    disabled,
    loading,
    className,
    ...otherProps
  } = props;
  const { t } = useTranslation();

  return (
    <button
      type={type}
      className={classNames(
        cls.container,
        {
          [cls.square]: square,
          [cls.disabled]: disabled,
        },
        [cls[theme], cls[size], className],
      )}
      disabled={disabled || loading}
      data-testid="Button"
      {...otherProps}
    >
      {loading ? t('Loading') : children}
    </button>
  );
};
