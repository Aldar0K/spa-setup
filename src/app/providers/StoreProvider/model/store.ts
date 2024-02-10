import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { $api } from 'shared/api';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './types';

const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api
          }
        }
      })
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

// TODO restore the redux persist configuration
// const persistor = persistStore(createReduxStore());

export { createReduxStore };

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;

export type ExtraParamsThunkType<T> = {
  rejectValue: T;
};
