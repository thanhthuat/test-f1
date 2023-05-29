import React from "react";

type Props = {};

const NewsArticles = (props: Props) => {
  return (
    <div className="clsnewsarticles">
      <div className="clsnewsarticles-content containerlayout1">
        <div className="clsnewsarticles-title">
          <h1 className="clsnewsarticles-title__title">기사제보 </h1>
        </div>
        <div className="clsnewsarticles-block">
          <div className="clsnewsarticles-description">
            <h2 className="clsnewsarticles-description__des">
              <b>독자 여러분의 제보와 의견을 기다립니다.</b>
            </h2>
            <p className="mt-1">
              기사화 되었으면 하는 내용을 보내주시면 검토 후 적극적으로 반영하도록 하겠습니다.
            </p>
            <p className="mt-1">* 제보 내용의 법적 책임은 제보자에게 있습니다. </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScKGAedQBAn4f4AwouEhKBXTt52RfUtx-97jrn32hbPm1Syjg/viewform"
            target="_blank"
          >
            <div className="clsnewsarticles-formgoogle">
              <img src="/layout1/icon-google.png" alt="icon-google" />
              <div className="clsnewsarticles-formgoogle__description">
                <h3>제보하기</h3>
                <p className="mt-1">
                  <b>언론사명 제보</b>
                </p>
                <p className="mt-1">제공 양식에 따라 제보 부탁드립니다.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsArticles;
