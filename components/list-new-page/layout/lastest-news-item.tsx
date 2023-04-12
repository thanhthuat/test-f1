import Image from "next/image";
import React, { useEffect, useState } from "react";

import titleIconDate from "public/image/icon/date-icon.png";
import Link from "next/link";
import { IresponeMovie } from "lib/models/interface";
import apiConfig from "apis/apiConfig";

interface ILastestNewsItemProps {
  item: IresponeMovie;
};

const LastestNewsItem:React.FC<ILastestNewsItemProps> = ({item}) => {
  // console.log("🚀 ~ file: lastest-news-item.tsx:13 ~ item:", item)
  // adult: false;
  // backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg";
  // genre_ids: (2)[(18, 80)];
  // id: 238;
  // original_language: "en";
  // original_title: "The Godfather";
  // overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.";
  // popularity: 107.23;
  // poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg";
  // release_date: "1972-03-14";
  // title: "The Godfather";
  // video: false;
  // vote_average: 8.7;
  // vote_count: 17725;
  const [isHour, setIshour] = useState(true);

  return (
    <div className="LastestNewsItem">
      <div className="figure-img">
        <Link href={`/detail/${item.id}`}>
          <img src={apiConfig.originalImage(item.backdrop_path)} alt={item.title} />
        </Link>
      </div>
      <div className="content">
        <div className="title">
          <Link href={`/detail/${item.id}`}>{item.original_title}</Link>
        </div>
        <div className="desc">{item.overview}</div>
        <div className="date-creator">
          <div className="date">
            {isHour && <Image width={15} height={15} src={titleIconDate} alt="fsdf" />}
            <span>{item.vote_average} hours ago</span>
          </div>
          <div className="creator">
            <Link href="#">{item.title}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastestNewsItem;
