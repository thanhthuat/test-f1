import React from 'react'

type Props = {}

const HeaderTab = (props: Props) => {
   
  return (
    <div className="clstabheader">
      <ul className="clstabheader-content">
        <li className="clstabheader-item"> Kinh doanh</li>
        <li className="clstabheader-item">Doanh nghiệp</li>
        <li className="clstabheader-item">Chứng khoán</li>
        <li className="clstabheader-item">Bất động sản</li>
        <li className="clstabheader-item">Hậu trường kinh doanh</li>
      </ul>
    </div>
  );
}

export default HeaderTab;