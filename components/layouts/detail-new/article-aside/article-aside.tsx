import ItemView from "@components/common/Item-view/item-view";
import React from "react";
import BannerAdvertise from "../banner-advertise/banner-adv";

type Props = {};
const arr = [
  "SK Hynix, a 'deficit swamp', has to pay hundreds of billions of won for patent monsters... It is inevitable to use technology to manufacture DRAM",
  "Samsung Galaxy S23 sales record march... Popular all over the world",
  "[Market View] KOSPI plunged more than 1.4%... Foreign futures selling at highest level since 2010",
  "Koo Young-bae, chairman of Q10, took over WeMakePrice following Ticket Monster and Interpark Commerce",
  "Coupang gives strength to 'delivery'... CJ Logistics and Hanjin 'counterattack' with bio and fashion logistics",
  "Non-face-to-face treatment that would be illegal in May... Start-up 'Baldongdong'",
  "SK Hynix, a 'deficit swamp', has to pay hundreds of billions of won for patent monsters... It is inevitable to use technology to manufacture DRAM",
  "Samsung Galaxy S23 sales record march... Popular all over the world",
  "[Market View] KOSPI plunged more than 1.4%... Foreign futures selling at highest level since 2010",
  "Koo Young-bae, chairman of Q10, took over WeMakePrice following Ticket Monster and Interpark Commerce",
  "Coupang gives strength to 'delivery'... CJ Logistics and Hanjin 'counterattack' with bio and fashion logistics",
  "Non-face-to-face treatment that would be illegal in May... Start-up 'Baldongdong'",
];
const ArticleAside = (props: Props) => {
  return (
    <aside className="prefixarticleaside">
      <h3>most viewed news</h3>
      {arr.map((item, index) => (
        <ItemView item={item} key={`1-${index}`} index={index} />
      ))}
      <BannerAdvertise/>
      <h3>most viewed news</h3>
      {arr.map((item, index) => (
        <ItemView item={item} key={`1-${index}`} index={index} hasImg={true} />
      ))}
    </aside>
  );
};

export default ArticleAside;
