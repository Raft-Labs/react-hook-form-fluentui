import { ChoiceGroup, IChoiceGroupProps, useTheme } from '@fluentui/react';
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
  const theme = useTheme();
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <>
            <ChoiceGroup
              {...props}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
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
