import React from "react";
import CardRow from "../card-row/card-row";
import BoxCard from "../box-card/box-card";
import CardText from "../card-text/card-text";
import TabHeader from "./tab-header";
import { useAppSelector } from "@hook/hooks";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";

interface TabContentProps {
  className?: string;
  sx?: SxProps<Theme>;
}

const arr = [
  { title: "Giải trí" },
  { title: "Giới sao" },
  { title: "Phim Nhạc" },
  { title: "Thời trang" },
];
const TabContent: React.FC<TabContentProps> = ({ className = "", sx = {} }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <Box className={`clstabcolumncontent ${className}`} sx={{ ...sx }}>
      <div className="clstabcolumncontent-left">
        <TabHeader item={arr} />
        <CardRow item={topmovie[17]} isAuthor={true} />
        <div className="has_border"> </div>
        <div className="clstabcolumncontent-left__bottom">
          {topmovie.slice(10, 12).map((item, index) => (
            <CardText key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="clstabcolumncontent-right">
        <BoxCard />
      </div>
    </Box>
  );
};

export default TabContent;
