import React from "react";

import { useAppSelector } from "@hook/hooks";

interface BoxCategoryProps {
  children?: React.ReactNode
}
const array = [
  {
    title: "Điều kiện chờ 12 tháng khó ngăn người rút bảo hiểm một lần",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam. Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
  {
    title: "Khởi động dự án 'Vệ sinh học đường' tại Hà Giang",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam. Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
  {
    title: "Khởi động dự án 'Vệ sinh học đường' tại Hà Giang",
    des: "Các công trình vệ sinh đạt chuẩn và nguồn nước sạch tại 20 trường ở Hà Giang sẽ được Quỹ Hy vọng xây mới trong năm 2023, với sự đồng hành của Sanofi Việt Nam.",
  },
 
];
const BoxCategory:React.FC<BoxCategoryProps> = ({children}) => {
  return (
    <div className="clsboxcategory">
      <div className="clsboxcategory-content">
        {/* <div className="clsboxcategory-header">
          <h3 className="clsboxcategory-header__topic"> Chu de </h3>
          <h3 className="clsboxcategory-header__name">1213 abcd 456</h3>
        </div> */}
        <div className="clsboxcategory-body">
          {children}
          {/* {
            array.map((item, index) => {
                return <CardRow key={index} item={item} isdes={ false} />;
            })} */}
        </div>
        {/* <div className="clsboxcategory-footer">
          <button>  Them tin moi</button>
        </div> */}
      </div>
    </div>
  );
};

export default BoxCategory;
