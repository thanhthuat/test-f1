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
 
  if (typeof window !== "undefined") {
     const square: Element | null = document?.querySelector("animate");
square?.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  console.log("🚀 ~ file: index.tsx:23 ~ observer ~ entries:", entries)
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square?.classList.add('square-transition');
      return;
    }

    square?.classList.remove('square-transition');
  });
});

// observer?.observe(document?.querySelector('.square-wrapper')!);
  }
 
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
