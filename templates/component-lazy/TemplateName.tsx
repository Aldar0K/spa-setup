import { FC } from 'react';

import { classNames } from 'shared/lib';
import cls from './TemplateName.module.scss';

type TemplateNameProps = {
  className?: string;
};

const TemplateName: FC<TemplateNameProps> = props => {
  const { className } = props;

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid="TemplateName"
    >
      TemplateName
    </div>
  )
};

export default TemplateName;
