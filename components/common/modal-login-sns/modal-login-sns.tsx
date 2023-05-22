import React, { memo } from "react";
import ModalCommon from "../modal-common/modal-common";
import FormPolicy from "./form-policy";

interface ModalLoginSnsProps {
  open: boolean;
  onClose: () => void;
  handleOpenModalLoginSucess: () => void;
}

const ModalLoginSns: React.FC<ModalLoginSnsProps> = ({
  open,
  onClose,
  handleOpenModalLoginSucess,
}) => {
  return (
    <ModalCommon open={open} onClose={onClose}>
      <FormPolicy onClose={onClose} handleOpenModalLoginSucess={handleOpenModalLoginSucess} />
    </ModalCommon>
  );
};

export default memo(ModalLoginSns);
