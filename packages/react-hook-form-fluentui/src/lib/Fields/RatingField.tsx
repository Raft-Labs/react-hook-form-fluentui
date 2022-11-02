import { IRatingProps, Rating, useTheme } from '@fluentui/react';
import { FC } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

export interface RatingFieldProps extends IRatingProps {
  formHook: UseFormReturn;
  name: string;
}

export const RatingField: FC<RatingFieldProps> = ({
  formHook,
  name,
  ...props
}) => {
  const theme = useTheme();
  const { control } = formHook;
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
      }) => (
        <>
          <Rating
            onBlur={onBlur}
            onChange={(e, rating) => onChange(rating)}
            rating={value}
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
