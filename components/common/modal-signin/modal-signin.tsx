import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CloseIcon from "@mui/icons-material/Close";
import FormLogin from "./form-login";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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
interface ModalLoginProps {
  open: boolean;
  onClose: () => void;
}
const ModalLogin: React.FC<ModalLoginProps> = ({ open, onClose }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={`${""} container-modal`}
      >
        <Box className="body-modal">
          <div className="close-modal">
            <CloseIcon className="btn-close-modal" onClick={onClose} sx={{ cursor: "pointer" }} />
          </div>

          <Box>
            <FormLogin />
            {/* <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  variant="fullWidth"
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Sign in" {...a11yProps(0)} />
                  <Tab label="Sign up" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}></TabPanel>
              <TabPanel value={value} index={1}>
                <FormLogin isLogin={false} />
              </TabPanel>
            </Box> */}
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalLogin;
