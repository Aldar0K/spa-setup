import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import {
  Button, Input, Loader, Text,
} from 'shared/ui';
import { Profile } from '../../model/types';
import cls from './ProfileCard.module.scss';

type ProfileCardProps = {
  profile?: Profile;
  isLoadig?: boolean;
  error?: string;
  className?: string;
};

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    profile, isLoadig, error, className,
  } = props;
  const { t: tProfile } = useTranslation('profile');
  const { t } = useTranslation('');

  if (isLoadig) {
    return (
      <div
        className={classNames(cls.container, {}, [cls.loading, className])}
        data-testid="ProfileCard"
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(cls.container, {}, [cls.error, className])}
        data-testid="ProfileCard"
      >
        <Text
          heading={tProfile('Profile error')}
          text={error || t('Something went wrong')}
          theme="error"
          align="center"
        />
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid="ProfileCard"
    >
      <header className={cls.header}>
        <Text heading={tProfile('Profile')} />
        <Button theme="outline" className={cls['button-edit']}>
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
