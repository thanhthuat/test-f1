import Image from "next/image";
import React from "react";

import img from 'public/image/Tuanapng.png'
type Props = {};

const ExpertPerspective = (props: Props) => {
  return (
    <article className="clsexpertperspective">
      <div className="clsexpertperspective-content">
        <h2 className="clsexpertperspective-category"> Goc nhin</h2>
        <h3 className="clsexpertperspective-title"> Bán bất động sản qua sàn</h3>
        <h3 className="clsexpertperspective-des">
          {" "}
          Vẫn chỉ là bên trung gian môi giới, sàn giao dịch chịu trách nhiệm đến đâu nếu người mua
          bị chủ đầu tư vi phạm cam kết?
        </h3>
        <div className="clsexpertperspective-author">
          <div className="clsexpertperspective-author__name">
            <p>Phạm Thanh Tuấn</p>
          </div>
          <div className="clsexpertperspective-author__avatar">
            <Image src={img} alt="img" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExpertPerspective;
