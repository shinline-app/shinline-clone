import CalcAction from './CalcAction';
import CalcMark from './CalcMark';
import CalcModel from './CalcModel';
import CalcSwitches from './CalcSwitches';

function CalcContent04() {
  return (
    <div className="category-selection-content mb-10 flex p-4 pt-3">
      <div className="content-left min-w-[57%] max-w-[57%] rounded bg-lightgray px-4 pt-4">
        <h1 className="mb-3 text-xl font-bold">Selection by car brand</h1>
        <CalcMark />
      </div>
      <div className="content-right w-full overflow-hidden rounded bg-white px-4 pt-3">
        <h2 className="mb-3 text-xl font-bold">Seasonality</h2>
        <CalcSwitches slice={[0, -2]} />
        <CalcSwitches slice={[3, 5]} />
        <CalcModel />
        <CalcAction />
      </div>
    </div>
  );
}

export default CalcContent04;
