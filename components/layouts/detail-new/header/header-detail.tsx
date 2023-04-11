import { Box } from "@mui/material";
import React from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
interface IHeaderDetailProps {
  title: string;
}

const HeaderDetail: React.FC<IHeaderDetailProps> = ({title}) => {
  return (
    <Box className="prefixheaderdetailpage">
      <div className="prefixheaderdetailpage-content">
        <div className="prefixheaderdetailpage-title">
          <h1 className="title">
            {title ||
              `Comparing and recommending car and indemnity insurance on the 'Naver Kakao' platform`}
          </h1>
          <div className="prefixheaderdetailpage-desc">
            <p>
              Trial service starting at the end of the year at the earliest <br /> Limited to CM
              products that can be handled <br /> Limiting the platform’s superior position
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default HeaderDetail;
