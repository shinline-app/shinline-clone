import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../state/cartSlice.ts';
import { classNames } from '../../../utils/helpers.ts';
import { useAppDispatch } from '../../../store/hooks.ts';

type UpdateItemQuantityProps = {
  id: string;
  currentQuantity: number;
  size?: string;
};

function UpdateItemQuantity({
  id,
  currentQuantity,
  size = 'small',
}: UpdateItemQuantityProps) {
  const dispatch = useAppDispatch();

  return (
    <div
      className={classNames(
        size !== 'big'
          ? 'h-[43px] w-[117px] bg-[#F5F8FC]'
          : 'h-[50px] w-[130px] bg-white',
        'flex  items-center justify-between rounded  p-1'
      )}
    >
      <button
        onClick={() => dispatch(decreaseItemQuantity(id))}
        className={classNames(
          size === 'big'
            ? 'h-[43px] w-[36px] bg-[#F5F8FC]'
            : 'h-[34px] w-[34px] bg-white',
          'flex  items-center justify-center rounded  font-semibold'
        )}
      >
        {currentQuantity > 1 ? (
          <MinusIcon className="h-5 w-5 text-black" />
        ) : (
          <TrashIcon className="h-5 w-5 text-[#E31E24]" />
        )}
      </button>
      <span className="text-md px-2  font-medium ">{currentQuantity}</span>
      <button
        onClick={() => dispatch(increaseItemQuantity(id))}
        className={classNames(
          size === 'big'
            ? 'h-[43px] w-[36px] bg-[#F5F8FC]'
            : 'h-[34px] w-[34px] bg-white',
          'flex  items-center justify-center rounded  font-semibold'
        )}
      >
        <PlusIcon className="h-5 w-5 text-black" />
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
