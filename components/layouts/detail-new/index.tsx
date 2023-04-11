import React from "react";
import HeaderDetail from "./header/header-detail";
import AuthorAction from "./author-action/author-action";
import ArticlePage from "./article/article";
import ArticleAside from "./article-aside/article-aside";
import CompanyFooter from "@components/company/layout/company-footer";
import Header from "@components/common/header/header";
import BannerAdvertise from "./banner-advertise/banner-adv";
type Props = {
  title:string
};

const DetailNew:React.FC<Props> = ({title} ) => {
  return (
    <div className="containerpage">
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
