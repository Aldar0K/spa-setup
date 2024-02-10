import { createAsyncThunk } from '@reduxjs/toolkit';

import { User, userActions } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const';

type LoginByUsernameProps = {
  username: string;
  password: string;
};

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>(
  'login/loginByUsername',
  async (authData, { extra, dispatch, rejectWithValue }) => {
    try {
      // @ts-ignore
      const response = await extra.api.post<User>('login', authData);

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );

      return response.data;
    } catch (error) {
      return rejectWithValue('Your login or password is wrong!');
    }
  }
);
