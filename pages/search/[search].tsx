import React from "react";
import { useRouter } from "next/router";
import SearchPage from "@components/layouts/layout1/view/search/search-page";
import MainLayout from "@components/layouts/layout1/hoc-component/main-layout";

type Props = {};

const PageSearch = (props: Props) => {
  return (
    <MainLayout>
      <SearchPage />
    </MainLayout>
  );
};

export default PageSearch;
