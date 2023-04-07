import Image from "next/image";
import React from "react";
import visiondiagram from "public/image/company/vision_diagram.png";
import img from "public/image/detailpage/avatar.png";
interface IItemViewNewProps{
  item: {
    url: string;
    title: string;
    desc: string;
  }
}

const ItemViewNew:React.FC<IItemViewNewProps> = ({item}) => {
  return (
    <div className="prefixitemviewnew">
      <div className="prefixitemviewnew-content">
        <div className="prefixitemviewnew-img">
          <Image className="prefixitemviewnew-img__img" src={visiondiagram} alt={item?.title} />
        </div>
        <div className="prefixitemviewnew-title">
          <div className="prefixitemviewnew-title__title">  <h3 >{item?.title}</h3></div>
          
          <div className="prefixitemviewnew-title__desc"> <span >{item?.desc}</span></div>
         
        </div>
      </div>
    </div>
  );
};

export default ItemViewNew;
