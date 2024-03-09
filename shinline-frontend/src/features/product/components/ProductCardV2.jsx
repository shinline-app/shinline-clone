function ProductCardV2({ product }) {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = product;
  return (
    <div className="group relative flex min-h-full max-w-[50%] flex-[100%] flex-col border-[0.5px] border-slate-300 bg-white p-3 sm:flex-[50%] md:flex-[33.333%]">
      <h2>{id}</h2>
      <p className="text-red">{title}</p>
      <br />
      <p>{description}</p>
      <img src={images[0]} className="h-10 w-full object-cover" />
    </div>
  );
}

export default ProductCardV2;
