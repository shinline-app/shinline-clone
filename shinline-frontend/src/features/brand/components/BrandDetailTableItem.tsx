import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import UpdateItemQuantity from '../../cart/components/UpdateItemQuantity';
import { addItem, getCurrentQuantityById } from '../../cart/state/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import Button from '../../../ui/Button';

function BrandDetailTableItem({ item }) {
  const id = '1';
  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const dispatch = useAppDispatch();

  function handleAddToCart() {
    const newItem = {
      id,
      // id,
      // title,
      // imageSrc,
      // quantity: 1,
      // unitPrice,
      // totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <>
      <tr className="border-b border-[#EEE] transition-all last:border-b-0 hover:shadow-[0px_0px_30px_0px_rgba(2,36,86,0.10)]">
        <td className="flex items-center px-3 py-5">
          <p className="uppercase text-extragray">r13</p>
          <p className="ml-5 max-w-[211px] text-[15px] font-normal">
            215/60R17 V-523 Basco Nordico Viatti б/к шип
          </p>
        </td>
        <td className="">
          <p className=" text-extragray">175/70 R13</p>
        </td>
        <td className="">
          <p className="text-[15px] font-medium">$33 800,00 </p>
        </td>
        <td className="">
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
                size="small"
                currentQuantity={currentQuantity}
              />
            )}
          </div>
        </td>
      </tr>
    </>
  );
}

export default BrandDetailTableItem;
