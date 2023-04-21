import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarouselItem from "./carousel-item";
import { Pagination, EffectFade } from "swiper";

interface CarouselStoryProps {
  array: any[];
  className?: string ;
  slidesPerView?:number;
  spaceBetween?:number;
}

const CarouselStory:React.FC<CarouselStoryProps> = ({array,className ='',slidesPerView=1,spaceBetween=10}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      effect={"fade"}
      onSlideChange={() => console.log("slide change")}
      navigation={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Navigation, EffectFade]}
      onSwiper={(swiper) => console.log(swiper)}
      className={`${className}`}
    >
      {array.map((item ,index)=>  <SwiperSlide key={index}> <div> {item?.title}</div></SwiperSlide>)}
     
     
    </Swiper>
  );
};

export default CarouselStory;
