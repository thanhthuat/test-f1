import React from 'react'
import AuthorAction from '../author-action/author-action';
import ArticleDetail from '../article-detail/article-detail';
import BannerAdvertise from '../banner-advertise/banner-adv';
import AuthorConnect from '../author-connect/author-connect';
import ItemViewNew from '@components/common/item-view-new/item-view-new';
import BoardNews from '../board-news/board-news';
import { databoard } from '../data';
import ClientComment from '../client-comment/client-comment';

type Props = {}

const ArticlePage = (props: Props) => {
  return (
    <article className="prefixarticlecontent">
      <AuthorAction />
      <ArticleDetail />
      <BannerAdvertise />
      <AuthorConnect />
      <BoardNews title="Stock Most Viewed News" arrnew={databoard} />
      <BoardNews title="Stock Most Viewed News" arrnew={databoard} />
      <BannerAdvertise />
      <ClientComment />
      <BannerAdvertise />
    </article>
  );
}

export default ArticlePage;