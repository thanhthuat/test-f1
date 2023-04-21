import Image from "next/image";
import Link from "next/link";
import React from "react";
import { data } from "./data";
import img from 'public/layout1/small-logo.png';
type Props = {};

const HeaderLayout1 = (props: Props) => {
  return (
    <div className="clsheaderlayou1">
      <header className="clsheaderlayou1-content containerlayout1">
        <div className="clsheaderlayou1-logo">
          <Link href={'/'}>  <Image src={img} alt="logo"></Image> </Link>
         
        </div>
        <nav className="clsheaderlayou1-parent">
          <ul>
            {data.map((item, index) => {
              return (
                <li className="clsheaderlayou1-item" key={`${item.title}-${index}`}>
                  <Link href={`/category/${index}`}>{item.title}</Link>
                  <ul className="clsheaderlayou1-submenu">
                    {item.submenu.map((item,index) => {
                      return (
                        <li className="clsheaderlayou1-submenu__item" key={`${item.title}-${index}`}>
                          <Link href={`/category/${index}`}>{item.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderLayout1;
