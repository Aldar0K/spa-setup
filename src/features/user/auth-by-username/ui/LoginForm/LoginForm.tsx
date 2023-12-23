import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './LoginForm.module.scss';

type LoginFormProps = {
  className?: string;
};

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid="LoginForm"
    >
      LoginForm
    </div>
  );
};
