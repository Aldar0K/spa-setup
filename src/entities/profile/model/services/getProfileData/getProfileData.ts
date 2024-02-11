import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile } from '../../types';

export const getProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/getProfileData', async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Profile>('profile');

    return response.data;
  } catch (error) {
    return rejectWithValue("Can't get profile data");
  }
});
