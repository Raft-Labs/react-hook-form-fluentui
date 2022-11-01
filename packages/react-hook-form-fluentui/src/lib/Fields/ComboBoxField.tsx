import { ComboBox, IComboBoxProps } from '@fluentui/react';
import { FC } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

export interface IComboBoxFieldProps extends IComboBoxProps {
  formHook: UseFormReturn;
  name: string;
}

export const ComboBoxField: FC<IComboBoxFieldProps> = ({
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
        <ComboBox
          onChange={(e, option) => {
            onChange(option?.key);
          }}
          onBlur={onBlur}
          selectedKey={value}
          errorMessage={error && error.message}
          {...props}
        />
      )}
    />
  );
};
