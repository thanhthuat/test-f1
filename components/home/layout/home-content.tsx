import React from "react";
import Banner from "@components/banner/banner";
import Slide from "@components/common/slide/slide";
import ListNews from "@components/common/listNews/listNews";
import SlickCarousel from "@components/common/slickCarousel/slickCarousel";
import Opinion from "@components/opinion/opinion";
import Slick from "@components/slick/slick";
import MostViewsNews from "@components/common/mostViewsNews/mostViewsNews";
import Stock from "@components/stock/stock";
// import ILiveNews from "@components/liveNews/liveNews";
import LiveNews from "@components/common/liveNews/liveNews";
import { useAppSelector } from "@hook/hooks";
import { TypeNews } from "lib/models/interface";
import { opinion } from "lib/api/opinion";
import { stock } from "lib/api/stock";
//  import ILiveNews from "@components/common/liveNews/liveNews";

// Import Swiper styles

type Props = {};

const HomeContent = (props: Props) => {
  const { news, status } = useAppSelector((state) => state.news);

  const tempData = news.filter((item: TypeNews) => item?.news_id > 6);

  return (
    <section className="box-1">
      <article>
        <Banner banner={news[0]} />
        <div className="layout">
          <div className="layout__left">
            <Slide data={news} />
            <div className="layout__left__listItem__top">
              {tempData.length > 0 &&
                tempData.map((item: TypeNews, index: number) => (
                  <ListNews key={index} data={item} isOnlyTittle={index !== 0} />
                ))}
            </div>
            <div className="layout__left__listItem__middle">
              {tempData.length > 0 &&
                tempData.map((item: TypeNews, index: number) => (
                  <ListNews key={index} data={item} isOnlyTittle={index !== 0} />
                ))}
            </div>
            <div className="layout__left__listItem__bottom">
              {tempData.length > 0 &&
                tempData.map((item: TypeNews, index: number) => (
                  <ListNews key={index} data={item} isOnlyTittle={index !== 0} />
                ))}
            </div>
          </div>
          <div className="layout__right">
            <SlickCarousel title="interview" />
            <Opinion data={opinion} />
            <Stock/>
            <SlickCarousel title="Opinion" />
            <SlickCarousel title="Science shot" />
            <Slick />
            <SlickCarousel title="Financial focus" />
            <Slick />
          </div>
        </div>
      </article>

      <aside>
        <Slick />
        <Slick />
        <MostViewsNews />
        <LiveNews />
        <div className="row">
          <Slick />
          <Slick />
        </div>
        <MostViewsNews />
      </aside>
    </section>
  );
};

export default HomeContent;
