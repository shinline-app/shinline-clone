import { Link } from 'react-router-dom';

function BrandBlock({ brandsData }: any) {
  return (
    <div className="block">
      {Object.keys(brandsData).map((alphabet) => (
        <div className="mb-11">
          <div
            id={`brand_${alphabet}`}
            className="mb-4 flex h-[36px] w-[36px] items-center justify-center rounded border  border-[#E31E24] px-3 py-[5px] font-semibold uppercase text-[#E31E24] transition-all"
          >
            {alphabet}
          </div>
          <div className="flex flex-wrap">
            {brandsData[alphabet].map((brand: any) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.value}`}
                className="flex h-[90px] basis-1/2  items-center justify-center border border-[#E2E9F2] p-6 transition-all hover:shadow-[0_20px_30px_0px_rgba(2,36,86,0.10)] sm:h-[130px] sm:p-10 md:basis-1/3 lg:basis-1/5"
              >
                <img
                  className="h-full w-full"
                  src={`/img/catalog/brand/${brand.imageUrl}.svg`}
                  alt=""
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrandBlock;
