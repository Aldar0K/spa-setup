export { profileActions, profileReducer } from './model/slice';
export type { Profile, ProfileSchema } from './model/types';

export { getProfile } from './model/selectors/getProfile/getProfile';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';

export { getProfileData } from './model/services/getProfileData/getProfileData';

export { ProfileCard } from './ui/ProfileCard';
