import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function TireMarkSearch() {
  return (
    <div className="mb-2 flex  flex-col items-center justify-between rounded bg-[#F5F8FC] px-4 py-3 sm:flex-row sm:px-8 sm:py-4">
      <p className="text-lg font-semibold uppercase">List of car marks:</p>
      <div className="relative mt-2 w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3">
          <MagnifyingGlassIcon className="h-6 w-6 text-[#B2B2B2]" />
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block h-[45px] w-full rounded border border-[#E2E9F2] py-1 pl-10 pr-20 text-sm text-gray-900 outline-none  placeholder:text-gray-400"
          placeholder="Search mark"
        />
      </div>
    </div>
  );
}

export default TireMarkSearch;
