import { XMarkIcon } from '@heroicons/react/24/outline';
import { clearCart, getCart } from '../state/cartSlice.ts';
import EmptyCart from './EmptyCart.tsx';
import CartOverview from './CartOverview.tsx';
import { useAppSelector, useAppDispatch } from '../../../store/hooks.ts';
import CartList from './CartList.tsx';

function Cart() {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <>
      <div className="mx-auto mb-5 mt-6 border border-[#E2E9F2] bg-white">
        <div className="flex items-center justify-end border-b border-[#E2E9F2] py-3">
          <button className="rounded bg-[#F8FAFD] px-3 py-2 text-sm md:px-5 md:text-base">
            Ready to order <span className="text-[#15A524]">(5)</span>
          </button>
          <button className="px-3 py-2 text-sm text-[#566879] md:px-5 md:text-base">
            Deferred <span className="text-[#E31E24]">(5)</span>
          </button>
          <button
            onClick={() => dispatch(clearCart())}
            className="border-[rgba(0, 0, 0, 0.10)] mr-3 flex items-center rounded border px-3 py-[7px] text-sm text-black md:px-5 md:text-base"
          >
            <XMarkIcon className="mr-1 h-5 w-5 text-black" />
            <span>Clear</span>
          </button>
        </div>
        <CartList cart={cart} />
      </div>
      <CartOverview />
    </>
  );
}
export default Cart;
