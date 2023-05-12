import React from "react";
import CardRow from "../card-row/card-row";
import { IresponeMovie } from "lib/models/interface";

interface RenderCardProps {
  arr: IresponeMovie[];
}

const RenderCard: React.FC<RenderCardProps> = ({ arr }) => {
  return (
    <div>
      {arr.map((item) => (
        <CardRow
          className="border"
          item={item}
          key={item.title}
          isAuthor={true}
          sx={{ alignItems: "center" }}
          // isImg={false}
        />
      ))}
    </div>
  );
};

export default RenderCard;
