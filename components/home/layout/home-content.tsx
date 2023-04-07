import React from "react";
import Banner from "@components/banner/banner";
import Slide from "@components/common/slide/slide";
import ListNews from "@components/common/listNews/listNews";
import SlickCarousel from "@components/common/slickCarousel/slickCarousel";
import Opinion from "@components/opinion/opinion";
import Slick from "@components/slick/slick";
import MostViewsNews from "@components/common/mostViewsNews/mostViewsNews";
import Stock from "@components/stock/stock";
import ILiveNews from "@components/liveNews/liveNews";

type Props = {};

const HomeContent = (props: Props) => {
  return (
    <section className="box-1">
      <article>
        <Banner />
        <div className="layout">
          <div className="layout__left">
            <Slide />
            <div className="layout__left__listItem__top">
              <ListNews isOnlyTittle={false} />
              <ListNews isOnlyTittle={false} />
              <ListNews isOnlyTittle={true} />
              <ListNews isOnlyTittle={true} />
              <ListNews isOnlyTittle={true} />
              <ListNews isOnlyTittle={true} />
            </div>
            <div className="layout__left__listItem__middle">
              <ListNews isOnlyTittle={false} />
              <ListNews isOnlyTittle={true} />
              <ListNews isOnlyTittle={true} />
              <ListNews isOnlyTittle={true} />
              <ListNews isOnlyTittle={true} />
              <ListNews isOnlyTittle={true} />
            </div>
            <div className="layout__left__listItem__bottom">
              <ListNews isOnlyTittle={false} />
              <ListNews isOnlyTittle={true} />
              <ListNews isOnlyTittle={true} />
              <ListNews isOnlyTittle={true} />
              <ListNews isOnlyTittle={true} />
              <ListNews isOnlyTittle={true} />
            </div>
          </div>
          <div className="layout__right">
            <SlickCarousel />
            <Opinion />
            <Stock />
            <SlickCarousel />
            <SlickCarousel />
            <Slick />
          </div>
        </div>
      </article>

      <aside>
        <Slick />
        <Slick />
        <MostViewsNews />
        <ILiveNews />
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
