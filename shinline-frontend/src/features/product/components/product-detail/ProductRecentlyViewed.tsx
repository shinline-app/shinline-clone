import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import products from '../../../../data/data-products.json';
import PageTitle from '../../../../ui/PageTitle';

function ProductRecentlyViewed() {
  return (
    <section className="py-5">
      <div className="mb-4 flex items-center justify-between">
        <PageTitle title="Previously you watched" />
        <div className="previously-arrows relative flex">
          <div className="swiper-button-next right-0"></div>
          <div className="swiper-button-prev -left-16"></div>
        </div>
      </div>
      <div className="flex">
        <Swiper
          className="mt-3 grid grid-cols-4 "
          modules={[Navigation]}
          spaceBetween={14}
          slidesPerView={1.3}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
          navigation={{
            nextEl: '.previously-arrows .swiper-button-next',
            prevEl: '.previously-arrows .swiper-button-prev',
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex max-w-[310px]  rounded border border-[#EEE] bg-[#F8FAFD] p-4">
                <p className="h-[90px] max-h-[90px] min-w-[90px] border border-[#EEE] p-2">
                  <img
                    src="/img/01.png"
                    className="h-full w-full object-cover object-center"
                    alt=""
                  />
                </p>
                <div className=" ml-4 flex  flex-col">
                  <p className=" mb-1 h-full max-h-14 flex-auto overflow-hidden text-[13px] text-[#566879]">
                    {product.title}
                  </p>
                  <div className="flex-auto text-[20px] font-bold text-black">
                    ${product.price}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductRecentlyViewed;
