import React from "react";
import MainlayoutCompany from "../../company/hoc/mainlayout-company";
import ContactAdvertis from "../../company/advertisement/contact-advertis";

type Props = {};

const AdvertisContactView = (props: Props) => {
  return (
    <MainlayoutCompany>
      <ContactAdvertis />
    </MainlayoutCompany>
  );
};

export default AdvertisContactView;
