import React from "react";
import { listTermsAuthorized } from "./data";
type Props = {};

const TermsPermission = (props: Props) => {
  return (
    <div className="clstermspermisson">
      <div className="clstermspermisson-content">
        <div className="clstermspermisson-overview"></div>
        <div className="clstermspermisson-detail">
          {listTermsAuthorized.map((item, index) => {
            return (
              <div className="clstermspermisson-detail__item" id={item.id} key={item.id}>
                <b>
                  제&nbsp; {index + 1}
                  {item.title}
                </b>
                {item.content.map((item, index) => {
                  return (
                    <p className="mt-1" key={`${index}-detail`}>
                      {" "}
                      {item}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TermsPermission;
