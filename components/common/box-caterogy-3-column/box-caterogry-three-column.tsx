import React from "react";
import BoxCaterogyThreeColumnHeader from "./box-caterogy-three-column-header";
import CardColumn from "../card-column/card-column";
import CardRow from "../card-row/card-row";
import { useAppSelector } from "@hook/hooks";
import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid";
import { SxProps, Theme } from "@mui/material/styles";
interface BoxCategoryThreeColumnProps {
  className?: string;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

const arr = [
  { title: "Giải trí" },
  { title: "Giới sao" },
  { title: "Phim Nhạc" },
  { title: "Thời trang" },
];
const BoxCategoryThreeColumn: React.FC<BoxCategoryThreeColumnProps> = ({
  className = "",
  sx = {},
  children,
}) => {
  return (
    <section className={`${className} clsboxcaterogrycolumn`}>
      <BoxCaterogyThreeColumnHeader item={arr} sx={{ ...sx }} />
      <Box className="clsboxcaterogrycolumn-content" sx={{ ...sx }}>
        {children}
      </Box>
    </section>
  );
};

export default BoxCategoryThreeColumn;
