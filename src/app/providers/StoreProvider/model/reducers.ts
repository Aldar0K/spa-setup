import { Action, combineReducers } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';

export const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const rootReducer = (state: StateSchema, action: Action): StateSchema => {
  const nextState = state as StateSchema | undefined;

  return reducer(nextState, action);
};

// Partial? is it ok?
export type StateSchema = ReturnType<typeof reducer>;

export type StateSchemaKey = keyof StateSchema;

export default rootReducer as typeof reducer;
