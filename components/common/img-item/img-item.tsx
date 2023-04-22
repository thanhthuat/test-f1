import Image from "next/image";
import React from "react";

interface ImgItemProps {
  className?: string;
}

const ImgItem: React.FC<ImgItemProps> = ({ className = "" }) => {
  return (
    <figure className={`${className} prefixarticledetail-figure`} >
      <Image className="prefixarticledetail-figure__img" src={""} alt="img" />
      <figcaption className="prefixarticledetail-figure__caption">{}</figcaption>
    </figure>
  );
};

export default ImgItem;
