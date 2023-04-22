import React from "react";
import CardColumn from "../card-column/card-column";
import CardTextTitle from "../card-text-title/card-text-title";
import BoxCaterogryColumnHeader from "./box-caterogry-column-header";
import { useAppSelector } from "@hook/hooks";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
interface BoxCaterogryColumnProps {
  className?: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}
const arr = [
  { title: "Giải trí" },
  { title: "Giới sao" },
  { title: "Phim Nhạc" },
  { title: "Thời trang" },
];
const BoxCategoryColumn: React.FC<BoxCaterogryColumnProps> = ({ className = "", children }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <section className={`${className} clsboxcolumn`}>
      <div className={` clsboxcolumn-content`}>
        {children}
        {/* <div className="clsboxcolumn-item1">
          jjjjjjjjjjjjjjjjj
          <BoxCaterogryColumnHeader item={arr} />
          <CardColumn item={topmovie[19]} />
          <div className="has_border"></div>
          <CardTextTitle />
        </div>
        <div className="clsboxcolumn-item2">
          <BoxCaterogryColumnHeader item={arr} />
          <CardColumn item={topmovie[18]} />
          <div className="has_border"></div>
          <CardTextTitle />
        </div>
        <div className="clsboxcolumn-item3">
          <BoxCaterogryColumnHeader item={arr} />
          <CardColumn item={topmovie[17]} />
          <div className="has_border"></div>
          <CardTextTitle />
        </div> */}
      </div>
    </section>
  );
};

export default BoxCategoryColumn;
