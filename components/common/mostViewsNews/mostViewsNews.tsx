import React from "react";

type Props = {};

interface IMostViewsNews {}

const MostViewsNews: React.FC<IMostViewsNews> = (props: Props) => {
  return (
    <div className="mostViewsNews">
      <div className="mostViewsNews__header">
        <h3>most viewed news</h3>
      </div>

      <div className="mostViewsNews__main">
        <div className="card">
          <div className="list">
            <div className="listItem">
              <span>1</span>
              <a href="#" className="listItem__link">
                [Financial Focus] Will Ethereum be subject to US sanctions? Coin market chaos is
                inevitable
              </a>
            </div>
            <div className="listItem">
              <span>2</span>
              <a href="#" className="listItem__link">
                [Financial Focus] Will Ethereum be subject to US sanctions? Coin market chaos is
                inevitable
              </a>
            </div>
            <div className="listItem">
              <span>3</span>
              <a href="#" className="listItem__link">
                [Financial Focus] Will Ethereum be subject to US sanctions? Coin market chaos is
                inevitable
              </a>
            </div>
            <div className="listItem">
              <span>4</span>
              <a href="#" className="listItem__link">
                [Financial Focus] Will Ethereum be subject to US sanctions? Coin market chaos is
                inevitable
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostViewsNews;
