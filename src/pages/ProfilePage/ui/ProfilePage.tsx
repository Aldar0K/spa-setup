import { ReducerList, useAppDispatch } from 'app/providers/StoreProvider';
import { getProfileData, profileReducer } from 'entities/profile';
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

  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={className} data-testid='ProfilePage'>
        <h1>{t('Profile')}</h1>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
