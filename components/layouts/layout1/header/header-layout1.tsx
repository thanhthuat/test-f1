import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { data } from "./data";
import img from "public/layout1/small-logo.png";
import SearchBox from "@components/common/search/search";
import HeaderSearch from "../headersearch/header-search";
import HomeIcon from "@mui/icons-material/Home";
import { useWindowDimensions } from "@hook/hooks";
type Props = {};

const HeaderLayout1 = (props: Props) => {
  const [rotate, setRotate] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const size = useWindowDimensions();
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
    if (size?.width! > 1100) {
      setRotate(false);
    }
  }, [size]);
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
      <header className="clsheaderlayou1-content ">
        <nav className="clsheaderlayou1-parent">
          {/* <input type="checkbox" id="nav-toggle" onClick={() => setRotate(!rotate)} /> */}
          <ul className="isdesktop">
            {data.map((item, index) => {
              return (
                <li className="clsheaderlayou1-item" key={`${item.title}-${index}`}>
                  <Link href={`/popular/${index}`}>{item.title}</Link>
                  {item.submenu.length > 0 && (
                    <ul className="clsheaderlayou1-submenu">
                      {item.submenu.length > 0 &&
                        item.submenu.map((item, index) => {
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
                  )}
                </li>
              );
            })}
          </ul>

        
        </nav>
      </header>
    </div>
  );
};

export default HeaderLayout1;
