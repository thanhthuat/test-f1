import React, { useEffect } from "react";
import CardColumn from "../../../common/card-column/card-column";
import CardRow from "../../../common/card-row/card-row";
import BoxCategory from "../../../common/box-category/box-category";
import CardRowMain from "../../../common/car-row-main/card-row-main";
import CarouselTwo from "../../../common/carousel-two/carousel-two";
import CardTitleTop from "../../../common/card-title-top/card-title-top";
import Tab from "../tab/tab";
import CardTextTitle from "@components/common/card-text-title/card-text-title";
import TabColumn from "@components/common/tab/tab";
import BoxCaterogryThreeColumn from "@components/common/box-caterogy-3-column/box-caterogry-three-column";
import BoxCaterogryColumn from "@components/common/box-caterogy-column/box-caterogry-column";
import BlockContent from "../tab/content/block-content";
import BorderLine from "@components/common/border-line/border-line";
import BannerAdvertise from "@components/common/banner-advertise/banner-adv";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import Grid from "@mui/system/Unstable_Grid";
import { useRouter } from "next/router";
import { getDetailNew, getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";
import Grid2 from "@mui/material/Unstable_Grid2";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Divider, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabContainer from "@components/common/tab-common";
import RenderCard from "@components/common/render-card/render-card";
import { createPage } from "@components/dynamic-rendering.service";
import mockResponse from "@components/dynamic-rendering/dynamic-rendering.mock";
type Props = {};

const arrayTabs = [{ title: "News" }, { title: "LastNews" }];

const ContentHome = (props: Props) => {
  const dispatch = useAppDispatch();
  const { topmovie } = useAppSelector((state) => state.movie);
  const router = useRouter();
  useEffect(() => {
    dispatch(getListTop({ page: 1 }));

    return () => {};
  }, []);

  return (
    <>
      <div className="clscontenthomelayout1 pt-2">
        <Box className="">
          <Grid container spacing={2}>
            <Grid sx={{ paddingTop: 0, paddingBottom: 0 }} md={8} sm={12}>
              <CardRowMain />
              <div className="layoutgrid-3" style={{ margin: "20px 0px" }}>
                {topmovie?.slice(4, 7).map((item) => {
                  return <CardTextTitle item={item} key={`card -title-${item.title}`} />;
                })}
              </div>
            
              {/* {createPage(mockResponse)} */}
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
            <Grid sx={{ paddingTop: 0 }} xs>
              <BoxCategory className="clslistcategory-item2">
                {/* <TabContainer
                  arrayTabs={arrayTabs}
                  arrayTabPanel={[
                    {
                      children: <RenderCard arr={topmovie.slice(12, 17)} />,
                    },
                    {
                      children: <RenderCard arr={topmovie.slice(4, 9)} />,
                    },
                  ]}
                ></TabContainer> */}

                {/* {topmovie.slice(12, 20).map((item) => (
                  <CardRow
                    className="border"
                    item={item}
                    key={item.title}
                    isAuthor={true}
                    sx={{ alignItems: "center" }}
                    // isImg={false}
                  />
                ))} */}
              </BoxCategory>
            </Grid>
          </Grid>
        </Box>
      </div>
      <section className="has_border clscontenthomelayout1-content  ">
        <div className="clscontenthomelayout1-item3">
          {topmovie.length > 0 &&
            topmovie?.slice(0, 8).map((item, index) => {
              return <CardTitleTop item={item} key={index} />;
            })}
          <BannerAdvertise className="mt-1" />
        </div>
        <div className="clscontenthomelayout1-item1">
          <Tab>
            <BlockContent></BlockContent>
          </Tab>

          <TabColumn />
          <div className="has_border"></div>
          <Tab>
            <BlockContent />
          </Tab>

          <TabColumn />
        </div>
      </section>

      <BoxCaterogryThreeColumn>
        <Grid2 container spacing={1}>
          <Grid xs={12} tablet={6} laptop={6}>
            <CardColumn item={topmovie[10]} isAuthor={true} />
          </Grid>
          <Grid xs={12} tablet={6} laptop={3}>
            <CardColumn isDes={false} item={topmovie[16]} />
            <CardColumn item={topmovie[13]} isDes={false} />
          </Grid>
          <Grid xs={12} laptop={3}>
            <Grid container rowSpacing={1}>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[18]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[17]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[16]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[15]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[16]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[17]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid2>

        {/* <Grid container>
          <Grid xs={6}>
            <CardColumn item={topmovie[10]} />
          </Grid>
          <Grid xs={3}>
            <CardColumn isDes={false} item={topmovie[16]} />
            <CardColumn item={topmovie[13]} isDes={false} />
          </Grid>
          <Grid xs={3}>
            <CardRow item={topmovie[18]} isdes={false} />
            <CardRow item={topmovie[15]} isdes={false} />
            <CardRow item={topmovie[11]} isdes={false} />
            <CardRow item={topmovie[19]} isdes={false} />
          </Grid>
        </Grid> */}
      </BoxCaterogryThreeColumn>
      <BorderLine />
      <BoxCaterogryThreeColumn>
        <Grid2 container spacing={1}>
          <Grid xs={12} tablet={6} laptop={6}>
            <CardColumn item={topmovie[11]} isAuthor={true} />
          </Grid>
          <Grid xs={12} tablet={6} laptop={3}>
            <CardColumn isDes={false} item={topmovie[12]} />
            <CardColumn item={topmovie[14]} isDes={false} />
          </Grid>
          <Grid xs={12} laptop={3}>
            <Grid container rowSpacing={1} columnSpacing={1}>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[15]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[16]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[17]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                    textAlign: "right",
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[19]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[11]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} tablet={6} laptop={12}>
                <CardRow
                  item={topmovie[10]}
                  isdes={false}
                  className="iscolumn"
                  sx={{
                    flexDirection: {
                      laptop: "row-reverse",
                      tablet: "row",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid2>
      </BoxCaterogryThreeColumn>

      <BoxCaterogryColumn>
        <Grid container spacing={1}>
          <Grid tablet={6} tablet1={4}>
            <CardColumn item={topmovie[18]} isAuthor={true} />
            <div className="has_border"></div>
            <CardTextTitle />
          </Grid>
          <Grid tablet={6} tablet1={4}>
            <CardColumn item={topmovie[19]} isAuthor={true} />
            <div className="has_border"></div>
            <CardTextTitle />
          </Grid>
          <Grid tablet={6} tablet1={4}>
            <CardColumn item={topmovie[1]} isAuthor={true} />
            <div className="has_border"></div>
            <CardTextTitle />
          </Grid>
        </Grid>
      </BoxCaterogryColumn>
      <BorderLine />

      <CarouselTwo listItem={topmovie?.slice(0, 8)} />

      {/* <BoxCaterogryColumn >
        <Grid container>
          <Grid xs={6}>
            <CardColumn item={topmovie[18]} />
          </Grid>
          <Grid xs={3}>
            <CardColumn isDes={false} item={topmovie[16]} />
            <CardColumn item={topmovie[13]} isDes={false} />
          </Grid>
          <Grid xs={3}>
            <CardRow item={topmovie[18]} isdes={false} />
            <CardRow item={topmovie[15]} isdes={false} />
            <CardRow item={topmovie[11]} isdes={false} />
            <CardRow item={topmovie[19]} isdes={false} />
          </Grid>
        </Grid>
      </BoxCaterogryColumn> */}
    </>
  );
};

export default ContentHome;
