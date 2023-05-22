import React from "react";
import ModalCommon from "../modal-common/modal-common";
import Link from "next/link";

interface ModalLoginSucess {
  open: boolean;
  onClose: () => void;
}

const ModalLoginSucess: React.FC<ModalLoginSucess> = ({ open, onClose }) => {
  return (
    <ModalCommon open={open} onClose={onClose}>
      <div className="clsloginsucess">
        <div className="clsloginsucess-content">
          <img className="clspolicy-header__logo" src="/layout1/small-logo.png" alt=" logo" />
          <h2 className="clsloginsucess-title">
            <b> 환영합니다!</b>
          </h2>
          <p className="clsloginsucess-description">언론사명 가입이 완료되었습니다</p>

          <button className="clsloginsucess-btnstart" onClick={onClose}>
            <Link href="/">시작하기 </Link>
          </button>
          <div className="clspolicy-coppyright">
            <p>이용약관 개인정보처리방침</p>
            <p>© 언론사명. All rights reserved.</p>
          </div>
        </div>
      </div>
    </ModalCommon>
  );
};

export default ModalLoginSucess;
