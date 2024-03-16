import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticleImageBlockComponent.module.scss';

type ArticleImageBlockComponentProps = {
  className?: string;
};

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
  memo(props => {
    const { className } = props;
    const { t } = useTranslation();

    return (
      <li
        className={classNames(cls.container, {}, [className])}
        data-testid='ArticleImageBlockComponent'
      >
        ArticleImageBlockComponent
      </li>
    );
  });
