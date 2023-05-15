import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "public/layout1/small-logo.png";
import SearchApi from "@components/common/search-api/search-api";
type Props = {};
const HeaderLogo = () => {
  return (
    <div className="clsheaderlogo">
      <div className="clsheaderlogo-content containerlayout1 ">
        <Link href={"/"}>
          <Image src={img} alt="logo"></Image>
        </Link>
        <div className="clsheaderlogo-search">
          <SearchApi />
        </div>
      </div>
    </div>
  );
};

export default HeaderLogo;
