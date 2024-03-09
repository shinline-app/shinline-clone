import { Link } from 'react-router-dom';
import { CalculatorIcon, MapPinIcon } from '@heroicons/react/24/outline';

function HeaderTopItems() {
  return (
    <div className="flex  flex-col py-3 md:flex-row md:space-x-4">
      <Link to="/tire">
        <button className="mb-2 inline-flex w-full items-center justify-center rounded-[5px] bg-gray-400 px-4 py-2  text-center text-sm font-medium uppercase text-white md:mb-0 md:bg-opacity-20 md:hover:bg-opacity-30">
          <MapPinIcon className="mr-[10px] h-6 w-6" aria-hidden="true" />
          <span className="">tire centers</span>
        </button>
      </Link>

      <button className="inline-flex items-center justify-center rounded-[5px] bg-gray-400 px-4  py-2 text-center text-sm font-medium uppercase text-white md:bg-opacity-20 md:hover:bg-opacity-30">
        <CalculatorIcon className="mr-[10px] h-6 w-6" aria-hidden="true" />
        <span className="">tire calculator</span>
      </button>
    </div>
  );
}

export default HeaderTopItems;
