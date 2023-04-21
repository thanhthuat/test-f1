import React from 'react'
import HeaderTab from './header/header-tab';
import BlockContent from './content/block-content';

type Props = {}
interface TabProps{
className?:string ;
children: React.ReactNode
}

const Tab:React.FC<TabProps> = ({className='' ,children}) => {
  return (
      <div className={`${className} clstab`} >
          <HeaderTab />
          {children}
         
    </div>
  )
}

export default Tab;