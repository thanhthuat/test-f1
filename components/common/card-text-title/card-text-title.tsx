import { IresponeMovie } from "lib/models/interface";
import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";

interface ICardRowMain {
  className?: string;
  item?: IresponeMovie;
  sx?: SxProps<Theme>;
}

const CardTextTitle: React.FC<ICardRowMain> = ({ className = "", item, sx = {} }) => {
  return (
    <article className={`clsarticletexttitle  ${className}`}>
      <Link href={"/detail/d"}>
        <Box className="clsarticletexttitle-content" sx={{ ...sx }}>
          <div className="clsarticletexttitle-top">
            <h5 className="clsarticletexttitle-title">
              {item?.title || "Nhiều quy định phòng cháy chữa cháy như trên trời rơi xuống"}{" "}
            </h5>
            <h5 className="clsarticletexttitle-category">{item?.id || "category-name"} </h5>
          </div>

          <div className="clsarticletexttitle-des">
            <p>
              {item?.overview ||
                " Bộ Giao thông Vận tải tiếp tục chuẩn bị, mục tiêu đến năm 2025 hoàn thành phê duyệt chủ trương đầu tư dự án đường sắt tốc độ cao trên trục Bắc Nam."}
            </p>
          </div>
        </Box>
      </Link>
    </article>
  );
};

export default CardTextTitle;
