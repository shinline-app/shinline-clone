import { ReactNode, useState } from 'react';
import { classNames } from '../../../utils/helpers';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

type AccordionItemProps = {
  children: ReactNode;
  label: string;
};

function AccordionItem({ children, label }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={classNames(
        !isOpen ? 'max-h-[72px] overflow-hidden' : '',
        'mb-2 cursor-pointer rounded bg-[#F5F8FC] px-5 pb-5'
      )}
    >
      <div
        className="flex w-full items-center justify-between pb-2 pt-[22px]"
        onClick={handleToggle}
      >
        <p className="text-lg font-medium">{label}</p>
        <ChevronDownIcon className="h-7 w-7 text-black" />
      </div>
      {children}
    </div>
  );
}

export default AccordionItem;
