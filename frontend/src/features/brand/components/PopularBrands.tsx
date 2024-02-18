import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function PopularBrands({ brandsData }) {
  const allBrands = Object.values(brandsData).flat();
  const popularBrands = allBrands.filter((brand) => brand?.popular);
  return (
    <Swiper
      className="mb-8 mt-3"
      modules={[Navigation]}
      spaceBetween={6}
      slidesPerView={2}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
      navigation={
        {
          // nextEl: '.rightpage__arrows .swiper-arrow-next',
          // prevEl: '.rightpage__arrows .swiper-arrow-prev',
        }
      }
    >
      {popularBrands.map((brand, index) => (
        <SwiperSlide key={brand.id}>
          <div className="flex h-[80px] items-center justify-center rounded border border-[#E2E9F2] px-5 transition-all hover:shadow-inner  sm:h-[100px]">
            <img
              className="w-full"
              src={`/img/catalog/brand/${brand.imageUrl}.svg`}
              alt=""
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PopularBrands;
