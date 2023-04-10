import React from "react";
import subtitleiconstockpdf from "public/image/icon/icon-stock-pdf.png";
import subtitleiconstocktiker from "public/image/icon/icon-stock-tiker.png";
import Image from "next/image";

type Props = {};

interface IStock {}

const Stock: React.FC<IStock> = (props: Props) => {
  return (
    <div className="stock">
      <div className="list__stock">
        <div className="list__stock__item">
          <div className="list__stock__item__header">
            <h3>today's stock quote</h3>
            <span>2023.04.05 Market closes</span>
          </div>
          <div className="list__stock__item__content">
            <div className="list__code">
              <div className="list__code__item">
                <div className="list__code__item__left">
                  <span className="code">KOSPI</span>
                </div>
                <div className="list__code__item__right">
                  <span className="price">2,495.21</span>
                  <span className="up">14.70</span>
                </div>
              </div>

              <div className="list__code__item">
                <div className="list__code__item__left">
                  <span className="code">KOSPI</span>
                </div>
                <div className="list__code__item__right">
                  <span className="price">2,495.21</span>
                  <span className="up">14.70</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="list__stock__item">
          <div className="list__stock__item__header">
            <h3>today's stock quote</h3>
            {/* <span>2023.04.05 Market closes</span> */}
          </div>
          <div className="list__stock__item__content">
            <div className="list__code">
              <div className="list__code__item">
                <div className="list__code__item__left">
                  <span className="code">KOSPI</span>
                </div>
                <div className="list__code__item__right">
                  <span className="price">2,495.21</span>
                  <span className="down">14.70</span>
                </div>
              </div>

              <div className="list__code__item">
                <div className="list__code__item__left">
                  <span className="code">KOSPI</span>
                </div>
                <div className="list__code__item__right">
                  <span className="price">2,495.21</span>
                  <span className="down">14.70</span>
                </div>
              </div>

              <div className="list__code__item">
                <div className="list__code__item__left">
                  <span className="code">KOSPI</span>
                </div>
                <div className="list__code__item__right">
                  <span className="price">2,495.21</span>
                  <span className="down">14.70</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="button-group">
        <button>
          <Image src={subtitleiconstocktiker} alt="img-stock" />
          <span>stock ticker</span>
        </button>
        <button>
          <Image src={subtitleiconstockpdf} alt="img-stock" />
          <span>stock ticker</span>
        </button>
      </div>
    </div>
  );
};

export default Stock;
