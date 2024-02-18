import { useAppSelector } from '../../../store/hooks';
import ProductCard from '../../product/components/ProductCard.tsx';
import { getWishlist } from '../state/wishlistSlice';
import ProfileTitle from './ProfileTitle';

function UserWishlist() {
  const wishlist = useAppSelector(getWishlist);
  function handleClick() {}
  return (
    <div className="w-full basis-[72%] border border-[#E2E9F2]">
      <ProfileTitle title="Featured Products" />
      {wishlist.length ? (
        <div className="flex flex-wrap space-y-4 border-b last:border-b-0 sm:flex-row sm:space-y-0">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleClick}
            />
          ))}
        </div>
      ) : (
        <p className="p-10 text-center">Empty wishlist</p>
      )}
    </div>
  );
}

export default UserWishlist;
