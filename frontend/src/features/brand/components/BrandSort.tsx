const sort = [
  '0-9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
function BrandSort() {
  function handleClick(to: string) {
    const top = document.getElementById(to)?.offsetTop;
    window.scrollTo({
      top: top ? top - 15 : 0,
      behavior: 'smooth',
    });
  }
  return (
    <div className="mb-8 flex flex-wrap gap-[5px] sm:gap-3">
      {sort.map((item) => (
        <div
          key={item}
          onClick={() => handleClick(`brand_${item}`)}
          className="flex min-h-[36px] min-w-[36px] cursor-pointer items-center justify-center rounded border border-[#E2E9F2] px-3 py-[5px] font-semibold uppercase text-[#566879] transition-all hover:border-[#E31E24] hover:text-[#E31E24]"
        >
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default BrandSort;
