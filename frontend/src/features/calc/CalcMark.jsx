import Select from '../../ui/Select';

function CalcMark({ category }) {
  return (
    <div className="ml-4 flex h-full  min-w-[300px] flex-col bg-lightgray px-5 pb-0 pt-4">
      {[1, 2, 3].map((item) => (
        <div key={item} className="mb-3">
          <p className="mb-1 text-extragray">Marka</p>
          <Select
            width={'100%'}
            height={'40px'}
            iconSize={'5'}
            dataSource={[
              { id: 1, name: '195' },
              { id: 2, name: '200' },
            ]}
          />
        </div>
      ))}
      <p className="mx-auto mt-2 h-[120px] w-[160px]">
        <img
          src={`/img/catalog/seasons/${category}.svg`}
          className="h-full w-full"
          alt=""
        />
      </p>
    </div>
  );
}

export default CalcMark;
