import React from "react";
import HeaderDetail from "./header/header-detail";
import AuthorAction from "./author-action/author-action";
import ArticlePage from "./article/article";
import ItemView from "@components/common/item-view/item-view";
import ArticleAside from "./article-aside/article-aside";
import CompanyFooter from "@components/company/layout/company-footer";
import Header from "@components/common/header/header";
import BannerAdvertise from "./banner-advertise/banner-adv";
type Props = {};

const DetailNew = (props: Props) => {
  return (
    <div className="containerpage">
      <Header />
      <BannerAdvertise/>
      <HeaderDetail />
      <section className="prefixarticledetail1">
        <ArticlePage />
        <ArticleAside />
      </section>
      <CompanyFooter />
    </div>
  );
};

export default DetailNew;
