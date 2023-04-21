import React from 'react'
import BreadCrumb from '../bread-crumb';

interface HeaderArticle{
    className?: string ;

}


const arr =[
    {title:"Số hóa" ,url:"/"},
    {title:"Sản phẩm" ,url:"/category/1"},
    {title:"Thiết bị" ,},
]

const HeaderArticle:React.FC<HeaderArticle> = ({className=""}) => {
  return (
    <div className={`${className} headerarticle`}>
        <div className='headerarticle-content'>
            <div className='headerarticle-information'>    
        <BreadCrumb dataList={arr}/>
        <div className='headerarticle-time' >
           <p>Thứ tư, 19/4/2023, 00:53 (GMT+7)</p>
        </div>
        </div>
        <div className='headerarticle-title'>
       
           <h1>Xiaomi 13 Ultra được mua hết sau một giờ mở bán</h1>
      
        </div>
        </div>
    </div>
  )
}

export default HeaderArticle