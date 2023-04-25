import Image from "next/image";
import React from "react";
import img from "public/layout1/small-logo.png";
import Link from "next/link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
interface FooterLayout1Props {
  className?: string;
}

const FooterLayout1: React.FC<FooterLayout1Props> = ({ className }) => {
  return (
    <footer className={`${className} clsfooterlayout1 containerlayout1 mt-40`}>
      <div className="clsfooterlayout1-content">
        <div className="clsfooterlayout1-contact">
          <div className="clsfooterlayout1-logo">
            <p className="mr-1"> Báo điện tử</p>
            <Link href={"/"}>
              <Image src={img} alt="logo" />
            </Link>
          </div>
          <div className="clsfooterlayout1-social">
            <p>
              <span className="clsfooterlayout1-social__rss"> RSS</span>
              Theo dõi VnExpress trên
              <span className="clsfooterlayout1-social__icon">
                <YouTubeIcon />
              </span>
              <span className="clsfooterlayout1-social__icon">
                <FacebookIcon />
              </span>
              <span className="clsfooterlayout1-social__icon">
                <TelegramIcon />
              </span>
            </p>
          </div>
        </div>
        <div className="clsfooterlayout1-copyright">
          <div className="clsfooterlayout1-logo1">
            <p>
              {" "}
              <strong>Báo tiếng Việt nhiều người xem nhất</strong> <br />
              <span>Thuộc Bộ Khoa học Công nghệ Số giấy phép:</span> 548/GP-BTTTT ngày 24/08/2021
            </p>
          </div>
          <div className="clsfooterlayout1-address">
            <p>
              <span> Tổng biên tập:</span> Phạm Hiếu <br />
              Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng, Cầu Giấy, Hà Nội{" "}
              <br />
              <span> Điện thoại:</span> 024 7300 8899 - máy lẻ 4500
            </p>
          </div>
          <div className="clsfooterlayout1-license">
            <p>
              {" "}
              <span>© 1997-2023.</span> Toàn bộ bản quyền thuộc VnExpress
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout1;
