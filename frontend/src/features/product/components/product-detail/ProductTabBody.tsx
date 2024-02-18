import ProductTabContent from './ProductTabContent';

function ProductTabBody({ open }: { open: string }) {
  return (
    <div className="border border-t-0 border-[#E2E9F2] px-4">
      <ProductTabContent category="desc" open={open}>
        <p className="flex justify-between rounded px-4 py-3 odd:bg-[#F8FAFD]">
          <span className="font-extralight">Ширина профиля</span>
          <b>225</b>
        </p>
        <p className="flex justify-between rounded px-4 py-3 odd:bg-[#F8FAFD]">
          <span className="font-extralight">Высота профиля</span>
          <b>60</b>
        </p>
        <p className="flex justify-between rounded px-4 py-3 odd:bg-[#F8FAFD]">
          <span className="font-extralight">Высота профиля</span>
          <b>60</b>
        </p>
      </ProductTabContent>
      <ProductTabContent category="reviews" open={open}>
        Lorem, ipsum dolor.22
      </ProductTabContent>
      <ProductTabContent category="in-stock" open={open}>
        Lorem, ipsum dolor.
      </ProductTabContent>
      <ProductTabContent category="not-available" open={open}>
        Lorem, ipsum dolor.33
      </ProductTabContent>
    </div>
  );
}

export default ProductTabBody;
