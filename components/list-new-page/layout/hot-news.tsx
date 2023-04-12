import Banner from "@components/banner/banner";
import ListNews from "@components/common/listNews/listNews";
import MostViewsNews from "@components/common/mostViewsNews/mostViewsNews";
import SideNews from "@components/common/side-news/side-news";
import React from "react";

type Props = {};

const HotNews = (props: Props) => {
  return (
    <>
      {" "}
      <section className="box-1">
        <article>
          <Banner />

          <div className="layout">
            <div className="layout__left">
              <ListNews isOnlyTittle={false} />
              <ListNews isOnlyTittle={false} />
              <ListNews isOnlyTittle={true} />
              <ListNews isOnlyTittle={true} />
            </div>
            <div className="layout__right">
              <SideNews />
            </div>
          </div>
        </article>

        <aside>
          <MostViewsNews />
        </aside>
      </section>
    </>
  );
};

export default HotNews;
