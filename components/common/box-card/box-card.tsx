import React from "react";
import CardRow from "../card-row/card-row";
import CardColumn from "../card-column/card-column";
import { useAppSelector } from "@hook/hooks";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
interface BoxCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  tittle?: string;
}

const BoxCard: React.FC<BoxCardProps> = ({ className = "", sx = {}, tittle = "" }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <Box className={` ${className} clsboxcard`} sx={{ ...sx }}>
      <div className="clsboxcard-content">
        <h3 className="clsboxcard-title"> {tittle}</h3>
        <CardColumn item={topmovie[16]} />
      </div>
    </Box>
  );
};

export default BoxCard;
