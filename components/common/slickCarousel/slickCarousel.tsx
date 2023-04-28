import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Pagination, Navigation } from "swiper";
import CardColumn from "../card-column/card-column";
export default function CaterogyList() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            {" "}
            12121 <p>dsfsdfsdf</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {" "}
            12121 <p>dsfsdfsdf</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {" "}
            12121 <p>dsfsdfsdf</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {" "}
            12121 <p>dsfsdfsdf</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {" "}
            12121 <p>dsfsdfsdf</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {" "}
            12121 <p>dsfsdfsdf</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {" "}
            12121 <p>dsfsdfsdf</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            {" "}
            12121 <p>dsfsdfsdf</p>
          </div>
        </SwiperSlide>

        <SwiperNavButtons />
      </Swiper>
    </>
  );
}

export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div
      className="swiper-nav-btns"
      style={{ position: "absolute", top: "0", right: "0", zIndex: "1000" }}
    >
      <button onClick={() => swiper.slidePrev()}>
        <ArrowBackIosIcon />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};
