import { ISliderProps, Slider } from '@fluentui/react';
import { FC } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

export interface SliderFieldProps extends ISliderProps {
  formHook: UseFormReturn;
  name: string;
}

export const SliderField: FC<SliderFieldProps> = ({
  formHook,
  name,
  ...props
}) => {
  const { control } = formHook;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onBlur, onChange, value } }) => (
        <Slider onBlur={onBlur} onChange={onChange} value={value} {...props} />
      )}
    />
  );
};
