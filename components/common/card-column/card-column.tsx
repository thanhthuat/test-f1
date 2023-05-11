import Image from "next/image";
import React from "react";
import img from "public/image/bg-carousel.jpg";
import Link from "next/link";
import Box from "@mui/material/Box";
import { IresponeMovie } from "lib/models/interface";
import apiConfig from "lib/api/apiConfig";
import { SxProps, Theme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
interface CardColumnProps {
  className?: string;
  isDes?: boolean;
  item: IresponeMovie;
  sx?: SxProps<Theme>;
  isAuthor?: boolean;
}

const CardColumn: React.FC<CardColumnProps> = ({
  className = "",
  isDes = true,
  item,
  sx = {},
  isAuthor = false,
}) => {
  return (
    <article className={`${className} clscardcolumn`}>
      <Link href={`/detail/${item?.title}`}>
        <Box className="clscardcolumn-content" sx={{ ...sx }}>
          {item?.backdrop_path && (
            <div className="clscardcolumn-img">
              <Image
                src={item?.backdrop_path ? apiConfig.originalImage(item?.backdrop_path) : img}
                alt={item?.title || "img"}
                width="500"
                height="350"
              />
            </div>
          )}

          <div className="clscardcolumn-des">
            <div className="clscardcolumn-title">
              <h5 className="clscardcolumn-title__title">{item?.title}</h5>
            </div>
            <div className="clscardcolumn-title__sumary">{isDes && <p> {item?.overview}</p>}</div>
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

export default CardColumn;
