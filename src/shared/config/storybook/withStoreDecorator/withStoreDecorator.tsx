import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const withStoreDecorator = (state: StateSchema): Decorator => (Story) => (
  <StoreProvider initialState={state}>
      <Story/>
  </StoreProvider>
);
