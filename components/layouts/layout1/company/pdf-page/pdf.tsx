import React from "react";
import PdfContent from "./pdf-content";

const PdfPage = () => {
  return (
    <div className="clspdfpage">
      <div className="clspdfpage-content containerlayout1">
        <div className="clspdfpage-header">
          <h2 className="clspdfpage-header__title">
            <b> PDF</b> 지면보기
          </h2>
          <div className="clspdfpage-header__content">
            <ul>
              <li>이미지를 클릭하면 지면별 PDF를 이용하실 수 있습니다.</li>
            </ul>
          </div>
        </div>
        <PdfContent />
      </div>
    </div>
  );
};

export default PdfPage;
