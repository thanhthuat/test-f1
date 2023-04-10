import Image from "next/image";
import React from "react";

import imgLogo from "public/image/company/biz_ci.svg";
import Link from "next/link";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
type Props = {};

const CompanyFooter = (props: Props) => {
    const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },]
  return (
    <footer className="prefixfootercompany">
      <div className="prefixfootercompany-content">
        <div className="prefixfootercompany-logo">
          <Image src={imgLogo} alt="logo" />
        </div>

        <div className="prefixfootercompany-policy">
          <ul>
            <li>
              <span>Address: 5F Koreana Hotel, 135 Sejong-daero, Jung-gu, Seoul </span>
            </li>
            <li>
              <span>
                Internet newspaper registration number: Seoul A01175 (Date of registration: March
                19, 2010)
              </span>
            </li>
            <li>
              <span>Publisher: Chosun Biz Co., Ltd. </span>
            </li>
            <li>
              <span> Bang Jun-oh Editor: Youngsoo Kim</span>
            </li>
          </ul>
          <div className="prefixfootercompany-policy policy">
            <ul>
              <li>
                <a href=""> privacy policy</a>
                <span>Youth Protection Officer: Jin Gyo-il</span>
              </li>
              <li>
                <span>Copyright : Chosun Biz All rights reserved. </span>
              </li>
            </ul>
          </div>
          <div className="prefixfootercompany-about">
            <ul>
              <li>
                {" "}
                <Link href={"/"}> About Us</Link>
              </li>
              <li>
                {" "}
                <Link href={"/"}> Recruitment</Link>
              </li>
              <li>
                {" "}
                <Link href={"/"}>Advertising Guide</Link>
              </li>
              <li>
                {" "}
                <Link href={"/"}> business inquiry</Link>
              </li>
              <li>
                {" "}
                <Link href={"/"}> Reader participation and reporting</Link>
              </li>
            </ul>
            <div>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                size="small"
                options={top100Films}
                sx={{ width: "181px", height: "37px" }}
                renderInput={(params) => <TextField {...params} label="Select" />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="prefixfootercompany-content-ismobile" >
                <div >   <Link href={"/"}> privacy policy</Link> </div>
                <div className="prefixfootercompany-content-ismobile__coppyright"> <p> Copyright Chosun Biz All rights reserved.</p> </div>
      </div>
    </footer>
  );
};

export default CompanyFooter;
