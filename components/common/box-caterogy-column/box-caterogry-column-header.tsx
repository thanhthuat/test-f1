import React from 'react'

interface BoxCaterogryColumnHeaderProps{
    item:{title:string}[];
    className?:string ;
}

const BoxCaterogryColumnHeader:React.FC<BoxCaterogryColumnHeaderProps> = ({className='' ,item}) => {
  return (
    <div className={`clstabcolumnheader  ${className}`}>
    <ul className='clstabcolumnheader-content'>
        {item?.map((item)=> <li className='clstabcolumnheader-item' key={item.title}> {item.title}</li>) }
    </ul>
</div>
  )
}

export default BoxCaterogryColumnHeader