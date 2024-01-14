import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../model/store';
import { StateSchema } from '../model/types';

type StoreProviderProps = {
  children: ReactNode;
  initialState?: StateSchema;
};

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
