import { ChangeEvent, ComponentPropsWithoutRef, forwardRef } from 'react';

type InputProps = {
  id?: string;
  label: string;
  optional?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, optional = true, ...props },
  ref
) {
  return (
    <p className="mb-3">
      <label
        className="mb-1 block text-sm text-extragray sm:text-base"
        htmlFor={id}
      >
        {label}
        {optional && <sup className="text-red">*</sup>}
      </label>
      <input
        id={id}
        name={id}
        ref={ref}
        {...props}
        className="h-[45px] w-full rounded border border-[#E2E9F2] bg-[#F8FAFD] px-2 pl-3 text-[16px] outline-none sm:h-[50px]"
      />
    </p>
  );
});

export default Input;
