import React from "react";
import imgsubtitle from "public/image/company/visual_subtitle.svg";
import Image from "next/image";
import { motion} from "framer-motion";
interface ICompanyProgramerProps {}

const CompanyProgramer: React.FC<ICompanyProgramerProps> = (props) => {
  return (
    <div className="prefixprogamer animate">
      <div className="prefixprogamer-content">
        <motion.div
          initial={{ opacity: 0, transform: "translate(-50%, 20%)" }}
          whileInView={{ opacity: 1, transform: "translate(-50%, -50%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="prefixprogamer-title"
        >
          <Image className="prefixprogamer-img" src={imgsubtitle} alt="subtitle" />
          <h4 className="prefixprogamer-title__header"> Premium Economic Power</h4>
          <p className="prefixprogamer-title__content">
            Chosun Biz provides high-quality economic contents <br />
            It is positioning itself as a premium economic medium.
          </p>
        </motion.div>
        <div className="prefixprogamer-bg"></div>
      </div>
    </div>
  );
};

export default CompanyProgramer;
