import React from 'react'

interface TabHeaderProps{
    className?:string ;
    item?: {title:string }[]
}

const TabHeader:React.FC<TabHeaderProps> = ({className ,item}) => {
  return (
    <div className={`clstabcolumnheader  ${className}`}>
        <ul className='clstabcolumnheader-content'>
            {item?.map((item)=> <li className='clstabcolumnheader-item' key={item.title}> {item.title}</li>) }
        </ul>
    </div>
  )
}

export default TabHeader