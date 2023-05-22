import React, { useEffect } from "react";
import MainLayout from "../../hoc-component/main-layout";
import ContentHome from "../../content-home/content-home";
import { createPage } from "@components/dynamic-rendering.service";
import mockResponse from "@components/dynamic-rendering/dynamic-rendering.mock";
import { useRouter } from "next/router";
import { getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";
import { useAppDispatch } from "@hook/hooks";

type Props = {};

function HomeLayout1({}: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getListTop({ page: 1 }));

    return () => {};
  }, []);
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
