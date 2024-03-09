import { classNames } from '../../../../utils/helpers';

function ProductModalBottom({ seasonTypes }) {
  return (
    <div className="flex w-full justify-between">
      <p className="ml-10 flex items-center text-sm text-[#566879]">
        Articul: 00000017910
      </p>
      <div className="flex">
        <div className="flex h-[58px] w-[58px] items-center justify-center border-x-[1px]  border-[#E2E9F2]">
          <img className="w-[40px]" src="/img/car.svg" alt="" />
        </div>
        {seasonTypes?.map((type, index) => (
          <div
            key={type}
            className={classNames(
              index === 0 ? 'border-r-[1px]  border-[#E2E9F2]' : '',
              'flex h-[58px] w-[58px] items-center justify-center'
            )}
          >
            <img
              className="h-[25px] w-[25px] object-cover object-center"
              src={`/img/${type}.svg`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductModalBottom;
