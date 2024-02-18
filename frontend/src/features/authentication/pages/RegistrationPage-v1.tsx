import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import BreadCrumb from '../../../ui/BreadCrumb.js';
import Input from '../../../ui/Input.tsx';
import Button from '../../../ui/Button.tsx';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext.tsx';
import PageTitle from '../../../ui/PageTitle.tsx';

// ! first approach
type RegisterProps = {
  onRegister: (login: string, fio: string, email: string) => void;
};

// { onRegister }: RegisterProps
export default function RegistrationPage() {
  const [input, setInput] = useState('');
  const [isForgottenPassword, setForgottenPassword] = useState(false);

  const login = useRef<HTMLInputElement>(null);
  const fio = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/auth', name: 'Registration' },
        ]);
      });
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredLogin = login.current!.value;
    const enteredFIO = login.current!.value;
    const enteredEmail = login.current!.value;

    event.currentTarget.reset();
    // onRegister(enteredLogin, enteredFIO, enteredEmail);
  }

  return (
    <>
      <BreadCrumb />
      <PageTitle title="Registration / Password recovery" />

      {/* <UsageForm /> */}
    </>
  );
}

// ! second approach
// ? a child component

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};
// export in order to get an another component
type FormHandle = {
  clear: () => void;
  customMethod: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('CLEARING');
        form.current?.reset();
      },
      // an example for more detail explanition
      customMethod: () => {
        console.log('Custom method called');
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

// // ? a parent component
export function UsageForm() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; email: string };
    console.log(extractedData);
    customForm.current?.clear();
    customForm.current?.customMethod();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="text" label="Email" id="email" />
        <p>
          <Button className="" type="success">
            Save
          </Button>
        </p>
      </Form>
    </main>
  );
}

function SecondComponent() {
  function handleChange() {}
  return (
    <form
      action=""
      className="mt-6  flex flex-col items-center justify-center rounded bg-[#F5F8FC] p-4 sm:p-10"
    >
      <h2 className="mb-2 font-bold sm:mb-4 sm:text-xl">
        {' '}
        If you have forgotten your password, please enter your username or
        E-Mail.{' '}
      </h2>
      <p className="mb-5 text-sm text-extragray sm:text-base">
        The control string for changing the password, as well as your
        registration data, will be sent to you by E-Mail.
      </p>
      <div className="mb-2 w-full md:w-1/2">
        <Input id="em" label="E-mail" type="text" onChange={handleChange} />
      </div>
      <button className="h-[50px] w-full rounded bg-green text-white transition hover:shadow-[0px_4px_10px_0px_rgba(21,165,36,0.50)] md:w-1/3">
        Reset
      </button>
    </form>
  );
}
