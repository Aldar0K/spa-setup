import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleDetails } from 'entities/article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui';
import styles from './ArticleDetailsPage.module.scss';

type Params = {
  articleId: string;
};

const ArticleDetailsPage: FC = () => {
  // TODO add locales file
  const { t } = useTranslation('article-details');
  const { articleId } = useParams<Params>();

  if (!articleId) {
    return (
      <div className={styles.container} data-testid='ArticleDetailsPage'>
        <Text heading={t('Incorrect article id')} />
      </div>
    );
  }

  return (
    <div className={styles.container} data-testid='ArticleDetailsPage'>
      <ArticleDetails articleId={articleId} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
