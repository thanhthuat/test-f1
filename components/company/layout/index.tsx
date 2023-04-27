import React ,{useEffect} from "react";
import HeaderCompany from "./header";
import CompanyProgramer from "./company-programer";
import CompanyAbout from "./company-about";
import CompanyOrganization from "./company-organization";
import CompanyVison from "./company-vision";
import CompanyEthics from "./company-ethics";
import CompanyRecuit from "./company-recuit";
import CompanyLocation from "./company-location";
import CompanyFooter from "./company-footer";


interface IHomeCompanyProps {}

const HomeCompany: React.FC<IHomeCompanyProps> = (props) => {
  return (
    <div>
      {/* <Header className="wapper" /> */}
      <HeaderCompany />
      <CompanyProgramer />
      <CompanyAbout />
      <CompanyOrganization />
      <CompanyVison />
      {/* <CompanyService /> */}
      <CompanyEthics />
      <CompanyRecuit />
      <CompanyLocation />
      <CompanyFooter />
    </div>
  );
};

export default HomeCompany;
