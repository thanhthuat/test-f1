import Image from "next/image";
import React from "react";
import img from "public/image/bg-carousel.jpg";
import Link from "next/link";
import { IresponeMovie } from "lib/models/interface";
import apiConfig from "lib/api/apiConfig";
import { SxProps, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
interface ICardRowProps {
  item: IresponeMovie;
  isdes?: boolean;
  isAuthor?: boolean;
  isImg?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
}

const CardRow: React.FC<ICardRowProps> = ({
  item,
  isdes = true,
  isImg = true,
  className = "",
  sx = {},
  isAuthor = false,
}) => {
  return (
    <article className={`${className} clsarticle`}>
      <Link href={"/detail/123"}>
        <Box className="clsarticle-content" sx={{ ...sx }}>
          {isImg &&
            item?.backdrop_path &&(
              <div className="clsarticle-img">
                {/* <Image src={img} alt="123" /> */}
                <Image
                  src={item?.backdrop_path ? apiConfig.originalImage(item?.backdrop_path) : img}
                  alt={item?.title || "img"}
                  width="500"
                  height="350"
                />
              </div>
            )}

          <div className="clsarticle-summary">
            <div className="clsarticle-summary__title">
              <h5>{item?.title}</h5>
            </div>
            <div className="clsarticle-summary__des">{isdes && <p>{item?.overview}</p>}</div>
            {isAuthor && (
              <div className="clsarticletitletop-category">
                <span className="clsarticletitletop-category__author">
                  <PersonIcon sx={{ paddingRight: "2px", width: "20px", height: "20px" }} />
                  {item?.original_title.slice(0, 10)}
                </span>
                <span className="clsarticletitletop-category__time">
                  <CalendarMonthIcon sx={{ paddingRight: "2px", width: "20px", height: "20px" }} />{" "}
                  {item?.release_date}
                </span>
              </div>
            )}
          </div>
        </Box>
      </Link>
    </article>
  );
};

export default CardRow;
