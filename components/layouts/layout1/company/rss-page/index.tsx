import React from "react";
import MainlayoutCompany from "../hoc/mainlayout-company";
import RssPage from "./rss-page";

type Props = {};

const RssPageView = (props: Props) => {
  return (
    <MainlayoutCompany>
      <RssPage />
    </MainlayoutCompany>
  );
};

export default RssPageView;
