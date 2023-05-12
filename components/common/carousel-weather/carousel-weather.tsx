import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Autoplay, Pagination, Navigation } from "swiper";
interface CarouselWeatherProps {
  className?: string;
}

const CarouselWeather: React.FC<CarouselWeatherProps> = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <Swiper
        className="mySwiper"
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide style={{ background: "transparent" }}>
          <div style={{ background: "transparent" }}>
            Hcm 18 C <Brightness2Icon />{" "}
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ background: "transparent" }}>
          Ha Noi 19 C <Brightness3Icon />
        </SwiperSlide>
        <SwiperSlide style={{ background: "transparent" }}>
          Da Nang 15 C <Brightness5Icon />
        </SwiperSlide>
        <SwiperSlide style={{ background: "transparent" }}>
          Nghe An 30 C <Brightness4Icon />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselWeather;
