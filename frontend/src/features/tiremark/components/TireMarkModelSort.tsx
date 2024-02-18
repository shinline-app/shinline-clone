import Select from '../../../ui/Select';

function TireMarkModelSort({ sort }) {
  return (
    <>
      <div className="mb-2 flex items-center rounded bg-[#F5F8FC] p-2 pl-0 sm:p-3 lg:flex-row lg:justify-between">
        <p className="flex items-center">
          <img className="w-[70px]" src="/img/catalog/bmw.svg" alt="" />
          <span className="ml-[2px] text-sm text-[#566879] sm:text-base lg:ml-4">
            To select tires for BMW (BMW), select the model of your car:
          </span>
        </p>
        <div className="ml-3">
          <Select width={'450px'} dataSource={sort} />
        </div>
        {/* {!Screen(1024) && (
          <div className="ml-3">
            <Select width={'450px'} dataSource={sort} />
          </div>
        )} */}
      </div>
      {/* {Screen(1024) && (
        <div className="mb-3">
          <Select width={'100%'} dataSource={sort} />
        </div>
      )} */}
    </>
  );
}

export default TireMarkModelSort;
