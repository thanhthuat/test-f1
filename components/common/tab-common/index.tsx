import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import a11yProps from "./all-props";
import TabPanel from "./tab-panel";

interface TabContainerProps {
  arrayTabs: { title: string }[];
  arrayTabPanel: { children: React.ReactNode }[];
}
const styles = {
  tab: {
    color: "#D97D54",
  },
  tabItemContainer: {
    background: "none",
  },
};
const TabContainer: React.FC<TabContainerProps> = ({ arrayTabs, arrayTabPanel }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ color: "#d50000" }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#D97D54",
              color: "#D97D54 ",
            },
          }}
        >
          {arrayTabs.map((item, index) => {
            return (
              <Tab
                style={value == index ? styles.tab : {}}
                label={item.title}
                {...a11yProps(index)}
                key={`${item.title}-${index}`}
              />
            );
          })}
          {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      {arrayTabPanel.map((item, index) => {
        return (
          <TabPanel value={value} index={index} key={`tabpanel-${index}`}>
            {item.children}
          </TabPanel>
        );
      })}
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
  );
};

export default TabContainer;
