import React from "react";

type Props = {};

const TransportCompany = (props: Props) => {
  return (
    <div className="clstransportcompany">
      <div className="clstransportcompany-content containerlayout1">
        <div className="clstransportcompany-adress">
          <div className="clstransportcompany-adress__box">
            <p> Adress: 언론사 주소 서울시 중구 충무로 29 아시아타워 10층 1013호</p>
          </div>
        </div>
        <div className="clstransportcompany-public">
          <div className="clstransportcompany-public-train">
            <div className="clstransportcompany-public-train__adress">지하철역</div>
            <div className="clstransportcompany-public-train__item">
              <p>
                2.3호선 <b>을지로역 9번출구</b> 도보로 5분 거리
              </p>
            </div>
          </div>
          <div className="clstransportcompany-public-bus">
            <div className="clstransportcompany-public-bus__adress"> 버스정류장</div>
            <div className="clstransportcompany-public-bus__item">
              <p className="pr-1">간선 604</p>
              <p>프레스센터 하차</p>
            </div>
            <div className="clstransportcompany-public-bus__item">
              <p className="pr-1">지선 7011</p>
              <p>광화문코리아나호텔 하차</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportCompany;
