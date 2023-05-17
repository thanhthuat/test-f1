import React from "react";
import CardRow from "../../../../common/card-row/card-row";
import CardTextTitle from "../../../../common/card-text-title/card-text-title";
import CardText from "../../../../common/card-text/card-text";
import CarouselTop from "../../../../common/carousel-story/carosel-top";
import { useAppSelector } from "@hook/hooks";
import { SxProps, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { IComponent1 } from "@components/dynamic-rendering.interfaces";
import { createPage } from "@components/dynamic-rendering.service";
import { renderComponent } from "@components/index";
interface BlockContentProps {
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
  arrChildren?: Array<IComponent1>;
}

const BlockContent: React.FC<BlockContentProps> = ({
  className = "",
  sx = {},
  children,
  arrChildren,
  ...props
}) => {
  console.log("🚀 ~ file: block-content.tsx:25 ~ arrChildren:", arrChildren, props);
  const { topmovie } = useAppSelector((state) => state.movie);
  // const handleRender = (arrChildren: IComponent1 | undefined) => {
  //   if (!!arrChildren) return renderComponent(arrChildren);
  // };
  return (
    <div className={`${className} clstabblock`}>
      {children}
      <div className="clstabblock-contenttop">
        <div className="clstabblock-right">
          {/* {handleRender(arrChildren && arrChildren![0])} */}
          {/* {topmovie.slice(10, 11).map((item, index) => {
            return <CardRow item={item} key={index} isAuthor={true} />;
          })} */}
        </div>
        <div className="clstabblock-left ">
          {/* {arrChildren && createPage(arrChildren[1])} */}
          {/* {topmovie.slice(11, 12).map((item, index) => {
            return <CardTextTitle item={item} key={index} />;
          })} */}
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
