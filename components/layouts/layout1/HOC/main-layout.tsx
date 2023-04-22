import React from "react";
import HeaderLayout1 from "../header/header-layout1";
import FooterLayout1 from "../footer/footer";
import ScrollTop from "@components/common/scroll-top/scrolltop-button";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <HeaderLayout1 />
      <main className="containerlayout1 mt-40  ">{children}</main>
      <ScrollTop />
      <FooterLayout1 />
    </div>
  );
};

export default MainLayout;
