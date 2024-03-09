import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import BreadCrumb from '../../../ui/BreadCrumb';
import PageTitle from '../../../ui/PageTitle';
import BrandActionBlock from '../components/BrandActionBlock';
import BrandDetailBlock from '../components/BrandDetailBlock';
import BrandDetailSort from '../components/BrandDetailSort';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext';
import { useEffect } from 'react';
import BrandList from '../components/BrandList';
import BrandDetailTable from '../components/BrandDetailTable';

const seasonTypes = [
  {
    id: 1,
    name: 'All tires',
  },
  {
    id: 143,
    name: 'sunny',
  },
  {
    id: 132,
    name: 'winter',
  },
  {
    id: 1433,
    name: 'not shipovniy',
  },
  {
    id: 41433,
    name: 'shipovniy',
  },
];

const sizes = [
  {
    id: 1,
    name: 'r11',
  },
  {
    id: 143,
    name: 'r12',
  },
  {
    id: 132,
    name: 'r13',
  },
  {
    id: 1433,
    name: 'r15',
  },
  {
    id: 41433,
    name: 'r16',
  },
];

const brands = [
  'falken',
  'firelli',
  'odyking',
  'dayton',
  'firemax',
  'firelli',
  'odyking',
];

const itemsToShow = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10',
];

function BrandDetailPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/brands', name: 'Brands' },
          { path: '/brands/contyre', name: 'Contyre' },
          { path: '', name: 'Contyre Polar 2 in Uzbekistan' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <PageTitle title="Contyre Polar 2 in Uzbekistan" />
      <div className="my-4 flex gap-x-5">
        <BrandList lists={itemsToShow} initiallyDisplayed={5} />
        <div className=" h-fit basis-full md:basis-3/4">
          <BrandDetailBlock />
          <BrandDetailSort sizes={sizes} />
          <BrandDetailTable />
          {/* {Screen(1024) ? (
            [1, 2, 3].map((i) => <CartMobileContent />)
          ) : (
            )} */}
        </div>
      </div>
    </>
  );
}

export default BrandDetailPage;

function CartMobileContent() {
  return (
    <div className="my-2 flex flex-col rounded border border-[#E2E9F2] bg-white">
      <div className="flex items-center p-3">
        <p className=" text-[15px] font-normal">
          215/60R17 V-523 Basco Nordico Viatti б/к шип
        </p>
      </div>
      <div className="flex items-center justify-between px-3 py-1">
        <div>
          <p className="text-sm text-extragray">Size:</p>
          <p className="">175/70 R13</p>
        </div>
        <div className="flex h-[35px] w-[96px] items-center justify-between rounded bg-[#F8FAFD] px-[2px]">
          <button className="flex h-[32px] w-[30px] items-center justify-center rounded-l-[5px] bg-white  font-semibold">
            <span>-</span>
          </button>
          <input
            type="text"
            className="h-[32px] w-[32px] rounded  bg-gray-100 bg-transparent px-2 pl-3 text-[13px] outline-none"
            value={'1'}
            onChange={(e) => e.target.value}
          />
          <button className=" flex h-[32px] w-[30px] items-center justify-center rounded-r-[5px] bg-white font-semibold">
            <span>+</span>
          </button>
        </div>
      </div>
      <div className="-px-3 mx-3 mt-1 flex items-center justify-between border-t border-[#E2E9F2] py-1">
        <div>
          <p className="text-[13px] text-[#566879]">Price:</p>
          <p className="text-[17px] font-medium">$67 600,00</p>
        </div>
        <div className="flex ">
          <button className="flex h-[40px] items-center justify-center rounded bg-green px-4 py-2 text-xs font-medium leading-normal  text-white shadow-[0px_4px_10px_0px_rgba(21,165,36,0.50)]">
            <ShoppingCartIcon className="text-bold h-[18px] w-[18px] text-white" />
            <span className="ml-2 text-sm">Add to cart</span>
          </button>
          {/* <button className="flex h-[40px] items-center justify-center rounded bg-red px-4 py-2 text-xs font-medium  leading-normal text-white shadow-[0px_4px_10px_0px_#E31E24]">
            <span className="ml-2 text-sm">In the basket</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
