import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './CurrencySelect.module.scss';

type CurrencySelectProps = {
  className?: string;
};

export const CurrencySelect: FC<CurrencySelectProps> = props => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid='CurrencySelect'
    >
      CurrencySelect
    </div>
  );
};
