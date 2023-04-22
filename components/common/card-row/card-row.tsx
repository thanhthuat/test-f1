import Image from "next/image";
import React from "react";
import img from "public/image/bg-carousel.jpg";
import Link from "next/link";
import { IresponeMovie } from "lib/models/interface";
import apiConfig from "lib/api/apiConfig";
import { SxProps, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
interface ICardRowProps {
  item: IresponeMovie;
  isdes?: boolean;
  isImg?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
}

const CardRow: React.FC<ICardRowProps> = ({ item, isdes = true, isImg = true, className = "",sx = {} }) => {
  return (
    <article className={`${className} clsarticle`}>
      <Link href={"/detail/123"}>
        <Box className="clsarticle-content" sx={{ ...sx }}>
          {isImg && (
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
          </div>
        </Box>
      </Link>
    </article>
  );
};

export default CardRow;
