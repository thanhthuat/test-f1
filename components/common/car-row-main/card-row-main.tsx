import Image from "next/image";
import React from "react";
import img from "public/image/bg-carousel.jpg";
import Link from "next/link";
import { useAppSelector } from "@hook/hooks";
import apiConfig from "lib/api/apiConfig";
interface ICardRowMain{
  className?:string;
}

const  CardRowMain:React.FC<ICardRowMain> = ({className=''}) => {
  const { topmovie } = useAppSelector((state) => state.movie);

  return (
    <article className={`${className} classNameclsarticlemain`}>
      {topmovie[0] &&   <Link href={'/detail/s'}>
      <div className="clsarticlemain-content">
        <div className="clsarticlemain-img">
          <Image src={ topmovie[0]?.backdrop_path ? apiConfig.originalImage(topmovie[0]?.backdrop_path) : img  } alt={topmovie[0]?.title}  width="1500" height="750" />
        </div>
        <div className="clsarticlemain-summary">
          <div className="clsarticlemain-summary__title">
            <h5>{topmovie[0]?.title}</h5>
          </div>
          <div className="clsarticlemain-summary__des"><p> { topmovie[0]?.overview }</p></div>
        <div className="clsarticlemain-summary__category"> <p>{topmovie[0]?.release_date}</p></div>
        </div>
      </div>
      </Link>}
     
    </article>
  );
}

export default CardRowMain;
