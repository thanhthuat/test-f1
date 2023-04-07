import ItemViewNew from "@components/common/item-view-new/item-view-new";
import LineNew from "@components/common/line-new/line-new";
import React from "react";
interface IItemViewNewProps {

    url: string;
    title: string;
    desc: string;
 
}
interface IBoardNewsProps {
  arrnew: IItemViewNewProps[];
  title: string;
}

const BoardNews: React.FC<IBoardNewsProps> = ({ arrnew, title }) => {
    return (
      <>
        <div className="prefixboardnews">
          <div className="prefixboardnews-content">
            <div className="prefixboardnews-title">
              <h3>{title}</h3>
            </div>
            <div className="prefixboardnews-news">
              {arrnew.map((item, index) => (
                <ItemViewNew item={item} key={`${item.title}-${index}`} />
              ))}
            </div>
          </div>
        </div>
        <LineNew />
      </>
    );
};

export default BoardNews;
