import React from 'react'
import HeaderTop from '../../header-top/header';
import HeaderLayout1 from '../../header/header-layout1';
import ContentHome from '../../content-home/content-home';

type Props = {}

function HomeLayout1({}: Props) {
  return (
      <div className=''>
          {/* <HeaderTop /> */}
          <HeaderLayout1 />
          <ContentHome/>
    </div>
  )
}

export default HomeLayout1;