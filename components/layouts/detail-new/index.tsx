import React from "react";
import HeaderDetail from "./header/header-detail";
import AuthorAction from "./author-action/author-action";
import ArticlePage from "./article/article";
import ItemView from "@components/common/Item-view/item-view";
import ArticleAside from "./article-aside/article-aside";

type Props = {};

const DetailNew = (props: Props) => {
  return (
    <div className="containerpage">
      <HeaderDetail />
      <section className="prefixarticledetail1">
        <ArticlePage />
      <ArticleAside/>
      </section>
    </div>
  );
};

export default DetailNew;
