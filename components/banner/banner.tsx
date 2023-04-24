import { TypeNews } from "lib/models/interface";
import Image from "next/image";
import Link from "next/link";
interface IBanner {
  banner?: TypeNews;
}
const Banner: React.FC<IBanner> = ({ banner }) => {
  return (
    <div className="banner">
      <div className="banner__title">
        <Link href={`/detail/${banner?.news_id}`}>{banner?.title}</Link>
      </div>

      <div className="banner__content">
        <div className="banner__content__figure">
          <Link href={`/detail/${banner?.news_id}`}>
            <img className="banner__content__figure__img" src={banner?.img} alt="" />
          </Link>
        </div>
        <div className="banner__content__desc">{banner?.desc}</div>

        {/* <div className="banner__content__link">
          <a href="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, placeat!</a>
        </div> */}
      </div>
    </div>
  );
};
export default Banner;
