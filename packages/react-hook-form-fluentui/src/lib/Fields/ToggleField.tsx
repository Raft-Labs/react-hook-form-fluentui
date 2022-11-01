import { IToggleProps, Toggle } from '@fluentui/react';
import { FC } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

export interface ToggleFieldProps extends IToggleProps {
  formHook: UseFormReturn;
  name: string;
}

export const ToggleField: FC<ToggleFieldProps> = ({
  formHook,
  name,
  ...props
}) => {
  const { control } = formHook;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onBlur, onChange, value, ref } }) => (
        <Toggle
          onBlur={onBlur}
          onChange={(e, checked) => onChange(checked)}
          checked={value}
          ref={ref}
          {...props}
        />
      )}
    />
  );
};
