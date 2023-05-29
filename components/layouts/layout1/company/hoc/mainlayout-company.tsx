import React from "react";
import HeaderCompany from "../header-company";
import FooterCompany from "../footer-company";

interface MainlayoutCompanyProps {
  children: React.ReactNode;
}

const MainlayoutCompany: React.FC<MainlayoutCompanyProps> = ({ children }) => {
  return (
    <main>
      <HeaderCompany />
      <div className="padding-bottom">{children}</div>
      <FooterCompany />
    </main>
  );
};

export default MainlayoutCompany;
