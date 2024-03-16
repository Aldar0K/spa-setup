import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article-block';
import { Code } from 'shared/ui';

type ArticleCodeBlockComponentProps = {
  block: ArticleCodeBlock;
  className?: string;
};

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> =
  memo(props => {
    const { block, className } = props;
    const { t } = useTranslation();

    return (
      <li
        className={classNames(cls.container, {}, [className])}
        data-testid='ArticleCodeBlockComponent'
      >
        <Code children={block.code} />
      </li>
    );
  });
