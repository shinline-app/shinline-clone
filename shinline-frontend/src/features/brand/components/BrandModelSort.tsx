import Select from '../../../ui/Select';

function BrandModelSort({ seasonTypes }) {
  return (
    <div className="flex basis-3/4 items-center justify-between">
      <h2 className="hidden text-xl font-semibold uppercase md:block">
        Model tire:
      </h2>
      <div className="w-full md:w-auto">
        <Select dataSource={seasonTypes} />
        {/* width={Screen(768) ? '100%' : '290px'} */}
      </div>
    </div>
  );
}

export default BrandModelSort;
