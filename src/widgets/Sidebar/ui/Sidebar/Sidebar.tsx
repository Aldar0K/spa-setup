import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import IconAbout from 'shared/assets/icons/about-20-20.svg';
import IconMain from 'shared/assets/icons/main-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib';
import { AppLink, AppLinkThemes, Button } from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(prev => !prev);

  return (
    <div
      className={classNames(
        cls.container,
        {
          [cls.collapsed]: collapsed
        },
        [className]
      )}
      data-testid='Sidebar'
    >
      <Button
        theme='background-inverted'
        square
        size='large'
        onClick={toggleCollapsed}
        className={cls.button}
        data-testid='button-toggle'
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkThemes.SECONDARY}
          to={RoutePath.main}
          className={cls.link}
        >
          <IconMain className={cls.link__icon} />
          <span className={cls.link__text}>{t('Main')}</span>
        </AppLink>

        <AppLink
          theme={AppLinkThemes.SECONDARY}
          to={RoutePath.about}
          className={cls.link}
        >
          <IconAbout className={cls.link__icon} />
          <span className={cls.link__text}>{t('About')}</span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
