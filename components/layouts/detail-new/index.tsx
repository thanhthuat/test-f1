import React, { useEffect } from "react";
import HeaderDetail from "./header/header-detail";
import AuthorAction from "./author-action/author-action";
import ArticlePage from "./article/article";
import ArticleAside from "./article-aside/article-aside";
import CompanyFooter from "@components/company/layout/company-footer";
import BannerAdvertise from "./banner-advertise/banner-adv";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import { getDetailNew, getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";
import { useRouter } from "next/router";
type Props = {};

const DetailNew = (props: Props) => {
 
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (router.query?.id) {
      dispatch(getDetailNew({ id: (router.query?.id as string) || "" }));
    }

    return () => {};
  }, [router.query?.id]);
  return (
    <div className="containerpage">
      <BannerAdvertise />
      <HeaderDetail />
      <section className="prefixarticledetail1">
        <ArticlePage />
        <ArticleAside />
      </section>
      <CompanyFooter />
    </div>
  );
};

export default DetailNew;
