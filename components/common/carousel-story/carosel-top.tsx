import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, EffectFade } from "swiper";
import CarSlide from "../car-slide/car-slide";
type Props = {};

const CarouselTop = (props: Props) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      // modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <CarSlide />
      </SwiperSlide>
      <SwiperSlide>
        <CarSlide />
      </SwiperSlide>
      <SwiperSlide><CarSlide/></SwiperSlide>
      <SwiperSlide><CarSlide/></SwiperSlide>
      <SwiperSlide><CarSlide/></SwiperSlide>
      <SwiperSlide><CarSlide/></SwiperSlide>
      <SwiperSlide><CarSlide/></SwiperSlide>
      <SwiperSlide><CarSlide/></SwiperSlide>
      <SwiperSlide><CarSlide/></SwiperSlide>
    </Swiper>
  );
};

export default CarouselTop;
