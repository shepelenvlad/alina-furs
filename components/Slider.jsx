'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Slider({ slides }) {
  return (
    <Swiper
      className="portfolio-details-slider"
      modules={[Autoplay, Navigation, Pagination]}
      loop={slides.length > 1}
      speed={600}
      autoplay={{ delay: 5000 }}
      slidesPerView="auto"
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
