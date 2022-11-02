import { FontIcon } from '@fluentui/react/lib/Icon';
import {
  createAutoformatPlugin,
  createBoldPlugin,
  createDeserializeMdPlugin,
  createHeadingPlugin,
  createItalicPlugin,
  createPlateUI,
  createPlugins,
  createUnderlinePlugin,
  getPluginType,
  HeadingToolbar,
  MarkToolbarButton,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  Plate,
  PlateProps,
  PlateProvider,
  TEditableProps,
  usePlateEditorRef,
} from '@udecode/plate';
import { useMemo } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
import { BlockType, serialize } from 'remark-slate';

const plateUI = createPlateUI();

const platePlugins = createPlugins(
  [
    createHeadingPlugin(),
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createDeserializeMdPlugin(),
    createAutoformatPlugin(),
  ],
  { components: plateUI }
);

interface IRichTextEditorFieldProps extends PlateProps {
  name: string;
  label: string;
  formHook: UseFormReturn;
  placeholder?: string;
  customHelp?: string;
  autoFocus?: boolean;
}

export const RichTextEditorField = ({
  name,
  label,
  formHook,
  placeholder,
  ...props
}: IRichTextEditorFieldProps) => {
  const editableProps: TEditableProps = useMemo(
    () => ({
      placeholder,
    }),
    [placeholder]
  );
  const plateEditor = usePlateEditorRef();
  const { control } = formHook;

  return (
    <Controller
      name={name}
      render={({ field }) => {
        const { onChange, value } = field;
        return (
          <div
            style={{
              marginTop: '1.2rem',
              marginBottom: '1.2rem',
              border: '1px solid grey',
            }}
          >
            <PlateProvider
              {...props}
              value={value}
              plugins={platePlugins}
              onChange={(val: BlockType[]) =>
                onChange(
                  val.map((node: BlockType) => serialize(node)).join('\n')
                )
              }
            >
              <HeadingToolbar>
                <MarkToolbarButton
                  icon={<FontIcon iconName="Bold" style={{ fontSize: '2' }} />}
                  type={getPluginType(plateEditor, MARK_BOLD)}
                />
                <MarkToolbarButton
                  icon={<FontIcon iconName="Italic" />}
                  type={getPluginType(plateEditor, MARK_ITALIC)}
                />
                <MarkToolbarButton
                  icon={<FontIcon iconName="Underline" />}
                  type={getPluginType(plateEditor, MARK_UNDERLINE)}
                />
              </HeadingToolbar>
              <div
                style={{
                  padding: '0.4rem',
                }}
              >
                <Plate editableProps={editableProps} />
              </div>
            </PlateProvider>
          </div>
        );
      }}
      control={control}
    />
  );
};
