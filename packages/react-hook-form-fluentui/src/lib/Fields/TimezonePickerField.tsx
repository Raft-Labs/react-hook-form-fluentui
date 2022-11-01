import {
  ComboBox,
  IDropdownOption,
  IDropdownStyleProps,
  IDropdownStyles,
  IStyleFunctionOrObject,
} from '@fluentui/react';
import React, { FC } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
import timezones from 'timezones-list';

interface TimezonePickerProps {
  name: string;
  formHook: UseFormReturn;
  placeholder?: string;
  required?: boolean;
  label: string;
  styles?: Partial<
    IStyleFunctionOrObject<IDropdownStyleProps, IDropdownStyles>
  >;
  disabled?: boolean;
}

export interface TimezoneType {
  tzCode: string;
  label: string;
}
const options: IDropdownOption[] = timezones.map((timezone: TimezoneType) => {
  if (timezone?.tzCode === 'Asia/Kolkata') {
    return {
      key: 'Asia/Calcutta',
      text: 'Asia/Calcutta (GMT+05:30)',
    };
  }
  return {
    text: timezone?.label,
    key: timezone?.tzCode,
  };
});
export const TimezonePicker: FC<TimezonePickerProps> = ({
  formHook,
  name,
  label,
  styles,
  placeholder,
  required = false,
  disabled = false,
  ...props
}) => {
  const { control } = formHook;
  return (
    <Controller
      name={name}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => {
        return (
          <ComboBox
            {...props}
            disabled={disabled}
            label={label}
            required={required}
            placeholder={placeholder || ''}
            options={options}
            defaultSelectedKey={
              Intl.DateTimeFormat().resolvedOptions().timeZone
            }
            onBlur={onBlur}
            onChange={(e, option) => {
              onChange(option?.key);
            }}
            selectedKey={value}
            errorMessage={error && error.message}
            styles={styles}
            calloutProps={{
              calloutMaxHeight: 300,
            }}
            allowFreeform
            autoComplete="on"
          />
        );
      }}
      control={control}
    />
  );
};
