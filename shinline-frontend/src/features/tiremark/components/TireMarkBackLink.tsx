import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function TireMarkBackLink() {
  return (
    <Link to="/trademarks" className="hidden items-center sm:flex">
      <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC]">
        <img className="w-[30px]" src="/img/catalog/filter-02.svg" alt="" />
      </div>
      <span className="ml-3 text-lg font-medium">Back to all marks</span>
      <ChevronRightIcon className="w-[24px]" />
    </Link>
  );
}

export default TireMarkBackLink;
