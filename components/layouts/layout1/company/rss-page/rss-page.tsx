import React from "react";
import RssPageXml from "./rss-page-xml";
import { dataRss } from "./data";

type Props = {};

const RssPage = (props: Props) => {
  return (
    <div className="clsrsspage">
      <div className="clsrsspage-content containerlayout1">
        <div className="clsrsspage-title">
          <h2 className="clsrsspage-title__title">PDF지면보기</h2>
        </div>
        <div className="clsrsspage-description">
          {dataRss.map((item) => {
            return <p className="mt-1">{item}</p>;
          })}
        </div>
        <RssPageXml />
      </div>
    </div>
  );
};

export default RssPage;
