function ProductModalBrand({ brandSrc }: { brandSrc: string }) {
  return (
    <p className="px-5 py-4">
      <img width="150" src={`/img/catalog/brand/${brandSrc}.svg`} alt="" />
    </p>
  );
}

export default ProductModalBrand;
