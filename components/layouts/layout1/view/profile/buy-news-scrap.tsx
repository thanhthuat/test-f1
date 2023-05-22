import CardRow from "@components/common/card-row/card-row";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import CloseIcon from "@mui/icons-material/Close";
import BlockBuyNew from "./block-buy-new";
type Props = {};

const BuyNewsCcrap = (props: Props) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  const [show, setShow] = useState(false);
  return (
    <div className="clsbuynewsscrap">
      {/* {topmovie.slice(0, 5).map((item) => {
        return (
          <div className="clsbuynewsscrap-item">
            <CardRow item={item} sx={{ marginTop: "20px" }} />
            <div>
              <CloseIcon></CloseIcon>
            </div>
          </div>
        );
      })} */}
      {topmovie.length == 0 && !show && (
        <>
          <div className="clsbuynewsscrap-nodata">
            <p>không có news nào scrap . </p>
            <p>vui lòng bảo quản news được quan tâm .</p>
            <button
              className="clsbuynewsscrap-buy"
              onClick={() => {
                setShow(true);
              }}
            >
              <p>đăng kí mua báo</p>
            </button>
          </div>
        </>
      )}
      {show || (topmovie.length == 0 && <BlockBuyNew />)}
      <div className="clsnewsscrap-coppyright">
        <p>
          이용약관 <b>개인정보처리방침</b>
        </p>
        <p>© 언론사명. All rights reserved.</p>
      </div>
    </div>
  );
};

export default BuyNewsCcrap;
