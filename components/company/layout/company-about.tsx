import Image from "next/image";
import React from "react";
import imgdiagram from "public/image/company/intro_diagram.png";
interface ICompanyAboutProps {}

const CompanyAbout: React.FC<ICompanyAboutProps> = (props) => {
  return (
    <section className="prefixabout wapper animate">
      <h2 className="prefixabout-title"> About Chosun Biz</h2>
      <div className="prefixabout-content">
        <div className="prefixabout-img">
          <Image src={imgdiagram} alt="img-diagram" />
        </div>
        <div className="prefixabout-article">
          <h4 className="prefixabout-article__title">Chosun Biz, the economic center of Chosun Media Group</h4>
          <p className="prefixabout-article__content">
            On May 10, 2010, Chosun Media Group introduced Chosun Biz, an online economic news.
            Chosun Biz has established itself as a premium economic media by servicing high-quality
            economic contents through various news platforms such as the Internet, SNS, and
            securities company HTS. Since its inception, Chosun Biz has been reborn as a media
            company with clear economic language, market-leading investment information, and an
            experimental and dynamic platform. Based on the DNA of the Chosun Media Group, Chosun
            Biz will open a new era as the No. 1 economic media that provides fast and accurate news
            24 hours a day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyAbout;
