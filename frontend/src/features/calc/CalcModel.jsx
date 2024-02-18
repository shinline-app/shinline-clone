const modelData = [
  '155/65R13',
  '155/70R13',
  '155/65R14',
  '185/65R14',
  '205/65R14',
  '155/65R13',
  '155/70R13',
  '155/65R14',
  '205/65R16',
  '215/65R16',
  '215/60R16',
  '275/60R16',
  '205/65R16',
  '205/65R16',
  '215/65R16',
  '215/60R16',
];

function CalcModel() {
  return (
    <div className="my-5">
      <div className="scrollbar -m-0.5 mb-2 grid grid-flow-col grid-rows-2 overflow-x-auto">
        {modelData.map((model, index) => (
          <div
            key={index}
            className="m-0.5 flex h-[34px] items-center justify-center rounded border border-[#E2E9F2] bg-white px-3 text-sm text-[#566879] transition-all ease-out hover:bg-red hover:text-white"
          >
            {model}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalcModel;
