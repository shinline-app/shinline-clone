import { useSearchParams } from 'react-router-dom';
import Select from '../../../ui/Select.tsx';
import AccordionItem from './AccordionItem.tsx';

function FilterBySetting() {
  const [searchParams, setSearchParams] = useSearchParams();

  const width = searchParams.get('width') || 'all';
  const profile = searchParams.get('profile') || 'all';
  const landingDiametr = searchParams.get('landing-diametr') || 'all';

  function handleChange(type: string, value: string) {
    searchParams.set(type, value);
    setSearchParams(searchParams);
  }

  return (
    <AccordionItem label={'Setting'}>
      <div className="mt-5">
        <div className="mb-[5px]">
          <Select
            label={'Width'}
            type="width"
            value={width}
            options={[
              { value: 'all', label: 'All' },
              { value: '10', label: '10' },
              { value: '20', label: '20' },
              { value: '30', label: '30' },
              { value: '35', label: '35 (mini)' },
            ]}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-[5px]">
          <Select
            label={'Profile'}
            type="profile"
            value={profile}
            options={[
              { value: 'all', label: 'All' },
              { value: '10', label: '10' },
              { value: '20', label: '20' },
              { value: '30', label: '30' },
              { value: '35', label: '35 (mini)' },
            ]}
            onChange={handleChange}
          />
          <Select
            label={'Diameter (R)'}
            type="landing-diametr"
            value={landingDiametr}
            options={[
              { value: 'all', label: 'All' },
              { value: '10', label: '10' },
              { value: '20', label: '20' },
              { value: '30', label: '30' },
              { value: '35', label: '35 (mini)' },
            ]}
            onChange={handleChange}
          />
        </div>
      </div>
    </AccordionItem>
  );
}

export default FilterBySetting;
