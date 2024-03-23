import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Text } from 'shared/ui';
import { Comment } from '../../model/types';
import { CommentCard } from '../comment-card';
import cls from './CommentList.module.scss';

type CommentListProps = {
  comments?: Comment[];
  isLoading?: boolean;
  className?: string;
};

export const CommentList: FC<CommentListProps> = memo(props => {
  const { comments, isLoading, className } = props;
  const { t } = useTranslation();

  return (
    <ul
      className={classNames(cls.container, {}, [className])}
      data-testid='CommentList'
    >
      {comments?.length ? (
        comments.map(comment => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text heading={t('No comments')} />
      )}
    </ul>
  );
});
