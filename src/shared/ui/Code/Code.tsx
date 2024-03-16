import { FC, ReactNode, memo } from 'react';

import { classNames } from 'shared/lib';
import { Button } from '../Button';
import cls from './Code.module.scss';

type CodeProps = {
  children: ReactNode;
  className?: string;
};

export const Code: FC<CodeProps> = memo(props => {
  const { children, className } = props;

  const copyToClipboard = () => {
    children && navigator.clipboard.writeText(children?.toString());
  };

  return (
    <pre
      className={classNames(cls.container, {}, [className])}
      onClick={copyToClipboard}
      data-testid='Code'
    >
      <Button size='small' className={cls['button-copy']}>
        Copy
      </Button>
      <code>{children}</code>
    </pre>
  );
});
