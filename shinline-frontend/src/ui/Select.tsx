import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type SelectOptions = {
  value: string;
  label: string;
}[];

interface SelectProps {
  options: SelectOptions;
  value: any;
  type: string;
  onChange: (type: string, value: string) => void;
  label: string;
}

export default function Select({
  options,
  value,
  type,
  onChange,
  label,
}: SelectProps) {
  return (
    <Listbox value={value} onChange={(e) => onChange(type, e)}>
      {({ open }) => (
        <>
          <div className="relative w-full">
            <Listbox.Button className=" relative h-[64px] w-full cursor-pointer overflow-hidden rounded  bg-white pl-[14px] pr-8 text-left text-[#191717] focus:outline-none sm:text-sm sm:leading-6">
              <p className="flex flex-col truncate text-sm sm:text-base">
                <span className="text-[13px] text-[#566879]">{label}</span>
                <span className="truncate font-semibold">{value}</span>
              </p>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon className="h-5 w-5 text-[#191717]" />
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white px-2 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options?.length === 0 ? (
                  <div className="relative cursor-pointer select-none rounded py-3 pl-[6px] pr-5 text-center font-normal">
                    No options available
                  </div>
                ) : (
                  options?.map((item) => (
                    <Listbox.Option
                      key={item.value}
                      className={({ selected, active }) =>
                        classNames(
                          active || selected
                            ? 'bg-[#F5F8FC] text-black'
                            : 'text-[#566879]',
                          'relative cursor-pointer select-none rounded py-3 pl-[6px] pr-5 font-normal'
                        )
                      }
                      value={item.value}
                    >
                      {() => (
                        <>
                          <div className="flex items-center text-sm sm:text-base">
                            <span>{item.label}</span>
                          </div>
                        </>
                      )}
                    </Listbox.Option>
                  ))
                )}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
