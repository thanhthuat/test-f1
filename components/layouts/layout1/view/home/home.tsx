import React from "react";
import HeaderTop from "../../header-top/header";
import HeaderLayout1 from "../../header/header-layout1";
import ContentHome from "../../content-home/content-home";
import MainLayout from "../../HOC/main-layout";

type Props = {};

function HomeLayout1({}: Props) {
  return (
    <MainLayout>
      <ContentHome />
    </MainLayout>
  );
}

export default HomeLayout1;
