import { ReducersMapObject } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginByUsernameReducer } from 'features/user/login-by-username/model/slice';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
  loginByUsername: loginByUsernameReducer
};

export const withStoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
  ): Decorator =>
  Story =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
