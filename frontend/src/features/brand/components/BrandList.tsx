import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function BrandList({ lists, initiallyDisplayed }) {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? lists : lists.slice(0, initiallyDisplayed);

  function handleShowAll() {
    setShowAll(!showAll);
  }
  return (
    <div className="hidden basis-1/4 rounded bg-white p-4 shadow-[0_0_50px_0_rgba(2,36,86,0.05)] md:block">
      <ul className="font-normal text-[#566879]  [&>.active]:rounded [&>.active]:bg-[#F7F9FD] [&>.disabled>span]:text-[#BECAD6] [&>.disabled]:text-[#BECAD6] [&>li]:rounded [&>li]:transition-all [&>li]:duration-200 hover:[&>li]:bg-[#F7F9FD]">
        <li className="disabled mb-2 px-4 py-2">
          Achilles <span className="ml-1 text-[12px] text-[#E31E24]">(0)</span>
        </li>
        <li className="active mb-2 px-4 py-2">
          Achilles <span className="ml-1 text-[12px] text-[#E31E24]">(54)</span>
        </li>
        {displayedItems.map((item) => (
          <li key={item} className="mb-2 px-4 py-2">
            Achilles{' '}
            <span className="ml-1 text-[12px] text-[#E31E24]">({item}4)</span>
          </li>
        ))}
      </ul>
      {lists.length > initiallyDisplayed ? (
        <div
          onClick={handleShowAll}
          className="mt-2 flex cursor-pointer items-center justify-center rounded bg-[#F5F8FC] p-[6px]"
        >
          <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white">
            {showAll ? (
              <MinusSmallIcon className="h-6 w-6" />
            ) : (
              <PlusSmallIcon className="h-6 w-6" />
            )}
          </div>
          <p className="ml-4 text-sm font-medium uppercase">
            {showAll ? 'Show less' : 'Show all'}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default BrandList;
