import React from "react";
import subtitleLogoRight from "public/image/icon/icon-right.png";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface ISlickCarousel {}

const SlickCarousel: React.FC<ISlickCarousel> = () => {
  return (
    <div className="slickCarousel">
      <div className="slickCarousel__top">
        <div className="slickCarousel__top__link">
          <span className="slickCarousel__top__link__title">Click vao day</span>
          <Image src={subtitleLogoRight} alt="" />
        </div>
        <div className="slickCarousel__top__controls">
          <button className="slickCarousel__top__controls__button">
            <ChevronLeftIcon className="slickCarousel__top__controls__button__icon" />
          </button>
          <div className="slickCarousel__top__controls__count">
            <span className="slickCarousel__top__controls__count__left">1</span>
            <span className="slickCarousel__top__controls__count__midle">/</span>
            <span className="slickCarousel__top__controls__count__right">2</span>
          </div>
          <button className="slickCarousel__top__controls__button">
            <ChevronRightIcon className="slickCarousel__top__controls__button__icon" />
          </button>
        </div>
      </div>
      <div className="slickCarousel__bottom">
        <div className="slickCarousel__bottom__figure">
          <a href="#">
            {" "}
            <img
              className="slickCarousel__bottom__figure__img"
              alt=""
              src="https://biz.chosun.com/resizer/FrcwJDRQ5Mk-zcED20DSkiJuiro=/184x104/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/ZJVJRUG5WBG4VEMOLDATSG3VVA.jpg"
            />
          </a>
        </div>
        <a href="#" className="slickCarousel__bottom__link">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </a>
      </div>
    </div>
  );
};

export default SlickCarousel;
