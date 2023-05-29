import React from "react";
import { listInformationSecurity, listInformationSecurity1 } from "./data";
import { Link, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import { data } from "constants/data";
type Props = {};

const TermsPrivacy = (props: Props) => {
  return (
    <div className="clstermsprivacy">
      <div className="clstermsprivacy-content">
        <div className="clstermsprivacy-privacy">
          <div className="clstermsprivacy-privacy__title">
            <p className=""> {listInformationSecurity.title}</p>
          </div>
          <div className="clstermsprivacy-overview">
            <ul>
              {listInformationSecurity.data.slice(0, 6).map((item, index) => {
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
            <ul>
              {listInformationSecurity.data.slice(6, 13).map((item, index) => {
                return (
                  <li key={item.title}>
                    <Link
                      activeClass="active"
                      className=""
                      to={item.id}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {index + 7}&nbsp;
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="clstermsprivacy-detail">
          {listInformationSecurity1.slice(0, 11).map((item) => {
            return (
              <div key={item.id}>
                <div className="clstermsprivacy-detail__item" id={item.id}>
                  <b>{item.title}</b>
                  {item.content.map((item, index) => {
                    return (
                      <p className="mt-1" key={`${index}-detailitem`}>
                        {" "}
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div>{item.table?.title}</div>
                {item?.table && (
                  <table className="clstermsprivacy-table">
                    {item?.table.data.map((item, index) => {
                      return (
                        <tr key={`${index}-${item.title}`}>
                          <th>{item.title}</th>
                          <td>
                            <ul>
                              {item.content.map((subitem, index) => {
                                return <li key={`${subitem}-${index}`}> {subitem}</li>;
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

          <div>
            <div className="clstermsprivacy-detail__item" id={listInformationSecurity1[11].id}>
              <b>{listInformationSecurity1[11].title}</b>
              {listInformationSecurity1[11].content.map((item, index) => {
                return (
                  <p className="mt-1" key={`${index}-privacy`}>
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="m-1">{listInformationSecurity1[11].table?.title}</div>
            {listInformationSecurity1[11]?.table && (
              <>
                <table className="clstermsprivacy-table">
                  {listInformationSecurity1[11]?.table.data.map((item, index) => {
                    return (
                      <tr key={`${item.title}-${index}`}>
                        <th>{item.title}</th>
                        <td>
                          <ul>
                            {item.content.map((subitem) => {
                              return <li key={`${subitem}-${index}`}> {subitem}</li>;
                            })}
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                </table>
                <div className="m-1">{listInformationSecurity1[11].table?.title1}</div>
                <table className="clstermsprivacy-table">
                  {listInformationSecurity1[11]?.table?.data1?.map((item, index) => {
                    return (
                      <tr key={`${item.title}-${index}`}>
                        <th>{item.title}</th>
                        <td>
                          <ul>
                            {item.content.map((subitem) => {
                              return <li key={`${subitem}-${index}`}> {subitem}</li>;
                            })}
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </>
            )}
          </div>
          {listInformationSecurity1.slice(12, 13).map((item) => {
            return (
              <div key={item.id}>
                <div className="clstermsprivacy-detail__item" id={item.id}>
                  <b>{item.title}</b>
                  {item.content.map((item, index) => {
                    return (
                      <p className="mt-1" key={`${index}-key`}>
                        {" "}
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div>{item.table?.title}</div>
                {item?.table && (
                  <table className="clstermsprivacy-table">
                    {item?.table.data.map((item, index) => {
                      return (
                        <tr key={`${index}-${item.title}`}>
                          <th>{item.title}</th>
                          <td>
                            <ul>
                              {item.content.map((subitem, index) => {
                                return <li key={`${index}-subtitle`}> {subitem}</li>;
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

export default TermsPrivacy;
