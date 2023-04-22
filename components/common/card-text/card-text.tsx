import { IresponeMovie } from "lib/models/interface";
import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";

interface CardTextProps {
  className?: string;
  item?: IresponeMovie;
  sx?: SxProps<Theme>;
}

const CardText: React.FC<CardTextProps> = ({ className = "", item, sx = {} }) => {
  return (
    <article className={`${className} clsarticletext `}>
      <Link href={"/detail/d"}>
        <Box className="clsarticletext-content" sx={{ ...sx }}>
          <div className="clsarticletext-title">
            <h5>
              {item?.overview || "Nhiều quy định phòng cháy chữa cháy như trên trời rơi xuống"}
            </h5>
          </div>
          <div className="clsarticletext-summary__des"></div>
        </Box>
      </Link>
    </article>
  );
};

export default CardText;
