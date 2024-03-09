import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import FilterBySeasonSubContent from './FilterBySeasonSubContent';
import AccordionItem from './AccordionItem';
import SeasonItem from './SeasonItem';
import { SelectProps } from '../../../models';

function FilterBySeason() {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = searchParams.get('seasonly') || '';

  function handleChange(value: string) {
    searchParams.set('seasonly', value);
    setSearchParams(searchParams);
  }

  // useEffect(() => {
  //   if (!searchParams.get('seasonly')) {
  //     setSearchParams(() => {
  //       const newParams = new URLSearchParams('seasonly');
  //       newParams.delete('seasonly');
  //       return newParams;
  //     });
  //   }
  // }, [searchParams]);

  const seasons: SelectProps[] = [
    { value: 'winter', label: 'Winter' },
    { value: 'summer', label: 'Summer' },
    { value: 'all-seasons', label: 'All seasons' },
  ];

  return (
    <AccordionItem label="Seasonality">
      <div className="mt-5">
        <>
          {seasons.map((season) => (
            <SeasonItem
              key={season.value}
              season={season}
              params={params}
              onChange={handleChange}
            >
              <FilterBySeasonSubContent />
            </SeasonItem>
          ))}
        </>
      </div>
    </AccordionItem>
  );
}

export default FilterBySeason;
