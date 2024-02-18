import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { ProductItem } from '../../../../models';
import { classNames } from '../../../../utils/helpers';
type ProductImageSectionProps = {
  product: ProductItem;
};

function ProductImageSection({ product }: ProductImageSectionProps) {
  const [image, setImage] = useState('');

  const { imageSrc, imageAlt, seasonTypes } = product;

  useEffect(() => {
    if (imageSrc) {
      setImage(imageSrc[0]);
    }
  }, [imageSrc]);
  return (
    <div className="flex-[50%]">
      <div className="flex h-9 w-full border border-b-0 border-[#E2E9F2]  sm:h-[50px]">
        <div className="flex w-full items-center justify-center border-r-[1px]  border-[#E2E9F2]">
          <img className="w-8 sm:w-[42px]" src="/img/car.svg" alt="" />
          <span className="ml-3 text-sm sm:ml-[15px] sm:text-[16px]">Car</span>
        </div>
        {seasonTypes.map((type, index) => (
          <div
            key={type}
            className={classNames(
              index === 0 ? 'border-r-[1px]' : '',
              'flex w-full items-center justify-center border-[#E2E9F2]'
            )}
          >
            <img
              className="h-[25px] w-[25px] object-cover object-center"
              src={`/img/${type}.svg`}
              alt=""
            />
            <span className="ml-3 text-sm capitalize sm:ml-[15px] sm:text-[16px]">
              {type}
            </span>
          </div>
        ))}
      </div>
      <div className="relative flex-[50%] border border-[#E2E9F2] sm:h-[605px] ">
        <p className="flex h-full items-center justify-center overflow-hidden py-5">
          <img
            className="ml-14 w-[95%] object-cover object-center sm:w-[70%] lg:ml-20 "
            src={image}
            alt={imageAlt}
          />
        </p>
        <div className=" absolute left-1 top-1 sm:left-6 sm:top-6">
          {false &&
            imageSrc.map((item) => (
              <p
                key={item}
                className={classNames(
                  image === item ? 'border-[#15A524]' : '',
                  'mb-1 h-16 w-16 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524]  sm:mb-2 sm:h-20 sm:w-20'
                )}
                onClick={() => setImage(item)}
              >
                <img
                  src={item}
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
              </p>
            ))}
        </div>
      </div>

      <div className=" w-full border border-t-0  border-[#E2E9F2] ">
        <div className="group relative flex h-9 w-full items-center px-4 sm:h-[50px] sm:px-6">
          <img
            className="-ml-1 opacity-60 group-hover:opacity-100 sm:w-[26px]"
            src="/img/award-line.svg"
            alt=""
          />
          <span className="ml-3 text-sm text-[#566879]  group-hover:text-black sm:ml-[20px] sm:text-[16px]">
            Гарантия на заводской брак
          </span>
        </div>
        <div className="group relative flex h-9 w-full items-center border-t  border-[#E2E9F2] px-4 sm:h-[50px] sm:px-6">
          <img
            className="w-4 opacity-60 group-hover:opacity-100 sm:w-[20px]"
            src="/img/screen.svg"
            alt=""
          />
          <span className="ml-4 text-sm text-[#566879] group-hover:text-black sm:ml-[21px] sm:text-[16px]">
            View all sizes of this model
          </span>
          <ChevronRightIcon className="absolute right-2 h-4 text-[#566879] group-hover:text-black sm:right-6 sm:h-5 sm:w-5" />
        </div>
        <div className="group relative flex h-9 w-full items-center border-t  border-[#E2E9F2] px-4 sm:h-[50px] sm:px-6">
          <img
            className="w-5 opacity-60 group-hover:opacity-100 sm:w-[24px]"
            src="/img/shine.svg"
            alt=""
          />
          <span className="ml-3 text-sm text-[#566879]  group-hover:text-black sm:ml-[20px] sm:text-[16px]">
            See other tires in this size
          </span>
          <ChevronRightIcon className="absolute right-2 h-4 text-[#566879] group-hover:text-black sm:right-6 sm:h-5 sm:w-5" />
        </div>
      </div>
    </div>
  );
}

export default ProductImageSection;
