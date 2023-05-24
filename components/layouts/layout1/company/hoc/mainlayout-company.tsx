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
      {children}
      <FooterCompany />
    </main>
  );
};

export default MainlayoutCompany;
