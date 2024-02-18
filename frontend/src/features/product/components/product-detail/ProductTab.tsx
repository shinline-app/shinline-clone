import { useState } from 'react';
import ProductTabHeader from './ProductTabHeader';
import ProductTabBody from './ProductTabBody';

function ProductTab() {
  const [open, setOpen] = useState('desc');
  return (
    <section className="py-12 sm:py-20">
      <div className="mb-14 w-full">
        <ProductTabHeader open={open} onClick={setOpen} />
        <ProductTabBody open={open} />
      </div>
    </section>
  );
}

export default ProductTab;
