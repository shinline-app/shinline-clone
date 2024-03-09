import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { deleteItem } from '../state/cartSlice.ts';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import {
  checkInWishlist,
  setWishlist,
} from '../../account/state/wishlistSlice.ts';
import { CartItemProps } from './CartItem.tsx';

function CartAction({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <td className="w-[128px] ">
      <div className="flex flex-col px-3">
        <button
          onClick={() => dispatch(setWishlist(item))}
          className="group mb-2 flex items-center rounded bg-[#F8FAFD] px-3 py-[7px] text-[12px] font-medium text-[#566879]"
        >
          {useAppSelector(checkInWishlist(item.id)) ? (
            <HeartIconSolid className="mr-[6px] h-4 w-4 text-[#566879]  group-hover:text-black" />
          ) : (
            <HeartIcon className="mr-[6px] h-4 w-4 text-[#566879]  group-hover:text-black" />
          )}
          <span className="group-hover:text-black">
            Put {useAppSelector(checkInWishlist(item.id)) ? 'off' : 'on'}
          </span>
        </button>

        <button
          onClick={() => dispatch(deleteItem(item.id))}
          className="group flex items-center rounded bg-[#F8FAFD] px-3 py-[7px] text-[12px] font-medium text-[#566879]"
        >
          <TrashIcon className="mr-[6px] h-4 w-4 text-[#566879] group-hover:text-black" />
          <span className="group-hover:text-black">Delete</span>
        </button>
      </div>
    </td>
  );
}

export default CartAction;
