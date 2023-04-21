import React from 'react'

interface BorderLineProps{
    className?:string ;
}

const BorderLine = ({className=''}) => {
  return (
    <div className={`${className} has_border`}></div>
  )
}

export default BorderLine