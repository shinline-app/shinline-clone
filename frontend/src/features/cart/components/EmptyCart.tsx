import Button from '../../../ui/Button.tsx';

function EmptyCart() {
  return (
    <div className="mt-3 flex flex-col items-center rounded border border-[#F5F8FC] bg-[#F5F8FC] px-3 pb-7 pt-6 text-center sm:pb-16 sm:pt-12">
      <p className="mx-auto mb-10 w-40 sm:w-52">
        <img src="/img/cart/empty-cart.png" className="w-full" alt="" />
      </p>
      <h3 className="mb-1 text-2xl font-semibold sm:text-[36px]">
        Your cart is empty
      </h3>
      <p className="text-md mb-5 sm:mb-8 sm:text-[18px]">
        Start choosing products from our catalog
      </p>
      <div className="flex flex-col sm:flex-row">
        <Button to="/" type="danger" className="mb-2 w-[220px] sm:mb-0">
          To main
        </Button>
        <Button to="/catalog" type="info" className="w-[220px] sm:ml-3">
          To catalog
        </Button>
      </div>
    </div>
  );
}

export default EmptyCart;
