import MainLayout from "@components/layouts/layout1/hoc/main-layout";
import PopularNews from "@components/layouts/layout1/view/popular/popular";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>{"popular"}</title>
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
      <MainLayout>
        <PopularNews />
      </MainLayout>
    </>
  );
};

export default Index;
