import { FormEventHandler, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib';
import { Button, ButtonThemes, Input } from 'shared/ui';
import { getError } from '../../model/selectors/getError';
import { getIsLoading } from '../../model/selectors/getIsLoading';
import { getPassword } from '../../model/selectors/getPassword';
import { getUsername } from '../../model/selectors/getUsername';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginByUsernameActions } from '../../model/slice';
import cls from './LoginForm.module.scss';

type LoginFormProps = {
  className?: string;
};

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useAppSelector(getUsername);
  const password = useAppSelector(getPassword);
  const isLoading = useAppSelector(getIsLoading);
  const error = useAppSelector(getError);

  const handleUsernameChange = useCallback((value: string) => {
    dispatch(loginByUsernameActions.setName(value));
  }, [dispatch]);

  const handlePasswordChange = useCallback((value: string) => {
    dispatch(loginByUsernameActions.setPassword(value));
  }, [dispatch]);

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>((event) => {
    event.preventDefault();
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

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
        value={username}
        onChange={handleUsernameChange}
      />

      <Input
        type="password"
        placeholder={t('password')}
        className={cls.input}
        value={password}
        onChange={handlePasswordChange}
      />

      {error && <p className={cls.error}>{error}</p>}

      <Button
        type="submit"
        theme={ButtonThemes.BACKGROUND}
        className={cls['button-submit']}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </form>
  );
});
