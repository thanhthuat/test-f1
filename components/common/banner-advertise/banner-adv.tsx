import React from "react";

interface BannerAdvertiseProps{
  className?:string ;
}

const BannerAdvertise: React.FC<BannerAdvertiseProps> = ({className=''}) => {
  return (
    <div className={`${className} prefixbanneradvertise mt-24`}>
          <div className="prefixbanneradvertise-content">
              <h3>Advertising</h3>
      </div>
    </div>
  );
};

export default BannerAdvertise;
