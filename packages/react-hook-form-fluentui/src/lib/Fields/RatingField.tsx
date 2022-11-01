import { IRatingProps, Rating } from '@fluentui/react';
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
  const { control } = formHook;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onBlur, onChange, value } }) => (
        <Rating
          onBlur={onBlur}
          onChange={(e, rating) => onChange(rating)}
          rating={value}
          {...props}
        />
      )}
    />
  );
};
