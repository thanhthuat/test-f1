import Link from "next/link";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
type Props = {};

const AuthorAction = (props: Props) => {
  return (
    <div className="prefixauthordetailpage">
      <div className="prefixauthordetailpage-content">
        <div className="prefixauthordetailpage-author">
          <Link href={"/"}> Reporter Yujin Kim</Link>
        </div>
        <div className="prefixauthordetailpage-action">
          <p className="prefixauthordetailpage-action__time">Input 2023.04.06 12:00</p>
          <div className="prefixauthordetailpage-action__action">
            <AccessTimeIcon sx={ {marginRight:'16px'}} />
            <AccessTimeIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorAction;
