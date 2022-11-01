import {
  DatePicker,
  defaultDatePickerStrings,
  IDatePickerProps,
  useTheme,
} from '@fluentui/react';
import { FC } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

export interface DatePickerFieldProps extends IDatePickerProps {
  formHook: UseFormReturn;
  name: string;
}

export const DatePickerField: FC<DatePickerFieldProps> = ({
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
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <DatePicker
            onSelectDate={onChange}
            onBlur={onBlur}
            value={value}
            styles={{
              readOnlyTextField: {
                border: error ? '1px solid rgb(164, 38, 44)' : undefined,
              },
            }}
            strings={{
              ...defaultDatePickerStrings,
              isRequiredErrorMessage: '',
              invalidInputErrorMessage: '',
              isOutOfBoundsErrorMessage: '',
            }}
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
