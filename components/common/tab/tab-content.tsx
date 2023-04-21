import React from 'react'
import CardRow from '../card-row/card-row';
import BoxCard from '../box-card/box-card';
import CardText from '../card-text/card-text';
import TabHeader from './tab-header';
import { useAppSelector } from '@hook/hooks';

interface TabContentProps{
    className?: string ;
}
const array = [
    {
      title: "Điều kiện chờ 12 tháng khó ngăn người rút bảo hiểm một lần",
      des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam. Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
    },
   
  ];
  const arr = [{title:"Giải trí"} ,{title:"Giới sao"} ,{title:"Phim Nhạc"} ,{title:"Thời trang"}]
const TabContent:React.FC<TabContentProps> = ({className=''}) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <div className={`clstabcolumncontent ${className}`}>
             <div className="clstabcolumncontent-left">
             <TabHeader item ={arr} />
         
            <CardRow item={topmovie[17]}  />;
        
          <div className="has_border"> </div>
          <div className="clstabcolumncontent-left__bottom">
          {topmovie.slice(10,12)
          .map((item, index) => (
            <CardText key={index} item={item} />
          ))}
          </div>
          
        </div>

        <div className="clstabcolumncontent-right">
         <BoxCard/>
        </div>

    </div>
  )
}

export default TabContent