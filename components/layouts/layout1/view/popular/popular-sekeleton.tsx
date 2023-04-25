import BoxCategory from "@components/common/box-category/box-category";
import CardRowMain from "@components/common/car-row-main/card-row-main";
import CardRow from "@components/common/card-row/card-row";
import React, { useEffect } from "react";
import CategoryHeader from "./popular-header";
import Skeleton from "@mui/material/Skeleton";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import { Box, Divider } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";


interface PopularNewsProps {
  className?: string;
}

const PopularLoading: React.FC<PopularNewsProps> = ({ className = "" }) => {
  const { topmovie } = useAppSelector((state) => state.movie);

  return (
    <div className={`${className} clspopular `}>
      <Skeleton>
        <CategoryHeader />
      </Skeleton>

      <Box className=" ">
        <Skeleton>
          <Grid container spacing={2}>
            <Grid sx={{ paddingTop: 0, paddingBottom: 0 }} desktop={7} xs={12} laptop={7}>
              <CardRowMain />
              {topmovie.slice(0, 20).map((item) => (
                <CardRow className="border" item={item} key={item.title} />
              ))}
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: {
                  md: "block",
                  xs: "none",
                },
              }}
            ></Divider>
            <Grid sx={{ paddingTop: 0, paddingBottom: 0 }} xs>
              <BoxCategory className="clslistcategory-item2">
                {topmovie.slice(12, 20).map((item) => (
                  <CardRow className="border" item={item} key={item.title} />
                ))}
              </BoxCategory>
            </Grid>
          </Grid>
        </Skeleton>
      </Box>
    </div>
  );
};

export default PopularLoading;
