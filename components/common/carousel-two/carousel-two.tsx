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
import { IresponeMovie } from "lib/models/interface";
import apiConfig from "apis/apiConfig";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector, useWindowDimensions } from "@hook/hooks";
interface CarouselTwoProps {
  className?: string;
  sx?: SxProps<Theme>;
  listItem?: IresponeMovie[];
}
const CarouselTwo: React.FC<CarouselTwoProps> = ({ className = "", sx = {}, listItem = [] }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  listItem = listItem = topmovie?.slice(0, 8);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const size = useWindowDimensions();

  return (
    <Box className={`${className} clscarouselthumbs`} sx={{ ...sx }}>
      <Swiper
        spaceBetween={10}
        navigation={true}
        loop={true}
        direction={"vertical"}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {listItem.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Link href={`/detail/${item.id}`}>
              <Image
                src={item?.backdrop_path ? apiConfig.originalImage(item?.backdrop_path) : ""}
                alt={item?.title || "img"}
                width="1024"
                height="750"
              ></Image>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        slidesPerView={size?.width! > 980 ? 2 : 2}
        freeMode={true}
        direction={size?.width! > 980 ? "vertical" : "horizontal"}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
        }}
      >
        {listItem.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Link href={`/detail/${item.id}`}>
              <CardItemCarousel item={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default CarouselTwo;
