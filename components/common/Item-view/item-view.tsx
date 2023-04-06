import { Box, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "public/image/detail-page/picture.png";
interface IItemViewProps {
  hasImg?: boolean;
}

const ItemView: React.FC<IItemViewProps> = ({ hasImg = false }) => {
  return (
    <Box className="prefixitemview" sx={{ maxWidth: "300px", background: "#fff" }}>
      <div className="prefixitemview-content">
        <div className="prefixitemview-number">
          <span className="prefixitemview-number__num"> 1</span>
        </div>
        <div className="prefixitemview-title">
          <Link href="/">
            <p>
              SK Hynix, a 'deficit swamp', has to pay hundreds of billions of won for patent
              monsters... It is inevitable to use technology to manufacture DRAM
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
