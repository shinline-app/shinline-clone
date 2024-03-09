import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '../../../utils/helpers';

function CatalogFilterParameter({ parameters }: { parameters: string[] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams.get('parameter') || '';

  function handleSetParams(value: any) {
    const { height, width, diameter } = value;

    if (height || width || diameter) {
      const paramsArray = [];

      if (height) paramsArray.push(`height-is-${height}`);
      if (width) paramsArray.push(`width-is-${width}`);
      if (diameter) paramsArray.push(`diameter-is-${diameter}`);

      const paramsString = paramsArray.join('&');
      searchParams.set('parameter', paramsString);
      setSearchParams(searchParams);
    }
  }

  function handleDisplay({ width, height, diameter }: any) {
    if (!width && !height && !diameter) {
      return null;
    }
    const apostrof = height ? '/' : '';
    return `${height}${apostrof}${width}R${diameter}`;
  }

  function parameterToString(item) {
    return `${item.height ? `height-is-${item.height}&` : ''}${
      item.width ? `width-is-${item.width}&` : ''
    }${item.diameter ? `diameter-is-${item.diameter}` : ''}`;
  }
  return (
    <div className="my-4 w-full items-center justify-between rounded bg-[#F5F8FC] p-[10px] lg:flex">
      <div className="-m-0.5 mb-2 flex flex-[85%] flex-wrap lg:mb-0">
        {parameters.map((item: any, index: number) => (
          <div
            key={index}
            className={classNames(
              currentParams.includes(parameterToString(item))
                ? 'bg-red text-white'
                : 'bg-white text-[#566879]',
              handleDisplay(item) ? 'flex' : 'hidden',
              'm-0.5 h-9 flex-[11%] cursor-pointer items-center justify-center  rounded  px-3 text-sm  transition-all hover:bg-red hover:text-white  md:h-[40px] md:text-base'
            )}
            onClick={() => handleSetParams(item)}
          >
            {handleDisplay(item)}
          </div>
        ))}
      </div>
      <div className="flex flex-[15%] items-center justify-center px-3 text-sm font-bold md:text-base">
        <p className="font-semibold">Show all</p>
        <ChevronRightIcon className="ml-1 h-[22px] w-[22px]" />
      </div>
    </div>
  );
}

export default CatalogFilterParameter;
