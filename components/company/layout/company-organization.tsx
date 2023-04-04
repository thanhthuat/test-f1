import Image from "next/image";
import React from "react";
import imgorganization from 'public/image/company/organization_pc.png'
interface ICompanyOrganization {}

const CompanyOrganization: React.FC<ICompanyOrganization> = (props) => {
  return (
    <section className="prefixorganization">
      <div className="prefixorganization-title"> <h3> organization and people</h3></div>
      <div className="prefixorganization-img wapper"> 
       
      </div>
    </section>
  );
};

export default CompanyOrganization;
