import React from "react";
import Box from "@mui/material/Box";
import img from "public/image/bg-carousel.jpg";
import { SxProps, Theme } from "@mui/material/styles";
interface CarouselItemProps {
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ className = "", sx = {} }) => {
  return (
    <Box className="prefixcarouselitem ">
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
    </Box>
  );
};

export default CarouselItem;
