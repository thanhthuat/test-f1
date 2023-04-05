import LineArea from "@components/common/line-area/line-area";
import { it } from "node:test";
import React from "react";
interface ILineArea {
 
    title: string;
    subtitle: { title: string; content: { title: string }[] }[];
  
}
const arr: ILineArea[] = [
  {
    title: "Chapter 1. coverage stage",
    subtitle: [
      {
        title: "Article 1. Illegal coverage prohibited",
        content: [
          {
            title:
              "① If you do not disclose your identity as a reporter, you must not impersonate another professional. However, you may not reveal your identity in the process of appreciating works required for plays, music, and art criticism articles. Exceptionally, journalists responsible for restaurant reviews and travel articles are allowed to remain anonymous by using false names.",
          },
          {
            title:
              "② Intentional and premeditated lying is prohibited. However, if you are employed in a specific industry to cover the inside of a specific industry or perform investigative reporting on crimes and anti-social events, you can do so with the permission of the head of the department.",
          },
          {
            title: "③ Recording and filming is possible within the scope permitted by law.",
          },
          {
            title:
              '"① If you do not disclose your identity as a reporter, you must not impersonate another professional. However, you may not reveal your identity in the process of appreciating works required for plays, music, and art criticism articles. Exceptionally, journalists responsible for restaurant reviews and travel articles are allowed to remain anonymous by using false names.",',
          },
        ],
      },
    ],
  },
  {
    title: "Chapter 1. coverage stage",
    subtitle: [
      {
        title: "Article 1. Illegal coverage prohibited",
        content: [
          {
            title:
              "① If you do not disclose your identity as a reporter, you must not impersonate another professional. However, you may not reveal your identity in the process of appreciating works required for plays, music, and art criticism articles. Exceptionally, journalists responsible for restaurant reviews and travel articles are allowed to remain anonymous by using false names.",
          },
          {
            title:
              "② Intentional and premeditated lying is prohibited. However, if you are employed in a specific industry to cover the inside of a specific industry or perform investigative reporting on crimes and anti-social events, you can do so with the permission of the head of the department.",
          },
          {
            title: "③ Recording and filming is possible within the scope permitted by law.",
          },
          {
            title:
              '"① If you do not disclose your identity as a reporter, you must not impersonate another professional. However, you may not reveal your identity in the process of appreciating works required for plays, music, and art criticism articles. Exceptionally, journalists responsible for restaurant reviews and travel articles are allowed to remain anonymous by using false names.",',
          },
        ],
      },
    ],
  },
  {
    title: "Chapter 1. coverage stage",
    subtitle: [
      {
        title: "Article 1. Illegal coverage prohibited",
        content: [
          {
            title:
              "① If you do not disclose your identity as a reporter, you must not impersonate another professional. However, you may not reveal your identity in the process of appreciating works required for plays, music, and art criticism articles. Exceptionally, journalists responsible for restaurant reviews and travel articles are allowed to remain anonymous by using false names.",
          },
          {
            title:
              "② Intentional and premeditated lying is prohibited. However, if you are employed in a specific industry to cover the inside of a specific industry or perform investigative reporting on crimes and anti-social events, you can do so with the permission of the head of the department.",
          },
          {
            title: "③ Recording and filming is possible within the scope permitted by law.",
          },
          {
            title:
              '"① If you do not disclose your identity as a reporter, you must not impersonate another professional. However, you may not reveal your identity in the process of appreciating works required for plays, music, and art criticism articles. Exceptionally, journalists responsible for restaurant reviews and travel articles are allowed to remain anonymous by using false names.",',
          },
        ],
      },
    ],
  },
];
const CompanyEthics = () => {
  return (
    <section className="prefixethics animate">
      <div className="prefixethics-content">
        <div className="prefixethics-title">
          <h3>Code of Ethics Guidelines </h3>
        </div>
        <div className="prefixethics-contentarea">
          {arr.map((item) => (
            <LineArea item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyEthics;
