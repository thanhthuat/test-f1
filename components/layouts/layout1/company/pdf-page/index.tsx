import React from "react";
import MainlayoutCompany from "../hoc/mainlayout-company";
import PdfPage from "./pdf";

type Props = {};

const PdfViewPage = (props: Props) => {
  return (
    <MainlayoutCompany>
      <PdfPage />
    </MainlayoutCompany>
  );
};

export default PdfViewPage;
