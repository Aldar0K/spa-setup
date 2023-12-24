import { createSelector } from '@reduxjs/toolkit';

import { getState } from './getState';

export const getIsLoading = createSelector(
  getState,
  (state) => state.isLoading,
);
