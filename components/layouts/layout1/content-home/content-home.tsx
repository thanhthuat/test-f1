import React, { useEffect } from "react";
import CarouselStory from "../../../common/carousel-story/carousel-story";
import CardColumn from "../../../common/card-column/card-column";
import CardRow from "../../../common/card-row/card-row";
import { title } from "process";
import BoxCategory from "../../../common/box-category/box-category";
import CardRowMain from "../../../common/car-row-main/card-row-main";
import { BoxPopular } from "../../../common/box-popular";
import CarouselTwo from "../../../common/carosel-tow/carousel-two";
import ExpertPerspective from "../../../common/expert-perspective/expert-perspective";
import CardTitleTop from "../../../common/card-title-top/card-title-top";
import Tab from "../tab/tab";
import CardTextTitle from "@components/common/card-text-title/card-text-title";
import TabColumn from "@components/common/tab/tab";
import BoxCaterogryThreeColumn from "@components/common/box-caterogy-3-column/box-caterogry-three-column";
import BoxCaterogryColumn from "@components/common/box-caterogy-column/box-caterogry-column";
import FooterLayout1 from "../footer/footer";
import BlockContent from "../tab/content/block-content";
import BorderLine from "@components/common/border-line/border-line";
import BannerAdvertise from "@components/common/banner-advertise/banner-adv";
import { useAppDispatch, useAppSelector } from "@hook/hooks";
import { useRouter } from "next/router";
import { getDetailNew, getListTop } from "lib/redux/get-list-top-menu/get-list-top.action";

type Props = {};

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
  {
    title: "Khởi động dự án 'Vệ sinh học đường' tại Hà Giang",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam. Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
  {
    title: "Khởi động dự án 'Vệ sinh học đường' tại Hà Giang",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
];
const ContentHome = (props: Props) => {
  const dispatch = useAppDispatch();
  const { topmovie } = useAppSelector((state) => state.movie);
  const router = useRouter();
  useEffect(() => {
    if (topmovie.length === 0) {
      dispatch(getListTop({page:1} ));
    }

    return () => {};
  }, []);
  return (
    <>
      <div className="clscontenthomelayout1 mt-40">
        <div className="clscontenthomelayout1-content containerlayout1">
          <div className="clscontenthomelayout1-item1">
            {/* <CarouselStory /> */}
            <CardRowMain />

         
             <div className="clscontenthomelayout1-item1__content">
              { topmovie.length >0 && topmovie?.slice(4,6)
                .map((item, index) => {
                  return <div className="itemhome" key={index}>
                     <CardTextTitle item={item} />
                  </div>;
                })}
              <ExpertPerspective />
            </div>
           
{/*           
            {array.map((item, index) => {
              return <CardRow item={item} key={index} />;
            })}

            {array.map((item, index) => {
              return <CardTitleTop key={index} />;
            })} */}
          </div>
          <div className="clscontenthomelayout1-item2">
            <BannerAdvertise/>
            <BannerAdvertise/>
            </div>
        </div>
      </div>
      <section className="has_border containerlayout1 clscontenthomelayout1-content  ">
      <div className="clscontenthomelayout1-item3">
          
      { topmovie.length >0 && topmovie?.slice(0,4).map((item, index) => {
              return <CardTitleTop item={item} key={index} />;
            })}
             <BannerAdvertise/>
        </div>
        <div className="clscontenthomelayout1-item1">
          
         <Tab> <BlockContent/></Tab>
      
        <TabColumn/>
        <div className="has_border"></div>
        <Tab> <BlockContent/></Tab>
       
        <TabColumn/>
            </div>
               
            </section>
            <BoxCaterogryThreeColumn className="containerlayout1"/>
            <BorderLine className="containerlayout1"/>
            <BoxCaterogryThreeColumn className="containerlayout1"/>
            <BoxCaterogryColumn  className="containerlayout1"/>
            <BorderLine className="containerlayout1"/>
            <CarouselTwo className="containerlayout1"/>
            <BorderLine className="containerlayout1"/>
            <BoxCaterogryColumn  className="containerlayout1"/>
            <BorderLine className="containerlayout1"/>
           <FooterLayout1/>
     {/* <div className="clscontenthomelayout1">
        <div className="clscontenthomelayout1-content containerlayout1">
          <div className="clscontenthomelayout1-item1">
          

            {array.map((item, index) => {
              return <CardRow item={item} key={index} />;
            })}
          </div>
         
          <div className="clscontenthomelayout1-item3">
            <BoxPopular />
          </div>
        </div>
      </div>
      <div className="clscontenthomelayout1">
        <div className="clscontenthomelayout1-content containerlayout1">
          <div className="clscontenthomelayout1-item4">
           
            <CarouselTwo />
          </div>

        
        </div>
      </div>
      <div className="clscontenthomelayout1">
        <div className="clscontenthomelayout1-content containerlayout1">
          <div className="clscontenthomelayout1-item4">
         
            {array.map((item, index) => {
              return <CardRow item={item} key={index} />;
            })}
          </div>

          <div className="clscontenthomelayout1-item3">
            <BoxPopular isImg={true} />
            <BoxPopular isImg={true} />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ContentHome;
