import React, { useEffect } from "react";
import CardRow from "../card-row/card-row";
import CardColumn from "../card-column/card-column";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import { getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";
interface BoxCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  tittle?: string;
}

const BoxCard: React.FC<BoxCardProps> = ({ className = "", sx = {}, tittle = "" }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getListTop({ page: 15 }));

  //   return () => {};
  // }, []);
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
