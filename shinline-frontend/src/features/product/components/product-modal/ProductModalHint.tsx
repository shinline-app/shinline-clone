function ProductModalHint() {
  return (
    <div className="border-b border-[#E2E9F2]  px-6 py-4">
      {true ? (
        <p className="mb-1 flex items-center whitespace-nowrap text-[15px]">
          <b className=" text-[#15A524]">In stock:</b>{' '}
          <span className="ml-2  text-[#566879]">Left from 4 to 20 pieces</span>
        </p>
      ) : (
        <b className="text-[15px] text-[#E31E24]">Not available</b>
      )}
      <p className="flex items-center whitespace-nowrap text-[15px]">
        <b className=" text-[#15A524]">Category:</b>{' '}
        <span className="ml-2  text-[#566879]">Light trucks</span>
      </p>
    </div>
  );
}

export default ProductModalHint;
