import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { arrTerms } from "./data";
import TermsOfUse from "./terms-of-use";
import TermsPrivacy from "./terms-privacy";
import TermsProtection from "./terms-protection";
import TermsEthics from "./terms-ethics";
import TermsCoppyright from "./terms-coppyright";
import TermsPremission from "./terms-premission";
import { useRouter } from "next/router";
type Props = {};
interface ProfilePageProps {}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const styles = {
  tab: {
    color: "#000",
    border: "1px solid #efefef",
    transition: "all 0.3s ease",
  },
  tabactive: {
    color: "#000",
    background: "#ffd966",
  },
  tabItemContainer: {
    background: "#efefef",
  },
};
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const TermsPolices = (props: Props) => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (typeof Number(router?.query?.index) == "number" && Number(router?.query?.index) > 0) {
      setValue(Number(router?.query?.index));
    } else {
      setValue(0);
    }
  }, [router?.query?.index]);
  return (
    <div className="clstermspolices">
      <div className="clstermspolices-content containerlayout1">
        <div className="clstermspolices-title">
          <h1 className="clstermspolices-title__h1">이메일무단수집거부</h1>
        </div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#ffd966",
                  color: "#ffd966 ",
                },
              }}
            >
              {arrTerms.map((item, index) => {
                return (
                  <Tab
                    style={value == index ? styles.tabactive : styles.tab}
                    // style={styles.tab}
                    label={item}
                    {...a11yProps(index)}
                  />
                );
              })}

              {/* <Tab label=" mua báo newsletter" {...a11yProps(1)} />
              <Tab label=" chỉnh sửa thông tin thành viên" {...a11yProps(2)} /> */}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TermsOfUse />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TermsPrivacy />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TermsProtection />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <TermsCoppyright />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <TermsPremission />
          </TabPanel>

          <TabPanel value={value} index={5}>
            <TermsEthics />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default TermsPolices;
