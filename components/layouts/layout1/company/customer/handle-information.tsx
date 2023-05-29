import React from "react";
import { dataContact } from "../introduce/data";

type Props = {};

const HandleInformation = (props: Props) => {
  return (
    <div className="clshandleinformation">
      <div className="clshandleinformation-content containerlayout1">
        <div className="clshandleinformation-title">
          <h3> 고충처리</h3>
        </div>
        <div className="clshandleinformation-body">
          <div className="clshandleinformation-description">
            <h3> 독자의 권익보호를 위해 고충처리인 제도를 운영하고 있습니다.</h3>
          </div>
          <div className="clshandleinformation-contact">
            <table>
              <tr>
                <th>성명</th>
                <td>담당자명</td>
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
            <div>
              <p className="mt-1">
                고충처리인은 언론 보도로 인한 피해를 자율적으로 예방하고, 사후 구제를 담당합니다.
              </p>
              <p className="mt-1">
                본지의 보도로 고충을 겪게 된 독자분께서는 고충처리인을 방문하시거나 전화, 팩스,
                이메일 등으로 신청해주시면 성심 성의껏 처리하겠습니다.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleInformation;
