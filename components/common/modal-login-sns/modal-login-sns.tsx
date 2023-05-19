import React, { memo } from "react";
import ModalCommon from "../modal-common/modal-common";
import FormPolicy from "./form-policy";

interface ModalLoginSnsProps {
  open: boolean;
  onClose: () => void;
}

const ModalLoginSns: React.FC<ModalLoginSnsProps> = ({ open, onClose }) => {
  return (
    <ModalCommon open={open} onClose={onClose}>
      <FormPolicy onClose={onClose} />
    </ModalCommon>
  );
};

export default memo(ModalLoginSns);
