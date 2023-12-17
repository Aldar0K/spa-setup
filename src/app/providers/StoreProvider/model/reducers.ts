import { Action, combineReducers } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/counter';

export const reducer = combineReducers({
  counter: counterReducer,
});

const rootReducer = (state: StateSchema, action: Action): StateSchema => {
  const nextState = state as StateSchema | undefined;

  return reducer(nextState, action);
};

export type StateSchema = ReturnType<typeof reducer>;

export default rootReducer as typeof reducer;
