import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
} from 'redux-persist';
import rootReducer, { StateSchema } from './reducers';

const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>(
  {
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  },
);

const persistor = persistStore(createReduxStore());

export { createReduxStore, persistor };
