import {
  ReducerList,
  useAppDispatch,
  useAppSelector
} from 'app/providers/StoreProvider';
import {
  ProfileCard,
  getProfile,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  profileReducer
} from 'entities/profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';

const reducers: ReducerList = {
  profile: profileReducer
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const profile = useAppSelector(getProfile);
  const isLoadig = useAppSelector(getProfileIsLoading);
  const error = useAppSelector(getProfileError);

  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={className} data-testid='ProfilePage'>
        <ProfileCard profile={profile} isLoadig={isLoadig} error={error} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
