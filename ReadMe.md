# @raftlabs/react-hook-form-fluentui

A wrapper of Fluent UI Form Components with React Hook Form

## Installation

```sh
npm i @raftlabs/react-hook-form-fluentui
```

OR

```sh
yarn add @raftlabs/react-hook-form-fluentui
```

---

## Tech Stack/Dependencies

### **Install these dependencies before using the library**

- [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/get-started/web)
- [React Hook Form](https://react-hook-form.com/)

---

## List of Components

- CheckboxField
- ChoiceGroupField
- ComboBoxField
- DatePickerField
- DropDownField
- Form
- InputField
- PasswordField
- RatingField
- RichTextEditorField
- SliderField
- TimezonePickerField
- ToggleField
- UploadField

---

## Usage

Most components are based off the components provided by Fluent UI.

### Form Component Options

|   Name   | Type                                                          | Description                                                                     |
| :------: | :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| formHook | [UseFormReturn](https://react-hook-form.com/ts#UseFormReturn) | Form Hook returned by [useForm()](https://react-hook-form.com/api/useform) hook |
| onSubmit | (data, event) => void                                         | Submit function to invoke Hook                                                  |

### Form Field Options

|                     Name                     | Type                                                                                                                                                                                                                                                                                                             | Description                                                                       |
| :------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
|                     name                     | string                                                                                                                                                                                                                                                                                                           | Name of the field                                                                 |
|                    label                     | string                                                                                                                                                                                                                                                                                                           | Label for the Field                                                               |
|                   formHook                   | [UseFormReturn](https://react-hook-form.com/ts#UseFormReturn)                                                                                                                                                                                                                                                    | Form Object returned by [useForm()](https://react-hook-form.com/api/useform) hook |
| options(for ChoiceGroup, ComboBox, DropDown) | [ChoiceGroup](https://developer.microsoft.com/en-us/fluentui#/controls/web/choicegroup#IChoiceGroupOption), [ComboBox](https://developer.microsoft.com/en-us/fluentui#/controls/web/combobox#IComboBoxOption), [DropDown](https://developer.microsoft.com/en-us/fluentui#/controls/web/dropdown#IDropdownOption) | Selectable Options to display                                                     |

## Demo

```js
import { Form, DropDownField } from '@raftlabs/react-hook-form-fluentui';
import { useForm } from 'react-hook-form';
import { PrimaryButton } from '@fluentui/react';

export const App = () => {
  const form = useForm();
  return (
    <Form formHook={form} onSubmit={console.log}>
      <DropdownField
        formHook={form}
        name="lang"
        label="Language"
        options={[
          { key: 'eng', text: 'English' },
          { key: 'esp', text: 'Spanish' },
        ]}
      />
      <PrimaryButton type="submit" text="Submit To Console" />
    </Form>
  );
};
```
