import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import img from 'public/image/bg-carousel.jpg';
interface CarSlideProps {
className?:string ;
sx?: SxProps<Theme>;
}

const CarSlide:React.FC<CarSlideProps> = ({className='',sx={}}) => {
  return (
    <Box  className="prefixcarslide" sx={{...sx}}>
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
    </Box >
  );
};

export default CarSlide;
