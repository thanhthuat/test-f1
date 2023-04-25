import Link from "next/link";
import React from "react";
interface PopularHeaderProps {
  className?: string;
}

const PopularHeader: React.FC<PopularHeaderProps> = ({ className = "" }) => {
  return (
    <div className={`${className} clspopularheader`}>
      <ul className="clspopularheader-content">
        <li className="clspopularheader-item">
          <Link href={"/"}> Kinh doanh</Link>
        </li>
        <li className="clspopularheader-item">
          {" "}
          <Link href={"/detail/1"}> Quốc tế</Link>
        </li>
        <li className="clspopularheader-item">
          {" "}
          <Link href={"/detail/1"}> Doanh nghiệp</Link>
        </li>
        <li className="clspopularheader-item">
          {" "}
          <Link href={"/detail/1"}> Chứng khoán</Link>
        </li>
        <li className="clspopularheader-item">
          {" "}
          <Link href={"/detail/1"}> Bất động sản</Link>
        </li>
        <li className="clspopularheader-item">
          {" "}
          <Link href={"/detail/1"}> Ebank</Link>
        </li>
        <li className="clspopularheader-item">
          {" "}
          <Link href={"/detail/1"}> Vĩ mô</Link>
        </li>
        <li className="clspopularheader-item">
          {" "}
          <Link href={"/detail/1"}> Tiền của tôi</Link>
        </li>
      </ul>
    </div>
  );
};

export default PopularHeader;
