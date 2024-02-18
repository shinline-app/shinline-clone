import {
  ChevronDoubleDownIcon,
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

import UpdateItemQuantity from '../../../cart/components/UpdateItemQuantity';
import Button from '../../../../ui/Button';
import { formatCurrency } from '../../../../utils/helpers';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { addItem, getCurrentQuantityById } from '../../../cart/state/cartSlice';
import { ProductItem } from '../../../../models';
import {
  checkInWishlist,
  setWishlist,
} from '../../../account/state/wishlistSlice';
type ProductActionsSectionProps = {
  product: ProductItem;
};

function ProductActionsSection({ product }: ProductActionsSectionProps) {
  const { id, title, imageSrc, brandSrc, unitPrice } = product;
  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    const newItem = {
      ...product,
      id,
      title,
      imageSrc,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  function handleAddToWishlist() {
    dispatch(setWishlist(product));
  }

  return (
    <div className="flex flex-[50%] flex-col border-b border-l border-r border-[#E2E9F2] sm:border-l-0">
      <div className="flex h-[50px] border-[#E2E9F2] sm:border-t">
        <div className="flex flex-[85%] items-center justify-between px-4 sm:flex-[67%] sm:px-7 ">
          <p className="">
            Reviews <span className=" text-[#566879] ">(12)</span>
          </p>
          <img width="150" src={`/img/catalog/brand/${brandSrc}.svg`} alt="" />
        </div>
        <div
          onClick={handleAddToWishlist}
          className="flex flex-[15%] cursor-pointer items-center justify-center border-l-[1px] border-[#E2E9F2]  bg-[#F8FAFD]  sm:flex-[33%]"
        >
          {useAppSelector(checkInWishlist(id)) ? (
            <HeartIconSolid className="h-6 w-6 text-gray-500" />
          ) : (
            <HeartIcon className="h-6 w-6 text-gray-500" />
          )}
          <span className="ml-[10px] hidden tracking-[0] sm:inline">
            To favorite
          </span>
        </div>
      </div>

      <div className="relative  border-b border-t border-[#E2E9F2] bg-[#F8FAFD] p-5 sm:p-7">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[24px] font-extrabold sm:text-[28px]">
            {formatCurrency(unitPrice)}
          </h2>
        </div>
        <div className="flex h-[45px]">
          {!isInCart ? (
            <Button onClick={handleAddToCart} type="success">
              <ShoppingCartIcon className="h-5 w-5 font-bold text-white" />
              <span className="ml-2 whitespace-nowrap text-base">
                Add to cart
              </span>
            </Button>
          ) : (
            <UpdateItemQuantity
              id={id}
              currentQuantity={currentQuantity}
              size={'big'}
            />
          )}
        </div>
      </div>

      <div className="border-b border-[#E2E9F2] bg-white px-4 py-4 sm:px-7">
        {true ? (
          <p className="mb-1 flex items-center whitespace-nowrap text-[15px]">
            <b className=" text-[#15A524]">In stock:</b>{' '}
            <span className="ml-2 tracking-[-1px] text-[#566879]">
              Left from 4 to 20 pieces
            </span>
          </p>
        ) : (
          <b className="text-[15px] text-[#E31E24]">Not available</b>
        )}
        <p className="flex items-center whitespace-nowrap text-[15px]">
          <b className=" text-[#15A524]">Category:</b>{' '}
          <span className="ml-2 tracking-[-1px] text-[#566879]">
            Light trucks
          </span>
        </p>
      </div>

      <div className="p-4 sm:p-7">
        <h2 className="mb-4 text-[20px] font-bold">Characteristics:</h2>
        {[1, 2, 3, 4, 5].map((character) => {
          return (
            <div
              key={character}
              className="relative mb-3 flex justify-between before:absolute before:bottom-[6px] before:w-full before:border before:border-dashed before:border-[#566879] before:opacity-20 before:content-['']"
            >
              <p className="z-[2] bg-white pr-4 font-thin">Ширина профиля</p>
              <b className="z-[2] bg-white pl-4">225</b>
            </div>
          );
        })}
        <div className="mb-2  mt-6 flex cursor-pointer items-center justify-center  sm:mt-14">
          <button className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#F1F3F4]">
            <ChevronDoubleDownIcon className="h-4 w-4 text-black" />
          </button>
          <p className="ml-3 border-b-[2px] border-dashed">
            All characteristics
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductActionsSection;
