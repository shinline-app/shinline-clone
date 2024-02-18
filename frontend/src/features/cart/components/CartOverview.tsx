import { useSelector } from 'react-redux';
import { getTotalCartPrice } from '../state/cartSlice.ts';
import { formatCurrency } from '../../../utils/helpers.ts';
import { useNavigate } from 'react-router-dom';

function CartOverview() {
  const navigate = useNavigate();
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <div className="flex flex-col justify-between rounded bg-[#F8FAFD] p-3 md:flex-row md:items-center">
      <div className="order-1 mt-3 flex flex-col sm:flex-row md:order-none md:mt-0">
        <button
          onClick={() => navigate('../catalog')}
          className="border-[rgba(0, 0, 0, 0.10)] mb-2 rounded border bg-white px-6 py-2 text-[#566879] sm:mb-0"
        >
          Continue shopping
        </button>
        <button
          onClick={() => navigate('../order')}
          className="rounded  bg-[#15A524] px-6 py-2 text-white shadow-sm shadow-[#15a52371] sm:ml-3"
        >
          Confirm order
        </button>
      </div>
      <div className="flex flex-col items-start justify-start md:w-[280px]">
        <p className="text-md font-medium text-[#566879] ">Total:</p>
        <p className="text-xl font-bold text-black md:text-xl">
          {formatCurrency(totalCartPrice)}
        </p>
      </div>
    </div>
  );
}

export default CartOverview;
