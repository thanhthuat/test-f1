import React from "react";

type Props = {};
import { data } from "../data";
import Image from "next/image";

const ArticleDetail: React.FC<Props> = (props) => {
  return (
    <div className="prefixarticledetail">
      <div className="prefixarticledetail-content">
        {data.map((item, index) => {
          if (typeof item == "object") {
            return (
              <figure className="prefixarticledetail-figure" key={`1-${index}`}>
                <img
                  className="prefixarticledetail-figure__img"
                  src={item.url}
                  alt={item.alt}
                />
                <figcaption className="prefixarticledetail-figure__caption">{item.alt}</figcaption>
              </figure>
            )
          } else {
            return (
              <p className="prefixarticledetail-item" key={`1-${index}`}>
                {item}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ArticleDetail;
