import Box from "@mui/material/Box";
import React, { useEffect, useRef, useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import subtitlelogo2 from "public/image/logo/logo-2.png";
import subtitlelogo1 from "public/image/logo/logo-1.png";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import { fetchCategories } from "lib/redux/category/category.action";
import { TypeCategories, TypechildCategories } from "lib/models/interface";
interface IHeader {
  className?: string;
}

const Header: React.FC<IHeader> = ({ className }) => {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const [isShowInputSearch, setIsShowInputSearch] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef: any = useRef({});

  const { categories, status } = useAppSelector((state) => state.categories);

  const dispath = useAppDispatch();
  useEffect(() => {
    if (categories.length === 0) {
      dispath(fetchCategories());
    }
  }, []);

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
    <Box ref={headerRef} className={`header ${className}`}>
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
            <Link href="/">
              <Image src={subtitlelogo2} alt="" />
            </Link>
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
        <Link href={"/company"}>
          <Image src={subtitlelogo1} alt="" />
        </Link>

        <div className="header__top__login">
          <PermIdentityIcon />
          <span>Đăng nhập </span>
        </div>
      </Box>
      <Box className={`header__center`}>
        <Link className="header__center__logo" href="/">
          <Image src={subtitlelogo2} alt="" />
        </Link>
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
          {categories &&
            categories.map((item: TypeCategories) => (
              <div className="item" key={item?.category_id}>
                <Link className="item__link" href={"/category/" + item?.slug}>
                  {item?.category_name}

                  {item?.children.length > 0 && (
                    <ul className="sub-menu">
                      {item?.children.map((childItem: TypechildCategories) => (
                        <li key={childItem?.category_id}>
                          <Link href={`./${childItem?.slug}`}>{childItem?.category_name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </Link>
                {item?.children.length > 0 && <KeyboardArrowDownIcon />}
              </div>
            ))}
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
      {/* sub-menu */}
      {isShowSideBar && (
        <Box className={`header__side-menu ${isSticky ? "fixed" : "absolute"}`}>
          <ul>
            {categories &&
              categories.map((item: TypeCategories) => (
                <li key={item?.category_id} className="item">
                  <Link className="item__link" href={`/category/${item?.slug}`}>
                    <span>{item?.category_name}</span>
                    {item?.children.length > 0 && (
                      <ul className="sub-menu">
                        {item?.children.map((childItem: TypechildCategories) => (
                          <Link key={childItem?.category_id} href={`./${childItem?.slug}`}>
                            {childItem?.category_name}
                          </Link>
                        ))}
                      </ul>
                    )}
                  </Link>
                  {item?.children.length > 0 && <ChevronRightIcon />}
                </li>
              ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};
export default Header;
