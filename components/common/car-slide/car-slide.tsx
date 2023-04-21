import Image from "next/image";
import React from "react";

import img from 'public/image/bg-carousel.jpg'
type Props = {};

const CarSlide = (props: Props) => {
  return (
    <div className="prefixcarslide">
      <div className="prefixcarslide-content">
        <div className="prefixcarslide-img">
          <Image alt="123" src={img} />
        </div>
        <div className="prefixcarslide-des">
          <span className="prefixcarslide-des__type"> travel</span>
          <h4 className="prefixcarslide-des__title">
            {" "}
            Nullam malesuada erat ut turpis. Suspendisse urna nibh
          </h4>
          <p className="prefixcarslide-des__time">
            <span className="prefixcarslide-des__icon"></span>
            <span>27 may 2013</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarSlide;
