import Image from "next/image";
import React from "react";
import img from "public/layout1/small-logo.png";
import Link from "next/link";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import { data } from "../header/data";
interface FooterLayout1Props {
  className?: string;
}

const FooterLayout1: React.FC<FooterLayout1Props> = ({ className }) => {
  return (
    <footer className={`${className} clsfooterlayout1  mt-40`}>
      <div className="clsfooterlayout1-content">
        <div className="clsfooterlayout1-body">
          <div className="clsfooterlayout1-logo">
            <Link href={"/"}>
              <Image src={img} alt="logo" />
            </Link>
            <div className="clsfooterlayout1-logo__information  mt-2">
              <p>
                사이트 설명글 회사소개 <br /> 페이지에서 텍스트 출력 4줄까지
                <br /> 출력 / 4줄 이상은 …으로 표시 … 끝에 <br />
                [더보기] 클릭하면 페이지 이동
              </p>
            </div>
            <div className="clsfooterlayout1-logo__contact mt-1">
              <p className="bold mb-1"> NEWS INFO</p>
              <ul>
                <li>Email : thanh @gmail.com</li>
                <li>Adress: 29/9/3 ward</li>
                <li>Phone: 0974747443</li>
                <li>Face: thanh mai</li>
              </ul>
            </div>
            <div className="clsfooterlayout1-logo__social mt-1">
              <ul>
                <li>F</li>
                <li>T</li>
                <li>G</li>
                <li>R</li>
              </ul>
            </div>
          </div>
          <div className="clsfooterlayout1-other">
            <div className="clsfooterlayout1-header">
              <p className="bold">CENTER</p>
            </div>

            <ul className="clsfooterlayout1-other__policy mt-2">
              <li>Giới thiệu tòa soạn báo </li>
              <li>
                <b>Chính sách bảo mật thông tin cá nhân</b>
              </li>
              <li> Chính sách bảo hộ thanh thiếu niên </li>
              <li> Từ chối thu thập email </li>
              <li> Quảng cáo, hợp tác</li>
              <li>Cung cấp tin </li>
              <li>Hỏi đáp</li>
            </ul>
          </div>
          <div className="clsfooterlayout1-category">
            <div className="clsfooterlayout1-header">
              <p className="bold">CATEGORIES</p>
            </div>
            <ul className="mt-2">
              {data.map((item, index) => {
                return <li key={index}>{item.title}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="clsfooterlayout1-coppyright">
          <p>
            OOOO의 모든 콘텐츠(영상,기사, 사진)는 저작권법의 보호를 받은바, 무단 전재와 복사, 배포
            등을 금합니다.
          </p>
        </div>
        <div className="clsfooterlayout1-license">
          <p className="clsfooterlayout1-license__left">
            Copyright © 2021 LINENEWS. All rights reserved. LINEADD.
          </p>
          <a
            className="clsfooterlayout1-license__linkcompany"
            href="https://lineadd.co.kr/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            POWERED <br /> BY LINEADD
          </a>
        </div>
        {/* <div className="clsfooterlayout1-contact">
          <div className="clsfooterlayout1-logo">
            <p className="mr-1"> Báo điện tử</p>
            <Link href={"/"}>
              <Image src={img} alt="logo" />
            </Link>
          </div>
          <div className="clsfooterlayout1-social">
            <p>
              <span className="clsfooterlayout1-social__rss"> RSS</span>
              Theo dõi Hotmagazine trên
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
              <span>© 1997-2023.</span> Toàn bộ bản quyền thuộc Hotmagazine
            </p>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default FooterLayout1;
