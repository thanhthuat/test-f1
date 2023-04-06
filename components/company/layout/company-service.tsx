import React, { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import img from "public/image/company/service_icon1.svg";
import BoxService from "@components/common/box-service/box-service";
import { motion } from "framer-motion";
interface Icon {
  url: string;
  title: string;
  description: string;
}
const arr: Icon[] = [
  {
    url: img,
    title: "hdhdh",
    description: " Chosun Biz promotes professional domestic and international networking services",
  },
  {
    url: img,
    title: "hdhdh",
    description: " Chosun Biz promotes professional domestic and international networking services",
  },
  {
    url: img,
    title: "hdhdh",
    description: " Chosun Biz promotes professional domestic and international networking services",
  },
  {
    url: img,
    title: "hdhdh",
    description: " Chosun Biz promotes professional domestic and international networking services",
  },
  {
    url: img,
    title: "hdhdh",
    description: " Chosun Biz promotes professional domestic and international networking services",
  },
];
const CompanyService = () => {
  return (
    <section className="prefixservice">
      <div className="prefixservice-content">
        <motion.div
          initial={{ opacity: 0, transform: "translate(0%, 20%)" }}
          whileInView={{ opacity: 1, transform: "translate(0%, 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="prefixservice-title"
        >
          <h3>Service and business information</h3>
          <p>
            Chosun Biz promotes professional domestic and international networking services and
            global innovation businesses based on new innovations as well as media businesses such
            as content services, advertising and affiliate services, and provides customized
            integrated services through various media channels.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translate(0%, 20%)" }}
          whileInView={{ opacity: 1, transform: "translate(0%, 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2  ,delay:0.2}}
          className="wapper prefixservice-baner"
        >
          <Stack direction="row" spacing={0} sx={{ flexWrap: "wrap" }}>
            {arr.map((item, index) => {
              return <BoxService item={item} key={`${item.title}-${index}`} />;
            })}
          </Stack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, transform: "translate(0%, 20%)" }}
          whileInView={{ opacity: 1, transform: "translate(0%, 0%)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 ,delay:0.5 }}
          className="wapper prefixservice-contact"
        >
          <ul>
            <li>
              <strong>Contact us </strong> <a href=""> help@chosunbiz.com</a>
            </li>
            <li>
              <strong>Business and partnership inquiries</strong> <a href=""> help@chosunbiz.com</a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyService;
