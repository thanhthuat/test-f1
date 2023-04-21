import React, { ReactNode } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
interface BreadCrumbProps {
  dataList: { title: string; url?: string; icon?: ReactNode }[];
}
const BreadCrumb: React.FC<BreadCrumbProps> = ({ dataList }) => {
  return (
    <div className="cls-BreadCrumb">
      {dataList.map((item, index) => {
        return (
          <div className="item" key={index}>
            {item.icon && item.icon}
            {item.url ? (
              <Link href={item.url}>
                <span>{item.title}</span> <NavigateNextIcon />
              </Link>
            ) : (
              <span>{item.title}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
