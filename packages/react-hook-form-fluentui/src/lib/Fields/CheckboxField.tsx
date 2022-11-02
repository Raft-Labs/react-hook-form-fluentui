import { Checkbox, ICheckboxProps, useTheme } from '@fluentui/react';
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
  const theme = useTheme();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => {
        return (
          <>
            <Checkbox
              label={label}
              name={name}
              onChange={onChange}
              inputProps={{ onBlur }}
              checked={!!value}
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
        );
      }}
    />
  );
};
