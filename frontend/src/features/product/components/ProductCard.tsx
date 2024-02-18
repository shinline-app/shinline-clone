import { Link } from 'react-router-dom';
import { EyeIcon, HeartIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { addItem, getCurrentQuantityById } from '../../cart/state/cartSlice.ts';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import {
  CartItem,
  ProductItem as ProductModel,
} from '../../../models/index.ts';
import { classNames } from '../../../utils/helpers.ts';
import UpdateItemQuantity from '../../cart/components/UpdateItemQuantity.tsx';
import {
  checkInWishlist,
  setWishlist,
} from '../../account/state/wishlistSlice.ts';

export type ProductProps = {
  product: ProductModel;
  onClick: (product: ProductModel) => void;
};

function ProductCard({ product, onClick }: ProductProps) {
  const dispatch = useAppDispatch();
  const {
    id,
    title,
    imageSrc,
    imageAlt,
    brandSrc,
    unitPrice,
    soldOut,
    seasonTypes,
    views,
  } = product;

  const currentQuantity = useAppSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem: CartItem = {
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
    <div
      key={id}
      className="group relative flex min-h-full max-w-[50%] flex-[100%] flex-col border-[0.5px] border-slate-300 bg-white p-3 sm:flex-[50%] md:flex-[33.333%]"
    >
      {!soldOut && (
        <div
          onClick={() => onClick(product)}
          className="absolute left-1/2 top-[80px] hidden h-[130px] w-[140px] -translate-x-1/2 cursor-pointer  flex-col items-center justify-center rounded-lg border-4  border-double border-blue-50 bg-gray-900 bg-opacity-50 shadow-lg lg:group-hover:flex "
        >
          <EyeIcon className="h-8 w-8  text-white" />
          <span className="text-white">Quick view</span>
        </div>
      )}
      <Link to={''} className="absolute right-2 top-2 text-sm font-medium">
        Reviews <span className=" text-[#566879] ">({views})</span>
      </Link>
      <div
        onClick={handleAddToWishlist}
        className="absolute right-2 top-9 flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-full bg-lightgray"
      >
        {useAppSelector(checkInWishlist(id)) ? (
          <HeartIconSolid className="text-slate-800" width="26" height="26" />
        ) : (
          <HeartIcon className="text-slate-800" width="26" height="26" />
        )}
      </div>
      {/* <Image src={imageSrc} alt={imageAlt || 'Product Image'} width={}/> */}
      <div className="h-[270px] w-full overflow-hidden rounded-md bg-white px-7 pb-6 pt-12 ">
        <img
          src={imageSrc[0]}
          alt={imageAlt}
          className={classNames(
            soldOut ? 'opacity-70 grayscale' : '',
            'mx-auto h-full object-center sm:object-cover'
          )}
        />
      </div>
      <span
        className={classNames(
          soldOut ? 'bg-[#BCBCBC]' : 'bg-[#15A524]',
          'self-start whitespace-nowrap rounded-[0.15rem] px-[0.65em] py-[0.40em] text-center align-baseline text-[0.8em] font-bold leading-none text-white'
        )}
      >
        {soldOut ? 'Not available' : 'In stock'}
      </span>
      <Link
        to={`/product/${id}`}
        className="mt-2 flex-auto cursor-pointer text-[15px] font-bold text-gray-700"
      >
        {title}
      </Link>
      <p className=" my-3 h-[25px] w-[125px]">
        <img
          alt=""
          src={`/img/catalog/brand/${brandSrc}.svg`}
          className=" object-cover object-center"
        ></img>
      </p>
      {!soldOut && (
        <>
          <div className="absolute left-2 top-2">
            {seasonTypes?.length
              ? seasonTypes.map((type, index) => (
                  <p
                    key={type}
                    className={
                      'mb-1 flex h-[45px] w-[45px] items-center justify-center rounded bg-[#F5F8FC]'
                    }
                  >
                    <img
                      src={`/img/${type}.svg`}
                      alt=""
                      className="h-[25px] w-[25px] object-cover object-center"
                    />
                  </p>
                ))
              : null}
          </div>
          <hr />
          <div className="mt-3 flex h-[40px] items-center justify-between">
            <p className="text-[18px] font-bold text-gray-900">
              $ {unitPrice},00
            </p>
            {!isInCart ? (
              <button
                onClick={handleAddToCart}
                className="flex h-[39px]  items-center justify-center rounded-[0.15rem] bg-[#15A524] px-4 py-2 text-xs font-medium  leading-normal text-white"
              >
                <PlusSmallIcon className="h-6 w-6 text-white" />
                <span className="ml-[2px] text-[17px]">Add</span>
              </button>
            ) : (
              <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCard;
