import React from "react";
import Header from "./header";
import CompanyProgramer from "./company-programer";
import CompanyAbout from "./company-about";
import CompanyOrganization from "./company-organization";

interface IHomeCompanyProps {}

const HomeCompany: React.FC<IHomeCompanyProps> = (props) => {
  return (
    <div>
      <Header />
      <CompanyProgramer />
      <CompanyAbout />
      <CompanyOrganization />
    </div>
  );
};

export default HomeCompany;
