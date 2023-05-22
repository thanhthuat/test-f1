import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import NewsScrap from "./news-scrap";
import BuyNewsCcrap from "./buy-news-scrap";
interface ProfilePageProps {}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
const ProfilePage: React.FC<ProfilePageProps> = ({}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label=" news scrap" {...a11yProps(0)} />
            <Tab label=" mua báo newsletter" {...a11yProps(1)} />
            <Tab label=" chỉnh sửa thông tin thành viên" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <NewsScrap />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BuyNewsCcrap />
        </TabPanel>
        <TabPanel value={value} index={2}>
          131313
        </TabPanel>
      </Box>
    </div>
  );
};

export default ProfilePage;
