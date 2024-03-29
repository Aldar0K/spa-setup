import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { USER_LOCALSTORAGE_KEY } from 'shared/const';
import { User } from './types/user';
import { UserSchema } from './types/userSchema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    logout(state) {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice;
