import { PlusSmallIcon } from '@heroicons/react/24/outline';

function BrandActionBlock() {
  return (
    <div className="hidden basis-1/4 rounded bg-white p-4 shadow-[0_0_50px_0_rgba(2,36,86,0.05)] md:block">
      <ul className="font-normal text-[#566879]  [&>.active]:rounded [&>.active]:bg-[#F7F9FD] [&>.disabled>span]:text-[#BECAD6] [&>.disabled]:text-[#BECAD6] [&>li]:rounded [&>li]:transition-all [&>li]:duration-200 hover:[&>li]:bg-[#F7F9FD]">
        <li className="disabled mb-2 px-4 py-2">
          Achilles <span className="ml-1 text-[12px] text-[#E31E24]">(0)</span>
        </li>
        <li className="active mb-2 px-4 py-2">
          Achilles <span className="ml-1 text-[12px] text-[#E31E24]">(54)</span>
        </li>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <li key={item} className="mb-2 px-4 py-2">
            Achilles{' '}
            <span className="ml-1 text-[12px] text-[#E31E24]">({item}4)</span>
          </li>
        ))}
      </ul>
      <div className="mt-2 flex items-center justify-center rounded bg-[#F5F8FC] p-[6px]">
        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white">
          <PlusSmallIcon className="h-6 w-6 " />
        </div>
        <p className="ml-4 text-sm font-medium uppercase">Show all</p>
      </div>
    </div>
  );
}

export default BrandActionBlock;
