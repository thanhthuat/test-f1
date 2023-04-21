import React from "react";
import CardRow from "../../../../common/card-row/card-row";
import CardTextTitle from "../../../../common/card-text-title/card-text-title";
import CardText from "../../../../common/card-text/card-text";
import CarouselTop from "../../../../common/carousel-story/carosel-top";
import { useAppSelector } from "@hook/hooks";

type Props = {};
const array = [
  {
    title: "Điều kiện chờ 12 tháng khó ngăn người rút bảo hiểm một lần",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam. Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
];
const BlockContent = (props: Props) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <div className="clstabblock">
      <div className="clstabblock-contenttop">
        <div className="clstabblock-right">
          {topmovie.slice(10,11) .map((item, index) => {
            return <CardRow item={item} key={index} />;
          })}
        </div>
        <div className="clstabblock-left">
          {" "}
          <CardTextTitle />
        </div>
      </div>
      
      <div className="clstabblock-contentbody has_border">
        {Array(3)
          .fill(null)
          .map((item, index) => (
            <CardText key={index} />
          ))}
      </div>
      <div className="has_border"></div>
      {/* <CarouselTop /> */}
    </div>
  );
};

export default BlockContent;
