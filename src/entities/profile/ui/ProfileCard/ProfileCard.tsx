import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Country, CountrySelect } from 'entities/country';
import { Currency, CurrencySelect } from 'entities/currency';
import { classNames } from 'shared/lib';
import { Input, Loader, Text } from 'shared/ui';
import { Profile } from '../../model/types';
import cls from './ProfileCard.module.scss';

type ProfileCardProps = {
  profile?: Profile;
  isLoadig?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
  className?: string;
};

export const ProfileCard: FC<ProfileCardProps> = props => {
  const {
    profile,
    isLoadig,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    className
  } = props;
  const { t: tProfile } = useTranslation('profile');
  const { t } = useTranslation('');

  if (isLoadig) {
    return (
      <div
        className={classNames(cls.container, {}, [cls.loading, className])}
        data-testid='ProfileCard'
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(cls.container, {}, [cls.error, className])}
        data-testid='ProfileCard'
      >
        <Text
          heading={tProfile('Profile error')}
          text={error || t('Something went wrong')}
          theme='error'
          align='center'
        />
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div
      className={classNames(
        cls.container,
        {
          [cls.editing]: !readonly
        },
        [className]
      )}
      data-testid='ProfileCard'
    >
      <form className={cls.form}>
        {profile?.avatar && (
          <div className={cls.avatarWrapper}>
            {/* <Avatar src={profile?.avatar} /> */}
          </div>
        )}

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
        <Input
          value={profile?.age}
          placeholder={tProfile('Age')}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={profile?.city}
          placeholder={tProfile('City')}
          className={cls.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={profile?.username}
          placeholder={tProfile('Username')}
          className={cls.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={profile?.avatar}
          placeholder={tProfile('Avatar')}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={profile?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={profile?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </form>
    </div>
  );
};
