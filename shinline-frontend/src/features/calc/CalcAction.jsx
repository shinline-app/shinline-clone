import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../../ui/Button.tsx';

function CalcAction() {
  return (
    <>
      <p className="mb-2 text-extragray">
        Found this query:
        <span className="ml-2 font-bold text-black">154 offers</span>
      </p>
      <div className="flex">
        <Button onClick={() => {}} type="danger" className="w-full">
          Pick up
        </Button>
        <Button onClick={() => {}} type="black" className="ml-[10px] w-full">
          <XMarkIcon className="text-gray-white mr-1 h-6 w-6" />
          <span>Reset</span>
        </Button>
      </div>
    </>
  );
}

export default CalcAction;
