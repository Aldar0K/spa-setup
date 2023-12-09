/* eslint-disable i18next/no-literal-string */

import { Dialog } from '@headlessui/react';
import { FC, ReactNode, useState } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import cls from './Modal.module.scss';

type ModalProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

export const Modal: FC<ModalProps> = (props) => {
  const {
    children, title, description, className,
  } = props;
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className={classNames(cls.container, {}, [theme])}
      data-testid="Modal"
    >
      <div className={cls.backdrop} aria-hidden="true" />

      <div className={cls['panel-wrapper']}>
        <Dialog.Panel className={classNames(cls.panel, {}, [className])}>
          <Dialog.Title className={cls.title}>Deactivate account</Dialog.Title>
          <Dialog.Description className={cls.description}>
            This will permanently deactivate your account
          </Dialog.Description>

          {children}

          <button onClick={handleClose} className={cls['button-close']}>Deactivate</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
