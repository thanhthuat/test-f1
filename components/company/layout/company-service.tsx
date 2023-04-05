import React, { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import img from "public/image/company/service_icon1.svg";
import BoxService from "@components/common/box-service/box-service";
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
        <div className="prefixservice-title">
          <h3>Service and business information</h3>
          <p>
            Chosun Biz promotes professional domestic and international networking services and
            global innovation businesses based on new innovations as well as media businesses such
            as content services, advertising and affiliate services, and provides customized
            integrated services through various media channels.
          </p>
        </div>
        <Stack
          direction="row"
          spacing={0}
          className="wapper prefixservice-baner"
          sx={{ flexWrap: "wrap" }}
        >
          {arr.map((item, index) => {
            return <BoxService item={item} key={`${item.title}-${index}`} />;
          })}
        </Stack>
        <div className="wapper prefixservice-contact">
          <ul>
            <li>
              <strong>Contact us </strong> <a href=""> help@chosunbiz.com</a>
            </li>
            <li>
              <strong>Business and partnership inquiries</strong> <a href=""> help@chosunbiz.com</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CompanyService;
