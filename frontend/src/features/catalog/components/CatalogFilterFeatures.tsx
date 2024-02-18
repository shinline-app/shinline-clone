import FilterBySetting from './FilterBySetting.tsx';
import FilterBySeason from './FilterBySeason.tsx';
import FilterByPrice from './FilterByPrice.tsx';

function CatalogFilterFeatures() {
  return (
    <div className="hidden max-w-[25%] overflow-hidden lg:block lg:flex-[25%]">
      <FilterBySetting />
      <FilterBySeason />
      <FilterByPrice />
    </div>
  );
}

export default CatalogFilterFeatures;
