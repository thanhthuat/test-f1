import { IresponeMovie } from "lib/models/interface";
import Link from "next/link";
import React from "react";


interface CardTextProps {
  className?: string ;
  item?:IresponeMovie;
}

const CardText:React.FC<CardTextProps> = ({className='',item}) => {
  return (
    <article className={`${className} clsarticletext `}>
      <Link href={"/detail/d"}>
     
      <div className="clsarticletext-content">
        <div className="clsarticletext-title">
          <h5>{item?.overview|| "Nhiều quy định phòng cháy chữa cháy như trên trời rơi xuống"}</h5>
        </div>
        <div className="clsarticletext-summary__des"></div>
      </div>
      </Link>
    </article>
  );
};

export default CardText;
