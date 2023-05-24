import React from "react";
import MainlayoutCompany from "../hoc/mainlayout-company";
import FormSigin from "./form-sigin";

interface CustomerCompanyProps {}

const CustomerCompany: React.FC<CustomerCompanyProps> = () => {
  return (
    <MainlayoutCompany>
      <FormSigin />
    </MainlayoutCompany>
  );
};

export default CustomerCompany;
