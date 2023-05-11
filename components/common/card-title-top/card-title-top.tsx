import Image from "next/image";
import React from "react";

import img from "public/image/bg.png";
import Link from "next/link";
import { IresponeMovie } from "lib/models/interface";
import apiConfig from "lib/api/apiConfig";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
interface CardTitleTopProps {
  className?: string;
  item: IresponeMovie;
  sx?: SxProps<Theme>;
}
const CardTitleTop: React.FC<CardTitleTopProps> = ({ className = "", item, sx = {} }) => {
  return (
    <article className={`${className} clsarticletitletop`}>
      <Link href={"/detail/d"}>
        <Box className="clsarticletitletop-content" sx={{ ...sx }}>
          <div className="clsarticletitletop-title">
            <h3>{item?.title}</h3>
          </div>
          <div className="clsarticletitletop-body">
            {item?.backdrop_path && (
              <div className="clsarticletitletop-image">
                <Image
                  src={item?.backdrop_path ? apiConfig.originalImage(item?.backdrop_path) : img}
                  alt={item?.title || "img"}
                  width="1500"
                  height="750"
                />
              </div>
            )}

            <div className="clsarticletitletop-des">
              <p>{item?.overview}</p>
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
            </div>
          </div>
        </Box>
      </Link>
    </article>
  );
};

export default CardTitleTop;
