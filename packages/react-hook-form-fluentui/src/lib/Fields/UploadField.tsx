import { Text } from '@fluentui/react';
import { useId } from '@fluentui/react-hooks';
import Upload, { UploadProps } from 'rc-upload';
import { FC } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

export interface UploadFieldProps extends UploadProps {
  formHook: UseFormReturn;
  name: string;
}

export const UploadField: FC<UploadFieldProps> = ({
  formHook,
  name,
  children,
  ...props
}) => {
  const { control } = formHook;
  const id = useId('errorMessage');
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <Upload
          {...props}
          beforeUpload={async (file, fileList) => {
            await onChange(fileList);
          }}
          onBlur={onBlur}
          value={value}
        >
          {children}
          <Text
            id={id}
            variant="small"
            hidden={!error}
            className="-mt-2"
            styles={{
              root: {
                color: '#a4262c',
              },
            }}
          >
            {error && error?.message}
          </Text>
        </Upload>
      )}
    />
  );
};
