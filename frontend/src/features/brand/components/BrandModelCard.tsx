import BrandModelCardItem from './BrandModelCardItem';

function BrandModelCard() {
  return (
    <div className="flex md:basis-3/4">
      <div className="flex flex-wrap hover:[&>div]:shadow-[0px_20px_30px_0px_rgba(2,36,86,0.10)] hover:[&>div]:transition-all">
        {[1, 2, 3, 4].map((tire) => (
          <BrandModelCardItem key={tire} />
        ))}
      </div>
    </div>
  );
}

export default BrandModelCard;
