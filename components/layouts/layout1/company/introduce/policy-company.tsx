import React from "react";
import { dataTitle, dataTitle1 } from "./data";

interface PolicyCompanyProps {
  isTwoColumn?: boolean;
}

const PolicyCompany: React.FC<PolicyCompanyProps> = ({ isTwoColumn = true }) => {
  return (
    <div className="clspolicycompany">
      <div className="clspolicycompany-content containerlayout1">
        <h3 className="clspolicycompany-title">미디어소개</h3>
        {!isTwoColumn &&
          dataTitle.map((item, index) => {
            return (
              <p className="mt-1" key={index}>
                {item}
              </p>
            );
          })}
        {isTwoColumn && (
          <div className="clspolicycompany-menu">
            <div className="clspolicycompany-left">
              {dataTitle1[0].sub.map((item, index) => {
                return (
                  <p className="mt-1" key={index}>
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="clspolicycompany-right">
              {dataTitle1[1].sub.map((item,index) => {
                return <p className="mt-1" key={index}>{item}</p>;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PolicyCompany;
