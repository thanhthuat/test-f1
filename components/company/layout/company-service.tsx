import React, { ReactNode } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Stack from "@mui/material/Stack";
import BoxService from "@components/common/box-service/box-service";
interface Icon {
  icon: string | ReactNode;
  title: string;
  description: string;
}
const arr: Icon[] = [
  {
    icon: <AcUnitIcon />,
    title: "hdhdh",
    description: " Chosun Biz promotes professional domestic and international networking services",
  },
  {
    icon: <AcUnitIcon />,
    title: "hdhdh",
    description: " Chosun Biz promotes professional domestic and international networking services",
  },
  {
    icon: <AcUnitIcon />,
    title: "hdhdh",
    description: " Chosun Biz promotes professional domestic and international networking services",
  },
  {
    icon: <AcUnitIcon />,
    title: "hdhdh",
    description: " Chosun Biz promotes professional domestic and international networking services",
  },
  {
    icon: <AcUnitIcon />,
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
        <Stack direction="row" spacing={2} className="wapper">
          {arr.map((item) => {
            return <BoxService item={item} />;
          })}
        </Stack>
      </div>
    </section>
  );
};

export default CompanyService;
