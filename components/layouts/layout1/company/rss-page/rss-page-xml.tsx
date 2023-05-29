import React, { useState } from "react";
import { dataRssPage } from "./data";
import Link from "next/link";
import useCopyToClipboard from "@hook/hooks";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button, IconButton, Tooltip } from "@mui/material";

type Props = {};

const RssPageXml = (props: Props) => {
  const [value, copy] = useCopyToClipboard();
  const [textTooltip, setTextTooltip] = useState("Coppy");
  const handleCoppy = (value: string) => {
    copy(value);
    setTimeout(() => setTextTooltip("Copied"), 200);
  };

  return (
    <div className="clsrsspagexml">
      <div className="clsrsspagexml-content">
        <table>
          <tr>
            <th>섹션</th>
            <td>주소</td>
            <td></td>
          </tr>
          {dataRssPage.map((item, index) => {
            return (
              <tr key={`${item.name}-${index}`}>
                <th>{item.name}</th>
                <td>
                  <Link href={item.url} target="_blank">
                    {item.url}
                  </Link>
                </td>
                <td>
                  <Tooltip title={"Coppy"}>
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      sx={{ padding: "0px 10px" }}
                      onClick={() => handleCoppy(item.url)}
                      startIcon={
                        <IconButton aria-label="toggle  visibility" edge="end">
                          <ContentCopyIcon sx={{ color: "#fff", fontSize: "18px" }} />
                        </IconButton>
                      }
                    >
                      복사
                    </Button>
                  </Tooltip>
                  {/* <Tooltip title={textTooltip}>
                    <ContentCopyIcon />
                  </Tooltip> */}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default RssPageXml;
