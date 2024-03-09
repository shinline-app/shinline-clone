function TireMarkDetailSeasons() {
  return (
    <div className="flex flex-col gap-2 bg-[#F5F8FC] p-3 md:flex-row lg:gap-[15px] lg:p-5">
      {[1, 2, 3].map((season) => (
        <div className="mb-3 basis-1/3 md:mb-0">
          <div className="mb-[5px] flex items-center justify-center rounded bg-white p-[10px] sm:mb-2">
            <p className="w-7 sm:w-[32px]">
              <img className="w-full" src="/img/winter-snow.svg" alt="" />
            </p>
            <p className="ml-[10px] font-medium sm:text-lg">Winter</p>
          </div>
          <div className="rounded bg-white px-4 py-2 sm:px-7">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div className="group flex items-baseline justify-between border-b border-[#E2E9F2] py-[10px] last:border-b-0">
                <p className="font-medium transition-all group-hover:text-[#E31E24]">
                  195/55 R16
                </p>
                <span className="text-sm text-[#566879]">Winter</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TireMarkDetailSeasons;
