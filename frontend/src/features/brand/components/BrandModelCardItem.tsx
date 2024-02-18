function BrandModelCardItem() {
  return (
    <>
      <div className="flex max-h-[300px]  basis-[100%] flex-col items-center border  border-[#E2E9F2] p-5 font-semibold sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
        <p className="mb-4 max-h-[170px] flex-auto">
          <img className="h-full object-cover" src="/img/02.png" alt="" />
        </p>
        <p className=" max-w-[150px] truncate pb-4">Polar 2</p>
        <div className="rounded bg-[#BCBCBC] px-3 text-sm text-white">
          Not available
        </div>
      </div>
      <div className="flex max-h-[300px]  basis-[100%] flex-col items-center border  border-[#E2E9F2] p-5 font-semibold sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
        <p className="mb-4 max-h-[170px] flex-auto">
          <img className="h-full object-cover" src="/img/03.png" alt="" />
        </p>
        <p className="max-w-[150px] truncate pb-4">
          Polar 2 Lorem ipsum dolor sit amet.
        </p>
        <div className="whitespace-nowrap rounded px-3 text-xl text-[#566879]">
          from 46 $
        </div>
      </div>
    </>
  );
}

export default BrandModelCardItem;
