import { createSelector } from '@reduxjs/toolkit';

import { getState } from './getState';

export const getUsername = createSelector(
  getState,
  (state) => state.username,
);
