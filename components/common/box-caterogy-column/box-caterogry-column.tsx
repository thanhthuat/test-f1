import React from "react";
import CardColumn from "../card-column/card-column";
import CardTextTitle from "../card-text-title/card-text-title";
import BoxCaterogryColumnHeader from "./box-caterogry-column-header";
import { useAppSelector } from "@hook/hooks";
import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid";
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
        <Grid container spacing={1}>
          <Grid tablet={6} tablet1={4}>
            {children &&
              (children as React.ReactNode[]).length > 0 &&
              React.cloneElement((children as any[])[0], {
                item: { ...topmovie[18] },
                isAuthor: true,
              })}
          </Grid>
          <Grid tablet={6} tablet1={4}>
            {children &&
              (children as React.ReactNode[]).length > 0 &&
              React.cloneElement((children as any[])[0], {
                item: { ...topmovie[19] },
                isAuthor: true,
              })}
          </Grid>
          <Grid tablet={6} tablet1={4}>
            {children &&
              (children as React.ReactNode[]).length > 0 &&
              React.cloneElement((children as any[])[0], {
                item: { ...topmovie[17] },
                isAuthor: true,
              })}
            {/* <CardColumn item={topmovie[1]} isAuthor={true} />
             <div className="has_border"></div>
           <CardTextTitle /> */}
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default BoxCategoryColumn;
