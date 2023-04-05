import React from "react";
import subtitleLogoRight from "public/image/icon/icon-right.png";
import Image from "next/image";

type Prop = {};

interface IOpinion {}

type Props = {};

const Opinion: React.FC<IOpinion> = (props: Prop) => {
  return (
    <div className="opinion">
      <div className="opinion__header">
        <span className="opinion__header__link">Opinion</span>
        <Image src={subtitleLogoRight} alt="" />
      </div>
      <div className="opinion__main">
        <div className="opinion__main card">
          <div className="card__left">
            <span className="card__left__job">press notebook</span>
            <span className="card__left__link">
              Was it really wrong then, is it really the right answer now?
            </span>
          </div>
          <div className="card__right">
            <div className="card__right__figure">
              <img
                src="https://biz.chosun.com/resizer/BnFy5bWhjbAIjuLWgZXpSQezPG8=/160x160/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/ZUHCHK3L25CODJ6C2Y4QZEKAYY.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="opinion__main card">
          <div className="card__left">
            <span className="card__left__job">press notebook</span>
            <span className="card__left__link">
              Was it really wrong then, is it really the right answer now?
            </span>
          </div>
          <div className="card__right">
            <div className="card__right__figure">
              <img
                src="https://biz.chosun.com/resizer/BnFy5bWhjbAIjuLWgZXpSQezPG8=/160x160/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/ZUHCHK3L25CODJ6C2Y4QZEKAYY.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="opinion__main card">
          <div className="card__left">
            <span className="card__left__job">press notebook</span>
            <span className="card__left__link">
              Was it really wrong then, is it really the right answer now?
            </span>
          </div>
          <div className="card__right">
            <div className="card__right__figure">
              <img
                src="https://biz.chosun.com/resizer/BnFy5bWhjbAIjuLWgZXpSQezPG8=/160x160/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/ZUHCHK3L25CODJ6C2Y4QZEKAYY.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinion;
