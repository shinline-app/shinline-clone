import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

function CatalogHeadSection() {
  return (
    <div className="mb-4 flex flex-col justify-between lg:flex-row lg:items-center">
      <div>
        <div className="-mt-1 mb-2 flex flex-col lg:mb-0 lg:flex-row lg:items-baseline">
          <h2 className="text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl  md:text-3xl">
            Tires 155/70R13 in Kazakhstan
          </h2>
          <span className="text-[#566879] lg:ml-5">3589 items</span>
        </div>
        <p className="hidden text-[#566879] lg:block">
          Selection by parameters
        </p>
      </div>
      <div className="flex items-center">
        <div className="mr-2 flex h-12 w-12 items-center justify-center bg-[#F5F8FC] md:mr-4 md:h-16 md:w-16">
          <img className="w-6 md:w-8" src="/img/map-pin-line.svg" alt="" />
        </div>
        <div>
          <p className="text-sm text-[#566879] md:text-[16px]">
            Show products by branch
          </p>
          <div className="flex items-center">
            <Link
              to={'/'}
              className="border-b border-dashed border-[#56687957] font-semibold text-[#191717] md:text-[18px]"
            >
              Kazakstan
            </Link>
            <ChevronRightIcon className=" h-5 w-5 text-[#191717]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogHeadSection;
