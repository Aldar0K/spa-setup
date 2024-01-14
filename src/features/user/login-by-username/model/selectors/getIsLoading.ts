import { StateSchema } from 'app/providers/StoreProvider';

export const getIsLoading = (state: StateSchema) => state?.loginByUsername?.isLoading || false;
