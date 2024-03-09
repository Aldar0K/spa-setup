import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ReducerList,
  useAppDispatch,
  useAppSelector
} from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { Text } from 'shared/ui';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice';
import cls from './ArticleDetails.module.scss';

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer
};

type ArticleDetailsProps = {
  articleId: string;
  className?: string;
};

export const ArticleDetails: FC<ArticleDetailsProps> = props => {
  const { articleId, className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getArticleDetailsIsLoading);
  const error = useAppSelector(getArticleDetailsError);
  const article = useAppSelector(getArticleDetailsData);

  useEffect(() => {
    dispatch(fetchArticleById(articleId));
  }, []);

  let content: JSX.Element | null = null;

  if (isLoading) {
    content = <Text heading={t('Loading')} />;
  }

  if (error) {
    content = <Text theme='error' heading={`${t('Error')}: ${error}`} />;
  }

  if (article) {
    content = <>{article?.title}</>;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div
        className={classNames(cls.container, {}, [className])}
        data-testid='ArticleDetails'
      >
        {content}
      </div>
    </DynamicModuleLoader>
  );
};
