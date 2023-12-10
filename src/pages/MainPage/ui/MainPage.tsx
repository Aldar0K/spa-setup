/* eslint-disable i18next/no-literal-string */

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Button, ButtonSizes, ButtonThemes, Modal,
} from 'shared/ui';
import styles from './MainPage.module.scss';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.container} data-testid="MainPage">
      <Button
        theme={ButtonThemes.OUTLINE}
        size={ButtonSizes.S}
        onClick={() => setModalOpen(true)}
      >
        Open Modal
      </Button>

      <Modal
        isOpen={modalOpen}
        title="Some title"
        onClose={() => setModalOpen(false)}
      >
        {t('Main')}
      </Modal>
    </div>
  );
};

export default MainPage;
