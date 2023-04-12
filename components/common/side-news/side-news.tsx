import Link from "next/link";
import React from "react";

type Props = {};

const SideNews = (props: Props) => {
  return (
    <div className="sideNews">
      <div className="list-sideNews">
        <div className="item">
          <div className="title">
            <a href="#">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta doloribus
              </span>
            </a>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas ut ducimus quasi
              eius. Voluptas aspernatur, rem ducimus sequi atque amet velit commodi officiis qui
              dicta quo quod voluptatem! Modi!
            </p>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <Link href="#">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta doloribus
              </span>
            </Link>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas ut ducimus quasi
              eius. Voluptas aspernatur, rem ducimus sequi atque amet velit commodi officiis qui
              dicta quo quod voluptatem! Modi!
            </p>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <Link href="#">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta doloribus
              </span>
            </Link>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas ut ducimus quasi
              eius. Voluptas aspernatur, rem ducimus sequi atque amet velit commodi officiis qui
              dicta quo quod voluptatem! Modi!
            </p>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <Link href="#">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dicta doloribus
              </span>
            </Link>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas ut ducimus quasi
              eius. Voluptas aspernatur, rem ducimus sequi atque amet velit commodi officiis qui
              dicta quo quod voluptatem! Modi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNews;
