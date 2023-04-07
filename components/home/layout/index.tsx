import React from "react";
import HomeContent from "./home-content";
import HomeAds from "./home-ads";
import HomeContentBottom from "./home-cotent-bottom";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <HomeContent />
      <HomeAds />
      <HomeContentBottom />
      <HomeAds />
    </>
  );
};

export default HomePage;
