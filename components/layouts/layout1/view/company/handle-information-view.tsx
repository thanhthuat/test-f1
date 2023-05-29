import React from "react";
import MainlayoutCompany from "../../company/hoc/mainlayout-company";
import CustomerInformation from "../../company/customer/customer-information";
import HandleInformation from "../../company/customer/handle-information";
import HandlePolicy from "../../company/customer/handle-policy";

type Props = {};

const HandleInformationView = (props: Props) => {
  return (
    <MainlayoutCompany>
      <HandleInformation />
      <HandlePolicy />
    </MainlayoutCompany>
  );
};

export default HandleInformationView;
