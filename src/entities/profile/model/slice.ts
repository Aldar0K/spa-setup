import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getProfileData } from './services/getProfileData/getProfileData';
import { Profile, ProfileSchema } from './types';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfileData.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(
        getProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(getProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
