import { useRef } from 'react';
import Button from '../../../ui/Button';
import { Form, FormHandle } from '../../../ui/Form';
import Input from '../../../ui/Input';
import InputHint from './InputHint';

function SignUpForm() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; email: string };
    console.log(extractedData);
    customForm.current?.clear();
    customForm.current?.signUpMethod();
  }
  return (
    <Form
      ref={customForm}
      onSave={handleSave}
      className="mt-6 rounded bg-[#F5F8FC] p-4 sm:p-10"
    >
      <div className="flex items-center">
        <div className="mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
          <Input id="login" label="Login" name="login" type="text" />
        </div>
        <InputHint text="" />
      </div>
      <div className="flex items-center">
        <div className="mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
          <Input id="fio" label="FIO" name="fio" type="text" />
        </div>
        <InputHint text="Fill out so we know how to contact you." />
      </div>
      <div className="flex items-center">
        <div className="mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
          <Input id="email" label="E-mail" name="email" type="email" />
        </div>
        <InputHint
          text="To send order status notifications. Use as login for login to your
          personal account."
        />
      </div>
      <div className="flex items-center">
        <div className="mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
          <Input
            id="phone"
            placeholder="+998"
            type="text"
            name="phone"
            label="Phone"
          />
        </div>
        <InputHint text="Required to clarify the details of the order." />
      </div>
      <div className="flex items-center">
        <div className="mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
          <Input
            id="password"
            label="Password"
            autoComplete="password"
            name="password"
            type="password"
          />
        </div>
        <InputHint text="The password must be at least 6 characters long." />
      </div>
      <div className="flex items-center">
        <div className="mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
          <Input
            id="confirm-password"
            name="confirmPassword"
            autoComplete="confirmPassword"
            label="Confirm Password"
            type="password"
          />
        </div>
        <p className="hidden sm:block "></p>
      </div>
      <p className="my-2 mb-4 text-sm sm:w-1/2">
        By clicking on the Sign in button, you consent to{' '}
        <b>the processing of personal data</b>
      </p>
      <Button mode="success" className="sm:w-1/2">
        Sign In
      </Button>
    </Form>
  );
}

export default SignUpForm;
