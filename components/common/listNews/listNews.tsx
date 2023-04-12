import { TypeNews } from "lib/models/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Prop = {
  isOnlyTittle: boolean;
  data?: TypeNews;
};

interface IListNew {
  isOnlyTittle: boolean;
  data?: TypeNews;
}

const ListNews: React.FC<IListNew> = ({ isOnlyTittle, data }) => {
  
  return (
    <div className="listNews">
      <Link href={`/detail/${data?.news_id}`} className="listNews__title">
        {data?.title}
      </Link>
      {!isOnlyTittle && (
        <div className="listNews__content">
          <div className="listNews__content__figure">
            <Link href={`/detail/${data?.news_id}`}>
              <img alt={data?.title} src={data?.img} className="listNews__content__figure__img" />
            </Link>
          </div>
          <div className="listNews__content__desc">{data?.desc}</div>
        </div>
      )}
    </div>
  );
};

export default ListNews;
