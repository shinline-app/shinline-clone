import { CalendarDaysIcon, EyeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function NewItem({ item }: any) {
  return (
    <Link
      to={`/news/${item.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded border border-[#E6E6E6] bg-white"
    >
      <p className="h-[250px] flex-auto ">
        <img className="h-full w-full object-cover" src={item.imgUrl} alt="" />
      </p>
      <div className="h-full p-5">
        <div className="mb-2 flex">
          <p className="flex items-center">
            <CalendarDaysIcon className="h-5 w-5 text-extragray" />
            <span className="ml-[6px] text-sm font-medium text-extragray">
              03 january, 11:51
            </span>
          </p>
          <p className="ml-3 flex items-center">
            <EyeIcon className="h-5 w-5 text-extragray" />
            <span className="ml-[6px] text-sm font-medium text-extragray">
              378
            </span>
          </p>
        </div>
        <h2 className="mb-2 font-bold sm:text-lg">{item.title}</h2>
        <p className=" truncate text-sm text-extragray">{item.description}</p>
      </div>
    </Link>
  );
}

export default NewItem;
