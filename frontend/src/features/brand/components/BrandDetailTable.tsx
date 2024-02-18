import BrandDetailTableItem from './BrandDetailTableItem';

function BrandDetailTable() {
  return (
    <div className="mx-auto mb-5 mt-6 border border-[#E2E9F2] bg-white">
      <table className="w-full table-auto">
        <thead className="bg-primary border-b border-[#E2E9F2] text-left">
          <tr className="bg-lightgray text-sm text-extragray [&>th]:py-2 [&>th]:font-normal">
            <th className="text-center"> Name </th>
            <th> Size </th>
            <th> Price </th>
            <th> Count </th>
            <th> </th>
          </tr>
        </thead>

        <tbody className="">
          {[1, 2, 3].map((item) => (
            <BrandDetailTableItem item={item} key={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BrandDetailTable;
