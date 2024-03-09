import { HeartIcon, ShareIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  checkInWishlist,
  setWishlist,
} from '../../../account/state/wishlistSlice';
import { ProductItem } from '../../../../models';

type ProductModalTopActionProps = {
  product: ProductItem;
  openModal: (e: boolean) => void;
};

function ProductModalTopAction({
  product,
  openModal,
}: ProductModalTopActionProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex h-[50px] w-full border-[#E2E9F2] ">
      <div className="flex flex-[33.333%] cursor-pointer items-center justify-center  border-[#E2E9F2]  ">
        <ShareIcon className="h-6 w-6 text-[#566879]" />
      </div>
      <div
        onClick={() => dispatch(setWishlist(product))}
        className="flex flex-[33.333%] cursor-pointer items-center justify-center border-l-[1px] border-[#E2E9F2] "
      >
        {useAppSelector(checkInWishlist(product.id)) ? (
          <HeartIconSolid className="h-6 w-6 text-[#566879]" />
        ) : (
          <HeartIcon className="h-6 w-6 text-[#566879]" />
        )}
      </div>
      <div
        onClick={() => openModal(false)}
        className="flex flex-[33.333%] cursor-pointer items-center justify-center border-l-[1px] border-[#E2E9F2]  bg-[#E31E24]"
      >
        <XMarkIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
}

export default ProductModalTopAction;
