import { useSearchParams } from 'react-router-dom';
import { SelectProps } from '../../../models/SelectModel.ts';
import ListBox from '../../../ui/ListBox.tsx';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

type CatalogSortSectionProps = {
  sorts: SelectProps[];
};

function CatalogSortSection({ sorts }: CatalogSortSectionProps) {
  const [selectedSort, setSelectedSort] = useState<SelectProps>(sorts[0]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const sortParam = searchParams.get('sort') || 'popular-first';
    const initialSort = sorts.find((s) => s.value === sortParam) || sorts[0];

    if (!sorts.some((s) => s.value === sortParam)) {
      searchParams.set('sort', initialSort.value);
      setSearchParams(searchParams);
    } else setSelectedSort(initialSort);
  }, [searchParams, sorts]);

  function handleSortChange(sort: SelectProps) {
    if (sort.value !== selectedSort.value) {
      searchParams.set('sort', sort.value);
      setSearchParams(searchParams);
    }
  }

  return (
    <div className="flex flex-row justify-between bg-white">
      <div className="hidden lg:flex">
        <div className="flex items-center">
          <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC]">
            <img className="w-[30px]" src="/img/catalog/filter-01.svg" alt="" />
          </div>
          <span className="ml-3 text-lg font-medium">Brand Selection</span>
          <ChevronRightIcon className="w-[24px]" />
        </div>
        <div className="ml-8 flex items-center">
          <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC]">
            <img className="w-[30px]" src="/img/catalog/filter-02.svg" alt="" />
          </div>
          <span className="ml-3 text-lg font-medium">
            Selection by trade-mark
          </span>
          <ChevronRightIcon className="w-[24px]" />
        </div>
      </div>
      <div className="flex w-full items-center lg:w-auto">
        <hr className="mr-[30px] hidden h-[40px] w-[1px] bg-[#E2E9F2] lg:inline" />
        <span className="mr-4 hidden lg:inline">Sort:</span>
        <div className="flex w-full justify-between">
          <ListBox
            selected={selectedSort}
            options={sorts}
            onChange={(e) => handleSortChange(e)}
          />
          <div className="ml-1 flex h-[50px] min-w-[50px] items-center justify-center rounded bg-[#F5F8FC] lg:hidden">
            <img src="/img/catalog/filter-03.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogSortSection;
