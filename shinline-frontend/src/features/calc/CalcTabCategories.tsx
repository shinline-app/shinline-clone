import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../../ui/Button';
import catalog from '../../data/data-catalog.json';
import Select from '../../ui/Select';
import CalcSettings from './CalcSettings';
import CalcSwitches from './CalcSwitches';
import CalcMark from './CalcMark';
import CalcAction from './CalcAction';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function CalcTabCategories() {
  const [addSeason, setAddSeason] = useState([]);
  const [category, setCategory] = useState('cars');
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSeason(e) {
    const checkboxValue = e.target.value;
    if (e.target.checked) {
      setAddSeason([...addSeason, checkboxValue]);
    } else {
      setAddSeason(addSeason.filter((item) => item !== checkboxValue));
    }
    // searchParams.set('seasons', addSeason);
    // const newUrl = searchParams.toString();
    // setSearchParams(newUrl);
  }
  // console.log(addSeason);

  useEffect(() => {
    console.log('changed', addSeason);

    searchParams.set('seasons', addSeason);
    setSearchParams(searchParams.toString());
    // const newUrl = searchParams.toString();
    // navigate(newUrl);
  }, [addSeason, searchParams]);

  function handleCategory(value) {
    setCategory(value);
    console.log(value);
  }

  return (
    <div className="category-selection-content mb-10 mt-3 flex p-4 pt-0">
      <div className="content-left min-w-[57%] max-w-[57%] rounded">
        <div className="flex">
          <div className="w-full">
            <ul className="flex h-full flex-col">
              {catalog.slice(0, -1).map((item) => (
                <CalcCategories
                  key={item.id}
                  item={item}
                  category={category}
                  onClick={handleCategory}
                />
              ))}
            </ul>
          </div>
          <CalcMark category={category} />
        </div>
      </div>
      <div className="content-right flex w-full flex-col justify-between overflow-hidden rounded bg-white px-4 pr-0 pt-3">
        <h2 className="mb-3 text-xl font-bold">Settings</h2>
        <CalcSettings />
        <p className="mb-3"></p>
        <h2 className="mb-3 text-xl font-bold">Seasonality</h2>
        <CalcSwitches
          checked={addSeason}
          onChange={handleSeason}
          slice={[0, -2]}
        />
        <CalcSwitches
          checked={addSeason}
          onChange={handleSeason}
          slice={[3, 5]}
        />
        <CalcAction />
      </div>
    </div>
  );
}

export default CalcTabCategories;

function CalcCategories({ item, category, onClick }) {
  return (
    <li
      key={item.id}
      onClick={() => onClick(item.value)}
      className={`group relative flex h-[70px] cursor-pointer items-center border border-lightgray px-[35px] transition duration-300 after:absolute after:left-0 after:top-0 after:h-full   after:bg-red after:transition after:duration-300 after:content-[''] hover:shadow-[5px_15px_30px_0px_rgba(0,0,0,0.10)] hover:after:w-[2px]
  ${
    item.value === category
      ? 'active shadow-[5px_15px_30px_0px_rgba(0,0,0,0.10)] after:w-[2px]'
      : 'after:w-[0]'
  }
`}
    >
      <span
        className={`${
          item.value === category &&
          '[&>svg>g>path]:fill-[black] [&>svg>path]:fill-[black]'
        }  w-[44px]  group-hover:[&>svg>g>path]:fill-[black] group-hover:[&>svg>path]:fill-[black]`}
        dangerouslySetInnerHTML={{ __html: item.svg }}
      ></span>

      <p
        className={`${
          item.value === category ? 'text-black' : 'text-extragray'
        } ml-6 text-lg font-medium  group-hover:text-black`}
      >
        {item.name}
      </p>
    </li>
  );
}
