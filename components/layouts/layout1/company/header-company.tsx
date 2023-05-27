import React, { useEffect } from "react";
import { data } from "./introduce/data";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Drawer from "@mui/material/Drawer";
import { useRouter } from "next/router";
type Props = {};

const HeaderCompany = (props: Props) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const [state, setState] = React.useState(false);
  const handleOpenDrawer = () => {
    setState(true);
  };
  useEffect(() => {
    if (state) setState(false);
  }, [router.query]);
  return (
    <div className="clsheadercompany">
      <header className="clsheadercompany-content containerlayout1">
        <div className="clsheadercompany-logo">
          <Link href={"/"}>
            <img src="/layout1/small-logo.png" alt="logo"></img>
          </Link>
        </div>
        <nav className="clsheadercompany-menu">
          <div className="icon-burger" onClick={handleOpenDrawer}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {/* <ul className="isdesktop">
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
          </ul> */}
          <Drawer
            anchor={"right"}
            open={state}
            onClose={() => {
              setState(false);
            }}
            PaperProps={{
              sx: {
                width: {
                  sm: "350px",
                  sx: "80%",
                },
              },
            }}
          >
            <ul className={openMenu ? "ismobile active" : "ismobile"}>
              <div>
                <img src="/layout1/small-logo.png" alt="logo"></img>
                <div
                  className="icon-burger"
                  onClick={() => {
                    setState(false);
                  }}
                >
                  <CloseIcon />
                </div>
              </div>

              {data.map((item, index) => {
                return (
                  <li className="clsheadercompany-itemmobile" key={`${item.title}-${index}`}>
                    {/* <Link href={`${item.title}`}>
                    {item.submenu.length > 0 && <KeyboardArrowDownIcon />}
                  </Link> */}
                    <Accordion sx={{ boxShadow: "unset" }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography> {item.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {item.submenu.length > 0 && (
                          <ul className="clsheadercompany-submenumobile">
                            {item.submenu.length > 0 &&
                              item.submenu.map((item, index) => {
                                return (
                                  <Link
                                    className="clsheadercompany-submenumobile__item"
                                    key={`${item.title}-${index}`}
                                    href={`/company/${item.url}`}
                                  >
                                    {item.title}
                                  </Link>
                                );
                              })}
                          </ul>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  </li>
                );
              })}
            </ul>
          </Drawer>
        </nav>
      </header>
      <div className={openMenu ? "bgmenu active" : ""} onClick={handleOpenMenu}></div>
    </div>
  );
};

export default HeaderCompany;
