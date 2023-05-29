import React from "react";
import { dataContact } from "../introduce/data";

const ContactAdvertis = () => {
  return (
    <div className="clscontactadvertis">
      <div className="clscontactadvertis-content containerlayout1">
        <div className="clscontactadvertis-title">
          <h3>광고·제휴문의</h3>
        </div>
        <div className="clscontactadvertis-contact">
          <div className="clscontactadvertis-contact__des">
            <b>고객사명와 함께할 사업제휴 파트너를 모십니다.</b>
            <p>온오프라인의 다양한 광고·제휴로 귀사의 사업가치를 한층 더 높이시기 바랍니다.</p>
          </div>
          <div className="clscontactadvertis-contact__phone">
            <table>
              <tr>
                <th>부서</th>
                <td>전화번호</td>
              </tr>
              {dataContact.map((item, index) => {
                return (
                  <tr key={`${item.name}-${index}`}>
                    <th>{item.name}</th>
                    <td>TEL : {item.phone}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAdvertis;
