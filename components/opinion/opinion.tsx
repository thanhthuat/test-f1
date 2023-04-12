import React from "react";
import subtitleLogoRight from "public/image/icon/icon-right.png";
import Image from "next/image";
import { TypeOpinion } from "lib/models/interface";

interface IOpinion {
  data: TypeOpinion[];
}

type Props = {
  data: TypeOpinion[];
};

const Opinion: React.FC<IOpinion> = (props: Props) => {
  const { data } = props;
  return (
    <div className="opinion">
      <div className="opinion__header">
        <span className="opinion__header__link">Opinion</span>
        <Image src={subtitleLogoRight} alt="" />
      </div>
      <div className="opinion__main">
        {data.length > 0 &&
          data.map((item: TypeOpinion, index: number) => (
            <div key={index} className="opinion__main card">
              <div className="card__left">
                <span className="card__left__job">{item?.job}</span>
                <span className="card__left__link">{item?.title}</span>
              </div>
              <div className="card__right">
                <div className="card__right__figure">
                  <img src={item?.img} alt="" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Opinion;
