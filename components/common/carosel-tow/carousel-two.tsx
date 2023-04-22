import React, { useRef, useState } from "react";
import SwiperCore, { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, type Swiper as SwiperRef } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import CardItemCarousel from "../card-item-carousel/card-item-carousel";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
interface CarouselTwoProps {
  className?: string;
  sx?: SxProps<Theme>;
}
const CarouselTwo: React.FC<CarouselTwoProps> = ({ className = "", sx = {} }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <Box className={`${className} clscarouselthumbs`} sx={{ ...sx }}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        direction={"vertical"}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        slidesPerView={2}
        freeMode={true}
        direction={"vertical"}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardItemCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <CardItemCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <CardItemCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <CardItemCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <CardItemCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <CardItemCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <CardItemCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <CardItemCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <CardItemCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <CardItemCarousel />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
export default CarouselTwo;
