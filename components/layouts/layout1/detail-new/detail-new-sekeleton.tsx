import BoxCategory from "@components/common/box-category/box-category";
import CardColumn from "@components/common/card-column/card-column";
import CardRow from "@components/common/card-row/card-row";
import DetailArticle from "@components/common/detail-article/detail-article";
import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import { useRouter } from "next/router";
import BannerAdvertise from "@components/common/banner-advertise/banner-adv";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import NotFound from "@components/common/not-found/not-found";
import { getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";
import Grid from "@mui/system/Unstable_Grid";
interface DetailNewSekeletonProps {
  className?: string;
}
const array = [
  {
    title: "Điều kiện chờ 12 tháng khó ngăn người rút bảo hiểm một lần",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam. Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
  {
    title: "Khởi động dự án 'Vệ sinh học đường' tại Hà Giang",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam. Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
  {
    title: "Khởi động dự án 'Vệ sinh học đường' tại Hà Giang",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
];
const DetailNewSekeleton: React.FC<DetailNewSekeletonProps> = ({ className = "" }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <React.Fragment>
      <div className={`${className} clsdetailnew`}>
        <div className="clsdetailnew-item1">
          <DetailArticle>
            <BoxCategory>
              {/* {array.map((item) => (
                <Skeleton />
              ))} */}
            </BoxCategory>{" "}
          </DetailArticle>
          <div className="has_border"></div>
        </div>
        <div className="clsdetailnew-item2">
          <div className="clsdetailnew-strickly">
            <h3 className="clsdetailnew-item2__title ">{"Popular News"}</h3>
            {/* {topmovie.slice(5, 9).map((item) => (
              <Skeleton />
            ))} */}
            <Skeleton />
          </div>
        </div>
        <div className="has_border"></div>
      </div>
      <div className={`${className} clsdetailnew`}>
        <div className="clsdetailnew-item1">
          {topmovie.slice(0, 9).map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Skeleton />
              </React.Fragment>
            );
          })}
        </div>
        <div className="clsdetailnew-item2">
          <div className="clsdetailnew-strickly">
            <BoxCategory>
              {topmovie.slice(9, 13).map((item) => (
                <CardRow item={item} key={item.id} />
              ))}
            </BoxCategory>
            <BannerAdvertise className="mt-1" />
            <BannerAdvertise className="mt-1 mb-1" />
          </div>
        </div>
      </div>
      <div className="has_border"></div>
      <Grid container spacing={1}>
        {topmovie.slice(9, 13).map((item, index) => (
          <Grid tablet={6} tablet1={3} key={index}>
            <CardColumn item={item} key={item.id} />
          </Grid>
        ))}
      </Grid>
      {/* <div className={`${className} clsdetailnew`}>
        {topmovie.slice(9, 13).map((item) => (
          <CardColumn item={item} key={item.id} />
        ))}
      </div> */}
    </React.Fragment>
  );
};

export default DetailNewSekeleton;
