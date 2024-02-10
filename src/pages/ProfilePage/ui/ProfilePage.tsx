import { ReducerList } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/profile';
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

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={className} data-testid='ProfilePage'>
        <h1>{t('Profile')}</h1>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
