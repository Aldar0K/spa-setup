import { createSelector } from '@reduxjs/toolkit';

import { getState } from './getState';

export const getPassword = createSelector(
  getState,
  (state) => state.password,
);
