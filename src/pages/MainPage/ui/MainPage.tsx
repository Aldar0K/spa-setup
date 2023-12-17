import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from 'entities/counter';
import styles from './MainPage.module.scss';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={styles.container} data-testid="MainPage">
      <h1>{t('Main')}</h1>
      <Counter />
    </div>
  );
};

export default MainPage;
