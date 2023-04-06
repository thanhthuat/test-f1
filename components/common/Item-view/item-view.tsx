import { Box, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "public/image/detail-page/picture.png";
interface IItemViewProps {
  hasImg?: boolean;
  item: string;
  index:number
}

const ItemView: React.FC<IItemViewProps> = ({ hasImg = false ,item ,index}) => {
  return (
    <Box className="prefixitemview" sx={{ maxWidth: "300px", background: "#fff" }}>
      <div className="prefixitemview-content">
        <div className="prefixitemview-number">
          <span className="prefixitemview-number__num"> {index}</span>
        </div>
        <div className="prefixitemview-title">
          <Link href="/">
            <p>
             {item}
            </p>
          </Link>
        </div>
        {hasImg && (
          <div className="prefixitemview-img">
            <img src={"/image/detail-page/picture.png"} alt="avatar" />
          </div>
        )}
      </div>
    </Box>
  );
};

export default ItemView;
