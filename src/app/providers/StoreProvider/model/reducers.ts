import { Action, combineReducers } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { loginByUsernameReducer } from 'features/user/login-by-username';

export const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  loginByUsername: loginByUsernameReducer,
});

const rootReducer = (state: StateSchema, action: Action): StateSchema => {
  const nextState = state as StateSchema | undefined;

  return reducer(nextState, action);
};

export type StateSchema = ReturnType<typeof reducer>;

export default rootReducer as typeof reducer;
