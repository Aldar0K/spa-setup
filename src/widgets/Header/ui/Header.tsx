import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { AppLink, AppLinkThemes } from 'shared/ui';
import cls from './Header.module.scss';

type NavigationProps = {
  className?: string;
};

export const Header: FC<NavigationProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.container, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkThemes.SECONDARY} to="/">
          {t('Main')}
        </AppLink>
        <AppLink theme={AppLinkThemes.SECONDARY} to="/about">
          {t('About')}
        </AppLink>
        <AppLink theme={AppLinkThemes.SECONDARY} to="/help">
          {t('Help')}
        </AppLink>
      </div>
    </div>
  );
};
