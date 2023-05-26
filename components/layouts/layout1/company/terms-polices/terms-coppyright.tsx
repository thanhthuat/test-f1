import React from "react";
import { listTermsProtectionCopyright, listTermsProtectionCopyright1 } from "./data";
import { Link, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
type Props = {};

const TermsCoppyright = (props: Props) => {
  return (
    <div className="clstermscoppyright">
      <div className="clstermscoppyright-content">
        <div className="clstermscoppyright-coppyright">
          <div className="clstermscoppyright-coppyright__title">
            <p className=""> {listTermsProtectionCopyright.title}</p>
          </div>
          <div className="clstermscoppyright-overview">
            <ul>
              {listTermsProtectionCopyright.data.slice(0, 6).map((item, index) => {
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
                      {index + 1}&nbsp;
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="clstermscoppyright-detail">
          {listTermsProtectionCopyright1.slice(0, 11).map((item) => {
            return (
              <div>
                <div className="clstermscoppyright-detail__item" id={item.id}>
                  <b>{item.title}</b>
                  {item.content.map((item) => {
                    return <p className="mt-1"> {item}</p>;
                  })}
                </div>
                <div>{item.table?.title}</div>
                {item?.table && (
                  <table className="clstermscoppyright-table">
                    {item?.table.data.map((item) => {
                      return (
                        <tr>
                          <th>{item.title}</th>
                          <td>
                            <ul>
                              {item.content.map((subitem) => {
                                return <li> {subitem}</li>;
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

export default TermsCoppyright;
