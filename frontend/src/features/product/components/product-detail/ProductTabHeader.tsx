function ProductTabHeader({ open, onClick }) {
  return (
    <div className="flex flex-wrap  border border-[#E2E9F2] bg-[#F5F8FC] px-1 py-1 sm:space-x-2">
      <a
        onClick={() => onClick('desc')}
        className={`cursor-pointer rounded px-4 py-3 text-sm font-medium uppercase transition-all hover:bg-[#E31E24] hover:text-white sm:py-4 md:text-base lg:px-6 ${
          open === 'desc' ? 'bg-[#E31E24] text-white' : ' '
        }`}
      >
        Description
      </a>
      <a
        onClick={() => onClick('reviews')}
        className={` cursor-pointer rounded px-4 py-3 text-sm font-medium uppercase transition-all hover:bg-[#E31E24] hover:text-white sm:py-4 md:text-base lg:px-6 ${
          open === 'reviews' ? 'bg-[#E31E24] text-white' : ' '
        }`}
      >
        Reviews(12)
      </a>
      <a
        onClick={() => onClick('in-stock')}
        className={` cursor-pointer rounded px-4 py-3 text-sm font-medium uppercase transition-all hover:bg-[#E31E24] hover:text-white sm:py-4 md:text-base lg:px-6 ${
          open === 'in-stock' ? 'bg-[#E31E24] text-white' : ' '
        }`}
      >
        In stock
      </a>
      <a
        onClick={() => onClick('not-available')}
        className={` cursor-pointer rounded px-4 py-3 text-sm font-medium uppercase transition-all hover:bg-[#E31E24] hover:text-white sm:py-4 md:text-base lg:px-6 ${
          open === 'not-available' ? 'bg-[#E31E24] text-white' : ' '
        }`}
      >
        not available
      </a>
    </div>
  );
}

export default ProductTabHeader;
