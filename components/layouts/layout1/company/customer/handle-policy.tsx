import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CollapseBox } from "@components/common/collapse-box";
type Props = {};
const data = [
  { question: "2023년 고충처리인 활동사항 ", answer: "1212" },
  { question: "2022년 고충처리인 활동사항 ", answer: "121123132" },
  { question: "2021년 고충처리인 활동사항 ", answer: "12132132" },
  { question: "고충처리 실적이 없습니다", answer: "" },
];
const HandlePolicy = (props: Props) => {
  return (
    <div className="clshandlepolicy">
      <div className="clshandlepolicy-content containerlayout1">
        <div className="clshandlepolicy-title">
          <h3>고충처리</h3>
        </div>
        <div className="clshandlepolicy-body">
          <div className="clshandlepolicy-description">
            <h3>고충처리 활동사항과 운영 규정을 알려드립니다.</h3>
          </div>
          <div className="clshandlepolicy-policy">
            <CollapseBox
              data={data.map((item) => {
                return { title: item.question, content: item.answer };
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandlePolicy;
