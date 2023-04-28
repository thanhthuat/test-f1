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
interface HeaderSearchProps {
  sx?: {};
  className?: string;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({ className = "", sx = {} }) => {
  const router = useRouter();
  const [value, setValue] = React.useState("");
  const [showSearch, setShowSearch] = React.useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
    e.preventDefault();
    if (value === "") return;
    router.push(`/search/${value}`);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={`${className} clsheadersearch`}>
      <Box sx={{ ...sx }}>
        <div className={`clsheadersearch-content`}>
          <div className={`clsheadersearch-left`}>
            <div className={`clsheadersearch-logo`}>
              <Link href={"/"}>
                <Image src={img} alt="logo"></Image>
              </Link>
            </div>
            <div className={`clsheadersearch-date`}>{DateUtil.formatShowDate(Date.now())}</div>
            <div className={`clsheadersearch-weather`}>
              <CarouselWeather />
            </div>
          </div>
          <div className="clsheadersearch-right">
            <SearchBox
              value={value}
              onChange={handleChange}
              onSubmit={handleSubmit}
              sx={{ with: "100%" }}
            />
           
          </div>
        </div>
      </Box>
    </div>
  );
};

export default HeaderSearch;
