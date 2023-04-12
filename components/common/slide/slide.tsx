import Image from "next/image";
import React from "react";
import subtitleLogoRight from "public/image/icon/icon-right.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { TypeNews } from "lib/models/interface";

type Props = {
  data: TypeNews[];
};

interface ISlide {
  data: TypeNews[];
}

const Slide: React.FC<ISlide> = (props: Props) => {
  const { data } = props;

  return (
    <div className="slide">
      <span className="slide__logo"></span>
      {/* <Swiper
        direction={"vertical"}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.length > 0 &&
          data.map((item: TypeNews) => (
            <SwiperSlide key={item?.news_id}> 
              <Link href={`/detail/${item?.news_id}`} className="slide__title">
                {item?.title}
              </Link>
            </SwiperSlide>
          ))}
      </Swiper> */}
    </div>
  );
};

export default Slide;
