import Image from "next/image";
import React from "react";
import subtitleLogoRight from "public/image/icon/icon-right.png";

interface ISlide {}

const Slide: React.FC<ISlide> = () => {
  return (
    <div className="slide">
      <span className="slide__logo"></span>
      <a href="#" className="slide__title">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos illum blanditiis ad
        accusantium modi! Adipisci accusantium non necessitatibus! Voluptatum harum odit quibusdam
        fuga, eaque assumenda corporis sunt aspernatur, tenetur quia fugiat iusto dolores molestiae
        ea cum eligendi quam temporibus labore velit maiores est, non ab? Odit, repudiandae
        voluptatum nulla blanditiis, ratione fugit error quibusdam nostrum labore velit dignissimos
        autem qui voluptate obcaecati consequatur officiis earum. Iure autem velit quod officia,
        voluptatibus dolore culpa nisi adipisci tempora, nemo cum quaerat iusto ad, ipsum at ea
        laudantium et omnis. Sunt, atque. Aliquam deleniti excepturi sunt nisi aut similique
        exercitationem molestias blanditiis fuga!
      </a>
      <a href="#" className="slide__link">
        <span className="slide__link__title">Xem tất cả</span>
        <Image src={subtitleLogoRight} alt="" className="slide__link__icon" />
      </a>
    </div>
  );
};

export default Slide;
