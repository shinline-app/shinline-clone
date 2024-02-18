import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import {
  getCart,
  getTotalCartPrice,
} from '../../features/cart/state/cartSlice.ts';

function HeaderActions({ isOpenModal, openModal }: any) {
  const totalPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);
  return (
    <div className="flex">
      <div
        onClick={() => openModal(true)}
        className="border-l border-r border-gray-700 hover:bg-gray-400 hover:bg-opacity-20"
      >
        <a href="#" className="flex h-full items-center px-3  text-white">
          <UserIcon className="h-6 w-6 text-white md:h-7 md:w-7  " />
        </a>
      </div>
      <div className="border-r border-gray-700 hover:bg-gray-400 hover:bg-opacity-20">
        <Link
          to="/profile/wishlist"
          className=" flex h-full items-center px-3 text-white"
        >
          <HeartIcon className="h-6 w-6 text-white md:h-7 md:w-7 " />
        </Link>
      </div>
      <div className="flow-root hover:bg-gray-400 hover:bg-opacity-20">
        <Link
          to="/cart"
          className="group relative flex h-full items-center border-r border-gray-700 px-3"
        >
          <ShoppingBagIcon
            className="h-6 w-6 flex-shrink-0 text-white md:h-7 md:w-7"
            aria-hidden="true"
          />
          <span className="absolute left-5 top-2 ml-2 inline-block whitespace-nowrap rounded-full bg-red px-[0.50em] py-[0.35em] text-center align-baseline text-[0.60em] font-bold leading-none text-white md:top-4">
            {cart.length}
          </span>
          <div className="hidden flex-col lg:flex">
            <span className="ml-2 text-xs font-medium text-gray-400 ">
              Price:
            </span>
            <span className="ml-2 text-xs font-extrabold text-white">
              {totalPrice} {totalPrice > 0 && '$'}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeaderActions;
