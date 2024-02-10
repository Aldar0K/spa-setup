import { ReducerList } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
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
      <div className={classNames('', {}, [className])}>{t('Profile')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
