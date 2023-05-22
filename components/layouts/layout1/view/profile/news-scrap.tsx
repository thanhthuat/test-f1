import CardRow from "@components/common/card-row/card-row";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type Props = {};
const arr = [1, 2, 3, 4, 5];
const NewsScrap = (props: Props) => {
  const dispatch = useAppDispatch();
  const { topmovie } = useAppSelector((state) => state.movie);

  return (
    <div className="clsnewsscrap">
      {topmovie.slice(0, 5).map((item, index) => {
        return (
          <div className="clsbuynewsscrap-item" key={index}>
            <CardRow item={item} sx={{ marginTop: "20px" }} />
            <div>
              <CloseIcon></CloseIcon>
            </div>
          </div>
        );
      })}
      {topmovie.length == 0 && (
        <>
          <div className="clsnewsscrap-nodata">
            <p>không có news nào scrap . </p>
            <p>vui lòng bảo quản news được quan tâm .</p>
          </div>
          <div className="clsnewsscrap-coppyright">
            <p>
              이용약관 <b>개인정보처리방침</b>
            </p>
            <p>© 언론사명. All rights reserved.</p>
          </div>
        </>
      )}
      {topmovie.length != 0 && (
        <div className="content">
          <div className="paging">
            <ArrowBackIosIcon />
            {arr.map((item, index) => {
              return (
                <p className="paging-item" key={index}>
                  {item}
                </p>
              );
            })}
            <ArrowForwardIosIcon className="right" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsScrap;
