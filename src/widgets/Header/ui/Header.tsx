import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/user/auth-by-username';
import { classNames } from 'shared/lib';
import {
  AppLink, AppLinkThemes, Button, ButtonThemes,
} from 'shared/ui';
import cls from './Header.module.scss';

type NavigationProps = {
  className?: string;
};

export const Header: FC<NavigationProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <div className={classNames(cls.container, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkThemes.SECONDARY} to="/">
          {t('Main')}
        </AppLink>
      </div>

      <Button
        theme={ButtonThemes.CLEAR}
        onClick={openAuthModal}
      >
        {t('Login')}
      </Button>

      <LoginModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        className={cls['login-modal']}
      />
    </div>
  );
};
