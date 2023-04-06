import React from "react";
import HeaderDetail from "./header/header-detail";
import AuthorAction from "./author-action/author-action";
import ArticlePage from "./article/article";
import ItemView from "@components/common/Item-view/item-view";

type Props = {};

const DetailNew = (props: Props) => {
  return (
    <div className="containerpage">
      <HeaderDetail />
      <section className="prefixarticledetail1">
        <ArticlePage />
      <ItemView/>
      </section>
    </div>
  );
};

export default DetailNew;
