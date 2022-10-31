import { PrimaryButton } from '@fluentui/react';
import {
  CheckboxField,
  InputField,
  PasswordInputField,
} from '@raftlabs/react-hook-form-fluentui';
import Form from 'packages/react-hook-form-fluentui/src/lib/Form';
import { useForm } from 'react-hook-form';

export function App() {
  const form = useForm();
  return (
    <Form formHook={form} onSubmit={(val) => console.log(val)}>
      <InputField formHook={form} label="Input 1" name="input1" />
      <PasswordInputField formHook={form} label="Password" name="pass1" />
      <CheckboxField formHook={form} label="Check IT" name="checkit" />
      <PrimaryButton type="submit" text="Submit To Console" />
    </Form>
  );
}
export default App;
