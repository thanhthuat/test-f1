import Image from "next/image";
import React from "react";
import img from "public/image/bg-carousel.jpg";
import Link from "next/link";
import Box from "@mui/material/Box";
import { IresponeMovie } from "lib/models/interface";
import apiConfig from "lib/api/apiConfig";
import { SxProps, Theme } from "@mui/material/styles";
interface CardColumnProps {
  classname?: string;
  isDes?: boolean;
  item: IresponeMovie;
  sx?: SxProps<Theme>;
}

const CardColumn: React.FC<CardColumnProps> = ({ classname = "", isDes = true, item, sx = {} }) => {
  return (
    <article className={`${classname} clscardcolumn`}>
      <Link href={`/detail/${item?.title}`}>
        <Box className="clscardcolumn-content" sx={{ ...sx }}>
          <div className="clscardcolumn-img">
            <Image
              src={item?.backdrop_path ? apiConfig.originalImage(item?.backdrop_path) : img}
              alt={item?.title || "img"}
              width="500"
              height="350"
            />
          </div>
          <div className="clscardcolumn-des">
            <div className="clscardcolumn-title">
              <h5 className="clscardcolumn-title__title">{item?.title}</h5>
            </div>
            <div className="clscardcolumn-title__sumary">{isDes && <p> {item?.overview}</p>}</div>
          </div>
        </Box>
      </Link>
    </article>
  );
};

export default CardColumn;
