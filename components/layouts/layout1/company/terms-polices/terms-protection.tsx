import React from "react";
import { listTermsProtectionPolicy, listTermsProtectionPolicy1 } from "./data";
import { Link, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
type Props = {};

const TermsProtection = (props: Props) => {
  return (
    <div className="clstermsprotection">
      <div className="clstermsprotection-content">
        <div className="clstermsprotection-protection">
          <div className="clstermsprotection-protection__title">
            <p className=""> {listTermsProtectionPolicy.title}</p>
          </div>
          <div className="clstermsprotection-overview">
            <ul>
              {listTermsProtectionPolicy.data.slice(0, 5).map((item, index) => {
                return (
                  <li key={item.title}>
                    <Link
                      activeClass="active"
                      className="test6"
                      to={item.id}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {/* {index + 1}&nbsp; */}
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="clstermsprotection-detail">
          {listTermsProtectionPolicy1.map((item, index) => {
            return (
              <div key={`${item.id}-${index}`}>
                <div className="clstermsprotection-detail__item" id={item.id}>
                  <b>
                    제&nbsp; {index + 1}
                    {item.title}
                  </b>
                  {item.content.map((item, index) => {
                    return (
                      <p className="mt-1" key={`${index}-protection`}>
                        {" "}
                        {item}
                      </p>
                    );
                  })}
                </div>

                <div className="m-1 ">{item.table?.title}</div>
                {item?.table && (
                  <table className="clstermsprotection-table">
                    {item?.table.data.map((item, index) => {
                      return (
                        <tr key={`${index}-${item.title}`}>
                          <th>{item.title}</th>
                          <td>
                            <ul>
                              {item.content.map((subitem, index) => {
                                return <li key={`${index}-itemsub`}> {subitem}</li>;
                              })}
                            </ul>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TermsProtection;
