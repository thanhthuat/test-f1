import React from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { IresponeMovie } from "lib/models/interface";
import Link from "next/link";
import Box from "@mui/material/Box";
import img from "public/image/bg-carousel.jpg";
import Image from "next/image";
import apiConfig from "lib/api/apiConfig";
import { DateUtil } from "@utils/date.util";
interface CardWithAuthorProps {
  className?: string;
  isDes?: boolean;
  item?: IresponeMovie;
  sx?: SxProps<Theme>;
}
const CardWithAuthor: React.FC<CardWithAuthorProps> = ({ className = "", sx = {}, item }) => {
  return (
    <article className={`${className} clscardwithauthor`}>
      <Link href={`/detail/${item?.title}`}>
        <Box className="clscardwithauthor-content" sx={{ ...sx }}>
          <div className="clscardwithauthor-img">
            <Image
              src={item?.backdrop_path ? apiConfig.originalImage(item?.backdrop_path) : img}
              alt={item?.title || "img"}
              width="500"
              height="350"
            />
          </div>
          <div className="clscardwithauthor-author">
            <div className="clscardwithauthor-author__avatar">
              <img src="" alt="avatar" className="avatar" />
              <strong className="author"> ChoSun</strong>
            </div>
            <div className="clscardwithauthor-author__time">
              <p className="time">{DateUtil.formatShowDate(new Date())}</p>
            </div>
          </div>
          <div className="clscardwithauthor-title">
            <h5 className="clscardwithauthor-title__title">Overview everything you known</h5>
          </div>
          <div className="clscardwithauthor-des">
            <p className="clscardwithauthor-des__des">
              President Yoon Seok-youl on Wednesday agreed with U.S. President Joe Biden to shelve
              South Korea's own nuclear ambitions for some sway in deciding how American nuclear
              weapons are to be used in its defense against North Korea.
            </p>
          </div>
          <div className="clscardwithauthor-action">
            <p className="clscardwithauthor-action__action">Read more</p>
          </div>
        </Box>
      </Link>
    </article>
  );
};

export default CardWithAuthor;
