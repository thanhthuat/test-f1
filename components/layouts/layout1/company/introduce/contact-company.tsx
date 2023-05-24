import React from "react";
import { dataContact } from "./data";
type Props = {};

const ContactCompany = (props: Props) => {
  return (
    <div className="clscontactcompany">
      <div className="clscontactcompany-content containerlayout1">
        <div className="clscontactcompany-title">
          <h3>연락처/주소</h3>
        </div>
        <div className="clscontactcompany-contact">
          <div className="clscontactcompany-contact__des">
            <p> 각 부서별 대표 연락처와 찾아오시는 길을 안내드립니다.</p>
          </div>
          <div className="clscontactcompany-contact__phone">
            <table>
              <tr>
                <th>Company</th>
                <td>Contact</td>
              </tr>
              {dataContact.map((item, index) => {
                return (
                  <tr key={`${item.name}-${index}`}>
                    <th>{item.name}</th>
                    <td>TEL : {item.phone}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <div className="clscontactcompany-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1959.795512425907!2d106.7039814292497!3d10.76596917044653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f41f8d0bb9f%3A0x888dfc345b5e0461!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBMdeG6rXQgVFAuSENN!5e0!3m2!1svi!2s!4v1684911899793!5m2!1svi!2s"
            width="100%"
            height="450"
            // style="border:0;"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactCompany;
