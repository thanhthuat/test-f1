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
        item.subtitle.map((item) => (
          <>
                <h5 className="prefixlinearea-subtitle">{item.title}</h5>
                {item.content.length > 0 && item.content.map((item) => 
                    <p className="prefixlinearea-content">{item.title}</p>
                )}
            
          </>
        ))}
    </div>
  );
};

export default LineArea;
