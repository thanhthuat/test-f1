import React from "react";
import CardRow from "../../../../common/card-row/card-row";
import CardTextTitle from "../../../../common/card-text-title/card-text-title";
import CardText from "../../../../common/card-text/card-text";
import CarouselTop from "../../../../common/carousel-story/carosel-top";
import { useAppSelector } from "@hook/hooks";
import { SxProps, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
type Props = {};
interface BlockContentProps {
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
  
}

const BlockContent: React.FC<BlockContentProps> = ({ className = "", sx = {}, children }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <Box className={`${className} clstabblock`}>
      {children}
      <div className="clstabblock-contenttop">
        <div className="clstabblock-right">
          {topmovie.slice(10, 11).map((item, index) => {
            return <CardRow item={item} key={index} isAuthor={true} />;
          })}
        </div>
        <div className="clstabblock-left ">
          {topmovie.slice(11, 12).map((item, index) => {
            return <CardTextTitle item={item} key={index} />;
          })}
        </div>
      </div>
      <div className="clstabblock-contentbody has_border">
        {Array(3)
          .fill(null)
          .map((item, index) => (
            <CardText key={index} />
          ))}
      </div>
      <div className="has_border"></div>
      {/* <CarouselTop /> */}
    </Box>
  );
};

export default BlockContent;
