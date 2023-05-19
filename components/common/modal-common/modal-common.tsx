import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CloseIcon from "@mui/icons-material/Close";

interface ModalLoginProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const ModalCommon: React.FC<ModalLoginProps> = ({ open, onClose, children }) => {
  return (
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
        <Box sx={{ width: "100%" }}>{children}</Box>
      </Box>
    </Modal>
  );
};
export default ModalCommon;
