import React from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
interface CardItemCarouselProps {
  className?: string;
  sx?: SxProps<Theme>;
}

const CardItemCarousel: React.FC<CardItemCarouselProps> = ({ className = "", sx = {} }) => {
  return (
    <article className={`${className} clsarticleitemcarousel`}>
      <Box className="clsarticleitemcarousel-content" sx={{ ...sx }}>
        <div className="clsarticleitemcarousel-summary">
          <div className="clsarticleitemcarousel-summary__title">
            <h5>Làng quê Quảng Nam nhuốm vàng hoa sưa</h5>
          </div>
          <div className="clsarticleitemcarousel-summary__des">
            <p>
              Được người dân huyện Tiên Phước và Phú Ninh trồng trong vườn, trên các tuyến đường,
              cây sưa vàng đang mùa nở rộ, tạo vẻ đẹp cho làng quê.
            </p>
          </div>
        </div>
      </Box>
    </article>
  );
};

export default CardItemCarousel;
