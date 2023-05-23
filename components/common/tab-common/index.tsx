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
  tabTitle: string[];
  arrayTabPanel: { children: React.ReactNode }[];
  children: React.ReactNode;
  datanew: { LastNews: any[]; News: any[] };
}

const styles = {
  tab: {
    color: "#D97D54",
  },
  tabItemContainer: {
    background: "none",
  },
};
const TabContainer: React.FC<TabContainerProps> = ({
  tabTitle,
  arrayTabPanel,
  children,
  datanew,
}) => {
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
          {tabTitle.map((item, index) => {
            return (
              <Tab
                style={value == index ? styles.tab : {}}
                label={item}
                {...a11yProps(index)}
                key={`${item}-${index}`}
              />
            );
          })}
        </Tabs>
      </Box>
      {tabTitle.map((item, index) => {
        return (
          <TabPanel value={value} index={index} key={`tabpanel-${index}`}>
            {(children as React.ReactNode[])?.length > 0 &&
              datanew[item as keyof typeof datanew]?.map((item,index) => {
                return React.cloneElement((children as any[])[0], {
                  item: { ...item },
                  key: `${(children as any[])[0].key}-${index}`,
                });
              })}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default TabContainer;
