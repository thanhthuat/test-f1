import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";

type Props = {
  url: string;
  open: boolean;
  onClose: () => void;
};
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
const ModalImg: React.FC<Props> = ({ url, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="prefixmodalimage"
    >
      <Box sx={style}>
        <img src={url} alt="modal-img" style={{ width: "500px", height: "auto" }} />
      </Box>
    </Modal>
  );
};

export default ModalImg;
