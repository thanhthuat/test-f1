import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, EffectFade } from "swiper";
import CarSlide from "../car-slide/car-slide";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
interface CarouselTopProps {
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

const CarouselTop: React.FC<CarouselTopProps> = ({ children, className = "", sx = {} }) => {
  return (
    <Box sx={{ ...sx }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className={`${className}`}
      >
        <SwiperSlide>
          <CarSlide />
        </SwiperSlide>
        <SwiperSlide>
          <CarSlide />
        </SwiperSlide>
        <SwiperSlide>
          <CarSlide />
        </SwiperSlide>
        <SwiperSlide>
          <CarSlide />
        </SwiperSlide>
        <SwiperSlide>
          <CarSlide />
        </SwiperSlide>
        <SwiperSlide>
          <CarSlide />
        </SwiperSlide>
        <SwiperSlide>
          <CarSlide />
        </SwiperSlide>
        <SwiperSlide>
          <CarSlide />
        </SwiperSlide>
        <SwiperSlide>
          <CarSlide />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default CarouselTop;
