import Image from "next/image";
import React from "react";

import img from "public/image/bg.png";
import Link from "next/link";
import { IresponeMovie } from "lib/models/interface";
import apiConfig from "lib/api/apiConfig";

interface CardTitleTopProps{
  className?:string;
  item:IresponeMovie
}
const CardTitleTop:React.FC<CardTitleTopProps> = ({className ,item}) => {
  return (
    <article className={`${className} clsarticletitletop`} >
      <Link href={"/detail/d"} >
     
      <div className="clsarticletitletop-content">
        <div className="clsarticletitletop-title">
          <h3>{item?.title}</h3>
        </div>
        <div className="clsarticletitletop-body">
          <div className="clsarticletitletop-image">
          <Image src={ item?.backdrop_path ? apiConfig.originalImage(item?.backdrop_path) : img  } alt={item?.title ||'img'}  width="1500" height="750" />
          </div>
          <div className="clsarticletitletop-des">
            <p>
            {item?.overview}
            </p>
          </div>
        </div>
        
      </div>
      </Link>
    </article>
  );
};

export default CardTitleTop;
