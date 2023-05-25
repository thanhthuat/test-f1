import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Grid from "@mui/system/Unstable_Grid";
import Checkbox from "@mui/material/Checkbox";
type Props = {};

const BlockBuyNew = (props: Props) => {
  return (
    <div className="clsblockbuynew">
      <Grid2 container spacing={1}>
        <Grid xs={12} tablet={6} laptop={3}>
          email
        </Grid>
        <Grid xs={12} tablet={6} laptop={9}>
          abcd@gmail.com
        </Grid>
        <Grid xs={12} tablet={6} laptop={3}>
          nickname
        </Grid>
        <Grid xs={12} tablet={6} laptop={9}>
          nickname social ID
        </Grid>
        <Grid xs={12} tablet={6} laptop={3}>
          name
        </Grid>
        <Grid xs={12} tablet={6} laptop={9}>
          Tên thiệt của social ID
        </Grid>
        <Grid xs={12} tablet={6} laptop={3}>
          birthday/Sex
        </Grid>
        <Grid xs={12} tablet={6} laptop={9}>
          22/12/1999 /Male
        </Grid>
        <Grid xs={12} tablet={6} laptop={3}>
        
        </Grid>
        <Grid xs={12} tablet={6} laptop={9}>
          <p>
            <Checkbox className={"clsformlogin-input"} size="small" sx={{ marginLeft: -1 }} /> nhận
            tin tức đa dạng như event, service mới
            <br />
            거부일자 : 2023년04월05일 ngày từ chối
          </p>
        </Grid>
        <Grid xs={12} tablet={6} laptop={3}>
          event/ mail quảng cáo
        </Grid>
        <Grid xs={12} tablet={6} laptop={9}>
          <p>
            <Checkbox className={"clsformlogin-input"} size="small" sx={{ marginLeft: -1 }} />{" "}
            이벤트, 신규 서비스 등 다양한 소식을 받습니다.
            <br />
            동의일자 : 2023년05월01일
          </p>
        </Grid>
        <Grid xs={12} tablet={12} laptop={12}>
          <p>
            Email hướng dẫn cần thiết nhằm sử dụng dịch vụ thành viên được gửi bất kể sự đồng ý nhận
            quảng cáo .
          </p>
        </Grid>
        <div className="clsblockbuynew-button">
          <button>chỉnh sửa</button>
        </div>

        {/* <Grid xs={12} laptop={3}>
          <Grid container rowSpacing={1}>
            <Grid xs={12} tablet={6} laptop={12}></Grid>
            <Grid xs={12} tablet={6} laptop={12}></Grid>
            <Grid xs={12} tablet={6} laptop={12}></Grid>
            <Grid xs={12} tablet={6} laptop={12}></Grid>
            <Grid xs={12} tablet={6} laptop={12}></Grid>
            <Grid xs={12} tablet={6} laptop={12}></Grid>
          </Grid>
        </Grid> */}
      </Grid2>
    </div>
  );
};

export default BlockBuyNew;
