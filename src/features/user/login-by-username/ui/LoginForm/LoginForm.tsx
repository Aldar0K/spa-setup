import { FormEventHandler, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ReducerList,
  useAppDispatch,
  useAppSelector
} from 'app/providers/StoreProvider';
import { classNames } from 'shared/lib';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { Button, ButtonThemes, Input, Text } from 'shared/ui';
import { getError } from '../../model/selectors/getError';
import { getIsLoading } from '../../model/selectors/getIsLoading';
import { getPassword } from '../../model/selectors/getPassword';
import { getUsername } from '../../model/selectors/getUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import {
  loginByUsernameActions,
  loginByUsernameReducer
} from '../../model/slice';
import cls from './LoginForm.module.scss';

const reducers: ReducerList = {
  loginByUsername: loginByUsernameReducer
};

export type LoginFormProps = {
  className?: string;
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useAppSelector(getUsername);
  const password = useAppSelector(getPassword);
  const isLoading = useAppSelector(getIsLoading);
  const error = useAppSelector(getError);

  const handleUsernameChange = useCallback(
    (value: string) => {
      dispatch(loginByUsernameActions.setUsername(value));
    },
    [dispatch]
  );

  const handlePasswordChange = useCallback(
    (value: string) => {
      dispatch(loginByUsernameActions.setPassword(value));
    },
    [dispatch]
  );

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    event => {
      event.preventDefault();
      dispatch(loginByUsername({ username, password }));
    },
    [dispatch, username, password]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <form
        onSubmit={handleSubmit}
        className={classNames(cls.form, {}, [className])}
        data-testid='LoginForm'
      >
        <Text heading={t('Authorization')} />

        <Input
          type='text'
          placeholder={t('username')}
          className={cls.input}
          value={username}
          onChange={handleUsernameChange}
        />

        <Input
          type='password'
          placeholder={t('password')}
          className={cls.input}
          value={password}
          onChange={handlePasswordChange}
        />

        {error && <Text theme='error' text={t('WrongUsernameOrPassword')} />}

        <Button
          type='submit'
          theme={ButtonThemes.BACKGROUND}
          className={cls['button-submit']}
          loading={isLoading}
        >
          {t('Login')}
        </Button>
      </form>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
