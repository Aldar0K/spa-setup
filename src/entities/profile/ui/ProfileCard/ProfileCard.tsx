import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib';
import { Button, Input, Text } from 'shared/ui';
import { getProfile } from '../../model/selectors/getProfile/getProfile';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

type ProfileCardProps = {
  className?: string;
};

export const ProfileCard: FC<ProfileCardProps> = props => {
  const { className } = props;
  const { t: tProfile } = useTranslation('profile');
  const { t } = useTranslation('');
  const profile = useAppSelector(getProfile);
  const isLoadig = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);

  if (isLoadig)
    return (
      <div
        className={classNames(cls.container, {}, [className])}
        data-testid='ProfileCard'
      >
        <Text heading={t('Loading')} />
      </div>
    );

  if (error)
    return (
      <div
        className={classNames(cls.container, {}, [className])}
        data-testid='ProfileCard'
      >
        <Text
          heading={`${t('Error')}: ${error || t('Something went wrong')}`}
        />
      </div>
    );

  if (!profile) return null;

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid='ProfileCard'
    >
      <header className={cls.header}>
        <Text heading={tProfile('Profile')} />
        <Button theme='outline' className={cls['button-edit']}>
          {t('Edit')}
        </Button>
      </header>

      <form className={cls.form}>
        <Input
          value={profile.firstname}
          placeholder={tProfile('Firstname')}
          className={cls.input}
        />
        <Input
          value={profile.lastname}
          placeholder={tProfile('Lastname')}
          className={cls.input}
        />
      </form>
    </div>
  );
};
