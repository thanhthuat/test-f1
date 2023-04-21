import React from "react";

type Props = {};

const CardItemCarousel = (props: Props) => {
  return (
    <article className="clsarticleitemcarousel">
      <div className="clsarticleitemcarousel-content">
        <div className="clsarticleitemcarousel-summary">
          <div className="clsarticleitemcarousel-summary__title">
            <h5>Làng quê Quảng Nam nhuốm vàng hoa sưa</h5>
          </div>
          <div className="clsarticleitemcarousel-summary__des">
            <p>
              Được người dân huyện Tiên Phước và Phú Ninh trồng trong vườn, trên các tuyến đường,
              cây sưa vàng đang mùa nở rộ, tạo vẻ đẹp cho làng quê.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardItemCarousel;
