import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { arrTerms } from "./data";
type Props = {};
interface ProfilePageProps {}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const styles = {
  tab: {
    color: "#D97D54",
    border: "1px solid #D97D54",
    transition: "all 0.3s ease",
  },
  tabactive: {
    color: "#fff",
    background: "#D97D54",
  },
  tabItemContainer: {
    background: "#D97D54",
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
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="clstermspolices">
      <div className="clstermspolices-content containerlayout1">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#D97D54",
                  color: "#D97D54 ",
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
            1213
          </TabPanel>
          <TabPanel value={value} index={1}>
            21212121
          </TabPanel>
          <TabPanel value={value} index={2}>
            131313
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default TermsPolices;
