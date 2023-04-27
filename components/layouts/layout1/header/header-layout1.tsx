import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { data } from "./data";
import img from "public/layout1/small-logo.png";
import SearchBox from "@components/common/search/search";
import HeaderSearch from "../headersearch/header-search";
import HomeIcon from "@mui/icons-material/Home";
type Props = {};

const HeaderLayout1 = (props: Props) => {
  const [rotate, setRotate] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const showNavbar = () => {
    navRef?.current!.classList.toggle("responsive_nav");
  };
  useEffect(() => {
    if (rotate) {
      document.body.classList.add("disable-scrolling");
    } else {
      document.body.classList.remove("disable-scrolling");
    }
    return () => {};
  }, [rotate]);
  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef?.current!.classList.add("shrink");
      } else {
        if (headerRef?.current != null) headerRef?.current!.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div className="clsheaderlayou1" ref={headerRef}>
      <header className="clsheaderlayou1-content containerlayout1">
        <div className="clsheaderlayou1-logo">
          <Link href={"/"}>
            <HomeIcon />
          </Link>
        </div>
        <nav className="clsheaderlayou1-parent">
          <input type="checkbox" id="nav-toggle" onClick={() => setRotate(!rotate)} />
          <label htmlFor="nav-toggle" className="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
          <ul className="isdesktop">
            {data.map((item, index) => {
              return (
                <li className="clsheaderlayou1-item" key={`${item.title}-${index}`}>
                  <Link href={`/popular/${index}`}>{item.title}</Link>
                  <ul className="clsheaderlayou1-submenu">
                    {item.submenu.map((item, index) => {
                      return (
                        <li
                          className="clsheaderlayou1-submenu__item"
                          key={`${item.title}-${index}`}
                        >
                          <Link href={`/category/${index}`}>{item.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>

          <div className="ismobile">
            <label htmlFor="nav-toggle" className="ismobile-bg"></label>
            <ul className="ismobile-content">
              {data.map((item, index) => {
                return (
                  <li className="ismobile-category" key={`${item.title}-${index}`}>
                    <label htmlFor="nav-toggle">
                      <Link href={`/popular/${index}`} className="ismobile-category__title">
                        {item.title}
                      </Link>
                    </label>

                    <ul className="">
                      {item.submenu.map((item, index) => {
                        return (
                          <label htmlFor="nav-toggle" key={`${item.title}-${index}`}>
                            <li className="">
                              <Link href={`/category/${index}`}>{item.title}</Link>
                            </li>
                          </label>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderLayout1;
