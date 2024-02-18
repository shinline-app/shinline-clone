import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Button from '../../../../ui/Button';
import { formatCurrency } from '../../../../utils/helpers';
import UpdateItemQuantity from '../../../cart/components/UpdateItemQuantity';
import { CartItem, ProductItem } from '../../../../models';
import { addItem, getCurrentQuantityById } from '../../../cart/state/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

type ProductModalActionProps = {
  product: ProductItem;
};

function ProductModalAction({ product }: ProductModalActionProps) {
  const { id, unitPrice } = product;
  const dispatch = useAppDispatch();

  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem: CartItem = {
      ...product,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <div className="relative  border-b border-t border-[#E2E9F2] p-6 ">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-[24px] font-extrabold sm:text-[28px]">
          {formatCurrency(unitPrice)}
        </h2>
      </div>
      <div className="flex h-[45px]">
        {!isInCart ? (
          <Button onClick={handleAddToCart} type={'success'}>
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
  );
}

export default ProductModalAction;
