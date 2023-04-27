import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="clsnotfound">
      <div className="clsnotfound-content">
        <div className="four_zero_four_bg">
          <h1 className="text-center ">404</h1>
        </div>

        <div className="contant_box_404">
          <h3 className="h2">Look like you're lost</h3>

          <p>the page you are looking for not avaible!</p>

          <Link href="/" className="link_404">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
