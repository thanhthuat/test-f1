import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Box from "@mui/material/Box";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { SxProps, Theme } from "@mui/material/styles";
interface FooterArticleProps {
  className?: string;
  sx?: SxProps<Theme>;
}

const arr = ["News", "Faction", "Policy", "Sport"];
const FooterArticle: React.FC<FooterArticleProps> = ({ className = "", sx = {} }) => {
  return (
    <Box className={`${className} clsfooterarticle`} sx={{ ...sx }}>
      <div className="clsfooterarticle-content">
        <div className="clsfooterarticle-author">
          {/* <strong>Tuấn Hưng - Huy Đức</strong> */}
          <p>
            tag :<LocalOfferIcon />
          </p>
          <ul>
            {arr.map((item) => {
              return <li key={item}> {item}</li>;
            })}
          </ul>
          <p>
            <strong>Tuấn Hưng </strong>/ <span> 18</span>
          </p>
        </div>
        <div>
          <h3>Bai bao chinh</h3>
        </div>
        <div className="clsfooterarticle-action">
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
        </div>
      </div>
    </Box>
  );
};

export default FooterArticle;
