import CalcAction from './CalcAction';
import CalcBySettings from './CalcSettings';
import CalcSwitches from './CalcSwitches';

function CalcTabBrands() {
  return (
    <div className="category-selection-content mb-10 flex p-4 pt-3">
      <div className="content-left min-w-[57%] max-w-[57%] rounded bg-lightgray p-4">
        <h2 className="mb-3 text-xl font-bold">Brands</h2>
        <CalcBrands />
      </div>
      <div className="content-right flex w-full flex-col justify-between  overflow-hidden rounded bg-white px-4 pr-0 pt-3">
        <h2 className="mb-3 text-xl font-bold">Settings</h2>
        <CalcBySettings />
        <p className="mb-3"></p>
        <h2 className="mb-3 text-xl font-bold">Seasonality</h2>
        <CalcSwitches slice={[0, -2]} />
        <CalcSwitches slice={[3, 5]} />
        <CalcAction />
      </div>
    </div>
  );
}

export default CalcTabBrands;

function CalcBrands() {
  return (
    <div className="scrollbar max-h-[307px] overflow-y-auto pb-1">
      <div className="grid  grid-cols-4 grid-rows-4 gap-[10px] ">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22,
          23, 34, 45, 56, 42, 43, 54, 65, 76, 87, 90,
        ].map((item) => (
          <p
            key={item}
            className="flex h-[60px] items-center justify-center rounded bg-white px-[10px] py-2 transition-all  hover:shadow-[0px_20px_50px_0px_rgba(2,36,86,0.05)]"
          >
            <img
              className="h-full w-full"
              src="/img/catalog/brand/odyking.svg"
              alt=""
            />
          </p>
        ))}
      </div>
    </div>
  );
}
