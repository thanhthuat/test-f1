import React from "react";

interface HeaderCommonProps {
  title: string;
}

const HeaderCommon: React.FC<HeaderCommonProps> = ({ title = "" }) => {
  return (
    <div className="clsheadingcm">
      <h2> {title ?? ""}</h2>
    </div>
  );
};

export default HeaderCommon;
