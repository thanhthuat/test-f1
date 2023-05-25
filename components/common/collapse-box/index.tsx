import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddIcon from "@mui/icons-material/Add";
import styles from './collapse-box.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
// import ContentHtml from "@remedywell-web/apps/patient-app/components/"
export interface CollapseBoxProps {
  data: any[];
  keyData?: string;
  valueData?: string;
}

export const CollapseBox: React.FC<CollapseBoxProps> = ({
  data,
  keyData = 'title',
  valueData = 'content',
}) => {
  const [arrCheck, setArrCheck] = useState<boolean[]>([]);
  useEffect(() => {
    const temp: boolean[] = [];
    data.map((item, index) => {
      temp.push(false);
    });
    setArrCheck(temp);
  }, []);

  const onClickCheck = (index: number) => {
    const temp = [...arrCheck];
    const flag = temp[index];
    temp.map((item, index) => {
      temp[index] = false;
    });
    temp[index] = !flag;
    setArrCheck(temp);
  };
  //FIELDS: Benefits = product.benefits ; Important Information = product.safetyInfo**
  return (
    <Box className={styles['cls-collapse']}>
      {data.map((item: any, index: number) => {
        return (
          <Box className={`${styles["cls-collapse-container"]} cls-collapse-container`} key={index}>
            <Box
              className={`${styles["cls-collapse-title"]} cls-collapse-title`}
              onClick={() => {
                onClickCheck(index);
              }}
            >
              <Grid container>
                <Grid item xs={10}>
                  <h4>{item[keyData]}</h4>
                </Grid>
                <Grid
                  item
                  xs={2}
                  textAlign={"right"}
                  sx={{ position: "relative", fontSize: "20px" }}
                >
                 
                  <FontAwesomeIcon
                    icon={faMinus}
                    style={{
                      width: "18px",
                      position: "absolute",
                      right: 0,
                      top: "3px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faMinus}
                    style={{ width: "18px" }}
                    className={`${styles["icon-collapse"]} ${
                      arrCheck[index] ? styles["icon-collapse-expand"] : ""
                    }`}
                  />
                </Grid>
              </Grid>
            </Box>
            <Collapse in={arrCheck[index]}>
              <Grid container spacing={3}>
                <Grid item xs={10}>
                  <Typography
                    className="content-html"
                    dangerouslySetInnerHTML={{ __html: item[valueData] }}
                  />
                </Grid>
              </Grid>
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
};
