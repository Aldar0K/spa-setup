import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './Text.module.scss';

export type TextTheme = 'primary' | 'error';

type TextProps = {
  heading?: string;
  text?: string;
  theme?: TextTheme;
  className?: string;
};

export const Text: FC<TextProps> = (props) => {
  const {
    heading, text, theme = 'primary', className,
  } = props;

  return (
    <div
      className={classNames(cls.container, {}, [cls[theme], className])}
      data-testid="Text"
    >
      {heading && (
        <h2 className={cls.heading}>{heading}</h2>
      )}

      {text && (
        <p className={cls.text}>{text}</p>
      )}
    </div>
  );
};
