import React from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
interface BannerAdvertiseProps{
  className?:string ;
  sx?: SxProps<Theme>;
}

const BannerAdvertise: React.FC<BannerAdvertiseProps> = ({className='', sx = {}}) => {
  return (
    <Box className={`${className} prefixbanneradvertise mt-24`} sx={{ ...sx }}>
          <div className="prefixbanneradvertise-content">
              <h3>Advertising</h3>
      </div>
    </Box>
  );
};

export default BannerAdvertise;
