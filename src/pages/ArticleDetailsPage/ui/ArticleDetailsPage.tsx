import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ReducerList,
  useAppDispatch,
  useAppSelector
} from 'app/providers/StoreProvider';
import { ArticleDetails } from 'entities/article';
import { CommentList } from 'entities/comment';
import { useParams } from 'react-router-dom';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { Text } from 'shared/ui';
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading
} from '../model/selectors';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import {
  ArticleDetailsCommentsReducer,
  getArticleComments
} from '../model/slice';
import styles from './ArticleDetailsPage.module.scss';

const reducers: ReducerList = {
  articleDetailsComments: ArticleDetailsCommentsReducer
};

type Params = {
  articleId: string;
};

const ArticleDetailsPage: FC = () => {
  // TODO add locales file
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const { articleId } = useParams<Params>();
  const comments = useAppSelector(getArticleComments.selectAll);
  const isLoading = useAppSelector(getArticleCommentsIsLoading);
  const error = useAppSelector(getArticleCommentsError);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
  }, []);

  if (!articleId) {
    return (
      <div className={styles.container} data-testid='ArticleDetailsPage'>
        <Text heading={t('Incorrect article id')} />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={styles.container} data-testid='ArticleDetailsPage'>
        <ArticleDetails
          articleId={articleId}
          className={styles['article-details']}
        />
        <Text heading={t('Comments')} className={styles['comments-heading']} />
        <CommentList
          className={styles.comments}
          comments={comments}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
