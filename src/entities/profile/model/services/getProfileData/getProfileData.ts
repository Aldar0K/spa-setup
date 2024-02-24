import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { Profile } from '../../types';

export const getProfileData = createAsyncThunk<
Profile,
void,
ThunkConfig<string>
>('profile/getProfileData', async (_, { extra, rejectWithValue }) => {
  try {
    throw new Error();
    const response = await extra.api.get<Profile>('profile');

    return response.data;
  } catch (error) {
    return rejectWithValue(i18n.t('Profile error'));
  }
});
