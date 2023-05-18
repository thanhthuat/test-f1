import BoxCategory from "@components/common/box-category/box-category";
import CardRowMain from "@components/common/car-row-main/card-row-main";
import CardRow from "@components/common/card-row/card-row";
import React, { useEffect } from "react";
import CategoryHeader from "./popular-header";
import BorderLine from "@components/common/border-line/border-line";
import TabColumn from "@components/common/tab/tab";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import { Box, Divider } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";
import { useRouter } from "next/router";
import PopularLoading from "./popular-sekeleton";
import { createPage } from "@components/dynamic-rendering.service";
import mockResponse from "@components/dynamic-rendering/dynamic-rendering.mock";
import mockResponsePopular from "@components/dynamic-rendering/dynamic-rendering-popular.mock";
interface PopularNewsProps {
  className?: string;
}
const PopularNews: React.FC<PopularNewsProps> = ({ className = "" }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLoading } = useAppSelector((state) => state.commonReducer);
  const { topmovie } = useAppSelector((state) => state.movie);
  useEffect(() => {
    dispatch(getListTop({ page: Number(router?.query?.popular) || 2 }));
    return () => {};
  }, [router?.query?.popular]);
  return (
    <React.Fragment>
      <div className={`${className} clspopular `}>
        {createPage(mockResponsePopular)}
        {/* <CategoryHeader />
        <BorderLine />

        <Box className=" ">
          <Grid container spacing={2}>
            <Grid sx={{ paddingTop: 0, paddingBottom: 0 }} desktop={7} xs={12} laptop={7}>
              <CardRowMain />
              {topmovie.slice(0, 10).map((item) => (
                <CardRow className="border" item={item} key={item.title} isAuthor={true} />
              ))}

              <TabColumn />
              <div className="has_border"></div>
              {topmovie.slice(10, 20).map((item) => (
                <CardRow className="border" item={item} key={item.title} isAuthor={true} />
              ))}
              <TabColumn />
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
              <BoxCategory
                className="clslistcategory-item2"
                sx={{ paddingTop: 0, paddingBottom: 0, position: "sticky", top: "66px" }}
              >
                {topmovie.slice(12, 20).map((item) => (
                  <CardRow className="border" item={item} key={item.title} isAuthor={true} />
                ))}
              </BoxCategory>
            </Grid>
          </Grid>
        </Box> */}
      </div>
    </React.Fragment>
  );
};

export default PopularNews;
