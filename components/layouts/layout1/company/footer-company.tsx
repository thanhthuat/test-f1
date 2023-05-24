import React from "react";

type Props = {};

const FooterCompany = (props: Props) => {
  return (
    <div className="clsfootercompany">
      <footer className="clsfootercompany-content containerlayout1">
        <div className="clsfootercompany-coppyright">
          <p>Copyright ⓒ 언론사명 All rights reserved.</p>
        </div>
        <div className="clsfootercompany-coppyright">
          <p>
            서울특별시 중구 충무로 29 아시아미디어타워 10-11층 <br />
            Tel. 02) 2200-2114 Fax 02) 2200-2115
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterCompany;
