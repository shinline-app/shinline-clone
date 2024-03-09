import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { ProductItem } from '../../../../models';
type ProductModalCharcsProps = {
  product: ProductItem;
};

function ProductModalSpecs({ product }: ProductModalCharcsProps) {
  return (
    <div className="flex flex-[50%] flex-col border border-x-0 border-[#E2E9F2]">
      <div className="p-4 sm:p-7">
        <h2 className="mb-4 text-[20px] font-bold">Characteristics:</h2>
        {[1, 2, 3, 4, 5].map((character) => {
          return (
            <div
              key={character}
              className="relative mb-3 flex justify-between before:absolute before:bottom-[6px] before:w-full before:border before:border-dashed before:border-[#566879] before:opacity-20 before:content-['']"
            >
              <p className="z-[2] bg-white pr-4 font-light">Profile width</p>
              <b className="z-[2] bg-white pl-4">225</b>
            </div>
          );
        })}
        <Link
          to={`/product/${product.id}`}
          className="mb-2 mt-6 inline-flex cursor-pointer items-center justify-center  sm:mt-14"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#F1F3F4]">
            <ChevronDoubleDownIcon className="h-4 w-4 text-black" />
          </div>
          <p className=" ml-3 border-b-[2px] border-dashed">
            All characteristics
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProductModalSpecs;
