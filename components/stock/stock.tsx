import React, { useEffect, useRef, useState } from "react";
import subtitleiconstockpdf from "public/image/icon/icon-stock-pdf.png";
import subtitleiconstocktiker from "public/image/icon/icon-stock-tiker.png";
import Image from "next/image";
import stock_API from "../../lib/service/stock";
import { TypeRateMoney, TypeStock } from "lib/models/interface";
import { NumericFormat } from "react-number-format";

type Props = {};

interface IStock {}

const Stock: React.FC<IStock> = (props: Props) => {
  const [arrStock, setArrStock] = useState<any>([]);
  const [arrRateMoney, setArrRateMoney] = useState<any>([]);
  const _isMounted = useRef(false);

  const fetchStock = async () => {
    const data = await stock_API.getAllStock();
    _isMounted.current && setArrStock(data);
  };

  const fetchMoney = async () => {
    const data = await stock_API.getAllRateMoney();
    _isMounted.current && setArrRateMoney(data);
  };

  useEffect(() => {
    fetchStock();
    fetchMoney();
  }, []);

  useEffect(() => {
    _isMounted.current = true;
    return () => {
      _isMounted.current = false;
    };
  }, []);

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
              {arrStock?.length > 0 &&
                arrStock.map((item: TypeStock) => (
                  <div key={item?.stock_id} className="list__code__item">
                    <div className="list__code__item__left">
                      <span className="code">{item?.stock_code}</span>
                    </div>
                    <div className="list__code__item__right">
                      <span className="price">
                        {
                          <NumericFormat
                            value={item?.current_price}
                            displayType={"text"}
                            thousandSeparator=","
                          />
                        }
                      </span>
                      <span className="up">14.70</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="list__stock__item">
          <div className="list__stock__item__header">
            <h3>today's exchange rate</h3>
            {/* <span>2023.04.05 Market closes</span> */}
          </div>
          <div className="list__stock__item__content">
            <div className="list__code">
              {arrRateMoney?.length > 0 &&
                arrRateMoney.map((item: TypeRateMoney) => (
                  <div key={item?.money_id} className="list__code__item">
                    <div className="list__code__item__left">
                      <span className="code">{item?.money_name}</span>
                      <span className="code">({item?.money_code})</span>
                    </div>
                    <div className="list__code__item__right">
                      <span className="price">
                        {
                          <NumericFormat
                            value={item?.current_price}
                            displayType={"text"}
                            thousandSeparator=","
                          />
                        }
                      </span>
                      <span className="down">14.70</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="button-group">
        <button>
          <Image src={subtitleiconstocktiker} alt="" />
          <span>stock ticker</span>
        </button>
        <button>
          <Image src={subtitleiconstockpdf} alt="" />
          <span>stock ticker</span>
        </button>
      </div>
    </div>
  );
};

export default Stock;
