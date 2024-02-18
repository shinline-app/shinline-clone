import Select from '../../../ui/Select';

function BrandDetailSort({ sizes }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="hidden text-xl font-semibold uppercase md:block">
        Dimensions:
      </h2>
      <div className="w-full md:w-auto">
        <Select dataSource={sizes} />
        {/* width={Screen(768) ? '100%' : '290px'} */}
      </div>
    </div>
  );
}

export default BrandDetailSort;
