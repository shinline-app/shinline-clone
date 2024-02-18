import { ChangeEvent, ReactNode } from 'react';
import { classNames } from '../../../utils/helpers.ts';
import { SelectProps } from '../../../models/SelectModel.ts';

type SeasonItemProps = {
  season: SelectProps;
  params: string;
  children: ReactNode;
  onChange: (value: string) => void;
};

function SeasonItem({ season, params, children, onChange }: SeasonItemProps) {
  return (
    <>
      <label
        className={classNames(
          params === season.value ? 'active' : '',
          'relative flex  items-center rounded border border-transparent bg-white px-4 py-[10px] transition-all hover:border-[#E2E9F2] [&.active]:border-[#15A524]'
        )}
      >
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onClick={(e) => {
            if (params === e.currentTarget.value) {
              onChange('');
            }
          }}
          type="radio"
          name="season"
          value={season.value}
          checked={season.value === params}
          className="absolute left-0 right-0 h-full w-full cursor-pointer opacity-0"
        />
        <p className="w-[26px]">
          <img src={`/img/${season.value}.svg`} className="w-full" alt="" />
        </p>
        <p className="ml-4">
          {season.label}
          <span className="ml-3 text-sm text-[#566879]">(112)</span>
        </p>
      </label>
      {season.value === 'winter' ? children : null}
    </>
  );
}

export default SeasonItem;
