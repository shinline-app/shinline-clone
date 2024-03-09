import Button from '../../../ui/Button';

function TireMarkDetailSection() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-end">
      <p className="w-[70%] sm:w-[50%] lg:w-[365px]">
        <img className="w-full" src="/img/catalog/bmw-big.png" alt="" />
      </p>
      <div className="text-center sm:ml-5 sm:text-left lg:ml-10 lg:mr-10">
        <p className="text-sm text-black sm:text-base">Model</p>
        <p className="mb-4 text-xl font-semibold text-[#E31E24] sm:text-3xl">
          118d
        </p>
        <Button type="danger">View all tire catalog</Button>
      </div>
    </div>
  );
}

export default TireMarkDetailSection;
