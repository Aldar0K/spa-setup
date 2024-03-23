import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Avatar, Skeleton, Text } from 'shared/ui';
import { Comment } from '../../model/types';
import cls from './CommentCard.module.scss';

type CommentCardProps = {
  comment: Comment;
  isLoading?: boolean;
  className?: string;
};

export const CommentCard: FC<CommentCardProps> = memo(props => {
  const { comment, isLoading, className } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <li
        className={classNames(cls.container, {}, [className])}
        data-testid='CommentCard'
      >
        <header className={cls.header}>
          <Skeleton
            width={30}
            height={30}
            border='50%'
            className={cls.avatar}
          />
          <Skeleton width={100} height={16} className={cls.username} />
        </header>
        <Skeleton width='100%' height={50} className={cls.text} />
      </li>
    );
  }

  return (
    <li
      className={classNames(cls.container, {}, [className])}
      data-testid='CommentCard'
    >
      <header className={cls.header}>
        {comment.user.avatar ? (
          <Avatar src={comment.user.avatar} size={30} className={cls.avatar} />
        ) : (
          // TODO add placeholder
          <Avatar size={30} className={cls.avatar} />
        )}
        <Text text={comment.user.username} className={cls.username} />
      </header>
      <Text text={comment.text} />
    </li>
  );
});
