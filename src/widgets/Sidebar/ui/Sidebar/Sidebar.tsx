import { FC, useState } from 'react';

import { classNames } from 'shared/lib';
import { Button, ButtonSizes, ButtonThemes } from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(
        cls.container,
        {
          [cls.collapsed]: collapsed,
        },
        [className],
      )}
      data-testid="Sidebar"
    >
      <Button
        theme={ButtonThemes.BACKGROUND_INVERTED}
        square
        size={ButtonSizes.L}
        onClick={toggleCollapsed}
        className={cls.button}
        data-testid="button-toggle"
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
