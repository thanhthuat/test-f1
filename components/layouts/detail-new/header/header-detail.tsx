import { Box } from "@mui/material";
import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useAppSelector } from "@hook/hooks";
interface IHeaderDetailProps {}

const HeaderDetail: React.FC<IHeaderDetailProps> = () => {
   const { detailmovie } = useAppSelector((state) => state.movie);
  return (
    <Box className="prefixheaderdetailpage">
      <div className="prefixheaderdetailpage-content">
        <div className="prefixheaderdetailpage-title">
          <h1 className="title">
            {detailmovie?.title ||
              `Comparing and recommending car and indemnity insurance on the 'Naver Kakao' platform`}
          </h1>
          <div className="prefixheaderdetailpage-desc">
            <p>
              {detailmovie?.title} <br /> {detailmovie?.overview} <br /> Limiting
              the platform’s superior position
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default HeaderDetail;
