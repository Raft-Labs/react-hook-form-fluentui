import { ISliderProps, Slider, useTheme } from '@fluentui/react';
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
  const theme = useTheme();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
      }) => (
        <>
          <Slider
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            {...props}
          />
          {error?.type !== 'typeError' && (
            <span
              style={{
                fontSize: 12,
                color: theme.semanticColors.errorText,
              }}
            >
              {error?.message}
            </span>
          )}
        </>
      )}
    />
  );
};
