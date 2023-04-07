import Box from "@mui/material/Box";
import React, { useEffect, useRef, useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import subtitlelogo2 from "public/image/logo/logo-2.png";
import subtitlelogo1 from "public/image/logo/logo-1.png";
import Image from "next/image";
import { log } from "console";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
interface IHeader {
  className?: string;
}

const Header: React.FC<IHeader> = () => {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const [isShowInputSearch, setIsShowInputSearch] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef: any = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > headerRef.current.clientHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box ref={headerRef} className={`header`}>
      <Box className={`header__scroll ${isSticky ? "sticky" : "hide"}`}>
        <Box className={`nav`}>
          <Box className="nav__menu">
            {isShowSideBar ? (
              <CloseIcon onClick={() => setIsShowSideBar(!isShowSideBar)} />
            ) : (
              <MenuIcon onClick={() => setIsShowSideBar(!isShowSideBar)} />
            )}
          </Box>

          <Box className={`nav__logo`}>
            <a href="/">
              <Image src={subtitlelogo2} alt="" />
            </a>
          </Box>

          {isShowInputSearch ? (
            <Box className="nav__search-input">
              <input onKeyDown={() => setIsShowInputSearch(!isShowInputSearch)} type="text" />
            </Box>
          ) : (
            <SearchIcon onClick={() => setIsShowInputSearch(!isShowInputSearch)} />
          )}
        </Box>
      </Box>

      <Box className="header__top">
        <Image src={subtitlelogo1} alt="" />
        <div className="header__top__login">
          <PermIdentityIcon />
          <span>Đăng nhập </span>
        </div>
      </Box>
      <Box className={`header__center`}>
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
      {isShowSideBar && (
        <Box className={`header__side-menu ${isSticky ? "fixed" : "absolute"}`}>
          <ul>
            <li className="item">
              <a href="#">Car톡</a>
            </li>
            <li className="item">
              <a className="item__link" href="#">
                <span>Car톡</span>
                <ul className="sub-menu">
                  <a href="#">Car톡</a>
                  <a href="#">Car톡</a>
                  <a href="#">Car톡</a>
                </ul>
              </a>
              <ChevronRightIcon />
            </li>
            <li className="item">
              <a className="item__link" href="#">
                <span>Car톡</span>
                <ul className="sub-menu">
                  <a href="#">Car톡</a>
                  <a href="#">Car톡</a>
                  <a href="#">Car톡</a>
                </ul>
              </a>
              <ChevronRightIcon />
            </li>
            <li className="item">
              <a className="item__link" href="#">
                <span>Car톡</span>
                <ul className="sub-menu">
                  <a href="#">Car톡</a>
                  <a href="#">Car톡</a>
                  <a href="#">Car톡</a>
                </ul>
              </a>
              <ChevronRightIcon />
            </li>
            <li className="item">
              <a className="item__link" href="#">
                <span>Car톡</span>
                <ul className="sub-menu">
                  <a href="#">Car톡</a>
                  <a href="#">Car톡</a>
                  <a href="#">Car톡</a>
                </ul>
              </a>
              <ChevronRightIcon />
            </li>
            <li className="item">
              <a className="item__link" href="#">
                Car톡
              </a>
            </li>
          </ul>
        </Box>
      )}
    </Box>
  );
};
export default Header;
