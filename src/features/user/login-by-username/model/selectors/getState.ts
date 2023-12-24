import { StateSchema } from 'app/providers/StoreProvider';

export const getState = (state: StateSchema) => state.loginByUsername;
