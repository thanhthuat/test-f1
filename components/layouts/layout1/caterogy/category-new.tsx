import BoxCategory from '@components/common/box-category/box-category';
import CardRowMain from '@components/common/car-row-main/card-row-main';
import CardColumn from '@components/common/card-column/card-column';
import CardRow from '@components/common/card-row/card-row';

import React from 'react'
import CategoryHeader from './category-header';
import BorderLine from '@components/common/border-line/border-line';
import CardTitleTop from '@components/common/card-title-top/card-title-top';
import Tab from '../tab/tab';
import TabColumn from '@components/common/tab/tab';
import BlockContent from '../tab/content/block-content';
import BlockContentCategory from '../tab/content/block-content-category';
import { useAppSelector } from '@hook/hooks';

interface  CategoryNewProps{
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
    title: "Khởi động dự án 'Vệ sinh học đường' tại Hà Giang 1",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
  {
    title: "Khởi động dự án 'Vệ sinh học đường' tại Hà Giang 2",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
  {
    title: "Khởi động dự án 'Vệ sinh học đường' tại Hà Giang 3",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
  {
    title: "Khởi động dự án 'Vệ sinh học đường' tại Hà Giang 4",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
 
 
];
const CategoryNew:React.FC<CategoryNewProps> = ({className=''}) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
   <div className={`${className} clslistcategory`}>
    <CategoryHeader/>
    <BorderLine/>
         <div className='clslistcategory-content containerlayout1'>
                <div className='clslistcategory-item1'>
                <CardRowMain />
                <div className='has_border'></div>
                <div className='clslistcategory-itemsub'>
                  {topmovie.slice(11,14).map((item)=>  <CardColumn item={item} key={item.title}/> )}
              
                </div>
                <BorderLine/>
                </div>
                <div  className='clslistcategory-item2'>
                <BoxCategory> {topmovie.slice(14,20).map((item)=>  <CardRow item={item} key={item.title} /> )}</BoxCategory> 
                </div>
          </div>
          <section className="has_border containerlayout1 clscontenthomelayout1-content  ">
      <div className="clscontenthomelayout1-item3">
          
      {topmovie.slice(7,14).map((item, index) => {
              return <CardTitleTop key={index} item={item} />;
            })}
        </div>
        <div className="clscontenthomelayout1-item1">
          
        <Tab > <BlockContentCategory/> </Tab >
      
        <TabColumn/>
        <div className="has_border"></div>
        <Tab > <BlockContentCategory/> </Tab >
       
        <TabColumn/>
            </div>
               
            </section>
          
   </div>
  )
}

export default CategoryNew