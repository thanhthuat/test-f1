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
import { Box, Divider } from "@mui/material";

type Props = {};

const arr = [
  { title: "Giải trí" },
  { title: "Giới sao" },
  { title: "Phim Nhạc" },
  { title: "Thời trang" },
];
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
        {/* <div className="clscontenthomelayout1-content containerlayout1">
          <div className="clscontenthomelayout1-item1">
            <CardRowMain />

            <div className="clscontenthomelayout1-item1__content">
              {topmovie.length > 0 &&
                topmovie?.slice(4, 6).map((item, index) => {
                  return (
                    <div className="itemhome" key={index}>
                      <CardTextTitle item={item} />
                    </div>
                  );
                })}
              <ExpertPerspective />
            </div>
          </div>
          <div className="clscontenthomelayout1-item2">
            <BannerAdvertise />
            <BannerAdvertise />
          </div>
        </div> */}
        <Box className="containerlayout1">
          <Grid container spacing={2}>
            <Grid sx={{ paddingTop: 0 }} xs={9}>
              <CardRowMain />
              <Grid container spacing={2} sx={{ paddingTop: 2 }}>
                {topmovie.length > 0 &&
                  topmovie?.slice(4, 6).map((item, index) => {
                    return (
                      <Grid xs={4}>
                        <CardTextTitle item={item} />
                      </Grid>
                    );
                  })}
                <Divider orientation="vertical" flexItem sx={{ borderRightWidth: "3px" }}></Divider>
                <Grid xs>
                  <ExpertPerspective />
                </Grid>
              </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem></Divider>
            <Grid sx={{ paddingTop: 0 }} xs>
              <BannerAdvertise />
              <BannerAdvertise />
            </Grid>
          </Grid>
        </Box>
      </div>
      <section className="has_border containerlayout1 clscontenthomelayout1-content  ">
        <div className="clscontenthomelayout1-item3">
          {topmovie.length > 0 &&
            topmovie?.slice(0, 4).map((item, index) => {
              return <CardTitleTop item={item} key={index} />;
            })}
          <BannerAdvertise />
        </div>
        <div className="clscontenthomelayout1-item1">
          <Tab>
            {" "}
            <BlockContent>
              <div className="clstabblock-contenttop">
                <div className="clstabblock-right">
                  {topmovie.slice(10, 11).map((item, index) => {
                    return <CardRow item={item} key={index} />;
                  })}
                </div>
                <div className="clstabblock-left">
                  <CardTextTitle />
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

      <BoxCaterogryThreeColumn className="containerlayout1">
        <Grid container>
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
        </Grid>
      </BoxCaterogryThreeColumn>
      <BorderLine className="containerlayout1" />
      <BoxCaterogryThreeColumn className="containerlayout1">
        <Grid container>
          <Grid xs={6}>
            <BoxCaterogryColumnHeader item={arr} />
            <CardColumn item={topmovie[10]} />
          </Grid>
          <Grid xs={3}>
            <BoxCaterogryColumnHeader item={arr} />
            <CardColumn item={topmovie[10]} isDes={false} />
            <CardColumn item={topmovie[13]} isDes={false} />
          </Grid>
          <Grid xs={3}>
            <CardRow item={topmovie[18]} isdes={false} />
            <CardRow item={topmovie[15]} isdes={false} />
            <CardRow item={topmovie[11]} isdes={false} />
            <CardRow item={topmovie[19]} isdes={false} />
          </Grid>
        </Grid>{" "}
      </BoxCaterogryThreeColumn>

      <BoxCaterogryColumn className="containerlayout1">
        <Grid container>
          <Grid xs={4}>
            <CardColumn item={topmovie[18]} />
            <div className="has_border"></div>
            <CardTextTitle />
          </Grid>
          <Grid xs={4}>
            <CardColumn item={topmovie[19]} />
            <div className="has_border"></div>
            <CardTextTitle />
          </Grid>
          <Grid xs={4}>
            <CardColumn item={topmovie[1]} />
            <div className="has_border"></div>
            <CardTextTitle />
          </Grid>
        </Grid>{" "}
      </BoxCaterogryColumn>
      <BorderLine className="containerlayout1" />
      <CarouselTwo className="containerlayout1" />
      <BorderLine className="containerlayout1" />

      <BoxCaterogryColumn className="containerlayout1">
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
        </Grid>{" "}
      </BoxCaterogryColumn>

      {/* <div className="clscontenthomelayout1">
        <div className="clscontenthomelayout1-content containerlayout1">
          <div className="clscontenthomelayout1-item1">
          

            {array.map((item, index) => {
              return <CardRow item={item} key={index} />;
            })}
          </div>
         
          <div className="clscontenthomelayout1-item3">
            <BoxPopular />
          </div>
        </div>
      </div>
      <div className="clscontenthomelayout1">
        <div className="clscontenthomelayout1-content containerlayout1">
          <div className="clscontenthomelayout1-item4">
           
            <CarouselTwo />
          </div>

        
        </div>
      </div>
      <div className="clscontenthomelayout1">
        <div className="clscontenthomelayout1-content containerlayout1">
          <div className="clscontenthomelayout1-item4">
         
            {array.map((item, index) => {
              return <CardRow item={item} key={index} />;
            })}
          </div>

          <div className="clscontenthomelayout1-item3">
            <BoxPopular isImg={true} />
            <BoxPopular isImg={true} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ContentHome;
