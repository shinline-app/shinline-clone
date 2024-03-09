import AccordionItem from './AccordionItem.tsx';

function FilterByPrice() {
  return (
    <AccordionItem label="Price">
      <div className="mt-5">
        <div className="flex h-[70px] items-center rounded bg-white py-2">
          <div className="flex">
            <div className="flex-[50%] flex-shrink-0 flex-grow-0 px-4">
              <p className="text-[13px] font-semibold">from</p>
              <input
                type="text"
                value={10000}
                className="w-full text-[#566879] focus:outline-none "
                readOnly
              />
            </div>
            <div className="relative flex-[50%] flex-shrink-0 flex-grow-0 px-4 after:absolute after:left-[-1px] after:top-0 after:h-[48px] after:w-[1px] after:bg-[#E2E9F2] after:content-['']">
              <p className="text-[13px] font-semibold">to</p>
              <input
                type="text"
                value={10000}
                className="w-full  text-[#566879] focus:outline-none"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </AccordionItem>
  );
}

export default FilterByPrice;
