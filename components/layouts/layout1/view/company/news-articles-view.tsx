import React from "react";
import MainlayoutCompany from "../../company/hoc/mainlayout-company";
import NewsArticles from "../../company/advertisement/news-articles";

type Props = {};

const NewsArticlesView = (props: Props) => {
  return (
    <MainlayoutCompany>
      <NewsArticles />
    </MainlayoutCompany>
  );
};

export default NewsArticlesView;
