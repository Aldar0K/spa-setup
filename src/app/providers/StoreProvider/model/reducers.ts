import { Action, combineReducers } from '@reduxjs/toolkit';

export const reducer = combineReducers({
  auth: undefined,
});

const rootReducer = (state: StateSchema, action: Action): StateSchema => {
  const nextState = state as StateSchema | undefined;

  return reducer(nextState, action);
};

export type StateSchema = ReturnType<typeof reducer>;

export default rootReducer as typeof reducer;
