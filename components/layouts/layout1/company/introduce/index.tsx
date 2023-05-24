import React from "react";
import HeaderCompany from "../header-company";
import IntroducceCompany from "./introducce-company";
import PolicyCompany from "./policy-company";
import ContactCompany from "./contact-company";
import TransportCompany from "./transport-company";
import FooterCompany from "../footer-company";
import MainlayoutCompany from "../hoc/mainlayout-company";

type Props = {};

const Company = (props: Props) => {
  return (
    <MainlayoutCompany>
      <IntroducceCompany />
      <PolicyCompany />
      <ContactCompany />
      <TransportCompany />
    </MainlayoutCompany>
  );
};

export default Company;
