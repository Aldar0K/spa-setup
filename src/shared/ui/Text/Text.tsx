import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './Text.module.scss';

export type TextTheme = 'primary' | 'error';
export type TextAlign = 'left' | 'center' | 'right';

type TextProps = {
  heading?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  className?: string;
};

export const Text: FC<TextProps> = (props) => {
  const {
    heading, text, theme = 'primary', align = 'left', className,
  } = props;

  const additionalClasses = [cls[theme], cls[align], className];

  return (
    <div
      className={classNames(cls.container, {}, additionalClasses)}
      data-testid="Text"
    >
      {heading && <h2 className={cls.heading}>{heading}</h2>}

      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
