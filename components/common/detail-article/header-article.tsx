import React from "react";
import BreadCrumb from "../bread-crumb";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { DateUtil } from "@utils/date.util";
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
        {/* <div className="headerarticle-information">
          <BreadCrumb dataList={arr} />
          <div className="headerarticle-time">
            <p>Thứ tư, 19/4/2023, 00:53 (GMT+7)</p>
          </div>
        </div> */}
        <div className="headerarticle-title">
          <h1>Xiaomi 13 Ultra được mua hết sau một giờ mở bán</h1>
        </div>
        <div className="headerarticle-information">
          <div className="headerarticle-information__detail">
            <p className="author">
              <span>By &nbsp; </span> Markwilly{" "}
            </p>
            <p className="time">
              <CalendarMonthIcon sx={{ width: "18px", height: "18px" }} />
              {DateUtil.formatShowDate(Date.now())}
            </p>
            <p className="view">
              <RemoveRedEyeIcon sx={{ width: "18px", height: "18px" }} />
              223
            </p>
          </div>
          <div className="headerarticle-information__action">
            <div className="share-icon">
              <ShareIcon />
            </div>
            <div className="save-icon">
              <BookmarkIcon />
            </div>
            <div className="sum-icon">
              <ControlPointIcon />
            </div>
            <div className="print-icon">
              <PrintIcon />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default HeaderArticle;
