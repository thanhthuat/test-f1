import React from "react";

interface ILineArea {
  item: {
    title: string;
    subtitle: { title: string; content: {title:string}[] }[];
  };
}

const LineArea: React.FC<ILineArea> = ({ item }) => {
  return (
    <div className="prefixlinearea">
          <strong className="prefixlinearea-title">{ item.title}</strong>
      {item.subtitle.length > 0 &&
        item.subtitle.map((item ,index) => (
          <React.Fragment key={`${item.title}-${index}`}>
                <h5 className="prefixlinearea-subtitle">{item.title}</h5>
                {item.content.length > 0 && item.content.map((item) => 
                    <p className="prefixlinearea-content" key={`${item.title}-${index}`}>{item.title}</p>
                )}
            
          </React.Fragment>
        ))}
    </div>
  );
};

export default LineArea;
