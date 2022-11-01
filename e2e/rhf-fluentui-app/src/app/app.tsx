import { PrimaryButton } from '@fluentui/react';
import {
  CheckboxField,
  ChoiceGroupField,
  ComboBoxField,
  DatePickerField,
  DropdownField,
  InputField,
  PasswordInputField,
  RatingField,
  SliderField,
  TimezonePickerField,
  ToggleField,
  UploadField,
} from '@raftlabs/react-hook-form-fluentui';
import Form from 'packages/react-hook-form-fluentui/src/lib/Form';
import { useForm } from 'react-hook-form';

export function App() {
  const form = useForm();
  return (
    <Form formHook={form} onSubmit={(val) => console.log(val)}>
      <CheckboxField formHook={form} label="Check IT" name="checkit" />
      <ChoiceGroupField
        formHook={form}
        label="Select Choice"
        name="choice"
        options={[
          { key: '1', text: 'One' },
          { key: '2', text: 'Two' },
        ]}
      />
      <ComboBoxField
        formHook={form}
        name={'cbox'}
        label="Combo Box"
        options={[
          { key: '1', text: 'One' },
          { key: '2', text: 'Two' },
        ]}
      />
      <DatePickerField formHook={form} name="dob" label="DOB" />
      <DropdownField
        formHook={form}
        name="gender"
        label="Gender"
        options={[
          { key: 'male', text: 'Malke' },
          { key: 'female', text: 'Female' },
        ]}
      />
      <InputField formHook={form} label="Input 1" name="input1" />
      <PasswordInputField formHook={form} label="Password" name="pass1" />
      <RatingField formHook={form} name="rating" />
      <SliderField formHook={form} name="slider" min={1} max={25} />
      <TimezonePickerField formHook={form} name="ggtimezone" label="Timezone" />
      <ToggleField formHook={form} name="agreement" label="Accept Agreement" />
      <UploadField formHook={form} name="file1">
        <PrimaryButton text="Upload" name="ipl" />
      </UploadField>
      <PrimaryButton type="submit" text="Submit To Console" />
    </Form>
  );
}
export default App;
