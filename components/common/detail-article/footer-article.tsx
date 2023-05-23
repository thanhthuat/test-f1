import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Box from "@mui/material/Box";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { SxProps, Theme } from "@mui/material/styles";
import Link from "next/link";
import CardText from "../card-text/card-text";
import BoxCategory from "../box-category/box-category";
import CardRow from "../card-row/card-row";
import { useAppSelector } from "@hook/hooks";
import CarouselStory from "../carousel-story/carousel-story";
import CarouselWeather from "../carousel-weather/carousel-weather";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
interface FooterArticleProps {
  className?: string;
  sx?: SxProps<Theme>;
}
//While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.
const arr1 = [
  { overview: " While working underground" },
  { overview: "While working underground to fix a water main" },
  { overview: " Brooklyn plumbers—and brothers—Mario and Luigi" },
  { overview: "Luigi are transported down a mysterious pipe" },
  { overview: "Luigi are transported down a mysterious pipe" },
];
const arr = ["News", "Faction", "Policy", "Sport"];
const FooterArticle: React.FC<FooterArticleProps> = ({ className = "", sx = {} }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <Box className={`${className} clsfooterarticle`} sx={{ ...sx }}>
      <div className="clsfooterarticle-content">
        <div className="clsfooterarticle-author">
          {/* <strong>Tuấn Hưng - Huy Đức</strong> */}
          <div className="clsfooterarticle-author__tag">
            <LocalOfferIcon /> Tags :
            <ul>
              {arr.map((item, index) => {
                return (
                  <Link href={`/search/${item}`} key={`${item}-${index}`}>
                    <li className="clsfooterarticle-author__tagitem">{item}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          {/* <div style={{ width: "800px" }}>
            <CarouselStory array={topmovie.slice(0, 5)} className="carouseldetail" />
          </div> */}
          <p className="clsfooterarticle-author__post">
            <strong>Tuấn Hưng </strong>/<span className="clsfooterarticle-author__active"> 18</span>
          </p>
        </div>
        <div className="clsfooterarticle-author__relatenew">
          <h3 className="clsfooterarticle-author__relatenew-title">Bài báo chính</h3>
          <BoxCategory>
            {topmovie.slice(0, 5).map((item) => (
              <CardRow item={item} key={item.title} isImg={false} />
            ))}
          </BoxCategory>
        </div>

        {/* <div className="clsfooterarticle-action">
          <div className="clsfooterarticle-button">
            <div className="clsfooterarticle-back">
              {" "}
              <ArrowBackIcon />{" "}
            </div>
            <div className="clsfooterarticle-save">
              {" "}
              <BookmarkBorderIcon />
            </div>
          </div>
          <div className="clsfooterarticle-social">
            <p className="clsfooterarticle-social__content">
              <span className="clsfooterarticle-social__rss"> Share</span>
              <span className="clsfooterarticle-social__icon">
                <YouTubeIcon />
              </span>
              <span className="clsfooterarticle-social__icon">
                <FacebookIcon />
              </span>
              <span className="clsfooterarticle-social__icon">
                <TelegramIcon />
              </span>
            </p>
          </div>
        </div> */}
      </div>
    </Box>
  );
};

export default FooterArticle;
