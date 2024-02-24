import { FC } from 'react';

import IconDark from 'shared/assets/icons/theme-dark.svg';
import IconLight from 'shared/assets/icons/theme-light.svg';

import { AppThemes, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme="clear"
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      <IconLight className={theme === AppThemes.LIGHT ? '' : 'hidden'} />
      <IconDark className={theme === AppThemes.DARK ? '' : 'hidden'} />
    </Button>
  );
};
