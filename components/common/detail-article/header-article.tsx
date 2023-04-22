import React from "react";
import BreadCrumb from "../bread-crumb";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
interface HeaderArticle {
  className?: string;
  sx?: SxProps<Theme>;
}

const arr = [
  { title: "Số hóa", url: "/" },
  { title: "Sản phẩm", url: "/category/1" },
  { title: "Thiết bị" },
];

const HeaderArticle: React.FC<HeaderArticle> = ({ className = "", sx = {} }) => {
  return (
    <Box className={`${className} headerarticle`} sx={{ ...sx }}>
      <div className="headerarticle-content">
        <div className="headerarticle-information">
          <BreadCrumb dataList={arr} />
          <div className="headerarticle-time">
            <p>Thứ tư, 19/4/2023, 00:53 (GMT+7)</p>
          </div>
        </div>
        <div className="headerarticle-title">
          <h1>Xiaomi 13 Ultra được mua hết sau một giờ mở bán</h1>
        </div>
      </div>
    </Box>
  );
};

export default HeaderArticle;
