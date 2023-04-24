import React from "react";
import CardRow from "../../../../common/card-row/card-row";
import CardTextTitle from "../../../../common/card-text-title/card-text-title";
import CardText from "../../../../common/card-text/card-text";
import CarouselTop from "../../../../common/carousel-story/carosel-top";
import { useAppSelector } from "@hook/hooks";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
interface BlockContentCategoryProps {
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

const BlockContentCategory: React.FC<BlockContentCategoryProps> = ({ className = "", sx = {} }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <Box className={`${className} clstabblock`} sx={{ ...sx }}>
      <div className="clstabblock-contenttop">
        <div className="clstabblock-right">
          {topmovie.slice(13, 15).map((item, index) => {
            return <CardRow className="border" item={item} key={index} />;
          })}
        </div>
        <div className="clstabblock-left">
          {topmovie.slice(13, 17).map((item, index) => (
            <CardText key={index} />
          ))}
        </div>
      </div>

      <div className="has_border"></div>
      {/* <CarouselTop /> */}
    </Box>
  );
};

export default BlockContentCategory;
