import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <div className="swipercustomerbtn">
        <button onClick={() => swiper.slidePrev()}>Prev</button>
      </div>
      <div className="swipercustomerbtnnext">
        <button onClick={() => swiper.slideNext()}>Next</button>
      </div>
    </>
  );
};
