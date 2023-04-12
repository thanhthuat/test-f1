import React, { useEffect } from "react";
import HomeContent from "./home-content";
import HomeAds from "./home-ads";
import HomeContentBottom from "./home-cotent-bottom";
import CompanyFooter from "@components/company/layout/company-footer";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import { fetchNews } from "lib/redux/news/news.actions";

type Props = {};

const HomePage = (props: Props) => {
  const { news, status } = useAppSelector((state) => state.news);


  const dispath = useAppDispatch();
  useEffect(() => {
    if (news.length === 0) {
      dispath(fetchNews());
    }
  }, []);

  return (
    <>
      <HomeContent />
      <HomeAds />
      <HomeContentBottom />
      <HomeAds />
      <CompanyFooter />
    </>
  );
};

export default HomePage;
