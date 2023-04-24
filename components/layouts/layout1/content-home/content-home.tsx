import React, { useEffect } from "react";
import CarouselStory from "../../../common/carousel-story/carousel-story";
import CardColumn from "../../../common/card-column/card-column";
import CardRow from "../../../common/card-row/card-row";
import { title } from "process";
import BoxCategory from "../../../common/box-category/box-category";
import CardRowMain from "../../../common/car-row-main/card-row-main";
import { BoxPopular } from "../../../common/box-popular";
import CarouselTwo from "../../../common/carosel-tow/carousel-two";
import ExpertPerspective from "../../../common/expert-perspective/expert-perspective";
import CardTitleTop from "../../../common/card-title-top/card-title-top";
import Tab from "../tab/tab";
import CardTextTitle from "@components/common/card-text-title/card-text-title";
import TabColumn from "@components/common/tab/tab";
import BoxCaterogryThreeColumn from "@components/common/box-caterogy-3-column/box-caterogry-three-column";
import BoxCaterogryColumn from "@components/common/box-caterogy-column/box-caterogry-column";
import FooterLayout1 from "../footer/footer";
import BlockContent from "../tab/content/block-content";
import BorderLine from "@components/common/border-line/border-line";
import BannerAdvertise from "@components/common/banner-advertise/banner-adv";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import Grid from "@mui/system/Unstable_Grid";
import { useRouter } from "next/router";
import { getDetailNew, getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";
import BoxCaterogryColumnHeader from "@components/common/box-caterogy-column/box-caterogry-column-header";
import CardText from "@components/common/card-text/card-text";
import Grid2 from "@mui/material/Unstable_Grid2";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Divider } from "@mui/material";

type Props = {};

const ContentHome = (props: Props) => {
  const dispatch = useAppDispatch();
  const { topmovie } = useAppSelector((state) => state.movie);
  const router = useRouter();
  useEffect(() => {
    if (topmovie.length === 0) {
      dispatch(getListTop({ page: 1 }));
    }

    return () => {};
  }, []);
  return (
    <>
      <div className="clscontenthomelayout1 pt-2">
        <Box className="">
          <Grid container spacing={2}>
            <Grid sx={{ paddingTop: 0, paddingBottom: 0 }} md={9} sm={12}>
              <CardRowMain />
              <Grid container spacing={2} sx={{ paddingTop: 2 }}>
                {topmovie.length > 0 &&
                  topmovie?.slice(4, 6).map((item, index) => {
                    return (
                      <Grid sm={4}>
                        <CardTextTitle item={item} />
                      </Grid>
                    );
                  })}
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    borderRightWidth: "3px",
                    display: {
                      md: "block",
                      xs: "none",
                    },
                  }}
                ></Divider>
                <Grid xs>
                  <ExpertPerspective />
                </Grid>
              </Grid>
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
              <BannerAdvertise />
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
          <BannerAdvertise />
        </div>
        <div className="clscontenthomelayout1-item1">
          <Tab>
            {" "}
            <BlockContent>
            
            </BlockContent>
          </Tab>

          <TabColumn />
          <div className="has_border"></div>
          <Tab>
            {" "}
            <BlockContent />
          </Tab>

          <TabColumn />
        </div>
      </section>

      <BoxCaterogryThreeColumn>
        <Grid2 container spacing={1}>
          <Grid xs={12} tablet={6} laptop={6}>
            <CardColumn item={topmovie[10]} />
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
            <CardColumn item={topmovie[11]} />
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
                  item={topmovie[19]}
                  isdes={false}
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
            <CardColumn item={topmovie[18]} />
            <div className="has_border"></div>
            <CardTextTitle />
          </Grid>
          <Grid tablet={6} tablet1={4}>
            <CardColumn item={topmovie[19]} />
            <div className="has_border"></div>
            <CardTextTitle />
          </Grid>
          <Grid tablet={6} tablet1={4}>
            <CardColumn item={topmovie[1]} />
            <div className="has_border"></div>
            <CardTextTitle />
          </Grid>
        </Grid>
      </BoxCaterogryColumn>
      <BorderLine />
      <CarouselTwo listItem={topmovie?.slice(0, 8)} />
      <BorderLine />

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
