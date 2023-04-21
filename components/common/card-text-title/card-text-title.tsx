import { IresponeMovie } from "lib/models/interface";
import Link from "next/link";
import React from "react";

interface ICardRowMain{
  className?:string;
  item?:IresponeMovie
}

const CardTextTitle:React.FC<ICardRowMain> = ({className ='',item}) => {
  return (
    <article className={`clsarticletexttitle  ${className}`} >
      <Link href={"/detail/d"}>
     
      <div className="clsarticletexttitle-content">
        <div className="clsarticletexttitle-title">
          <h5>{item?.title ||  'Nhiều quy định phòng cháy chữa cháy như trên trời rơi xuống'} </h5>
        </div>
        <div className="clsarticletexttitle-des">
          <p>
         {item?.overview || " Bộ Giao thông Vận tải tiếp tục chuẩn bị, mục tiêu đến năm 2025 hoàn thành phê duyệt chủ trương đầu tư dự án đường sắt tốc độ cao trên trục Bắc Nam."}
          </p>
        </div>
      </div>
      </Link>
    </article>
  );
};

export default CardTextTitle;
