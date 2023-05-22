import React from "react";
import CardRow from "../../../../common/card-row/card-row";
import CardTextTitle from "../../../../common/card-text-title/card-text-title";
import CardText from "../../../../common/card-text/card-text";
import CarouselTop from "../../../../common/carousel-story/carosel-top";
import { useAppSelector } from "@hook/hooks";
import { SxProps, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { createPage } from "@components/dynamic-rendering.service";
import { renderComponent } from "@components/index";
import { IComponent } from "@components/dynamic-rendering.interfaces";
interface BlockContentProps {
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
  arrChildren?: Array<IComponent>;
}

const BlockContent: React.FC<BlockContentProps> = ({
  className = "",
  sx = {},
  children,
  ...props
}) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <div className={`${className} clstabblock`}>
      <div className="clstabblock-contenttop">
        <div className="clstabblock-right">
          {children &&
            (children as React.ReactNode[]).length > 0 &&
            (children as React.ReactNode[])[0]}
        </div>
        <div className="clstabblock-left ">
          {children &&
            (children as React.ReactNode[]).length > 0 &&
            (children as React.ReactNode[])[1]}
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
    </div>
  );
};

export default BlockContent;
