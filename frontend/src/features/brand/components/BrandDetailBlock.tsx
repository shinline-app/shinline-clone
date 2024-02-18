function BrandDetailBlock() {
  return (
    <div className="mb-4 flex w-full flex-col border border-[#E2E9F2] sm:flex-row">
      <p className="mx-auto flex h-full w-full basis-1/2 items-center justify-center p-8 sm:p-5 lg:p-14">
        <img className="w-full" src="/img/01.png" alt="" />
      </p>
      <div className="basis-1/2 border-l border-[#E2E9F2]">
        <div className="flex h-14 items-center justify-end px-5 py-3 ">
          <img
            className="h-full  object-cover"
            src="/img/catalog/brand/firemax.svg"
            alt="brand"
          />
        </div>
        <div className="border-y border-[#E2E9F2] bg-[#F5F8FC] px-5 py-4 sm:py-5 lg:px-9">
          <h2 className="mb-2 text-2xl font-semibold sm:mb-3 sm:text-3xl">
            from 40 000$
          </h2>
          <p className="mb-1 flex items-center whitespace-nowrap">
            <b className=" text-[#15A524]">In stock:</b>{' '}
            <span className="ml-2 text-[#566879]">
              Left from 4 to 20 pieces
            </span>
          </p>
        </div>
        <div className="px-5 lg:px-9">
          <div className="grid grid-cols-2 border-[#E2E9F2] py-4 first:border-b sm:py-5">
            <p className="font-light text-[#566879]">Seasonality:</p>
            <div>
              <div className="mb-3 flex items-center">
                <p className="w-[25px]">
                  <img className="w-full" src="/img/winter-snow.svg" alt="" />
                </p>
                <p className="ml-2 font-medium">Winter</p>
              </div>
              <div className=" flex items-center">
                <p className="w-[25px]">
                  <img className="w-full" src="/img/sunny-winter.svg" alt="" />
                </p>
                <p className="ml-2 font-medium">All seasons</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 border-[#E2E9F2] py-4 first:border-b sm:py-5">
            <p className="font-light text-[#566879]">Spikes:</p>
            <div>
              <div className=" flex items-center">
                <p className="w-[25px]">
                  <img className="w-full" src="/img/winter.svg" alt="" />
                </p>
                <p className="ml-2 font-medium">Shipovniy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandDetailBlock;
