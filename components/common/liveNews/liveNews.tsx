import React from "react";


interface ILiveNews {}

const LiveNews: React.FC<ILiveNews> = () => {
  return (
    <div className="liveNews">
      <div className="liveNews__header">
        <h3>live news</h3>
      </div>
      <div className="liveNews__main">
        <div className="listNews">
          <div className="listNews__item">
            <div className="listNews__item__butter"></div>
            <div className="listNews__item__content">
              <span className="listNews__item__content__date">10:24</span>

              <a href="#" className="listNews__item__content__link">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.
              </a>
            </div>
          </div>

          <div className="listNews__item">
            <div className="listNews__item__butter"></div>
            <div className="listNews__item__content">
              <span className="listNews__item__content__date">10:24</span>

              <a href="#" className="listNews__item__content__link">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.
              </a>
            </div>
          </div>

          <div className="listNews__item">
            <div className="listNews__item__butter"></div>
            <div className="listNews__item__content">
              <span className="listNews__item__content__date">10:24</span>

              <a href="#" className="listNews__item__content__link">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.
              </a>
            </div>
          </div>

          <div className="listNews__item">
            <div className="listNews__item__butter"></div>
            <div className="listNews__item__content">
              <span className="listNews__item__content__date">10:24</span>

              <a href="#" className="listNews__item__content__link">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.
              </a>
            </div>
          </div>

          <div className="listNews__item">
            <div className="listNews__item__butter"></div>
            <div className="listNews__item__content">
              <span className="listNews__item__content__date">10:24</span>

              <a href="#" className="listNews__item__content__link">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.
              </a>
            </div>
          </div>

          <div className="listNews__item">
            <div className="listNews__item__butter"></div>
            <div className="listNews__item__content">
              <span className="listNews__item__content__date">10:24</span>

              <a href="#" className="listNews__item__content__link">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveNews;
