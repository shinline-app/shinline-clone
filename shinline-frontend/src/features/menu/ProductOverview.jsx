import { useParams } from 'react-router-dom';
import BackButton from '../../ui/BackButton';

const products = [
  {
    id: 1,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '45',
    color: 'Black',
  },
  {
    id: 143,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '60',
    color: 'Black',
  },
  {
    id: 112,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '35',
    color: 'Black',
  },
  {
    id: 1765,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '45',
    color: 'Black',
  },
  {
    id: 1435,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '60',
    color: 'Black',
  },
  {
    id: 11342,
    name: 'Winter tires Sailun Ice Blazer Alpine Plus 175/70 R13 82T',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '35',
    color: 'Black',
  },
];

function ProductOverview() {
  const { id } = useParams();

  const [res] = products.filter((pro) => pro.id === Number(id));

  const { imageSrc: src, imageAlt: alt, price, name } = res;

  return (
    <div>
      <div className=" fixed left-[40px] top-[120px]">
        <BackButton />
      </div>

      <h1>{name}</h1>
      <img src={src} alt={alt} />
      <div className="flex justify-between 	">
        <span>cost {price}</span>

        <button className="text-green-30 rounded-md bg-green-600 p-2">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductOverview;
