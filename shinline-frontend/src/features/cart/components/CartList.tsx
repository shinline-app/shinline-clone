import CartItem from './CartItem';
import { CartItem as CartItemModel } from '../../../models';

type CartListProps = {
  cart: CartItemModel[];
};

function CartList({ cart }: CartListProps) {
  return (
    <table className=" w-full table-auto">
      <thead className="bg-primary border-b border-[#E2E9F2] text-left">
        <tr className="[&>th]:py-2 [&>th]:font-normal">
          <th className="text-center"> Name </th>
          <th> Price </th>
          <th> Count </th>
          <th> Amount </th>
          <th> </th>
        </tr>
      </thead>
      <tbody className="">
        {cart.map((item: CartItemModel) => (
          <CartItem item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}

export default CartList;
