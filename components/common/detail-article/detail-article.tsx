import React from "react";
import HeaderArticle from "./header-article";
import ContentArticle from "./content-article";
import FooterArticle from "./footer-article";

interface DetailArticleProps{
  className?: string;
  children?:React.ReactNode
}

const DetailArticle:React.FC<DetailArticleProps> = ({className='',children}) => {
  return <article
  className={` ${className} clsarticle`}
  >
    <HeaderArticle/>
    <ContentArticle/>
    {children}
    <FooterArticle/>
  </article>;
};

export default DetailArticle;
