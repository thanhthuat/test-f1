import SearchBox from "@components/common/search/search";
import Box from "@mui/material/Box";
import React from "react";
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
interface HeaderSearchProps {
  sx?: {};
  className?: string;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({ className = "", sx = {} }) => {
  const router = useRouter();
  const [value, setValue] = React.useState("");
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
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

  return (
    <div className={` clsheadersearch`}>
      <Box sx={{ ...sx }}>
        <div className={` ${className} clsheadersearch-content`}>
          <div className={`clsheadersearch-left`}>
            <div className={`clsheadersearch-logo`}>
              <Link href={"/"}>
                <Image src={img} alt="logo"></Image>
              </Link>
              <div onClick={handleOpenMenu}>
                12345 <br /> 456
              </div>
            </div>
            <div className={`clsheadersearch-date`}>{DateUtil.formatShowDate(Date.now())}</div>
            <div className={`clsheadersearch-weather`}>
              <CarouselWeather />
            </div>
          </div>
          <div className="clsheadersearch-right">
            <SearchApi />
            {/* <SearchBox
              value={value}
              onChange={handleChange}
              onSubmit={handleSubmit}
              sx={{ with: "100%" }}
            /> */}
          </div>
        </div>
      </Box>
      <ul className={openMenu ? "clsheadersearch-menu active" : "clsheadersearch-menu"}>
        {data.map((item) => {
          return <li> {item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default HeaderSearch;
