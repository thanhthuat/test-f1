import React from "react";
import MainLayout from "../../hoc-component/main-layout";
import ContentHome from "../../content-home/content-home";

type Props = {};

function HomeLayout1({}: Props) {
  return (
    <MainLayout>
      <ContentHome />
    </MainLayout>
  );
}

export default HomeLayout1;
