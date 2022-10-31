import { Checkbox, ICheckboxProps } from '@fluentui/react';
import { FC } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

export interface CheckboxFieldProps extends ICheckboxProps {
  formHook: UseFormReturn;
  name: string;
  label: string;
}

export const CheckboxField: FC<CheckboxFieldProps> = ({
  formHook,
  name,
  label,
  ...props
}) => {
  const { control } = formHook;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { value, onBlur, onChange } = field;
        return (
          <Checkbox
            label={label}
            name={name}
            onChange={onChange}
            inputProps={{ onBlur }}
            checked={!!value}
            defaultChecked={!!value}
          />
        );
      }}
    />
  );
};
