import Image from "next/image";
import React from "react";
import img from "public/image/bg-carousel.jpg";
import Link from "next/link";
import { IresponeMovie } from "lib/models/interface";
import apiConfig from "lib/api/apiConfig";
interface CardColumnProps{
  classname?:string ;
  isDes?:boolean;
  item: IresponeMovie;
}

const CardColumn:React.FC<CardColumnProps> = ({classname='',isDes=true ,item}) => {
  return (
    <div className={`${classname} clscardcolumn`}>
      <Link href={`/detail/${item?.title}`}>
      <div className="clscardcolumn-content">
        <div className="clscardcolumn-img">
        <Image src={ item?.backdrop_path ? apiConfig.originalImage(item?.backdrop_path) : img  } alt={item?.title ||'img'}  width="500" height="350" />
        </div>
        <div className="clscardcolumn-des">
          <div className="clscardcolumn-title">
            <h5 className="clscardcolumn-title__title">
              {item?.title}
            </h5>
          </div>
          <div className="clscardcolumn-title__sumary">
            {isDes && <p> {item?.overview}</p>}
            {/* <div className="clscardcolumn-title__time">
              <span>27 may 2013 </span>
            </div>
            <div className="clscardcolumn-title__rate">     5*</div> */}
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CardColumn;
