import { Dialog } from '@headlessui/react';
import { FC, ReactNode, useState } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import IconClose from 'shared/assets/icons/close.svg';
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
          {title && (
            <Dialog.Title title={title} className={cls.title}>
              {title}
            </Dialog.Title>
          )}

          {description && (
            <Dialog.Description title={description} className={cls.description}>
              {description}
            </Dialog.Description>
          )}

          {children}

          <button onClick={handleClose} className={cls['button-close']}>
            <IconClose />
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
