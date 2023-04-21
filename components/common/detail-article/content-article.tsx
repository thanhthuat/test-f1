import React from "react";
import {data} from './data';
interface ContentArticleProps {
  className?: string;
}

const ContentArticle: React.FC<ContentArticleProps> = ({ className = "" }) => {
  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case "img":
        return (
          <div key={`1-${index}`}>
            <figure className="prefixarticledetail-figure">
              <img className="prefixarticledetail-figure__img" src={item.url} alt={item.alt} />
              <figcaption className="prefixarticledetail-figure__caption">{item.alt}</figcaption>
            </figure>
          </div>
        );
      case "text":
        return (
          <p className="prefixarticledetail-item" key={`1-${index}`}>
           {item.content}
          </p>
        );

      default:
        return (
          <p className="prefixarticledetail-item" key={`1-${index}`}>
            {item.content}
          </p>
        );
        break ;
    }
  };
  return <div className={`${className} contentarticle`}>
    { data.map((item,index)=>  renderContent(item,index))}
  </div>;
};

export default ContentArticle;
