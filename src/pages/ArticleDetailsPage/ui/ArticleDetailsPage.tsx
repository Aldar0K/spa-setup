import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleDetails } from 'entities/article';
import { CommentList } from 'entities/comment';
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
      <ArticleDetails
        articleId={articleId}
        className={styles['article-details']}
      />
      <Text heading={t('Comments')} className={styles['comments-heading']} />
      <CommentList
        className={styles.comments}
        comments={[
          {
            id: '1',
            text: 'text',
            user: {
              id: '1',
              username: 'username',
              avatar:
                'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg'
            }
          },
          {
            id: '2',
            text: 'text',
            user: {
              id: '2',
              username: 'username',
              avatar:
                'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg'
            }
          }
        ]}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
