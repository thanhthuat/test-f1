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
const CardWithAuthorRow: React.FC<CardWithAuthorProps> = ({ className = "", sx = {}, item }) => {
  return (
    <article className={`${className} clscardwithauthorrow`}>
      <Link href={`/detail/${item?.title}`}>
        <Box className="clscardwithauthorrow-content" sx={{ ...sx }}>
          <div className="clscardwithauthorrow-img">
            <Image
              src={item?.backdrop_path ? apiConfig.originalImage(item?.backdrop_path) : img}
              alt={item?.title || "img"}
              width="500"
              height="350"
            />
          </div>
          <div>
            <div className="clscardwithauthorrow-author">
              <div className="clscardwithauthorrow-author__avatar">
                <img src="" alt="avatar" className="avatar" />
                <strong className="author"> ChoSun</strong>
              </div>
              <div className="clscardwithauthorrow-author__time">
                <p className="time">{DateUtil.formatShowDate(new Date())}</p>
              </div>
            </div>
            <div className="clscardwithauthorrow-title">
              <h5 className="clscardwithauthorrow-title__title">Overview everything you known</h5>
            </div>
            <div className="clscardwithauthorrow-des">
              <p className="clscardwithauthorrow-des__des">
                President Yoon Seok-youl on Wednesday agreed with U.S. President Joe Biden to shelve
                South Korea's own nuclear ambitions for some sway in deciding how American nuclear
                weapons are to be used in its defense against North Korea.
              </p>
            </div>
            <div className="clscardwithauthorrow-action">
              <p className="clscardwithauthor-action__action">Read more</p>
            </div>
          </div>
        </Box>
      </Link>
    </article>
  );
};

export default CardWithAuthorRow;
