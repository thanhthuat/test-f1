import React from 'react'
import BoxCaterogyThreeColumnHeader from './box-caterogy-three-column-header';
import CardColumn from '../card-column/card-column';
import CardRow from '../card-row/card-row';
import { useAppSelector } from '@hook/hooks';

interface BoxCaterogryThreeColumnProps{
className?:string;
}
const obj = {
    title: "Điều kiện chờ 12 tháng khó ngăn người rút bảo hiểm một lần",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam. Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  }
const arr = [{title:"Giải trí"} ,{title:"Giới sao"} ,{title:"Phim Nhạc"} ,{title:"Thời trang"}]
const BoxCaterogryThreeColumn:React.FC<BoxCaterogryThreeColumnProps> = ({className=''}) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <section className={`${className} clsboxcaterogrycolumn`}>
         <BoxCaterogyThreeColumnHeader item={arr} />
        <div className='clsboxcaterogrycolumn-content'>  
        <div className='clsboxcaterogrycolumn-item1'>   <CardColumn item={topmovie[10]}/></div>
        <div className='clsboxcaterogrycolumn-item2'>   <CardColumn isDes={false} item={topmovie[16]}/>  <CardColumn item={topmovie[13]} isDes={false}/></div>
        <div className='clsboxcaterogrycolumn-item3'>   <CardRow item={topmovie[18]} isdes={false}/>  <CardRow item={topmovie[15]} isdes={false}/>  <CardRow item={topmovie[11]} isdes={false}/>  <CardRow item={topmovie[19]} isdes={false}/></div>
           
           
        </div>
    </section>
  )
}

export default BoxCaterogryThreeColumn