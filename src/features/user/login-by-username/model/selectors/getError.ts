import { createSelector } from '@reduxjs/toolkit';

import { getState } from './getState';

export const getError = createSelector(
  getState,
  (state) => state.error,
);
