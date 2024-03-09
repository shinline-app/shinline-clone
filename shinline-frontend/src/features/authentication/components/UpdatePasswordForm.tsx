import { useRef } from 'react';
import Input from '../../../ui/Input';
import { Form, FormHandle } from '../../../ui/Form';
import Button from '../../../ui/Button';

function UpdatePasswordForm() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; email: string };
    console.log(extractedData);
    customForm.current?.clear();
    customForm.current?.updatePasswordFormMethod();
  }
  return (
    <Form
      ref={customForm}
      onSave={handleSave}
      className="mt-6  flex flex-col items-center justify-center rounded bg-[#F5F8FC] p-4 sm:p-10"
    >
      <h2 className="mb-2 font-bold sm:mb-4 sm:text-xl">
        If you have forgotten your password, please enter your username or
        E-Mail.
      </h2>
      <p className="mb-5 text-sm text-extragray sm:text-base">
        The control string for changing the password, as well as your
        registration data, will be sent to you by E-Mail.
      </p>
      <div className="mb-2 w-full md:w-1/2">
        <Input
          id="email"
          label="E-mail"
          type="email"
          name="email"
          autoComplete="email"
        />
      </div>
      <Button type="success" className="md:w-1/3">
        Reset
      </Button>
    </Form>
  );
}

export default UpdatePasswordForm;
