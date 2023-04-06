import Image from "next/image";
import React from "react";

import recruitIcon from "public/image/company/recruit_icon.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
const CompanyRecuit = () => {
  return (
    <section className="prefixrecruit">
      <div className="prefixrecruit-content wapper">
        <motion.div
          initial={{ opacity: 0, transform: "translate(0%, 20%)" }}
          whileInView={{ opacity: 1, transform: "translate(0%, 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="prefixrecruit-title"
        >
          <h3> Recruitment</h3>
          <Image src={recruitIcon} alt="recruit-icon" />
          <h4>Chosun Biz Recruitment of Experienced Employees</h4>
          <p>
            Chosun Biz, Korea's best digital-based general media, is looking for new talent. We are
            waiting for your passionate challenge to open a new era of digital media.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translate(0%, 20%)" }}
          whileInView={{ opacity: 1, transform: "translate(0%, 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="prefixrecruit-body"
        >
          <div className="prefixrecruit-body__title">
            <h4>Application and recruitment process</h4>
          </div>
          <ul>
            <li className="prefixrecruit-body__des">
              <span className="prefixrecruit-body__circle">Application period</span>{" "}
              <span className="prefixrecruit-body__content">regular recruitment</span>{" "}
            </li>
            <li className="prefixrecruit-body__des">
              <span className="prefixrecruit-body__circle">etc</span>
              <span className="prefixrecruit-body__content">
                {" "}
                Individual guidance on the number of successful applicants
              </span>{" "}
            </li>
            <li className="prefixrecruit-body__des">
              <div>
                <span className="prefixrecruit-body__circle">areas of</span>{" "}
                <span className="prefixrecruit-body__content">
                  Correspondent, editor, media manager
                </span>
              </div>
              <div>
                <span className="prefixrecruit-body__circle">inquiry </span>
                <a className="prefixrecruit-body__content" href="">
                  recruit@chosunbiz.com
                </a>
              </div>
            </li>
            <li className="prefixrecruit-body__des">
              <span className="prefixrecruit-body__circle">Admissions</span>{" "}
              <span className="prefixrecruit-body__content">
                Document screening - Interview screening - Physical examination - Final pass
                *Additional screening may be conducted as needed
              </span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translate(0%, 20%)" }}
          whileInView={{ opacity: 1, transform: "translate(0%, 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <Box className="prefixrecruit-footer" sx={{ textAlign: "center" }}>
            <Button
              className="prefixrecruit-footer__button"
              sx={{ display: "flex", alignItems: "center" }}
            >
              To apply
            </Button>
          </Box>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyRecuit;
