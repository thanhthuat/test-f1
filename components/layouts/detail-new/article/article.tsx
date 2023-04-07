import React from 'react'
import AuthorAction from '../author-action/author-action';
import ArticleDetail from '../article-detail/article-detail';
import BannerAdvertise from '../banner-advertise/banner-adv';
import AuthorConnect from '../author-connect/author-connect';

type Props = {}

const ArticlePage = (props: Props) => {
  return (
      <article className='prefixarticlecontent'>
      <AuthorAction />
      <ArticleDetail />
      <BannerAdvertise />
      <AuthorConnect/>
     </article>
  )
}

export default ArticlePage;