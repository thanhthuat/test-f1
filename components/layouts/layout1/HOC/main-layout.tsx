import React from "react";
import HeaderLayout1 from "../header/header-layout1";
import FooterLayout1 from "../footer/footer";
import ScrollTop from "@components/common/scroll-top/scrolltop-button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}
import { ThemeOptions } from "@mui/material/styles/createTheme";

import { BreakpointOverrides } from "@mui/material/styles";
import HeaderSearch from "../headersearch/header-search";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    tablet1: true;
    laptop: true;
    desktop: true;
  }
}

export const themeOptions: any = {
  breakpoints: {
    values: {
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xs: 0,
      tablet: 600,
      tablet1: 768,
      laptop: 980,
      desktop: 1200,
    },
  },
};
const MainLayout: React.FC<MainLayoutProps> = ({ children, className = "" }) => {
  return (
    <div>
      <ThemeProvider theme={createTheme(themeOptions)}>
          <HeaderSearch className="containerlayout1" />
        <HeaderLayout1 />
        <main className={`${className} `}>
          <div className={` containerlayout1 clsmain`}>{children}</div>
        </main>
        <ScrollTop />
        <FooterLayout1 />
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
