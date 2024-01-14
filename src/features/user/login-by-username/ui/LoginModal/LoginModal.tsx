import { FC, Suspense } from 'react';

import { classNames } from 'shared/lib';
import { Loader, Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm';
import cls from './LoginModal.module.scss';

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(cls.container, {}, [className])}
      data-testid="LoginModal"
    >
      <Suspense fallback={<Loader />}>
        <LoginForm />
      </Suspense>
    </Modal>
  );
};
