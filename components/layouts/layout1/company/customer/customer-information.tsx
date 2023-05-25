import React from "react";
import FormSigin from "./form-sigin";

type Props = {};

const CustomerInformation = (props: Props) => {
  return (
    <div className="clscustomerinformation">
      <div className="clscustomerinformation-content  containerlayout1">
        <div className="clscustomerinformation-title">
          <h3>구독신청 및 문의사항은 편하게 말씀해주세요.</h3>
        </div>
        <div className="clscustomerinformation-form">
          <FormSigin />
        </div>
      </div>
    </div>
  );
};

export default CustomerInformation;
