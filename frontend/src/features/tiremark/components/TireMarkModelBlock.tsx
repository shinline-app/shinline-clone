import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

function TireMarkModelBlock() {
  const location = useLocation();
  return (
    <div className="flex-[75%]">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((model) => (
        <div
          key={model}
          className="mb-[10px] gap-[10px] rounded bg-[#F5F8FC] p-3 sm:flex"
        >
          <p className="flex h-auto min-w-[220px] items-center justify-center rounded bg-white px-4 py-5 sm:py-3">
            <img
              className="w-[70%] sm:w-full"
              src={`/img/catalog/bmw-${model}.svg`}
              alt=""
            />
          </p>
          <div className="w-full sm:ml-[2px]">
            <h3 className="pb-2 pt-3 text-center text-sm font-semibold uppercase text-black sm:pt-1 sm:text-base">
              1 (E81-E88) Cabrio Restyle 2007-2011
            </h3>
            <div className="-mx-[4px] flex flex-wrap sm:-mx-[6px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 32].map((item) => (
                <Link
                  to={`${location.pathname}/${item}`}
                  key={item}
                  className="basis-1/2 p-[2px] sm:basis-1/4 sm:p-[3px] "
                >
                  <div className="flex cursor-pointer items-center justify-center rounded bg-white p-[8px] text-sm font-light text-[#566879] transition-all ease-linear hover:bg-[#E31E24]  hover:text-white sm:text-base ">
                    180d
                  </div>
                </Link>
              ))}
            </div>
            <div className="-mx-[3px] mt-1 flex items-center justify-center rounded bg-white py-[7px]">
              <p className="flex items-center text-[12px] font-medium uppercase text-black">
                <span>Show all models</span>
                <ChevronDownIcon className="ml-1 h-5 w-5 text-black" />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TireMarkModelBlock;
