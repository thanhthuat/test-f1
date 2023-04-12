import Header from "@components/common/header/header";
import React, { useEffect } from "react";
import HotNews from "./hot-news";
import LastestNews from "./lastest-news";
import CompanyFooter from "@components/company/layout/company-footer";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import { getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";

type Props = {};

const ListNewsPage = (props: Props) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (topmovie.length === 0) {
      dispatch(getListTop());
    }

    return () => {};
  }, []);

  return (
    <main className="container">
      <Header />
      {/* <HotNews /> */}
      <LastestNews />
      <CompanyFooter />
    </main>
  );
};

export default ListNewsPage;
