import {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit';

import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/user';
import { LoginByUsernameSchema } from 'features/user/login-by-username';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;

  // async reducers
  loginByUsername?: LoginByUsernameSchema;
};

export type StateSchemaKey = keyof StateSchema;

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};

export type ReducersListEntry = [StateSchemaKey, Reducer];

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
};

export type ReduxStoreWithManager = EnhancedStore<StateSchema> & {
  reducerManager: ReducerManager;
};
