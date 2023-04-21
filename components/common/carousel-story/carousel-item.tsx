import React from "react";

import img from "public/image/bg-carousel.jpg";
type Props = {};

const CarouselItem = (props: Props) => {
  return (
    <div
      className="prefixcarouselitem "
    >
      <div className="prefixcarouselitem-bg">
        <img src={"/image/bg-carousel.jpg"} alt="bg" />
      </div>

      <div className="prefixcarouselitem-top ">
        <div className="prefixcarouselitem-top__title">Top stories</div>
      </div>
      <div className="prefixcarouselitem-bottom ">
        <div className="prefixcarouselitem-bottom__caterory">
          <p> TECH</p>
        </div>
        <div className="prefixcarouselitem-bottom__title">
          <h2>PHASELLUS ULTRICES NULLA QUIS NIBH. QUISQUE A LECTUS. </h2>
        </div>
        <div className="prefixcarouselitem-bottom__des">
          <p>
            {" "}
            <span></span> 27 may 2013
          </p>
          <p>
            <span> asadas</span> 27 may 2013
          </p>
          <p>
            <span>212</span> 13
          </p>
          <p>
            <span>21</span> 13
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
