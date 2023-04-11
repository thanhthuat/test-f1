import React, { useEffect } from "react";
import HeaderDetail from "./header/header-detail";
import AuthorAction from "./author-action/author-action";
import ArticlePage from "./article/article";
import ArticleAside from "./article-aside/article-aside";
import CompanyFooter from "@components/company/layout/company-footer";
import Header from "@components/common/header/header";
import BannerAdvertise from "./banner-advertise/banner-adv";
import { useAppDispatch } from "./../../../hooks/hooks";
import { getListTop } from "redux/get-list-top-menu/get-list-top.action";
import { useAppSelector } from '@hook/hooks';
import apiConfig from "apis/apiConfig";
type Props = {
  title: string;
};

const DetailNew: React.FC<Props> = ({ title }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  console.log("🚀 ~ file: index.tsx:18 ~ topmovie:", topmovie)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getListTop());
    return () => {};
  }, []);
 

 const background = topmovie.length >0 && apiConfig.originalImage(
   topmovie[0].backdrop_path ? topmovie[0].backdrop_path : topmovie[0].poster_path
 ) || '';
  return (
    <div className="containerpage">
      <img src={background} alt ="dd" style={{width:'100%'}} />
      <Header />
      <BannerAdvertise />
      <HeaderDetail title={title} />
      <section className="prefixarticledetail1">
        <ArticlePage />
        <ArticleAside />
      </section>
      <CompanyFooter />
    </div>
  );
};

export default DetailNew;
