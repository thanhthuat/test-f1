import React from 'react';
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
import Link from 'next/link';
interface BoxCaterogyThreeColumnHeaderProps{
    item:{title:string}[];
    className?:string ;
    sx?: SxProps<Theme>;
}

const BoxCaterogyThreeColumnHeader:React.FC<BoxCaterogyThreeColumnHeaderProps> = ({className='',item ,sx={}}) => {
  return (
    <Box className={`clstabcolumnheader  ${className}`} sx={{ ...sx }}>
        <ul className='clstabcolumnheader-content'>
            {item?.map((item)=> <li className='clstabcolumnheader-item' key={item.title}> <Link href={item.title}>{item.title}</Link></li>) }
        </ul>
    </Box>
  )
}

export default BoxCaterogyThreeColumnHeader