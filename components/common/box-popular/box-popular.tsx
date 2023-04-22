import React from 'react'
import CardRow from '../card-row/card-row';
import CardText from '../card-text/card-text';
import CardColumn from '../card-column/card-column';
import { useAppSelector } from '@hook/hooks';

interface  BoxPopularProps  {
    isImg?:boolean
}
const BoxPopular:React.FC<BoxPopularProps> = ({isImg=false}) => {
  const { topmovie } = useAppSelector((state) => state.movie);
  return (
    <div className="clsboxcategory">
      <div className="clsboxcategory-content">
        <div className="clsboxcategory-header">
          <h3 className="clsboxcategory-header__topic"> Chu de </h3>
          {/* <h3 className="clsboxcategory-header__name">1213 abcd 456</h3> */}
        </div>
        <div className="clsboxcategory-body">
          {isImg && <CardColumn item={topmovie[14]} />}
          {topmovie.slice(16,19).map((item, index) => {
            return <CardText key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default BoxPopular;