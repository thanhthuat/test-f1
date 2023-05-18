import React from "react";
import MainLayout from "../../hoc-component/main-layout";
import ContentHome from "../../content-home/content-home";
import { createPage } from "@components/dynamic-rendering.service";
import mockResponse from "@components/dynamic-rendering/dynamic-rendering.mock";

type Props = {};

function HomeLayout1({}: Props) {
  return (
    <>
      {createPage(mockResponse)}

      {/* <MainLayout>
        <ContentHome />
      </MainLayout> */}
    </>
  );
}

export default HomeLayout1;
