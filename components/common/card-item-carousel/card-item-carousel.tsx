import React from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import { IresponeMovie } from "lib/models/interface";
interface CardItemCarouselProps {
  className?: string;
  sx?: SxProps<Theme>;
  item: IresponeMovie;
}

const CardItemCarousel: React.FC<CardItemCarouselProps> = ({ className = "", sx = {}, item }) => {
  return (
    <article className={`${className} clsarticleitemcarousel`}>
      <Box className="clsarticleitemcarousel-content" sx={{ ...sx }}>
        <div className="clsarticleitemcarousel-summary">
          <div className="clsarticleitemcarousel-summary__title">
            <h5>{item.title}</h5>
          </div>
          <div className="clsarticleitemcarousel-summary__des">
            <p>{item.overview}</p>
          </div>
        </div>
      </Box>
    </article>
  );
};

export default CardItemCarousel;
