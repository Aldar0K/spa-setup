import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { Profile } from '../../types';

// TODO rename to fetchProfileData (use get... only for selectors)
export const getProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/getProfileData', async (_, { extra, rejectWithValue }) => {
  try {
    const response = await extra.api.get<Profile>('profile');

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue(i18n.t('Profile error'));
  }
});
