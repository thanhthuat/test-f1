import Image from "next/image";
import React from "react";
import visiondiagram from 'public/image/company/vision_diagram.png'

const CompanyVison = () => {
  return (
    <section className="prefixvison">
      <div className="prefixvison-content wapper">
        <div className="prefixvison-article">
          <h3>Vision</h3>
          <p>
            Chosun Biz will grow into the leading digital media in the changing digital environment
            based on reporters armed with digital DNA and systems optimized for various digital
            platforms. Beyond Korea's No.1, Chosun Biz aims to be Asia's No.1 digital media, and
            will become an innovator of digital journalism in Korea, producing high-quality content
            along with reliable media, media with depth, and the role of media leading the market.
          </p>
        </div>
        <div className="prefixvison-diagram">
          <Image src={visiondiagram} alt=" vison-diagram" className="prefixvison-img" />
        </div>
      </div>
    </section>
  );
};

export default CompanyVison;
