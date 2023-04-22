import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import img from "public/image/Tuanapng.png";
interface ExpertPerspectiveProps {
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

const ExpertPerspective: React.FC<ExpertPerspectiveProps> = ({ className = "", sx = {} }) => {
  return (
    <article className={`${className} clsexpertperspective `}>
      <Box className="clsexpertperspective-content" sx={{ ...sx }}>
        <h2 className="clsexpertperspective-category"> Goc nhin</h2>
        <h3 className="clsexpertperspective-title"> Bán bất động sản qua sàn</h3>
        <h3 className="clsexpertperspective-des">
          {" "}
          Vẫn chỉ là bên trung gian môi giới, sàn giao dịch chịu trách nhiệm đến đâu nếu người mua
          bị chủ đầu tư vi phạm cam kết?
        </h3>
        <div className="clsexpertperspective-author">
          <div className="clsexpertperspective-author__name">
            <p>Phạm Thanh Tuấn</p>
          </div>
          <div className="clsexpertperspective-author__avatar">
            <Image src={img} alt="img" />
          </div>
        </div>
      </Box>
    </article>
  );
};

export default ExpertPerspective;
