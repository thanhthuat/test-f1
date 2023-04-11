import DetailNew from "@components/layouts/detail-new";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { data } from "./../../constants/data";

type Props = {
  data: any[];
};

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
        <meta property="og:image" content="https://picsum.photos/200/300"></meta>
      </Head>
      <DetailNew title={props.data[0].name} />
    </>
  );
};
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { params } = context;
//   const axios = require("axios");
//   const data = await axios.get(
//     `https://jsonplaceholder.typicode.com/comments?postId=${params?.id}`
//   );
//   context.res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");

//   return {
//     props: {
//       data: data.data,
//     },
    
//   };
// };

export const   getStaticProps:GetStaticProps = async(context) =>{
  const { params } = context;
  const axios = require("axios");
  const data = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${params?.id}`
  );

  return {
    props: {
      data: data.data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: true,
  };
}
export default Index;
