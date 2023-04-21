import BoxCategory from '@components/common/box-category/box-category';
import CardColumn from '@components/common/card-column/card-column';
import CardRow from '@components/common/card-row/card-row';
import DetailArticle from '@components/common/detail-article/detail-article';
import React ,{useState ,useEffect} from 'react';
import Skeleton from '@mui/material/Skeleton';
import { useRouter } from 'next/router';
import BannerAdvertise from '@components/common/banner-advertise/banner-adv';
import { useAppDispatch, useAppSelector } from '@hook/hooks';
import NotFound from '@components/common/not-found/not-found';
import { getListTop } from 'lib/redux/get-list-top-menu/get-list-top.action';

interface DetailNewProps{
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

const DetailNew:React.FC<DetailNewProps> = ({className}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { topmovie } = useAppSelector((state) => state.movie);
  const [first, setfirst] = useState(false) ;
  useEffect(() => {
    if (topmovie.length === 0) {
      dispatch(getListTop({page:1} ));
    }

    return () => {};
  }, []);
  useEffect(() => {
    setfirst(false);
    setTimeout(()=>{
      setfirst(true);
    },1000)
  
    return () => {
      
    }
  }, [router.query?.id])
  if(router?.query?.id ==='1000'){
    return  <div>
<NotFound></NotFound>
<div className={`${className} clsdetailnew`}>
        {topmovie.slice(9,13).map((item)=>  <CardColumn item={item} key={item.id} /> )}
      
       
    </div>
    </div>
    
  }
  
  return (
    <>
     <div className={`${className} clsdetailnew`}>
      {first ?  <>  <div className='clsdetailnew-item1'>
        <DetailArticle >  <BoxCategory> {array.map((item)=> <CardRow item={topmovie[9]} key={item.title} />)}</BoxCategory>   </DetailArticle > 
        <div className='has_border'></div>
       
        </div>
        <div className='clsdetailnew-item2'>
        <div className='clsdetailnew-strickly'>
          {topmovie.slice(5,9).map((item)=> <CardRow item={item} isdes={false} key={item.id}/> )}
        <BannerAdvertise/>
        <BannerAdvertise/>
        </div>
       
        </div>
        <div className='has_border'></div></> :
        <>  <div className='clsdetailnew-item1'>
         <BoxCategory> {array.map((item)=> <Skeleton
              animation="wave"
              height={250}
              width="100%"
              key={item.title}
              style={{ marginBottom: 6 }}
             />)}</BoxCategory>  
        <Skeleton
              animation="wave"
              height={1}
              width="100%"
              style={{ marginBottom: 6 }}
            /> 
       
        </div>
        <div className='clsdetailnew-item2'>
        <div className='clsdetailnew-strickly'>
        <Skeleton
              animation="wave"
              height={100}
              width="100%"
              style={{ marginBottom: 6 }}
            /> 
             <Skeleton
              animation="wave"
              height={100}
              width="100%"
              style={{ marginBottom: 6 }}
            /> 
             <Skeleton
              animation="wave"
              height={100}
              width="100%"
              style={{ marginBottom: 6 }}
            /> 
        
        </div>
       
        </div>
        <div className='has_border'></div></>
        }
       
    </div>
    <div className={`${className} clsdetailnew`}>
      {first ? <>  <div className='clsdetailnew-item1'>
        {topmovie.slice(0,9).map((item)=>{
            return <React.Fragment key={item.id}> <CardRow item={item}  />
            <div className='has_border'></div></React.Fragment>
        })}
       
      
        </div>
        <div className='clsdetailnew-item2'>
        <div className='clsdetailnew-strickly'>
        <BoxCategory> {topmovie.slice(9,13).map((item)=>  <CardRow item={item} key={item.id}/> )}</BoxCategory> 
        <BannerAdvertise/>
        <BannerAdvertise/>
        </div>
       
        </div>
        <div className='has_border'></div></> :  <Skeleton
              animation="wave"
              height={100}
              width="100%"
              style={{ marginBottom: 6 }}
            /> }
       
    </div>
    <div className={`${className} clsdetailnew`}>
      {first ? <> {topmovie.slice(9,13).map((item)=>  <CardColumn item={item} key={item.id} /> )}
       </> : <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            /> }
       
    </div>
   </>
   
  )
}

export default DetailNew