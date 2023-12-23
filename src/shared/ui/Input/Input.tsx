import {
  ChangeEventHandler, InputHTMLAttributes, memo,
} from 'react';

import { classNames } from 'shared/lib';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

type InputProps = HTMLInputProps & {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export const Input = memo((props: InputProps) => {
  const {
    type = 'text',
    value,
    onChange,
    placeholder,
    className,
    ...otherProps
  } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <div
      className={classNames(cls.container, {}, [className])}
      data-testid="Input"
    >
      {placeholder && (
        <span className={cls.placeholder}>
          {`${placeholder}>`}
        </span>
      )}

      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={cls.input}
        {...otherProps}
      />
    </div>
  );
});
