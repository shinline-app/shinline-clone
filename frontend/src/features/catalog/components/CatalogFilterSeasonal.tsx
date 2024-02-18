import { useState } from 'react';
import { classNames } from '../../../utils/helpers';
import { useSearchParams } from 'react-router-dom';

type SeasonalProps = {
  id: number;
  colors: {
    from: string;
    to: string;
  };
  path: string;
  name: string;
  value: string;
  icon: string;
};

type CatalogFilterSeasonalProps = {
  seasons: SeasonalProps[];
};

function CatalogFilterSeasonal({ seasons }: CatalogFilterSeasonalProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState('winter-summer');

  const seasonal = searchParams.get('seasonly') || 'winter-summer';

  function handleSetParams(value: string) {
    searchParams.set('seasonly', value);
    setSearchParams(searchParams);
    setParams(value);
  }
  return (
    <div className=" mb-3 flex flex-row flex-wrap justify-between gap-1 sm:gap-2">
      {seasons.map((item: any) => {
        return (
          <div
            key={item.icon}
            onClick={() => handleSetParams(item.value)}
            style={{
              backgroundImage: `linear-gradient(to right, ${item.colors.from} , ${item.colors.to})`,
            }}
            className={classNames(
              item.value === seasonal ? 'opacity-100' : 'opacity-50',
              'flex h-16 flex-auto cursor-pointer items-center rounded px-4 transition-all hover:opacity-100 sm:h-[88px] sm:rounded-md sm:px-6'
            )}
          >
            <p className="w-8 sm:w-11">
              <img
                className="w-full"
                src={`/img/catalog/${item.icon}.svg`}
                alt=""
              />
            </p>
            <div className="ml-3 w-[90px] text-sm text-white sm:ml-6 sm:w-[120px] sm:text-base">
              {item.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CatalogFilterSeasonal;
