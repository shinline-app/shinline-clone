import { SetStateAction, useState } from 'react';
import CalcTabCategories from './CalcTabCategories';
import CalcTabOptions from './CalcTabOptions';
import CalcTabBrands from './CalcTabBrands';
import CalcTab from './CalcTab.tsx';

function Calc() {
  const tabs = [
    {
      value: 'categories',
      label: 'Car categories',
    },
    {
      value: 'options',
      label: 'Options',
    },
    {
      value: 'brands',
      label: 'Brands',
    },
  ];
  const [activeTab, setActiveTab] = useState('categories');

  function handleTab(value: SetStateAction<string>) {
    setActiveTab(value);
  }

  return (
    <div className="py-24 pb-12">
      <div className="category-selection rounded bg-white drop-shadow-[0px_20px_50px_rgba(2,36,86,0.1)]">
        <div className="category-selection-top flex">
          <div className="mt-5 min-w-[380px] text-center text-xl font-bold uppercase">
            <p>Tire selection by:</p>
          </div>
          <CalcTab tabs={tabs} activeTab={activeTab} onClick={handleTab} />
        </div>
        {activeTab === 'categories' && <CalcTabCategories />}
        {activeTab === 'options' && <CalcTabOptions />}
        {activeTab === 'brands' && <CalcTabBrands />}
      </div>
    </div>
  );
}

export default Calc;
