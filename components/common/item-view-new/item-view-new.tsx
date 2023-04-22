import Image from "next/image";
import React from "react";
import visiondiagram from "public/image/company/vision_diagram.png";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
interface IItemViewNewProps {
  item: {
    url: string;
    title: string;
    desc: string;
  };
  className?: string;
  sx?: SxProps<Theme>;
}

const ItemViewNew: React.FC<IItemViewNewProps> = ({ item, className = "", sx = {} }) => {
  return (
    <Box className={`${className} prefixitemviewnew `} sx={{ ...sx }}>
      <div className="prefixitemviewnew-content">
        <div className="prefixitemviewnew-img">
          <Image className="prefixitemviewnew-img__img" src={visiondiagram} alt={item?.title} />
        </div>
        <div className="prefixitemviewnew-title">
          <div className="prefixitemviewnew-title__title">
            {" "}
            <h3>{item?.title}</h3>
          </div>

          <div className="prefixitemviewnew-title__desc">
            {" "}
            <span>{item?.desc}</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ItemViewNew;
