import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { StateSchema } from './reducers';
import { createReduxStore } from './store';

export type AppDispatch = (ReturnType<typeof createReduxStore>)['dispatch'];

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;

export type ExtraParamsThunkType<T> = {
  rejectValue: T;
};
