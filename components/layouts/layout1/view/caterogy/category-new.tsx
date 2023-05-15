import BoxCategory from "@components/common/box-category/box-category";
import CardRowMain from "@components/common/car-row-main/card-row-main";
import CardColumn from "@components/common/card-column/card-column";
import CardRow from "@components/common/card-row/card-row";

import React, { useEffect } from "react";
import CategoryHeader from "./category-header";
import BorderLine from "@components/common/border-line/border-line";
import CardTitleTop from "@components/common/card-title-top/card-title-top";
import Tab from "../../tab/tab";
import TabColumn from "@components/common/tab/tab";
import BlockContent from "../../tab/content/block-content";
import BlockContentCategory from "../../tab/content/block-content-category";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import { Box, Divider } from "@mui/material";
import CardTextTitle from "@components/common/card-text-title/card-text-title";
import Grid from "@mui/system/Unstable_Grid";
import { getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";
import { useRouter } from "next/router";
interface CategoryNewProps {
  className?: string;
}

const CategoryNew: React.FC<CategoryNewProps> = ({ className = "" }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getListTop({ page: Number(router?.query?.id) || 3 }));

    return () => {};
  }, [router?.query?.id]);

  return (
    <div className={`${className} clslistcategory clscontenthomelayout1`}>
      <CategoryHeader />
      <BorderLine />
      <Box className=" ">
        <Grid container spacing={2}>
          <Grid sx={{ paddingTop: 0, paddingBottom: 0 }} md={7} sm={12}>
            <CardRowMain />
            <Grid container spacing={2} sx={{ paddingTop: 2, paddingLeft: 0, paddingRight: 0 }}>
              {topmovie.length > 0 &&
                topmovie?.slice(4, 7).map((item, index) => {
                  return (
                    <Grid sm={4} key={index}>
                      <CardColumn item={item} key={item.title} isAuthor={true} />
                    </Grid>
                  );
                })}
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
          <Grid sx={{ paddingTop: 0, paddingBottom: 0 }} xs>
            <BoxCategory className="clslistcategory-item2">
              {topmovie.slice(12, 20).map((item) => (
                <CardRow className="border" item={item} key={item.title} isAuthor={true} />
              ))}
            </BoxCategory>
          </Grid>
        </Grid>
      </Box>
      {/* <div className="clslistcategory-content ">
        <div className="clslistcategory-item1">
          <CardRowMain />
          <div className="has_border"></div>
          <div className="clslistcategory-itemsub">
            {topmovie.slice(11, 14).map((item) => (
              <CardColumn item={item} key={item.title} />
            ))}
          </div>
          <BorderLine />
        </div>
        <div className="clslistcategory-item2">
          <BoxCategory>
            {" "}
            {topmovie.slice(14, 20).map((item) => (
              <CardRow item={item} key={item.title} />
            ))}
          </BoxCategory>
        </div>
      </div> */}
      <section className="has_border  clscontenthomelayout1-content  ">
        <div className="clscontenthomelayout1-item3">
          <Box sx={{ paddingTop: 0, paddingBottom: 0, position: "sticky", top: "66px" }}>
            {topmovie.slice(7, 14).map((item, index) => {
              return <CardTitleTop key={index} item={item} />;
            })}
          </Box>
        </div>

        <div className="clscontenthomelayout1-item1">
          <Tab>
            <BlockContentCategory />
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
    </div>
  );
};

export default CategoryNew;
