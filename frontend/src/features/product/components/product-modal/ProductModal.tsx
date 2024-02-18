import { useEffect, useState } from 'react';
import { ProductItem } from '../../../../models';
import ProductModalHint from './ProductModalHint';
import ProductModalAction from './ProductModalAction';
import ProductModalTopAction from './ProductModalTopAction';
import ProductModalImages from './ProductModalImages';
import ProductModalSpecs from './ProductModalSpecs';
import ProductModalBottom from './ProductModalBottom';
import ProductModalTitle from './ProductModalTitle';
import ProductModalBrand from './ProductModalBrand';
import { classNames } from '../../../../utils/helpers';
import useDelayedVisibility from '../../../../hooks/useDelayedVisibility';

type ProductModalProps = {
  product: ProductItem;
  isOpen: boolean;
  closed: boolean;
  openModal: (e: boolean) => void;
};

function ProductModal({ product, isOpen, openModal }: ProductModalProps) {
  const { title, brandSrc, seasonTypes } = product;
  const isClosed = useDelayedVisibility(isOpen);

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!isOpen || keyCode !== 27) {
        return;
      }
      openModal(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <>
      {!isClosed ? (
        <div
          onClick={() => openModal(false)}
          className={classNames(
            !isOpen ? 'modal-hidden' : '',
            'modal-overlay fixed left-0 top-0 z-30 hidden h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5 lg:flex'
          )}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="product-modal flex w-full max-w-[1150px] overflow-hidden rounded-[15px] bg-white text-center"
          >
            <div className="w-[70%] max-w-[70%]">
              <div className=" bg-white">
                <ProductModalTitle title={title} />
                <div className="flex">
                  <ProductModalImages product={product} />
                  <ProductModalSpecs product={product} />
                </div>
              </div>
              <ProductModalBottom seasonTypes={seasonTypes} />
            </div>
            <div className="w-full  max-w-[30%] border-l border-[#E2E9F2] bg-[#F8FAFD]">
              <ProductModalTopAction product={product} openModal={openModal} />
              <ProductModalAction product={product} />
              <ProductModalHint />
              <ProductModalBrand brandSrc={brandSrc} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProductModal;
