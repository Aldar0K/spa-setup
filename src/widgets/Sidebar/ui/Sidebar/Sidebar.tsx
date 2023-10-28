import { FC, useState } from 'react';

import { classNames } from 'shared/lib';
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
      <button type="button" onClick={toggleCollapsed}>
        Toggle
      </button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
