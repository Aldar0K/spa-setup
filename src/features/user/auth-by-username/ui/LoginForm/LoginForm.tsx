import { FC, FormEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button, ButtonThemes, Input } from 'shared/ui';
import cls from './LoginForm.module.scss';

type LoginFormProps = {
  className?: string;
};

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(cls.form, {}, [className])}
      data-testid="LoginForm"
    >
      <Input
        type="text"
        placeholder={t('username')}
        className={cls.input}
      />

      <Input
        type="password"
        placeholder={t('password')}
        className={cls.input}
      />

      <Button
        type="submit"
        theme={ButtonThemes.BACKGROUND}
        className={cls['button-submit']}
      >
        {t('Login')}
      </Button>
    </form>
  );
};
