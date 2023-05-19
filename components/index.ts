import  HeaderCommon  from '@components/common/header-common/header-common';

import  BoxCaterogryColumn  from '@components/common/box-caterogy-column/box-caterogry-column';
import BannerAdvertise from "./common/banner-advertise/banner-adv";
import BorderLine from "./common/border-line/border-line";
import BoxCard from "./common/box-card/box-card";
import BoxCategoryfrom from "./common/box-category/box-category";
import BoxCategoryThreeColumn from "./common/box-caterogy-3-column/box-caterogry-three-column";
import BoxCategoryColumn from "./common/box-caterogy-column/box-caterogry-column";
import BoxPopular from "./common/box-popular/box-popular";
import BoxService from "./common/box-service/box-service";
import BreadCrumb from "./common/bread-crumb/bread-crumb";
import CardRowMain from "./common/car-row-main/card-row-main";
import CarSlide from "./common/car-slide/car-slide";
import CardWithAuthor from "./common/card-author/card-author";
import CardWithAuthorRow from "./common/card-author-row/card-author-row";
import CardColumn from "./common/card-column/card-column";
import CardItemCarousel from "./common/card-item-carousel/card-item-carousel";
import CardRow from "./common/card-row/card-row";
import CardText from "./common/card-text/card-text";
import CardTextTitle from "./common/card-text-title/card-text-title";
import CardTitleTop from "./common/card-title-top/card-title-top";
import CarouselStory from "./common/carousel-story/carousel-story";
import CarouselTwo from "./common/carousel-two/carousel-two";
import CarouselWeather from "./common/carousel-weather/carousel-weather";
import DetailArticle from "./common/detail-article/detail-article";
import ImgItem from "./common/img-item/img-item";
import ItemView from "./common/Item-view/item-view";
import Container from "./component/Container";
import BlockContent from "./layouts/layout1/tab/content/block-content";
import React from 'react';
import { IComponent } from './dynamic-rendering.interfaces';
import MainLayout from './layouts/layout1/hoc-component/main-layout';
import TabContainer from "@components/common/tab-common";
import TabColumn from "@components/common/tab/tab";
import BlockMainWithTab from "./common/block-main-with-tab/block-main-with-tab";
import MainTwoColumn from "./common/main-two-column/main-two-column";
import BoxCategory from "@components/common/box-category/box-category";
import CategoryHeader from './layouts/layout1/view/caterogy/category-header';
export const Components = {
  BlockContent,
  BannerAdvertise,
  BorderLine,
  BoxCard,
  BoxCategoryfrom,
  BoxCategoryThreeColumn,
  BoxCategoryColumn,
  BoxPopular,
  BoxService,
  BreadCrumb,
  CardRowMain,
  CarSlide,
  CardWithAuthor,
  CardWithAuthorRow,
  CardColumn,
  CardItemCarousel,
  CardRow,
  CardText,
  CardTextTitle,
  CardTitleTop,
  CarouselStory,
  CarouselTwo,
  CarouselWeather,
  DetailArticle,
  ImgItem,
  ItemView,
  Container,
  MainLayout,
  TabContainer,
  BlockMainWithTab,
  MainTwoColumn,
  TabColumn,
  BoxCaterogryColumn,
  BoxCategory,
  CategoryHeader,
  HeaderCommon,
};
export  const renderComponent = (block:IComponent) => {
    const { data, type } = block;
     const { items, embeddedView, id, ...rest } = data;
  if (typeof Components[type] !== "undefined") {
    return React.createElement(Components[type] as any, {
      ...rest,id,key: id
    });
  }}
