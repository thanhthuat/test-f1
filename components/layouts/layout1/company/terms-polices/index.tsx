import React from "react";

import MainlayoutCompany from "../hoc/mainlayout-company";
import TermsPolices from "./terms-polices";

type Props = {};

const TermsPolicesPage = (props: Props) => {
  return (
    <MainlayoutCompany>
      <TermsPolices />
    </MainlayoutCompany>
  );
};

export default TermsPolicesPage;
