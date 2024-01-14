import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
} from 'redux-persist';
import { createReducerManager } from './reducerManager';
import rootReducer, { StateSchema } from './reducers';

const createReduxStore = (initialState?: StateSchema) => {
  const store = configureStore<StateSchema>(
    {
      reducer: rootReducer,
      devTools: __IS_DEV__,
      preloadedState: initialState,
    },
  );

  const reducerManager = createReducerManager(rootReducer);

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

const persistor = persistStore(createReduxStore());

export { createReduxStore, persistor };
