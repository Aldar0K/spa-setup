import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button, ButtonThemes } from 'shared/ui';

type LangSwitcherProps = {
  className?: string;
};

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ButtonThemes.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      {t('Language')}
    </Button>
  );
};
