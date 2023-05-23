import BoxCategory from "@components/common/box-category/box-category";
import CardRow from "@components/common/card-row/card-row";
import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import BannerAdvertise from "@components/common/banner-advertise/banner-adv";
import { useAppDispatch, useAppSelector } from "@hook/hooks";

interface DetailNewSekeletonProps {
  className?: string;
}

const DetailNewSekeleton: React.FC<DetailNewSekeletonProps> = ({ className = "" }) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <React.Fragment>
      <div className={`${className} clsdetailnew`}>
        <div className="clsdetailnew-item1">
          <Stack direction="row" justifyContent="space-between">
            <Skeleton>
              <h3 className="clsdetailnew-item2__title ">{"Popular News"}</h3>
            </Skeleton>
            <Skeleton>
              <h3 className="clsdetailnew-item2__title ">{"Popular News"}</h3>
            </Skeleton>
          </Stack>
          {topmovie.slice(0, 9).map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Skeleton>
                  <CardRow item={item} />
                </Skeleton>
              </React.Fragment>
            );
          })}
        </div>
        <div className="clsdetailnew-item2">
          <div className="clsdetailnew-strickly">
            <Skeleton>
              <h3 className="clsdetailnew-item2__title ">{"Popular News"}</h3>
            </Skeleton>
            {topmovie.slice(5, 9).map((item) => (
              <Skeleton key={item.id}>
                <CardRow item={item} isdes={false} />
              </Skeleton>
            ))}
            <Skeleton width={"100%"}>
              <BannerAdvertise />
            </Skeleton>
          </div>
        </div>
        <div className="has_border"></div>
      </div>
      <div className={`${className} clsdetailnew`}>
        <div className="clsdetailnew-item1">
          {topmovie.slice(0, 9).map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Skeleton>
                  <CardRow item={item} />
                </Skeleton>
              </React.Fragment>
            );
          })}
        </div>
        <div className="clsdetailnew-item2">
          <div className="clsdetailnew-strickly">
            <Skeleton>
              <BoxCategory>
                {topmovie.slice(9, 13).map((item) => (
                  <CardRow item={item} key={item.id} />
                ))}
              </BoxCategory>
              <BannerAdvertise className="mt-1" />
              <BannerAdvertise className="mt-1 mb-1" />
            </Skeleton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailNewSekeleton;
