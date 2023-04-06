import React from "react";

type Prop = {
  isOnlyTittle: boolean;
};

interface IListNew {
  isOnlyTittle: boolean;
}

const ListNews: React.FC<IListNew> = (props: Prop) => {
  const { isOnlyTittle } = props;
  return (
    <div className="listNews">
      <a href="#" className="listNews__title">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </a>
      {!isOnlyTittle && (
        <div className="listNews__content">
          <div className="listNews__content__figure">
            <img
              src="https://biz.chosun.com/resizer/CDZYRxyp6lY2hX-eL7FuDFV438A=/184x104/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/7EU56PRESVAOBD2E5GLKUEZ3YY.jpg"
              alt=""
              className="listNews__content__figure__img"
            />
          </div>
          <div className="listNews__content__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate saepe aperiam
            perferendis! Rerum error inventore nobis ut minima facere dolorum rem commodi illum,
            autem, voluptatem doloremque minus odit voluptas hic saepe ullam sed sequi recusandae
          </div>
        </div>
      )}
    </div>
  );
};

export default ListNews;
