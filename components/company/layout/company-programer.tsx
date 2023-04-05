import React from 'react'
import imgsubtitle from 'public/image/company/visual_subtitle.svg'
import Image from 'next/image'
interface ICompanyProgramerProps  {}

const CompanyProgramer:React.FC<ICompanyProgramerProps> = (props ) => {
  return (
    <div className="prefixprogamer animate">
      <div className="prefixprogamer-content">
        <div className="prefixprogamer-title">
          <Image className="prefixprogamer-img" src={imgsubtitle} alt="subtitle" />
          <h4 className="prefixprogamer-title__header"> Premium Economic Power</h4>
          <p className="prefixprogamer-title__content">
            Chosun Biz provides high-quality economic contents <br />
            It is positioning itself as a premium economic medium.
          </p>
        </div>
        <div className="prefixprogamer-bg"></div>
      </div>
    </div>
  );
}

export default CompanyProgramer