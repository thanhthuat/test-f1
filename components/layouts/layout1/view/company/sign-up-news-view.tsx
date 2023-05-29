import React from "react";
import MainlayoutCompany from "../../company/hoc/mainlayout-company";
import CustomerInformation from "../../company/customer/customer-information";

type Props = {};

const SignUpNewsView = (props: Props) => {
  return (
    <MainlayoutCompany>
      <CustomerInformation />
    </MainlayoutCompany>
  );
};

export default SignUpNewsView;
