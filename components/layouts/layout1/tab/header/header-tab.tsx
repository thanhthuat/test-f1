import Link from "next/link";
import React from "react";

type Props = {};

const HeaderTab = (props: Props) => {
  return (
    <div className="clstabheader">
      <ul className="clstabheader-content">
        <li className="clstabheader-item">
          <Link href={"/category/kd"}> Kinh doanh</Link>
        </li>
        <li className="clstabheader-item">
          {" "}
          <Link href={"/category/dn"}>Doanh nghiệp</Link>
        </li>
        <li className="clstabheader-item">
          {" "}
          <Link href={"/category/ck"}>Chứng khoán</Link>
        </li>
        <li className="clstabheader-item">
          {" "}
          <Link href={"/category/bds"}> Bất động sản</Link>
        </li>
        <li className="clstabheader-item">
          {" "}
          <Link href={"/category/htkd"}> Hậu trường kinh doanh</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTab;
