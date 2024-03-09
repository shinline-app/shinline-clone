import { useSearchParams } from 'react-router-dom';
import CheckIcon from '../../../ui/CheckIcon';

function FilterBySeasonSubContent() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(checkboxValue: string) {
    const params = searchParams.getAll('seasonly');

    if (params.includes(checkboxValue)) {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        newParams.set(
          'seasonly',
          params.filter((value) => value !== checkboxValue).join(',')
        );
        return newParams;
      });
    } else {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams);
        newParams.append('seasonly', checkboxValue);
        return newParams;
      });
    }
  }

  // todo make sub filters for winter season

  return (
    <div className="my-4 px-5">
      {[
        { value: 'no-studded', label: 'No studded' },
        { value: 'studded', label: 'Studded' },
      ].map((item) => (
        <label
          key={item.value}
          className="mb-3 flex cursor-pointer select-none items-center"
        >
          <input
            disabled
            type="checkbox"
            checked={searchParams.getAll('seasonly').includes(item.value)}
            value={item.value}
            onChange={() => handleChange(item.value)}
            className="peer sr-only"
          />
          <div className="mr-[12px] flex h-5 w-5 items-center justify-center rounded-[3px] border border-[#E2E9F2] bg-white peer-checked:border-[#15A524]">
            <span
              className={`${
                searchParams.getAll('seasonly').includes(item.value)
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
            >
              <CheckIcon />
            </span>
          </div>
          <p className="w-[18px]">
            <img className="w-full" src={`/img/${item.value}.svg`} alt="" />
          </p>
          <span
            className={`${
              searchParams.getAll('seasonly').includes(item.value)
                ? 'text-black'
                : 'text-[#566879]'
            } ml-2 text-sm`}
          >
            {item.label}
          </span>
        </label>
      ))}
    </div>
  );
}

export default FilterBySeasonSubContent;
