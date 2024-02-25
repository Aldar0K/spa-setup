import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './CountrySelect.module.scss';

type CountrySelectProps = {
  className?: string;
};

export const CountrySelect: FC<CountrySelectProps> = props => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid='CountrySelect'
    >
      CountrySelect
    </div>
  );
};
