import BoxCategory from "@components/common/box-category/box-category";
import CardRowMain from "@components/common/car-row-main/card-row-main";
import CardColumn from "@components/common/card-column/card-column";
import CardRow from "@components/common/card-row/card-row";

import React, { useEffect } from "react";

import BorderLine from "@components/common/border-line/border-line";
import CardTitleTop from "@components/common/card-title-top/card-title-top";

import TabColumn from "@components/common/tab/tab";

import { useAppDispatch, useAppSelector } from "@hook/hooks";
import { Box, Divider } from "@mui/material";
import CardTextTitle from "@components/common/card-text-title/card-text-title";
import Grid from "@mui/system/Unstable_Grid";
import Tab from "../../tab/tab";
import BlockContentCategory from "../../tab/content/block-content-category";
import BlockContent from "../../tab/content/block-content";
import { getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";
import { useRouter } from "next/router";
import HeaderSearchPage from "./header-search-page";
interface SearchPageProps {
  className?: string;
}

const SearchPage: React.FC<SearchPageProps> = ({ className = "" }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isLoading } = useAppSelector((state) => state.commonReducer);
  const { topmovie } = useAppSelector((state) => state.searchListMovieSlice);

  const handleRender = (data: any[]) => {
    if (data.length == 0) {
      return (
        <p>
          <span>
            ‘world’
            <b> {router?.query?.search}</b> 에 대한 검색결과가 없습니다.
          </span>
          <ul className="list-style">
            <li> 단어의 철자가 정확한지 확인해 보세요.</li>
            <li>한글을 영어로 혹은 영어를 한글로 입력했는지 확인해 보세요.</li>
            <li>검색어의 단어 수를 줄이거나, 보다 일반적인 검색어로 다시 검색해 보세요.</li>
            <li>두 단어 이상의 검색어인 경우, 띄어쓰기를 확인해 보세요.</li>
          </ul>
        </p>
      );
    } else {
      return data.map((item, index) => (
        <CardRow className="border" item={item} key={`${index}-${item.title}`} />
      ));
    }
  };
  useEffect(() => {
    dispatch(getListTop({ page: Number(router?.query?.popular) || 2 }));
    return () => {};
  }, [router?.query?.popular]);
  return (
    <React.Fragment>
      <div className={`${className} clspopular `}>
        <Box sx={{ paddingTop: 1 }}>
          <Grid container spacing={2}>
            <Grid sx={{ paddingTop: 0, paddingBottom: 0 }} desktop={8} xs={12} laptop={8}>
              <HeaderSearchPage />
              {handleRender(topmovie)}
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
          </Grid>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default SearchPage;
