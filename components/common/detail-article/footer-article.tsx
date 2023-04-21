import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
interface FooterArticleProps {
  className?: string;
}

const FooterArticle: React.FC<FooterArticleProps> = ({ className = "" }) => {
  return (
    <div className={`${className} clsfooterarticle`}>
      <div className="clsfooterarticle-content">
        <div className="clsfooterarticle-author">
            <strong>Tuấn Hưng - Huy Đức</strong>
        </div>
        <div className="clsfooterarticle-action">
          <div className="clsfooterarticle-button">
            <div className="clsfooterarticle-back"> <ArrowBackIcon/> </div>
            <div className="clsfooterarticle-save"> <BookmarkBorderIcon/></div>
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
    </div>
  );
};

export default FooterArticle;
