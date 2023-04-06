import React from "react";

interface ISlick {}

const Slick: React.FC<ISlick> = () => {
  return (
    <div className="slick">
      <div className="slick__top">
        <div className="slick__top__figure">
          <img
            src="https://biz.chosun.com/resizer/Ikr5x4W6Qnbr2cySwCrZCY9BC_g=/400x66/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/RSPRTGXO7RGOZMUE6SW6F2VQJU.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="slick__item">
        <h3>inform</h3>
        <div className="card">
          <div className="list">
            <div className="list__left">
              <a href="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, illum.
              </a>
            </div>
            <div className="list__right">
              <div className="list__right__figure">
                <img
                  src="https://biz.chosun.com/resizer/6ctCt3E1xfpv7AD8D7IZ6LY1aIU=/80x80/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/RR5MEQKVVRM7NOEOS73EJMTWYA.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slick__item">
        <h3>Coin market in chaos</h3>
        <div className="card">
          <div className="list">
            <div className="list__left">
              <a href="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, illum.
              </a>
            </div>
            <div className="list__right">
              <div className="list__right__figure">
                <img
                  src="https://biz.chosun.com/resizer/6ctCt3E1xfpv7AD8D7IZ6LY1aIU=/80x80/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/RR5MEQKVVRM7NOEOS73EJMTWYA.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="list">
            <div className="list__left">
              <a href="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, illum.
              </a>
            </div>
            <div className="list__right">
              <div className="list__right__figure">
                <img
                  src="https://biz.chosun.com/resizer/6ctCt3E1xfpv7AD8D7IZ6LY1aIU=/80x80/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/RR5MEQKVVRM7NOEOS73EJMTWYA.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="list">
            <div className="list__left">
              <a href="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, illum.
              </a>
            </div>
            <div className="list__right">
              <div className="list__right__figure">
                <img
                  src="https://biz.chosun.com/resizer/6ctCt3E1xfpv7AD8D7IZ6LY1aIU=/80x80/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/RR5MEQKVVRM7NOEOS73EJMTWYA.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slick;
