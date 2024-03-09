import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticleTextBlockComponent.module.scss';

type ArticleTextBlockComponentProps = {
  className?: string;
};

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = props => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid="ArticleTextBlockComponent"
    >
      ArticleTextBlockComponent
    </div>
  )
};
