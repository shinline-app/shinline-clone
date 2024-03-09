import { useSearchParams } from 'react-router-dom';
import { classNames } from '../../utils/helpers';

// import seasons from '../../data/data-seasons.json';
const seasons = [
  {
    value: 'winter',
    label: 'Winter',
  },
  {
    value: 'summer',
    label: 'Summer',
  },
  {
    value: 'all-seasons',
    label: 'All seasons',
  },
  {
    value: 'no-studded',
    label: 'No studded',
  },
  {
    value: 'studded',
    label: 'Studded',
  },
];

function CalcSwitches({ checked, onChange, disabled = false, slice }) {
  return (
    <div className="mb-[10px] flex h-[46px] w-full gap-[5px] rounded border border-[#F6F6F6] bg-lightgray p-[5px]">
      {seasons.slice(...slice).map(({ value, label }, index) => (
        <label
          key={`cb-${index}`}
          htmlFor={value}
          className={classNames(
            checked ? 'is-active' : '',
            'relative flex w-full items-center justify-center rounded-[3px] [&.is-active]:bg-white [&.is-active]:shadow-[0px_-1px_0px_0px_#D7E0E9_inset]'
          )}
        >
          <input
            key={`cbi-${index}`}
            type="checkbox"
            className=" absolute"
            id={value}
            value={value}
            checked={checked?.includes(value)}
            onChange={onChange}
          />
          <img className="w-[20px]" src={`/img/${value}.svg`} alt="" />
          <span className="ml-[10px] text-sm font-bold">{label}</span>
        </label>
      ))}
    </div>
  );
}

export default CalcSwitches;
