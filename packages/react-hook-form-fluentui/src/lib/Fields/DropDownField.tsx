import { Dropdown, IDropdownProps } from '@fluentui/react';
import React, { FC } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

export interface IDropdownFieldProps extends IDropdownProps {
  formHook: UseFormReturn;
  name: string;
}

export const DropdownField: FC<IDropdownFieldProps> = ({
  formHook,
  name,
  ...props
}) => {
  const { control } = formHook;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <Dropdown
          onChange={(e, option) => onChange(option?.key)}
          onBlur={onBlur}
          selectedKey={value}
          errorMessage={error?.message}
          {...props}
        />
      )}
    />
  );
};
