import React from "react";
import { data } from "./data";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
interface ContentArticleProps {
  className?: string;
  sx?: SxProps<Theme>;
}

const ContentArticle: React.FC<ContentArticleProps> = ({ className = "", sx = {} }) => {
  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case "img":
        return (
          <div key={`1-${index}`}>
            <figure className="prefixarticledetail-figure">
              <img className="prefixarticledetail-figure__img" src={item.url} alt={item.alt} />
              <figcaption className="prefixarticledetail-figure__caption">{item.alt}</figcaption>
            </figure>
          </div>
        );
      case "text":
        return (
          <p className="prefixarticledetail-item" key={`1-${index}`}>
            {item.content}
          </p>
        );

      default:
        return (
          <p className="prefixarticledetail-item" key={`1-${index}`}>
            {item.content}
          </p>
        );
        break;
    }
  };
  return (
    <Box className={`${className} contentarticle`} sx={{ ...sx }}>
      {data.map((item, index) => renderContent(item, index))}
    </Box>
  );
};

export default ContentArticle;
