import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = () => {
  const { t } = useTranslation('article');

  return (
    <div className={styles.container} data-testid='ArticleDetailsPage'>
      ArticleDetailsPage
    </div>
  );
};

export default memo(ArticleDetailsPage);
