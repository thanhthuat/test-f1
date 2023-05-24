import React from "react";
import { data } from "./introduce/data";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
type Props = {};

const HeaderCompany = (props: Props) => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="clsheadercompany">
      <header className="clsheadercompany-content containerlayout1">
        <div className="clsheadercompany-logo">
          <Link href={"/"}>
            <img src="/layout1/small-logo.png" alt="logo"></img>
          </Link>
        </div>
        <nav className="clsheadercompany-menu">
          <div className="icon-burger" onClick={handleOpenMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className="isdesktop">
            {data.map((item, index) => {
              return (
                <li className="clsheadercompany-item" key={`${item.title}-${index}`}>
                  {item.title}
                  {item.submenu.length > 0 && (
                    <ul className="clsheadercompany-submenu">
                      {item.submenu.length > 0 &&
                        item.submenu.map((item, index) => {
                          return (
                            <li
                              className="clsheadercompany-submenu__item"
                              key={`${item.title}-${index}`}
                            >
                              {item.title}
                            </li>
                          );
                        })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <ul className={openMenu ? "ismobile active" : "ismobile"}>
            <div>
              <img src="/layout1/small-logo.png" alt="logo"></img>
              <div className="icon-burger" onClick={handleOpenMenu}>
                <CloseIcon />
              </div>
            </div>

            {data.map((item, index) => {
              return (
                <li className="clsheadercompany-itemmobile" key={`${item.title}-${index}`}>
                  <Link href={`${item.title}`}>
                    {item.title}
                    {item.submenu.length > 0 && <KeyboardArrowDownIcon />}
                  </Link>

                  {item.submenu.length > 0 && (
                    <ul className="clsheadercompany-submenumobile">
                      {item.submenu.length > 0 &&
                        item.submenu.map((item, index) => {
                          return (
                            <li
                              className="clsheadercompany-submenumobile__item"
                              key={`${item.title}-${index}`}
                            >
                              {item.title}
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
      <div className={openMenu ? "bgmenu active" : ""} onClick={handleOpenMenu}></div>
    </div>
  );
};

export default HeaderCompany;
