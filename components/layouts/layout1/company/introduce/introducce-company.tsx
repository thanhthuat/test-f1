import React from "react";

type Props = {};

const IntroducceCompany = (props: Props) => {
  return (
    <div className="clsintroducecompany">
      <div className="clsintroducecompany-content containerlayout1">
        <div className="clsintroducecompany-title">
          <h2>언론사 소개</h2>
          <h2>헤드카피입니다. 마지막에 언론사명</h2>
        </div>
        <div className="clsintroducecompany-image">
          <img src="/layout1/introduce-company.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default IntroducceCompany;
