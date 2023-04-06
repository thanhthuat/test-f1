import React from "react";
import Header from "./header";
import CompanyProgramer from "./company-programer";
import CompanyAbout from "./company-about";
import CompanyOrganization from "./company-organization";
import CompanyVison from "./company-vision";
import CompanyService from "./company-service";
import CompanyEthics from "./company-ethics";
import CompanyRecuit from "./company-recuit";
import CompanyLocation from "./company-location";
import CompanyFooter from "./company-footer";

interface IHomeCompanyProps {}

const HomeCompany: React.FC<IHomeCompanyProps> = (props) => {
 
 
 
  return (
    <div>
      <Header />
      <CompanyProgramer />
      <CompanyAbout />
      <CompanyOrganization />
      <CompanyVison />
      {/* <CompanyService /> */}
      <CompanyEthics />
      <CompanyRecuit />
      <CompanyLocation />
      <CompanyFooter/>
    </div>
  );
};

export default HomeCompany;
