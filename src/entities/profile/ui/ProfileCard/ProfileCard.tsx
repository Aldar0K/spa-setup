import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib';
import { getProfile } from '../../model/selectors/getProfile/getProfile';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

type ProfileCardProps = {
  className?: string;
};

export const ProfileCard: FC<ProfileCardProps> = props => {
  const { className } = props;
  const { t } = useTranslation();
  const profile = useAppSelector(getProfile);
  const isLoadig = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);

  // TODO rename profile to profiles in the db

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid='ProfileCard'
    >
      <h2>{profile?.username}</h2>
    </div>
  );
};
