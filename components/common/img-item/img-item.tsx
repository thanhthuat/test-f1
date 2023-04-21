import Image from "next/image";
import React from "react";

type Props = {};

const ImgItem = (props: Props) => {
  return (
    <figure className="prefixarticledetail-figure">
      <Image className="prefixarticledetail-figure__img" src={""} alt="img" />
      <figcaption className="prefixarticledetail-figure__caption">{}</figcaption>
    </figure>
  );
};

export default ImgItem;
