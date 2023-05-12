import React from "react";
import ContentHome from "../../content-home/content-home";
import MainLayout from "../../hoc/main-layout";

type Props = {};

function HomeLayout1({}: Props) {
  return (
    <MainLayout>
      <ContentHome />
    </MainLayout>
  );
}

export default HomeLayout1;
