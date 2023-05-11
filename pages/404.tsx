import NotFound from "@components/common/not-found/not-found";
import MainLayout from "@components/layouts/layout1/hoc/main-layout";
import React from "react";

type Props = {};

const PageError = (props: Props) => {
  return (
    <MainLayout isFooter={false}>
      <NotFound />
    </MainLayout>
  );
};

export default PageError;
