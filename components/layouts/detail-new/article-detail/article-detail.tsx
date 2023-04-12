import React from "react";

type Props = {};
import { data } from "../data";
import Image from "next/image";
import ModalImg from "@components/common/modal-img/modal-img";
import { useAppSelector } from "@hook/hooks";
import apiConfig from "apis/apiConfig";

const ArticleDetail: React.FC<Props> = (props) => {
   const { detailmovie } = useAppSelector((state) => state.movie);
  return (
    <>
      <div className="prefixarticledetail">
        <div className="prefixarticledetail-content">
          {data.map((item, index) => {
            if (typeof item == "object") {
              return (
                <div key={`1-${index}`}>
                  <figure className="prefixarticledetail-figure">
                    <img
                      className="prefixarticledetail-figure__img"
                      src={apiConfig.originalImage( index >5? detailmovie.backdrop_path : detailmovie.poster_path)}
                      alt={item.alt}
                    />
                    <figcaption className="prefixarticledetail-figure__caption">
                      {item.alt}
                    </figcaption>
                  </figure>
                </div>
              );
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
    </>
  );
};

export default ArticleDetail;
