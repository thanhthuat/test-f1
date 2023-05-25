import React from "react";
import MainlayoutCompany from "../hoc/mainlayout-company";
import FormSigin from "./form-sigin";
import CustomerInformation from "./customer-information";
import HandleInformation from "./handle-information";
import HandlePolicy from "./handle-policy";

interface CustomerCompanyProps {}

const CustomerCompany: React.FC<CustomerCompanyProps> = () => {
  return (
    <MainlayoutCompany>
      <CustomerInformation />
      <HandleInformation />
      <HandlePolicy/>
    </MainlayoutCompany>
  );
};

export default CustomerCompany;
