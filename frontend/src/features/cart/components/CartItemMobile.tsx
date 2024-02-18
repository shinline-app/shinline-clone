import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';

function CartItemMobile() {
  return (
    <tr className="mb-2 flex flex-col border-b border-[#E2E9F2] bg-white last:mb-0 last:border-none">
      <td className="flex items-center p-3">
        <p className="w-[90px] rounded border border-[#EEE] p-2">
          <img
            className="w-full object-cover object-center"
            src="/img/01.png"
            alt=""
          />
        </p>
        <p className="ml-4  text-[15px] font-medium">
          215/60R17 V-523 Basco Nordico Viatti б/к шип
        </p>
      </td>
      <td className="flex items-center justify-between px-3 py-1">
        <div>
          <p className="text-[13px] text-[#566879]">Shimkent</p>
          <p className="text-[15px] font-medium">$33 800,00 </p>
        </div>
        <div className="flex h-[35px] w-[96px] items-center justify-between rounded bg-[#F8FAFD] px-[2px]">
          <button className="flex h-[32px] w-[30px] items-center justify-center rounded-l-[5px] bg-white  font-semibold">
            <span>-</span>
          </button>
          <input
            type="text"
            className="h-[32px] w-[32px] rounded  bg-gray-100 bg-transparent px-2 pl-3 text-[13px] outline-none"
            value={'1'}
            onChange={(e) => e.target.value}
          />
          <button className=" flex h-[32px] w-[30px] items-center justify-center rounded-r-[5px] bg-white font-semibold">
            <span>+</span>
          </button>
        </div>
      </td>
      <td className="-px-3 mx-3 mt-1 flex items-center justify-between border-t border-[#E2E9F2] py-1">
        <div>
          <p className="text-[13px] text-[#566879]">Amount:</p>
          <p className="text-[17px] font-medium">$67 600,00</p>
        </div>
        <div className="flex ">
          <button className="group mr-2 flex h-8 w-[44px] items-center justify-center rounded bg-[#F8FAFD] text-[12px] font-medium text-[#566879]">
            <HeartIcon className=" h-4 w-4 text-[#566879]  group-hover:text-black" />
          </button>
          <button className="group flex h-8 w-[44px] items-center justify-center rounded bg-[#F8FAFD] text-[12px] font-medium text-[#566879]">
            <TrashIcon className=" h-4 w-4 text-[#566879] group-hover:text-black" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CartItemMobile;
