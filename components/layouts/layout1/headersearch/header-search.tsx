import SearchBox from "@components/common/search/search";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import img from "public/layout1/small-logo.png";
import Link from "next/link";
import Image from "next/image";
import { DateUtil } from "@utils/date.util";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import CarouselWeather from "@components/common/carousel-weather/carousel-weather";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import CaterogyList from "@components/common/slickCarousel/slickCarousel";
import { data } from "../header/data";
import SearchApi from "@components/common/search-api/search-api";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BasicModal from "@components/common/modal-signin/modal-signin";
import Button from "@mui/material/Button";
import ModalCommon from "@components/common/modal-common/modal-common";
import ModalLoginSns from "@components/common/modal-login-sns/modal-login-sns";
import ModalLoginSucess from "@components/common/modal-login-sucess/modal-login-sucess";
import Avatar from "@mui/material/Avatar";
interface HeaderSearchProps {
  sx?: {};
  className?: string;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({ className = "", sx = {} }) => {
  const router = useRouter();
  const [value, setValue] = React.useState("");
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const [openModalLogin, setopenModalLogin] = React.useState<boolean>(false);
  const [openModalSns, setOpenModalSns] = React.useState<boolean>(false);
  const [openModalLoginSucess, setOpenModalLoginSucess] = React.useState<boolean>(false);
  const [showLogin, setshowLogin] = React.useState<boolean>(true);
  const handleOpenModalLogin = () => {
    setopenModalLogin(true);
  };
  const handleCloseModalLogin = () => {
    setopenModalLogin(false);
    handleOpenModalSns();
  };
  const handleOpenModalSns = () => {
    setOpenModalSns(true);
  };
  const handleCloseModalSns = () => {
    setOpenModalSns(false);
  };

  //
  const handleOpenModalLoginSuccess = () => {
    setOpenModalLoginSucess(true);
  };
  const handleCloseModalLoginSuccess = () => {
    setOpenModalLoginSucess(false);
    setshowLogin(false);
  };
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
    e.preventDefault();
    if (value === "") return;
    router.push(`/search/${value}`);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (openMenu) handleOpenMenu();
  }, [router.query]);

  return (
    <div className={` clsheadersearch`}>
      <Box sx={{ ...sx }}>
        <div className={` ${className} clsheadersearch-content`}>
          <div className={`clsheadersearch-left`}>
            <div className={`clsheadersearch-logo`}>
              {/* <Link href={"/"}>
                <Image src={img} alt="logo"></Image>
              </Link> */}
              <div className="icon-burger" onClick={handleOpenMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
            <div className={`clsheadersearch-date`}>{DateUtil.formatShowDate(Date.now())}</div>
            <div className={`clsheadersearch-weather`}>
              <CarouselWeather />
            </div>
          </div>
          <div className="clsheadersearch-right">
            {showLogin ? (
              <Button onClick={handleOpenModalLogin}>Login | Sign-up</Button>
            ) : (
              <Link href={"/profile"}>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </Link>
            )}

            {openModalLogin && <BasicModal open={openModalLogin} onClose={handleCloseModalLogin} />}
            <ModalLoginSns
              open={openModalSns}
              onClose={handleCloseModalSns}
              handleOpenModalLoginSucess={handleOpenModalLoginSuccess}
            ></ModalLoginSns>
            {openModalLoginSucess && (
              <ModalLoginSucess
                open={openModalLoginSucess}
                onClose={handleCloseModalLoginSuccess}
              />
            )}
          </div>
        </div>
      </Box>
      <ul className={openMenu ? "clsheadersearch-menu active" : "clsheadersearch-menu"}>
        <div onClick={handleOpenMenu} className="clsheadersearch-close">
          <CloseIcon />
        </div>
        {data.map((item, index) => {
          return (
            <li className="clsheadersearch-menu__title" key={`${item.title}-${index}`}>
              <Link href={`/popular/${index}`} className=" clsheadersearch-menu__icon">
                {item.title}
                {item.submenu.length > 0 && <KeyboardArrowDownIcon />}
              </Link>
              {item.submenu.length > 0 && (
                <ul className="">
                  {item.submenu.map((item, index) => {
                    return (
                      <li className="clsheadersearch-menu__subtitle" key={`${item.title}-${index}`}>
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
    </div>
  );
};

export default HeaderSearch;
