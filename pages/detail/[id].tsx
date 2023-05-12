import DetailArticle from "@components/common/detail-article/detail-article";
import MainLayout from "@components/layouts/layout1/hoc-component/main-layout";
import DetailNew from "@components/layouts/layout1/view/detail-new/detail-new";
import Head from "next/head";
import React from "react";

type Props = {};

const Index = (props: Props) => {
  return (
    <>
      <Head>
        <title>{"new page"}</title>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={" this is detail page"} />
        <meta property="og:title" content={"new page"} />
        <meta property="og:description" content={" this is content of page"} />
        <meta
          property="og:image"
          content="https://cdn-static.famiroom.com/static/upload/large/2021-04/16/4495c172-a85f-44ea-a4a9-1b692cca3327.jpg"
        ></meta>
      </Head>
      <MainLayout className="bg-detail-new">
        <DetailNew />
      </MainLayout>
    </>
  );
};

export default Index;
