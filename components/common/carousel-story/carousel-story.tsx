import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation ,A11y } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarouselItem from "./carousel-item";
import { Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import CardRow from "../card-row/card-row";
import { SwiperNavButtons } from "./carousel-button";

interface CarouselStoryProps {
  array: any[];
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
}

const CarouselStory: React.FC<CarouselStoryProps> = ({
  array,
  className = "",
  // slidesPerView = 1,
  spaceBetween = 10,
}) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      // navigation={true}
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      className={`${className}`}
      modules={[Navigation, Pagination, A11y]}
    >
      {/* <Swiper
      spaceBetween={10}
      slidesPerView={2}
      effect={"fade"}
      onSlideChange={() => console.log("slide change")}
      navigation={true}
      modules={[Navigation, EffectFade]}
      onSwiper={(swiper) => console.log(swiper)}
      className={`${className}`}
    > */}
      {/* <SwiperSlide>
        <div>thanh </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>124 thanh</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>1551 tran</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>121 thuat</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>124 abc</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>1551 xyz</div>
      </SwiperSlide> */}
      {array.map((item, index) => (
        <SwiperSlide key={index}>
          <CardRow item={item} key={item.title} />
          {/* <div>{item?.title}</div> */}
        </SwiperSlide>
      ))}
      <SwiperNavButtons />
    </Swiper>
  );
};

export default CarouselStory;
