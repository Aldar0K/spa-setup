import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Avatar, Text } from 'shared/ui';
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
