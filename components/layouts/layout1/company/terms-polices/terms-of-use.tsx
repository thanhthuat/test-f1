import React from "react";
import { listTermsOfUse } from "./data";
import { Link, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
type Props = {};

const TermsOfUse = (props: Props) => {
  return (
    <div className="clstermsofuse">
      <div className="clstermsofuse-content">
        <div className="clstermsofuse-overview">
          <ul>
            {listTermsOfUse.slice(0, 6).map((item, index) => {
              return (
                <li key={item.title}>
                  <Link
                    activeClass="active"
                    className="test6"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {index + 1}&nbsp;
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul>
            {listTermsOfUse.slice(6, 11).map((item, index) => {
              return (
                <li key={item.title}>
                  <Link
                    activeClass="active"
                    className="test6"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {index + 7}&nbsp;
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="clstermsofuse-detail">
          {listTermsOfUse.map((item, index) => {
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

export default TermsOfUse;
