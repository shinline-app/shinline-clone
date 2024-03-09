import { Link, useLocation } from 'react-router-dom';

function TireMarkMarks() {
  const location = useLocation();
  return (
    <div className="mb-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {[
        1, 2, 3, 4, 5, 6, 65, 7, 87, 93, 57, 75, 343, 62, 23, 94, 635, 70, 88,
        95, 54, 96, 74, 8, 9876, 4424,
      ].map((item) => (
        <Link
          to={`${location.pathname}/${item}`}
          key={item}
          className=" flex min-h-[150px]   flex-col items-center  justify-end  border border-[#E2E9F2] pb-3 shadow-gray-100 transition-all hover:shadow-md"
        >
          <p className="mb-7 h-[50px] w-[70px]">
            <img className="w-full" src="/img/catalog/bmw.svg" alt="" />
          </p>
          <p className="font-semibold text-black">BMW</p>
        </Link>
      ))}
    </div>
  );
}

export default TireMarkMarks;
