import { ChoiceGroup, IChoiceGroupProps } from '@fluentui/react';
import { FC } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

export interface ChoiceGroupFieldProps extends IChoiceGroupProps {
  formHook: UseFormReturn;
  name: string;
}

export const ChoiceGroupField: FC<ChoiceGroupFieldProps> = ({
  formHook,
  name,
  ...props
}) => {
  const { control } = formHook;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <ChoiceGroup
            {...props}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        );
      }}
    />
  );
};
