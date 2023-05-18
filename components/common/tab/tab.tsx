import React from 'react'
import TabHeader from './tab-header'
import TabContent from './tab-content'

interface TabProps{
className?: string ,
}


const TabColumn:React.FC<TabProps> = ({className=''}) => {
  return (
    <div className={`clstabcolumn ${className}`}> 
      <TabContent className='mt-15'/>
    </div>
  )
}

export default TabColumn