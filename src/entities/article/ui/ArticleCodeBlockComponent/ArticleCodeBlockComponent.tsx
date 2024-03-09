import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticleCodeBlockComponent.module.scss';

type ArticleCodeBlockComponentProps = {
  className?: string;
};

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = props => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid="ArticleCodeBlockComponent"
    >
      ArticleCodeBlockComponent
    </div>
  )
};
