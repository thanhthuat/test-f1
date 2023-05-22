import React from "react";
import HeaderArticle from "./header-article";
import ContentArticle from "./content-article";
import FooterArticle from "./footer-article";
import ClientComment from "@components/layouts/detail-new/client-comment/client-comment";

interface DetailArticleProps{
  className?: string;
  children?:React.ReactNode
}

const DetailArticle:React.FC<DetailArticleProps> = ({className='',children}) => {
  return (
    <article className={` ${className} clsarticle`}>
      <HeaderArticle />
      <ContentArticle />
      {children}

      <FooterArticle />
      <ClientComment />
    </article>
  );
};

export default DetailArticle;
