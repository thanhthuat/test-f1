import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import subtitlelogo2 from "public/image/logo/logo-2.png";
import subtitlelogo1 from "public/image/logo/logo-1.png";
import Image from "next/image";
interface IHeader {
  className?:string
}

const Header: React.FC<IHeader> = ({ className }) => {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const [isShowInputSearch, setIsShowInputSearch] = useState(false);

  return (
    <Box className={`header ${className} `}>
      <Box className="header__top">
        <Image src={subtitlelogo1} alt="" />
        <div className="header__top__login">
          <PermIdentityIcon />
          <span>Đăng nhập</span>
        </div>
      </Box>
      <Box className="header__center">
        <a className="header__center__logo" href="/">
          <Image src={subtitlelogo2} alt="" />
        </a>
      </Box>
      <Box className="header__bottom">
        {isShowSideBar ? (
          <CloseIcon
            onClick={() => setIsShowSideBar(!isShowSideBar)}
            className="header__bottom__menu"
          />
        ) : (
          <MenuIcon
            onClick={() => setIsShowSideBar(!isShowSideBar)}
            className="header__bottom__menu"
          />
        )}
        <Box className="header__bottom__navbar">
          <a className="header__bottom__navbar__link">Car talk</a>
          <a className="header__bottom__navbar__link">stock</a>
          <a className="header__bottom__navbar__link">real estate</a>
        </Box>
        {isShowInputSearch ? (
          <Box>
            <input onKeyDown={() => setIsShowInputSearch(!isShowInputSearch)} type="text" />
          </Box>
        ) : (
          <SearchIcon
            onClick={() => setIsShowInputSearch(!isShowInputSearch)}
            className="header__bottom__search"
          />
        )}
      </Box>
      <Box className="header__sidebar"></Box>
    </Box>
  );
};
export default Header;
