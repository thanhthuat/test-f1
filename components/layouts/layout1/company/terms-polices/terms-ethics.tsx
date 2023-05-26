import React from "react";
import {  listTermsTermsEthics } from "./data";
import { Link, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
type Props = {};

const TermsEthics = (props: Props) => {
  return (
    <div className="clstermsethics">
      <div className="clstermsethics-content">
        <div className="clstermsethics-ethics">
          <div className="clstermsethics-ethics__title">
            <p className="">
              인터넷신문은 자유롭고 책임 있는 언론을 실현해 주어진 시대적 사명을 다할 것을 다짐한다.
              건전한 여론 형성과 민주주의 발전, 문화창달에 기여하기 위하여 우리는 스스로 윤리기준을
              세워 인터넷신문윤리강령을 제정하고 이를 실천할 것을 결의한다.
            </p>
          </div>
        </div>
        <div className="clstermsofuse-detail">
          {listTermsTermsEthics.map((item, index) => {
            return (
              <div className="clstermsofuse-detail__item" id={item.id}>
                <b>
                  제&nbsp; {index + 1}
                  {item.title}
                </b>
                {item.content.map((item) => {
                  return <p className="mt-1"> {item}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TermsEthics;
