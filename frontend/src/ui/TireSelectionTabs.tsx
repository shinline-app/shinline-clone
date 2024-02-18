import { NavLink } from 'react-router-dom';
import selection from '../data/data-selection.json';

function TireSelectionTabs() {
  return (
    <div className="mb-4 flex  flex-col gap-[6px] rounded bg-[#F5F8FC] p-1 lg:h-[70px]  lg:flex-row">
      {selection.map((item: any) => (
        <NavLink
          key={item.id}
          to={`/${item.path}`}
          className="relative flex min-h-[62px] flex-[33.333%] items-center justify-center overflow-hidden rounded bg-white duration-150 hover:shadow-md lg:h-auto [&.active]:bg-[#F23F44] [&.active]:text-white"
        >
          <p className="absolute left-0 top-0">
            <img
              src={`/img/catalog/${item.imgUrl}.svg`}
              className=" w-[90%] object-contain sm:w-full"
              alt=""
            />
          </p>
          <p className=" text-[12px] font-semibold uppercase sm:ml-0 sm:text-sm">
            {item.title}
          </p>
        </NavLink>
      ))}

      {
        // todo: need to set active selection
        /* <div className="relative flex min-h-[62px] flex-[33.333%] items-center justify-center overflow-hidden rounded bg-[#F23F44] lg:h-auto">
        <p className="absolute left-0 top-0">
          <img
            src="/img/catalog/by-model.svg"
            className=" w-[90%] object-contain  sm:w-full"
            alt=""
          />
        </p>
        <p className=" text-[12px] font-semibold uppercase text-white sm:ml-0 sm:text-sm">
          Tire selection by car brand
        </p>
      </div> */
      }
    </div>
  );
}

export default TireSelectionTabs;
