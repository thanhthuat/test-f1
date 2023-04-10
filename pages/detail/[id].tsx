import DetailNew from "@components/layouts/detail-new";
import Head from "next/head";
import React from "react";

type Props = {};

const Index = (props: Props) => {
  return (
    <>
      <Head>
        <title>
          {"Comparing and recommending car and indemnity insurance on the 'Naver Kakao' platform"}
        </title>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={" https://demo123-gyexk7cn4-thanhthuat.vercel.app/"} />
        {/* <meta property="og:title" content={"new page"} /> */}
        <link rel="icon" href="/icon.svg" />
        <meta
          property="og:description"
          content={`Trial service starting at the end of the year at the earliest
Limited to CM products that can be handled Limiting
the platform’s superior position`}
        />
        <meta
          property="og:image"
          content="https://biz.chosun.com/resizer/xhwfVeiwbBzLDap9hErQsP8cFiE=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/DJN5OC457RCQDEBRKQEMDDXJF4.jpg"
        ></meta>
      </Head>
      <DetailNew />
    </>
  );
};

export default Index;
