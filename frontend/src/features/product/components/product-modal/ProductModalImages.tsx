import { useEffect, useState } from 'react';
import { ProductItem } from '../../../../models';
import { classNames } from '../../../../utils/helpers';

type ProductModalImagesProps = {
  product: ProductItem;
};

function ProductModalImages({ product }: ProductModalImagesProps) {
  const [image, setImage] = useState('');

  const { imageSrc, imageAlt } = product;

  useEffect(() => {
    if (imageSrc) {
      setImage(imageSrc[0]);
    }
  }, [imageSrc]);

  return (
    <div className="relative flex-[50%] border border-[#E2E9F2] py-8">
      <p className="flex h-full items-center justify-center overflow-hidden ">
        <img
          src={image}
          className="ml-16 w-[65%] object-cover object-center "
          alt={imageAlt}
        />
      </p>
      <div className="absolute left-2 top-2">
        {imageSrc?.length > 0 &&
          imageSrc.map((item) => (
            <p
              key={item}
              className={classNames(
                image === item ? 'border-[#15A524]' : '',
                'mb-1 h-16 w-16 cursor-pointer border bg-white p-2 transition-all hover:border-[#15A524] sm:mb-2 sm:h-20 sm:w-20'
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
  );
}

export default ProductModalImages;
