import React from "react";

import BannerAdvertise from "../banner-advertise/banner-adv";
import { useAppSelector } from "@hook/hooks";
import Tab from "@components/layouts/layout1/tab/tab";
interface MainTwoColumnProps {
  children: React.ReactNode;
}

const MainTwoColumn: React.FC<MainTwoColumnProps> = ({ children }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <section className="has_border clscontenthomelayout1-content  ">
      <div className="clscontenthomelayout1-item3">
        {/* {topmovie.length > 0 &&
          topmovie?.slice(0, 8).map((item, index) => {
            return <CardTitleTop item={item} key={index} />;
          })} */}
        {(children as React.ReactNode[])?.length > 0 &&
          topmovie?.slice(0, 8).map((item) => {
            return React.cloneElement((children as any[])[0], {
              item: { ...item },
            });
          })}
        <BannerAdvertise className="mt-1" />
      </div>
      <div className="clscontenthomelayout1-item1">
        <Tab>
          {(children as React.ReactNode[])?.length > 1 && (children as React.ReactNode[])[1]}
        </Tab>

        {(children as React.ReactNode[])?.length > 2 && (children as React.ReactNode[])[2]}
        <div className="has_border"></div>
        <Tab>
          {(children as React.ReactNode[])?.length > 1 && (children as React.ReactNode[])[1]}
        </Tab>

        {(children as React.ReactNode[])?.length > 2 && (children as React.ReactNode[])[2]}
      </div>
    </section>
  );
};

export default MainTwoColumn;
