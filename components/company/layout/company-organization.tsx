import Image from "next/image";
import React from "react";
import imgorganization from "public/image/company/organization_pc.png";
import { motion } from "framer-motion";
interface ICompanyOrganization {}

const CompanyOrganization: React.FC<ICompanyOrganization> = (props) => {
  return (
    <section className="prefixorganization">
      <motion.div
        initial={{ opacity: 0, transform: "translate( 0%, 30%)" }}
        whileInView={{ opacity: 1, transform: "translate(0%, 0%)" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
       

        <div className="prefixorganization-title">
          <h3> organization and people</h3>
        </div>

        <div className="prefixorganization-img wapper"></div>
      </motion.div>
    </section>
  );
};

export default CompanyOrganization;
